//estilização
import { useState } from "react";
import api from "../../utils/api";
import "./style.css";

//hooks


//api



function CadastroBolo() {

    const [nome, setNome] = useState<string>("")
    const [valor, setValor] = useState<number>(0)
    const [imagem, setImagem] = useState<any>()
    const [ingredientes, setIngredientes] = useState<string>("")
    const [cobertura, setCobertura] = useState<string>("")

    function vereficarCampoUpload(event: any) {
        setImagem(event.target.files[0])
    }

    const CadastrarBolo =(event: any) => {
        event.preventDefault()

        const formdata = new FormData()

        formdata.append("nome", nome)
        formdata.append("valor", valor.toString())
        formdata.append("user_img", imagem)
        formdata.append("igredientes", ingredientes)
        formdata.append("cobertura", cobertura)

        api.post("bolos", formdata).then( response => {
            console.log(response)
            alert("Bolo criado com sucesso!")
        }).catch
    }

    return (
        <main>
            <section className="cadastro">
                <div className="glass">
                    <h1>Cadastro de Bolos</h1>
                    <form method="POST" onSubmit={CadastrarBolo}>
                        <div>
                            <label htmlFor="nome">Nome do Bolo:</label>
                            <input
                                className="input_estilo"
                                name="nome"
                                type="text"
                                onChange={event => setNome(event.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="valor">Valor do bolo:</label>
                            <input
                                className="input_estilo"
                                name="valor"
                                type="text"
                                id="valor"
                                onChange={event => setValor(parseFloat(event.target.value))}
                            />
                        </div>

                        <div>
                            <label htmlFor="imagem">Imagem:</label>
                            <input
                                className="input_estilo"
                                name="imagem"
                                type="file"
                                id="imagem"
                                onChange={vereficarCampoUpload}
                            />
                        </div>

                        <div>
                            <label htmlFor="ingredientes">Ingredientes:</label>
                            <textarea
                                className="input_estilo"
                                name="ingredientes"
                                id="ingredientes"
                                onChange={event => setIngredientes(event.target.value)}
                            >
                            </textarea>
                        </div>
                        <div>
                            <label htmlFor="cobertura">Cobertura:</label>
                            <textarea
                                className="input_estilo"
                                name="cobertura"
                                id="cobertura"
                                onChange={event => setCobertura(event.target.value)}
                            >
                            </textarea>
                        </div>

                        <input className="btn" type="submit" value="Cadastrar" />
                    </form>
                </div>
            </section>
        </main>
    );
};

export default CadastroBolo;