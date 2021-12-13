import React, { useState } from 'react';
import Catalogue from '../components/Catalogue';
import Categories from '../components/Category';
import items from '../components/data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

export default function Menu() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline-menu"></div>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Catalogue items={menuItems} />
            </section>
        </main>
    );
};