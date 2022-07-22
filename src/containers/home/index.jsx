import React, { useState } from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import Modal from "../../components/Portal/Modal";

const Home = () => {
  // const [mobile, setMobile] = useState(false);

  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <>
      <section className="home" id="home">
        <div className="home__text-wrapper">
          <h1>
            Tomasz <br />
            Stańko
          </h1>
        </div>

        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="home__contact-me">
            <button onClick={() => Toggle()}>Więcej</button>
          </div>
        </Animate>
      </section>
      <Modal show={modal} close={Toggle} title="Młodość">
        <p>
          Młodzieńcze plany o karierze plastyka (Stańko dużo rysował i malował)
          uległy zmianie po pierwszych doświadczeniach jazzu na żywo – koncercie
          Dave’a Brubecka w 1958 w krakowskim klubie Rotunda. Stańko stał się
          częstym gościem krakowskiego klubu jazzowego Helikon, biorąc udział w
          jazzowych jamach. Tam poznał pianistę Adama Makowicza, z którym –
          jesienią 1962 – postanowił założyć zespół Jazz Darings, do którego
          zaprosili jeszcze Jacka Ostaszewskiego (kontrabas) i Wiktora
          Perelemuttera (perkusja).
        </p>
        <br />
        <p>
          <em>pl.wikipedia.org/wiki</em>
        </p>
      </Modal>
    </>
  );
};

export default Home;
