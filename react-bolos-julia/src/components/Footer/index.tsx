//estilizacao
import "./style.css"

//rotas
import { Link } from "react-router-dom";

//imagens
import imgwhats from "../../assets/img/whats 1.png"
import imgface from "../../assets/img/face 1.png"
import imginstag from "../../assets/img/instag 1.png"

function Footer() {
    return (
        <footer>
        <div className="container footer_container">
            <p>Todos os direitos reservados ®</p>
            <div>
            <Link to={"#"}>
                <img src={imgwhats} alt="logo whatsapp" />
                </Link>
            <Link to={"#"}>
                <img src={imgface} alt="logo facebook" />
                </Link>
            <Link to={"#"}>
                <img src={imginstag} alt="logo instagram" />
                </Link>
            </div>
        </div>
    </footer>

    );
    
}

export default Footer;