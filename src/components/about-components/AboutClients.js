import React, { useEffect } from "react";
import AboutClientsItem from "./AboutClientsItem";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutClients() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="about-clients">
      <div className="container">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner" data-aos="fade-down">
            <div class="carousel-item active">
              <AboutClientsItem
                name="James Smith"
                biography="Business Developer"
                comment="With all sincerity and confidence, i can say that 
                                    Flex Store made me love shopping as they've never 
                                    ceased to amaze me with their level of hospitality. 
                                    "
              />
            </div>
            <div class="carousel-item">
              <AboutClientsItem
                name="Kelvin Bond"
                biography="Musician"
                comment="Flex Store is one of a kind. It's a store 
                                    where shopping is always made fun. I love the fact that their 
                                    products are prestigious."
              />
            </div>
            <div class="carousel-item">
              <AboutClientsItem
                name="Anthony Joshua"
                biography="Wrestler"
                comment="Anytime i offend my wife and i need a way to 
                                    appeal her, i just go online straight to Flex store and
                                    get her some good gifts. "
              />
            </div>
          </div>
          <br />
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default AboutClients;
