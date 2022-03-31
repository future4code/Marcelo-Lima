import React, { useEffect, useState } from "react";
import { getNumberResult, getMegaResults, getContestResult } from "../API/getApiResults";
import { collorsLoto, colorDiaDeSorte, colorMegaSena } from "../constants/colors";
import { DivBallNumber, DivContainer, DivDivision, DivMain, DivNumbers, DivSelect } from "./Styles";

export const HomePage = () => {
    const [mega, setMega] = useState({ id: 0, nome: "mega-sena" })
    const [resultMega, setResultMega] = useState([])
    const [contestMega, setContestMega] = useState([])
    const [numbersMega, setNumberMega] = useState([])
    const [controlColor, setControlColor] = useState(colorMegaSena)

    useEffect(() => {
        getMegaResults(setResultMega)
        getContestResult(setContestMega)

    }, [mega])

    useEffect(() => {
        contestMega.filter((data) => {
            if (data.loteriaId === mega.id) {
                getNumberResult(setNumberMega, data.concursoId)
                collorsLoto.map((data) => {
                    if (mega.id === data.id) {
                        setControlColor(data.color)
                    }
                })
            }
        })
    }, [contestMega])

    // console.log('contest', contestMega)
    // console.log('ola', resultMega)
    // console.log(numbersMega)
    console.log(mega)

    const onChangeSelectedMega = (event) => {
        resultMega.filter((data) => {
            if (event.target.value === data.id.toString()) {
                setMega(data)
            }
        })
    }

    const renderSelectMega = resultMega.map((data) => {
        return <option key={data.id} value={data.id}>
            {data.nome.toUpperCase()}
        </option>
    })

    const renderSelectNumber = numbersMega && numbersMega.map((data) => {
        return <DivBallNumber>
            {data}
        </DivBallNumber>
    })

    return (
        <DivMain color={controlColor}>
            <DivSelect>
                <select onChange={onChangeSelectedMega}>
                    {renderSelectMega}
                </select>
            </DivSelect>
            <DivNumbers>
                {renderSelectNumber}
                <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </DivNumbers>
        </DivMain>
    )
}