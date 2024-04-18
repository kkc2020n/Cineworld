import React, { useEffect } from 'react';
import _ from 'underscore';
import { useParams } from 'react-router-dom';
import { getTVDetail } from '../features/media/detailSlice';
import { useSelector, useDispatch } from 'react-redux';
import MediaHeader from './MediaHeader';
import Episodes from './Episodes';


const TvDetail = (props) => {
    const dispatch = useDispatch();
    const params = useParams();
    const { detail } = useSelector((state) => state.detail);
    useEffect(()=>{
        dispatch(getTVDetail(params));
    },[])
    const isEmpty = _.isEmpty(detail);
    console.log(detail,"media")
    if (!isEmpty) {
        const allseasons = detail.seasons;
        const seasons = _.filter(allseasons, (i) => i.season_number !== 0);
        const [season] = seasons;
    
        return (
          <div className="media-page">
            <div>
              <MediaHeader data={{ media: detail }} />
              <div className="media-main">
                <div className="shelf-grid">
                  <div className="media__header">
                    <div className="ember-basic-dropdown">
                      <div className="ember-basic-dropdown-trigger ember-power-select-trigger">
                        <span className="ember-power-select-selected-item">
                          Season {season.season_number}
                        </span>
                        <span className="ember-power-select-status-icon"></span>
                      </div>
                    </div>
                  </div>
    
                  <Episodes data={detail ? detail : {}} />
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        return <></>;
      }
};

export default TvDetail;