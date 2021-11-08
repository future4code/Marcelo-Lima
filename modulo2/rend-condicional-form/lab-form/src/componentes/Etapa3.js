import React from "react";
import PerguntaAberta from "./componentesPerguntas/PerguntaAberta";
import PerguntaFechada from "./componentesPerguntas/PerguntaFechada";


class Etapa3 extends React.Component {
    render() {
        return (
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <PerguntaAberta pergunta={"5. Por que você não terminou um curso de graduação?"} />
                <PerguntaFechada
                    pergunta={"6. Você fez algum curso complementar?"}
                    opcoes={[
                        "Nenhum",
                        "Curso técnico",
                        "Curso de inglês",
                        "Curso profissional"
                    ]}
                />
                
            </div>
        )
    }
}
export default Etapa3;
