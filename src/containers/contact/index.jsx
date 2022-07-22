import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <PageHeaderContent
        headerText="Kontakt ze mną"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  type={"text"}
                  name="name"
                  className="inputName"
                />
                <label htmlFor="name" className="nameLabel">
                  Imię i nazwisko
                </label>
              </div>
              <div>
                <input
                  required
                  type={"text"}
                  name="email"
                  className="inputEmail"
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  type={"text"}
                  name="description"
                  className="inputDescription"
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Wiadomość
                </label>
              </div>
            </div>
            <button>Wyślij</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
