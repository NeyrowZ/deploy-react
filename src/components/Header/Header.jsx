import { Link } from "react-router-dom"
import headerLogo from "../../assets/images/logo-header.svg"

export default function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="header_img" src={headerLogo} alt="headerLogo"/>
            </Link>
            <div className="header_link">
                <Link to="/">ACCUEIL</Link>
                <Link to="/about">A PROPOS</Link>
            </div>
        </header>
    )
}