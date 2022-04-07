import { IMAGE_URL } from "../../constants/urls"
import { DivCardMovie, PosterImg, MainDiv, TextDate } from "./styles"

export const CardMovie = (props) => {
        const dateSplit = props.movie.release_date.split('-')
        let date = ''
        switch (dateSplit[1]) {
            case "01":
                date = "JAN"
                break;
            case "02":
                date = "FEV"
                break;
            case "03":
                date = "MAR"
                break;
            case "04":
                date = "ABR"
                break;
            case "05":
                date = "MAI"
                break;
            case "06":
                date = "JUN"
                break;
            case "07":
                date = "JUL"
                break;
            case "08":
                date = "AGO"
                break;
            case "09":
                date = "SET"
                break;
            case "10":
                date = "OUT"
                break;
            case "11":
                date = "NOV"
                break;
            case "12":
                date = "DEZ"
                break;
            default:
                date = ''
        }
        const newDate = `${dateSplit[2]} ${date} ${dateSplit[0]}`
        
    return (
        <DivCardMovie key={props.movie.id} onClick={props.changePage}>
                <PosterImg src={`${IMAGE_URL}${props.movie.poster_path}`} />
                <p><b>{props.movie.title}</b></p>
                <TextDate><b>{newDate}</b></TextDate>
            </DivCardMovie>
    )
}