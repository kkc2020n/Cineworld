
import TrendingMovies from './component/TrendingMovies';
import TrendingTv from './component/TrendingTv';
import TopRatedMovies from './component/TopRatedMovies';

function App() {



  return (
    <>
      <TrendingMovies />
      <div className='divider'></div>
      <TrendingTv/>
      <div className='divider'></div>
      <TopRatedMovies/>
    </>
  )
}

export default App
