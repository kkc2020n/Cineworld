
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTopMovieList } from '../features/media/trendingSlice';
import MediaCard from './MediaCard';


const NowPlaying = (props) => {
    const dispatch = useDispatch();
    const { topMovieList } = useSelector((state) => state.trending);
   
    useEffect(() => {
        dispatch(getTopMovieList())
    }, [])




    return (
        <div className="trend-block">
        <div>
          <h2 className="type-headline">Top Rated </h2>
        </div>
        <div className="grid-container">
          <ul className="trending-list">{
           topMovieList.map((item, i) => {
            return <MediaCard {...item} i={i} keyprefix="r" />          
          })

          }</ul>
        </div>
      </div>
    )


}
export default NowPlaying