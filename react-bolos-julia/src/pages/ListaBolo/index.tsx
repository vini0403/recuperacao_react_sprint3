//estilização
import "./style.css";

//componentes
import CardBolo from "../../components/CardBolo";

//api
import api from "../../utils/api";

//hooks
import { useEffect, useState } from "react";


function ListaBolo() {

    //js
    //const listaBolo = [];


    //react
    // bolos => ver o valor
    //set bolos => atribuir um novo valor

    //useState<any[]> => o tipo do valor que pode receber
    //([]) => e valor inicial

    const [bolos, setBolos] = useState<any[]>([]);

    function listaBolo() {
        api.get("bolos")
            .then((response) => {
                /*then e quando api da retorno positivo*/

                //atualiza o valor da variavel bolos
                //pelo retorno da api

                setBolos(response.data);

                console.log(response.data);

            })
            .catch((error) => {
                /*catch e quando api da retorno negativo*/

                console.log(error);
            })
    }

    //que useEffect e acionado o componente e inicializado e modificado
    useEffect(() => {
        //listarBolos() e acionada quando meu componente e inicializado
        listaBolo()

    }, [
        /*monitora*/
    ]);

    return (
        <main>
            <section className="lista container">
                <h1>Lista de Bolos</h1>

                {/* CARDBOLO */}
                {
                    bolos.map( (bolo : any, index: number) => {
                        return <CardBolo
                        key={index}
                        nome={bolo.nome}
                        foto={bolo.user_img}
                        ingredientes={bolo.ingredientes}
                        cobertura={bolo.cobertura}
                        valor={bolo.valor}

                        />
                    })
                }

            </section>
        </main>
    );
};

export default ListaBolo;