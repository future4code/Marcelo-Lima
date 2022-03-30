import React, { useEffect, useState } from "react";
import { getNumberResult, getMegaResults, getContestResult } from "../API/getApiResults";

export const HomePage = () => {
    const [ mega, setMega] = useState({id: 0, nome: "mega-sena"})
    const [ resultMega, setResultMega ] =useState([])
    const [ contestMega, setContestMega ] = useState([])
    const [ numbersMega, setNumberMega] = useState([])

    useEffect(() => {
        getMegaResults(setResultMega)
        getContestResult(setContestMega)
        
    },[mega])

    useEffect(() => {
        contestMega.filter((data) => {
            if(data.loteriaId === mega.id){
                getNumberResult(setNumberMega, data.concursoId)
            }
        })
    },[contestMega])
    
    // console.log('contest', contestMega)
    // console.log('ola', resultMega)
    console.log(numbersMega)
    console.log(mega)

    const onChangeSelectedMega = (event) => {
        resultMega.filter((data) => {
            if(event.target.value === data.id.toString()){
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
        return <div>
            {data}
        </div>
    })

    return (
        <div>
            <select onChange={onChangeSelectedMega}>
                {renderSelectMega}
            </select>
            {renderSelectNumber}
        </div>
    )
}