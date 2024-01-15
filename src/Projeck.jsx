import React from 'react'
import "./projects.css";
import portfolio from "./images/3D_portfolio.png";
import movie from "./images/movie.png";
import steel_case from "./images/steel_case.png";
import steel from "./images/yetiş_metal.png";
import vitrin from "./images/vitrin.png";
import golf_3D_Portfolio from "./images/Golf_3D_portfoly.png"
const Projeck = () => {

  const projects = [
    {
      name: "Golf 3D Portfolio",
      image: golf_3D_Portfolio,
      description: "Personal website I designed with react three fiber"
      ,
      source_code_link: "https://github.com/ibrahim146/3D-Portfolyo",
      live: "/"
    },
    {
      name: "3D Portfolio",
      description:
        "Personal website I designed with react three fiber",

      image: portfolio,
      source_code_link: "https://github.com/ibrahim146/mozaikmanken.com",
      live: "https://ibrahim-akyel-portfolio.vercel.app/"
    },
    {
      name: "Movie Site",
      description:
        "Able to search movies in the world. Added to favourites. A movie site that has a viewing history and can save to local storage.",

      image: movie,
      source_code_link: "https://github.com/ibrahim146/filimm",
      live: "https://filimm.vercel.app/"
    },
    {
      name: "Steel Case",
      description:
        "Ability to search steel safes by price, name and model. A website with product details",

      image: steel_case,
      source_code_link: "https://github.com/ibrahim146/celikkasa.com",
    },

    {
      name: "Steel Fabrication",
      description:
        "A website that consists of two groups and shows the products of the group by going to the clicked group.",

      image: steel,
      source_code_link: "https://github.com/ibrahim146/demircelik",
      live: "https://demircelik-com.vercel.app/"
    },


    {
      name: "Showcase Mannequin",
      description:
        "There are options for users' name, model, male and female. and a website with a detail page",

      image: vitrin,
      source_code_link: "https://github.com/ibrahim146/mozaikmanken.com",
    },
  ];

  return (
    <div className='projects_container'>
      <div className='project_item'>
        <h1 id='Project' style={{ color: "#00ffff", fontSize: "50px", marginBottom: "3%" }}>Project</h1>
        <p style={{ color: "white", width: "60%", marginBottom: "3%", fontSize: "20px" }}>Following projects showcases my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos in it.
          It reflects my ability to solve complex problems, work with different technologies,
          and manage projects effectively.</p>

        <div className='proje_card'>
          {projects.map((item) => {
            return (
              <div class="card">
                <img src={item.image} alt={item.name} />
                <div class="card__content">
                  <p class="card__title">{item.name}</p>
                  <p class="card__description">{item.description}</p>
                  <button class="card__button"><a style={{ color: "white", textDecoration: "none" }} target='_blank' href={item.live}>Live Demo</a></button>
                  <button class="card__button secondary"><a style={{ color: "black", textDecoration: "none" }} target='_blank' href={item.source_code_link}>Github</a></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projeck