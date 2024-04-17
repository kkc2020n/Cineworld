export default function MediaCard(props) {
   
  const item = props;
    const imgpath = `http://image.tmdb.org/t/p/w780/${item.backdrop_path}`;
    return (
      <li data-index-item={props.i} key={props.i}>
      <a className="movie-item">
        <div className="canvas-left">
          <div className="canvas-artwork">
            <div
              className="artwork"
              style={{ cursor: "pointer" }}
            
            >
              <picture>
                <source type="image/jpeg" srcSet={imgpath}></source>
                <img
                  loading="lazy"
                  className="media-artwork-v2__image"
                  src={imgpath}
                  sizes={`(min-width:300px) and (max-width:739px) 739px, (min-width:740px) and (max-width:999px) 499px, (min-width:1000px) and (max-width:1319px) 659px, 559px`}
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="canvas-right">
          <div className="--original-name">{item.original_title? item.original_title : item.original_name}</div>
          <div className="--overview">{item.overview}</div>
        </div>
      </a>
    </li>

    )


}

