import { ReactComponent as GitHubIcon } from 'assets/img/github.svg';
import './style.css';
//extensao do arquivo do react com a linguagem //typscript, caso fosse um projeto react sem //typescript seria JSX//
function Navbar() {
    // codigo jsx
    return (
        // cabecalho da página
        <header>
            {/*barra de navegacao*/}
            {/*Class palavra reservada do js(conflito)*/}
            {/*classe do bootStrap, que delimitar a largura do conteúdo*/}
            {/*resultado == responsivo e com alguns espacamentos*/}
            {/*cor aplicado apenas no container OBS: Aplicar em toda a largura*/}
            <nav className="container">
                {/*conteúdo de navegação do Dsmovie*/}
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/KellisonSilva">
                        <div className="dsmovie-contact-container">
                            {/* componente react se tornara uma tag */}
                            <GitHubIcon />
                            <p className="dsmovie-contact-link">/DRVWsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )

}

export default Navbar;