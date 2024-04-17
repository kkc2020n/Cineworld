
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from '../features/cart/trendingSlice'
import MediaCard from './MediaCard';


const TrendingMovies = (props) => {
    const dispatch = useDispatch();
    const { trendingMovies } = useSelector((state) => state.trending);
   
    useEffect(() => {
        dispatch(getMovieList())
    }, [])



    return (
        <div className="trend-block">
        <div>
          <h2 className="type-headline">Trending Movies </h2>
        </div>
        <div className="grid-container">
          <ul className="trending-list">{
           trendingMovies.map((item, i) => {
            return <MediaCard {...item} i={i} />
          })
          }</ul>
        </div>
      </div>
    )


}
export default TrendingMovies