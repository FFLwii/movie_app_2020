import React from "react";
import PropType from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster, genres}) {
    return (
        //<h4>{title}</h4> // 리턴은 마지막 하나의 태그만 됨
        <div className="movie">
            <img scr={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                {genres.map((genre, index)=>(
                    <li key={index} className="genres__genre">{genre}</li>
                ))}
                <p className="movie__summary">{summary.slice(0,140)}...</p>
            </div>
        </div>

    );
}

Movie.pTypes = {
    id: PropType.number.isRequired,
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired
};

export default Movie;