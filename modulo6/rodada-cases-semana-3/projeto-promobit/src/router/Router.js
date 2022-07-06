import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { MovieDetails } from "../pages/MovieDetails.js/MovieDetails";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/moviedetails/:movieId' element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;