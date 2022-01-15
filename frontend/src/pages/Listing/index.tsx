import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { MoviePage } from "movie";
import { useState, useEffect } from "react";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumer] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
            .then(response => {
                const data = response.data as MoviePage;
                console.log(data);
                setPageNumer(data.number);

            });

    }, []);

    return (
        <>
            <p>{pageNumber}</p>

            <Pagination />

            <div className="container">
                {/*a imagem estava tomando toda a tela e com a utilizacao da classe row do bootstrap, ela organiza os elementos*/}
                {/*Estilo do bootstrap margin button == mg que irá acrescentar uma margem abaixo do card*/}
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mg-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Listing;