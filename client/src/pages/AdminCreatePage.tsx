import AdminSideBar from '../components/AdminSideBar.tsx';
import { categoryList } from '../lib/categories.ts';
import { useState, useEffect, useRef } from 'react';
import { getFilmList, postNewFilm } from '../lib/api.ts';
import { fileServerUrl } from "../config";

// Отримання фільмів з бази та створення нового запису

export default function AdminCreatePage() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [categories, setCategories] = useState(categoryList);

  // Тут зберігаємо список готових файлів з файлового сервера
  const [filmList, setFilmList] = useState<string[]>([]);

  // Ім'я вибраного файлу
  const [selectedFilm, setSelectedFilm] = useState<string>('');

  // Посилання на video та canvas
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // URL створеного preview
  const [preview, setPreview] = useState<string | null>(null);


  // ==========================================
  // Отримуємо список готових відео
  // ==========================================

  useEffect(() => {

    getFilmList().then((data) => {

      setFilmList(data);

      // Вибираємо перше відео зі списку
      if (data.length > 0) {
        setSelectedFilm(data[0]);
      }

    });

  }, []);


  // ==========================================
  // Коли користувач вибирає інше відео
  // ==========================================

  function handleFilmChange(event: React.ChangeEvent<HTMLSelectElement>) {

    const film = event.target.value;

    setSelectedFilm(film);

    // Старий preview більше не підходить
    setPreview(null);
  }


  // ==========================================
  // Створення preview з поточного кадру відео
  // ==========================================

  function createPreview() {

    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) {
      return;
    }

    // Відео ще не завантажило свої розміри
    if (video.videoWidth === 0 || video.videoHeight === 0) {
      alert('Відео ще не завантажилося');
      return;
    }

    // Встановлюємо розмір canvas таким самим,
    // як реальний розмір відео
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    // Малюємо поточний кадр відео на canvas
    context.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    // Отримуємо картинку
    const image = canvas.toDataURL('image/jpeg');

    setPreview(image);
  }


  // ==========================================
  // Reset форми
  // ==========================================

  function formReset() {

    setTitle('');
    setDescription('');

    // Повертаємо категорії у початковий стан
    setCategories(
      categoryList.map(category => ({
        ...category,
        selected: false
      }))
    );

    // Повертаємо вибір на перший файл
    if (filmList.length > 0) {
      setSelectedFilm(filmList[0]);
    } else {
      setSelectedFilm('');
    }

    setPreview(null);
  }


  // ==========================================
  // Submit форми
  // ==========================================

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    const selectedCategories = categories
      .filter(item => item.selected)
      .map(item => item.name);

    console.log(
      selectedFilm,
      selectedCategories,
      title,
      description,
      preview
    );

    // Відправляємо саме ім'я готового файлу,
    // а не файл з диска
    const answer = await postNewFilm({
      url: selectedFilm,
      categories: selectedCategories,
      title,
      description,
      preview
    });

    console.log(answer);

    if (answer === 'ok') {

      alert('success');

      formReset();

    } else {

      alert('ERROR');

    }
  }


  // ==========================================
  // Вибір / скасування категорії
  // ==========================================

  function tagToggle(index: number) {

    setCategories(prevCategories =>
      prevCategories.map((category, i) =>
        i === index
          ? {
            ...category,
            selected: !category.selected
          }
          : category
      )
    );
  }


  return (

    <div className="main-container">

      <AdminSideBar />

      <main className="main admin-create">

        <h1>Admin Create Page</h1>


        <form onSubmit={handleSubmit}>


          {/* ================================
              TITLE
          ================================= */}

          <label>

            Title:

            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

          </label>


          {/* ================================
              DESCRIPTION
          ================================= */}

          <label>

            Description:

            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

          </label>


          {/* ================================
              CATEGORIES
          ================================= */}

          <div className="tag-container">

            <h3>Categories:</h3>

            <ul>

              {categories.map((category, index) => (

                <li
                  key={index}
                  className={`tag ${category.selected ? 'selected' : ''
                    }`}
                  onClick={() => tagToggle(index)}
                >

                  {category.name}

                </li>

              ))}

            </ul>

          </div>


          {/* ================================
              FILM LIST
          ================================= */}

          <div className="film-list">

            <h3>Film List:</h3>

            <select
              value={selectedFilm}
              onChange={handleFilmChange}
            >

              {filmList.map((film, index) => (

                <option
                  key={index}
                  value={film}
                >
                  {film}
                </option>

              ))}

            </select>

          </div>


          {/* ================================
              VIDEO PREVIEW
          ================================= */}

          <div className="select-preview">

            {selectedFilm && (

              <video
                ref={videoRef}

                /*
                  Дуже важливо:

                  коли selectedFilm змінюється,
                  React створює новий video element.

                  Це гарантує, що старе відео
                  не залишиться всередині компонента.
                */
                key={selectedFilm}

                src={`${fileServerUrl}/${selectedFilm}`}
                crossOrigin="anonymous"
                controls
                preload="metadata"
                poster="/images/film-poster.jpg"
                playsInline
                className="film-video"
              />

            )}


            {/* Canvas використовується
                тільки для створення картинки */}

            <canvas
              ref={canvasRef}
              style={{ display: 'none' }}
            />


            {/* ================================
                CREATED PREVIEW
            ================================= */}

            {preview && (

              <div>

                <h3>Preview:</h3>

                <img
                  src={preview}
                  alt="Video preview"
                  width="500"
                />

              </div>

            )}

          </div>


          {/* ================================
              CREATE PREVIEW BUTTON
          ================================= */}

          <button
            type="button"
            onClick={createPreview}
          >
            Create Preview
          </button>


          {/* ================================
              SUBMIT
          ================================= */}

          <input
            className="submit-btn"
            type="submit"
            value="Create"
          />

        </form>

      </main>

    </div>

  );
}
