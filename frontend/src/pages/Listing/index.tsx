import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { MoviePage } from "movie";
import { useState, useEffect } from "react";
import { BASE_URL } from "utils/requests";


function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });



    //Ordenar os filmes pelo id ou pelo titulo alterando a &sort=title
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=title`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });

    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }


    return (
        <>
            <Pagination onChange={handlePageChange} page = {page}/>

            <div className="container">
                {/*a imagem estava tomando toda a tela e com a utilizacao da classe row do bootstrap, ela organiza os elementos*/}
                {/*Estilo do bootstrap margin button == mg que irá acrescentar uma margem abaixo do card*/}
                <div className="row">

                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mg-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}

                </div>
            </div>
        </>

    );
}

export default Listing;