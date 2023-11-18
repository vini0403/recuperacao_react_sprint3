import "./style.css";

//componente pai passa valores para a props do componente filho
// o dev que cria o nome da prop

function CardBolo(props:any) {
    return (
        <div id="card">
            <div>
                <img
                    src={"http://localhost:3000/static/" + props.foto}
                    alt={"Foto de um " + props.nome}
                />
            </div>
            <div className="card_bolo_texto">
                <h2>{props.nome}</h2>
                <div>
                    <span>Ingredientes: </span>
                    <p>Bolo: {props.ingredientes}</p>
                    <p>Cobertura: {props.cobertura}</p>
                </div>
                <span>R$ {props.valor}</span>
            </div>
        </div>
    );
};

export default CardBolo;