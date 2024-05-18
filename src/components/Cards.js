import React from "react";
import Card from "./Card";
import imagen1 from "../assets/nginxlogo.webp";

const cards = [
    {
      id: 1,
      title: "NGINX",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: imagen1,
      instructor: "Samuel Lopez",
      url: "https://github.com/"
    },
    {
      id: 2,
      title: "JavaScript",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: imagen1,
      instructor: "Angela Rios",
      url: "https://github.com/"
    },
    {
      id: 3,
      title: "Docker",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: imagen1,
      instructor: "Omar Velazquez",
      url: "https://github.com/"
    },
    {
        id: 3,
        title: "Probabilidad y Estadística",
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        image: imagen1,
        instructor: "Valentin Jimenez",
        url: "https://github.com/"
      },
  ];
export default function Cards() {
    console.log(cards);
  return (
  <div className="container d-flex justify-content-center align-item-center h-100">
    <div className="row">
        {
        cards.map( card => (
            <div className="col-md-4" key={card.id}>
                <Card className="col-md-4" 
                key={card.id}
                id={card.id}
                title={card.title}
                image={card.image}
                description={card.description}
                instructor={card.instructor}
                url={card.url}
                />
            </div>
        ))
        }
    </div>
  </div>);
}
