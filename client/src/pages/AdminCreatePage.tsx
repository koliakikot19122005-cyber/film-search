import AdminSideBar from '../components/AdminSideBar.tsx'
import { categoryList } from '../lib/categories.ts'
import { useState, useEffect } from 'react';
import { getFilmList, postNewFilm } from '../lib/api.ts';
import type { FilmData } from '../lib/types.ts';
//отримання фільмів з бази і отримання на головній сторінці починаємо з контролера api

export default function AdminCreatePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState(categoryList);
  const [filmList, setFilmList] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState('');

  useEffect(() => {
    getFilmList().then((data) => {
      setFilmList(data);
      setSelectedFilm(data[0]);
    });
  }, []);

function formReset(){
  setTitle('')
  setDescription('')
  setCategories([])
  setSelectedFilm('')
}

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(selectedFilm, categories, title, description);
    const selectedCategories = categories.filter(item => item.selected).map(item => item.name)
    const answer = await postNewFilm({ url: selectedFilm, categories: selectedCategories, title, description })
    // alert(answer)
    console.log(answer)
    if (answer == 'ok') {
      alert('success')
    formReset()
    } else {
      alert('ERROR')

    }
  }

  function tagToggle(i: number) {
    const newCategories = [...categories];
    newCategories[i].selected = !newCategories[i].selected;
    setCategories(newCategories);
  }

  return (
    <div className="main-container">
      <AdminSideBar />
      <main className="main admin-create">
        <h1>Admin Create Page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Description:
            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <div className="tag-container">
            <h3>Categories:</h3>
            <ul>
              {categories.map((category, index) => (
                <li className={`tag ${category.selected ? 'selected' : ''}`} onClick={() => tagToggle(index)} key={index}>
                  {category.name}
                  <label htmlFor={`category-${index}`}>{category.name}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="film-list">
            <h3>Film List:</h3>
            <select onChange={(e) => setSelectedFilm(e.target.value)}>
              {filmList.map((film, index) => (
                <option key={index} value={film}>{film}</option>
              ))}
            </select>
          </div>
          <input className="submit-btn" type="submit" value="Create" />
        </form>
      </main>
    </div>
  )
}
