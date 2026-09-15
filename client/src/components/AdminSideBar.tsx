import { useState, useEffect } from 'react';
import { getCategories } from '../lib/api';
import { NavLink } from 'react-router-dom';
function AdminSideBar() {
    const [subpages, setSubpages] = useState([
        { text: 'Create', url: '/admin/create' },
        { text: 'Comments', url: '/admin/comments' },
        { text: 'Stats', url: '/admin/stats' },
    ]);



    return (
        <aside>
            <h2>Categories</h2>
            <ul>
                {subpages.map((subpage, index) => (
                    <li key={index + "adminsidebar"}>
                        <NavLink to={subpage.url} className={({ isActive }) => (isActive ? 'active' : '')}>
                            {subpage.text}
                        </NavLink></li>
                ))}
            </ul>
        </aside>
    );
}

export default AdminSideBar;