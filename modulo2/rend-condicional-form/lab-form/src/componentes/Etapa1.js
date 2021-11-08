import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./componentesPerguntas/PerguntaAberta";
import PerguntaFechada from "./componentesPerguntas/PerguntaFechada";


class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h2>ETAPA 1 -DADOS GERAIS</h2>
                <PerguntaAberta pergunta={"1. Qual é o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual seu email?"} />
                <PerguntaFechada
                    pergunta={"Qual sua escolaridade"}
                    opcoes={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                    ]}
                />
            </div>
        );
    }
}

export default Etapa1;