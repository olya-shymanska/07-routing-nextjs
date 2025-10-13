import Link from 'next/link';
import css from './SidebarNotes.module.css'

const tags: string[] = ['All','Work', 'Personal', 'Meeting', 'Shopping', 'Todo']; 

export default function SidebarNotes() {
    return (
        <ul className={css.menuList}>
            { tags.map((tag)=> (
                <li className={css.menuItem} key={tag}>
                    <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
                        Назва тегу
                    </Link>
                </li>))}
    </ul>
    )
}