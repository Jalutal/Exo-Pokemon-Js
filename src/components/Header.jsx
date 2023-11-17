import { Link } from "react-router-dom";


function Header() {     
    return (
        <header>
        <h1>Liste des pokémons</h1>
        <img src ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="logo" className="imgLogo"/>
        <nav>
            <ul>            
                <li>LA GROSSE BARRE DE NAV</li>
                <li><Link to="/">Home</Link></li>                
                <li><Link to="/Pokemons">Pokemons</Link></li> 
            </ul>
        </nav>
        </header>
    )
}
export default Header;