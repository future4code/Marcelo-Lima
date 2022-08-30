import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { HomePage } from "../pages/HomePage/HomePage";
import { MovieDetails } from "../pages/MovieDetails.js/MovieDetails";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/moviedetails/:movieId' element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;