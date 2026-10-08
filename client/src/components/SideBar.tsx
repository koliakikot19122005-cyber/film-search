import { useState, useEffect } from 'react';
import { categoryList } from '../lib/categories';
import { getFilms } from '../lib/api';
import { data } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setFilms } from '../store/filmSlice';
import type { FilmData } from '../lib/types';
import { setQueryParams } from '../store/appSlice';


function SideBar() {
    const [categories, setCategories] = useState(categoryList);
    const dispatch = useDispatch();

    useEffect(() => {
        const queryParams = getSelectedCategories();
        dispatch(setQueryParams(queryParams));
        getFilms(queryParams).then(newData => {
            console.log(newData)
            dispatch(setFilms(newData.films))
        })
    }, [categories]);

    async function selectToggle(index: number) {
        setCategories(prevCategories => {
            const newCategories = [...prevCategories];
            newCategories[index].selected = !newCategories[index].selected;
            console.log(newCategories[index].selected);
            return newCategories;
        });


    }
    function getSelectedCategories() {
        const qeryParams = categories
            .filter(category => category.selected)
            .map(category => category.name)
            .join(',');
        return qeryParams;
    }

    return (
        <aside>
            <h2>Categories</h2>
            <ul>
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className={category.selected ? 'selected' : ''}
                        onClick={() => { selectToggle(index) }}
                    >
                        {category.name}

                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default SideBar;