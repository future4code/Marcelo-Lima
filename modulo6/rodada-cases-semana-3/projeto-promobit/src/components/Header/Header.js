import { HeaderStyled } from "./styles"
import logo from "../../assets/logo_TMDB.png"

export const Header = () => {
    return (
        <HeaderStyled>
            <img src={logo}/>
        </HeaderStyled>
    )
}