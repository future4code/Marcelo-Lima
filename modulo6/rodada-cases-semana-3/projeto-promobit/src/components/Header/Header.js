import { HeaderStyled } from "./styles"
import logo from "../../assets/logo_TMDB.png"
import { goToHomePage } from "../../router/coordinator"
import { useNavigate } from "react-router"

export const Header = () => {
    const navigate = useNavigate()
    return (
        <HeaderStyled>
            <img src={logo} onClick={() => goToHomePage(navigate)}/>
        </HeaderStyled>
    )
}