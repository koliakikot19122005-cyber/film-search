import { useState, useEffect } from 'react';
import { getCategories } from '../lib/api';
import { categoryList } from '../lib/categories';
function SideBar() {
    const [categories, setCategories] = useState(categoryList);

    useEffect(() => {
        const queryParams = getSelectedCategories();
        const newData = getCategories(queryParams);
        console.log(newData);
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