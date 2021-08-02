import { NavLink } from "react-router-dom"
import "./Nav.module.css"

export const Nav = () => {
    return (
        <ul>
            <li><NavLink to="/posts"/></li>
            <li><NavLink to="/users"/></li>
        </ul>
    )
}