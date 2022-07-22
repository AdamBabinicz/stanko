import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../assets/1.jfif";
import ImageTwo from "../../assets/1.jpg";
import ImageThree from "../../assets/4.jpg";
import ImageFour from "../../assets/5.jpg";
import ImageFive from "../../assets/7.jpg";
import ImageSixth from "../../assets/25.jpg";
import ImageSeventh from "../../assets/26.jpg";
import ImageEighth from "../../assets/27.jpg";
import ImageTenth from "../../assets/22.jpg";
import ImageEleventh from "../../assets/4.webp";
import ImageNineteenth from "../../assets/1.webp";
import ImageTwentyth from "../../assets/2.webp";
import ImageTwentyFirst from "../../assets/3.webp";
import ImageTwentySecond from "../../assets/1.jpeg";
import ImageTwentyThird from "../../assets/6.jpg";
import ImageTwentyFourth from "../../assets/21.jpg";
import ImageTwentyFifth from "../../assets/30.jpg";
import ImageTwentySixth from "../../assets/31.jpg";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "2018",
    image: ImageOne,
    link: "",
  },
  {
    id: 2,
    name: "2017",
    image: ImageEighth,
    link: "",
  },
  {
    id: 2,
    name: "2016",
    image: ImageTwo,
    link: "",
  },
  {
    id: 2,
    name: "2010",
    image: ImageSeventh,
    link: "",
  },
  {
    id: 3,
    name: "Sztokholm - 1991",
    image: ImageThree,
    link: "",
  },
  {
    id: 3,
    name: "1990",
    image: ImageTenth,
    link: "",
  },
  {
    id: 4,
    name: "1987",
    image: ImageFour,
    link: "",
  },
  {
    id: 4,
    name: "1985",
    image: ImageFive,
    link: "",
  },
  {
    id: 4,
    name: "Taj Mahal - 1980",
    image: ImageEleventh,
    link: "",
  },
  {
    id: 4,
    name: "Zadanie aktorskie...",
    image: ImageTwentyFourth,
    link: "",
  },
  {
    id: 4,
    name: "Krakowskie podwórko",
    image: ImageTwentyFifth,
    link: "",
  },
  {
    id: 4,
    name: "Wieliczka - w kopalnii",
    image: ImageTwentySixth,
    link: "",
  },
  {
    id: 5,
    name: "1974",
    image: ImageTwentySecond,
    link: "",
  },
  {
    id: 5,
    name: "Kwintet Stańki - 1973",
    image: ImageTwentyFirst,
    link: "",
  },
  {
    id: 5,
    name: "1972",
    image: ImageTwentyThird,
    link: "",
  },
  {
    id: 6,
    name: "1966",
    image: ImageSixth,
    link: "",
  },
  {
    id: 6,
    name: "1964",
    image: ImageNineteenth,
    link: "",
  },
  {
    id: 6,
    name: "Kwintet Komedy - 1964",
    image: ImageTwentyth,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "Wszystko",
  },
  {
    filterId: 2,
    label: "21 wiek",
  },
  {
    filterId: 3,
    label: "90-te",
  },
  {
    filterId: 4,
    label: "80-te",
  },
  {
    filterId: 5,
    label: "70-te",
  },
  {
    filterId: 6,
    label: "60-te",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log(hoveredValue);

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section className="portfolio" id="fototeka">
      <PageHeaderContent
        headerText="Fototeka"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="..." />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

// https://www.muzeumjazzu.pl/tomasz-stanko-3
