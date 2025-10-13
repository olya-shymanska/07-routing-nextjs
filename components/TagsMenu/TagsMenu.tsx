'use client'
import Link from 'next/link';
import css from './TagsMenu.module.css'
import { useState } from 'react';

const tags: string[] = ['All','Work', 'Personal', 'Meeting', 'Shopping', 'Todo']; 

export default function TagsMenu() {
    const [isOpen, setIsOpen] = useState(false); 

  //const toggleMenu = () => setIsOpen((prev) => !prev);
  
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

    return (
    <div className={css.menuContainer}>
  <button className={css.menuButton} onClick={openMenu}>
    Notes ▾
            </button> 
            {isOpen && (<ul className={css.menuList}>
            {tags.map((tag) => (
                <li className={css.menuItem} key={tag}>
                <Link href={`/notes/filter/${tag}`} className={css.menuLink} onClick={closeMenu}>
                  {tag}
                </Link>
              </li>
            ))}
    </ul>)}
        </div>
    )
}