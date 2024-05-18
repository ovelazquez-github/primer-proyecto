import React from "react";
import imagen1 from "../assets/nginxlogo.webp";

export default function Card({id, title, image, instructor, description, url}) {
  return (
    <div className="card text-center bg-dark">
      <div className="card-body text-light">
        <img className="image-widht" src={image} />
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-primary">
            Instructor: {instructor}
        </p>
        <p className="card-text text-secondary">
            {description}
        </p>
        <a href={url} className="btn btn-outline btn-secondary rounded-0">
          Ver más
        </a>
      </div>
    </div>
  );
}
