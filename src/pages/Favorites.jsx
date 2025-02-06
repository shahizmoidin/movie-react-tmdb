import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"
function Favorite(){
const {favorites}=useMovieContext();
if (favorites)
{return(
    <div className="favorites">
<h2>Your favorites</h2>

    <div className="movies-grid">
    {favorites.map((movie)=>(
   <MovieCard movie={movie} key={movie.id}/>))
        }
                         </div>
                         </div>)
}
    return (
        <div className="favorites-empty">
            <h2>no favorites yet</h2>
            <p>Start adding your favorites and they will appear here</p>
             </div>
    )
}
export default Favorite
