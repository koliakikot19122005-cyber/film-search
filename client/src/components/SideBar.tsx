import { useState, useEffect } from 'react';
import { categoryList } from '../lib/categories';
import { getFilms } from '../lib/api';
import { data } from 'react-router';
import type { FilmData } from '../lib/types';
//Відобразити фільми на головній з отриманих данних 
//Реалізувати на БК виборку по категоріях
//
interface SideBarProps {
    onData: (data: {ok: boolean, films:FilmData[]}) => void;
}

function SideBar({onData}: SideBarProps) {
    const [categories, setCategories] = useState(categoryList);

    useEffect(() => {
        const queryParams = getSelectedCategories();
        getFilms(queryParams).then(newData => {
            console.log(newData)
            onData(newData)
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