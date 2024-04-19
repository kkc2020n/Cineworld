
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTvList } from '../features/media/trendingSlice'
import MediaCard from './MediaCard';


const TrendingTv = (props) => {
    const dispatch = useDispatch();
    const { trendingTv } = useSelector((state) => state.trending);
   
    useEffect(() => {
        dispatch(getTvList())
    }, [])


    return (
        <div className="trend-block">
        <div>
          <h2 className="type-headline">Trending TV Shows </h2>
        </div>
        <div className="grid-container">
          <ul className="trending-list" >{
          trendingTv.map((item, i) => {
          return <MediaCard {...item} i={i} keyprefix="tv"/>
          })
          }</ul>
        </div>
      </div>
    )


}
export default TrendingTv