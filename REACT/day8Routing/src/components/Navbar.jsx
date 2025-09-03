import styles from "./Navbar.module.css";
import { Link } from "react-router";

const Navbar = ()=>{
    return (
        <div>
            <nav className={styles.nav_bar}>
                <div className={styles.three_links} >
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About </Link>
                    <Link to="/search" >Search </Link>
                    {/* Link is optimised it will take all code once an show us but anchor tag always refreshes */}
                </div>
            </nav>
        </div>
    )
}
export {Navbar};