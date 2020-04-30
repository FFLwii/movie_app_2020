import React from "react";
import PropType from "prop-types";

function Movie({ id, year, title, summary, poster }) {
    return <h1>{title}</h1>;
};

Movie.pTypes = {
    id: PropType.number.isRequired,
    year: PropType.number.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    poster: PropType.string.isRequired
};

export default Movie;