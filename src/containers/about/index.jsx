import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { GiFedora, GiGuitar, GiSaxophone, GiTrumpet } from "react-icons/gi";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personaDetails = [
  {
    label: "Imię i nazwisko",
    value: "Tomasz Stańko",
  },
  {
    label: "Data urodzenia i śmierci",
    value: "11.07.1942 - 29.07.2018",
  },
  {
    label: "Zawód",
    value: "trębacz",
  },
  {
    label: "Gatunki muzyczne",
    value: "jazz, muzyka filmowa",
  },
];

const jobSummary =
  "Od początku lat 60. ubiegłego wieku należał do najważniejszych artystów polskiej sceny jazzowej, wywarł znaczący wpływ na jej rozwój i dokonania. Atutem sztuki Tomasza Stańki był własny, odrębny ton, nastrojowy klimat, słowiańska melancholia, łatwo rozpoznawalne od pierwszego dźwięku, charakterystyczne brzmienie jego trąbki. Nagrał około czterdziestu albumów autorskich, skomponował muzykę do kilkudziesięciu filmów, m.in.: 'Trąd', 'Dziura w ziemi', 'Pożegnanie z Marią', 'Skaza', 'Reich', 'Egzekutor' i spektakli teatralnych: 'Balladyna', 'Nienasycenie', 'Roberto Zucco', 'Wyzwolenie'.";

const text = "culture.pl/pl/tworca/tomasz-stanko";

const About = () => {
  return (
    <section className="about" id="życiorys">
      <PageHeaderContent
        headerText="Życiorys"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>polski trębacz jazzowy, kompozytor</h3>
            <p>{jobSummary}</p>
            <p>
              <em>{text}</em>
            </p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">Dane personalne</h3>
            <ul>
              {personaDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}: </span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <GiFedora />
              </div>
              <div>
                <GiGuitar />
              </div>
              <div>
                <GiSaxophone />
              </div>
              <div>
                <GiTrumpet />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
