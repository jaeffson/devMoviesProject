import { useEffect, useState } from "react"
import api from "../../services/api"
import { Background, Container, ContainerButtons, InfoMovie, Poster } from "./styles"
import Button from "../../components/Button"

function Home() {

    const [movie, setMovie] = useState()

    useEffect(() => {

        async function getMovies() {
            const {
                data: { results } }
                = await api.get('/movie/popular')

            setMovie(results[4])
            console.log(results)

        }

        getMovies()

    }, [])


    return (

        <>
            {movie && (
                <Background
                    img={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}>

                    <Container>
                        <InfoMovie>
                            <h1>{movie.title}</h1>
                            <p>Sinopse</p>
                            <p>{movie.overview}</p>

                            <ContainerButtons>
                                <Button red={true}>Assitir o filme</Button>
                                <Button>Assistir o trailer</Button>
                            </ContainerButtons>

                        </InfoMovie>
                        <Poster>
                            <img
                                alt="imagem-poster-movie"
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                        </Poster>
                    </Container>
                </Background>
            )}
        </>
    )
}


export default Home