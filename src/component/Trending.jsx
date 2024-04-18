import TrendingMovies from './TrendingMovies';
import TrendingTv from './TrendingTv';
import TopRatedMovies from './TopRatedMovies';


export default function Trending(props) {


    return (
        <><TrendingMovies /><div className='divider'></div><TrendingTv /><div className='divider'></div><TopRatedMovies /></>
    )

}