import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <h2>Hacker Team</h2>
      <div className="desc">
        <h5>
          This Trivia Game application is built during Pursuit Major League Hacking Event. Our team of hackers from different Pursuit Cohorts have demonstrated great teamwork to accomplish our goal during this one-day event.
        </h5>
      </div>
      <div className="collaborators">
        <section className="Samantha">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  className="photo"
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQECVVt3NEUc1w/profile-displayphoto-shrink_800_800/0/1640218996877?e=1673481600&v=beta&t=-DRqmPzuks0Ph2yCEmF3wuD5VRVtePXyOqwcNv5RwgM"
                  alt="Samantha Figueroa Profile"
                />
                <h3>Samantha Figueroa</h3>
                <p>
                  <strong>8.4 Pursuit Fellow</strong> <br />
                </p>
              </div>
              <div class="flip-card-back">
                <p>I currently work in administration. In my spare time, I have been working on my full-stack web-development skills as a Pursuit fellow. I am now proficient in Javascript and React. When I am not working or coding I am most likely playing video games, watching my favorite shows or practicing how to roller skate. 
</p>
                <a
                  href="https://www.linkedin.com/in/samantha-figueroa-fs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
                    alt="LinkedIn"
                  />
                </a>
                <a
                  href="https://github.com/SamFigueroa92"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icon"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="Kalilah">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  className="photo"
                  src="https://avatars.githubusercontent.com/u/75289632?v=4"
                  alt="Kalilah Clarke Profile"
                />
                <h3>Kalilah Clarke</h3>
                <p>
                  <strong>8.4 Pursuit Fellow</strong> <br />
                </p>
              </div>
              <div class="flip-card-back">
                <p>
                  <br /> Fluent in Javascript React, learning one language at a
                  time. Using her Education background she endeavors to create
                  Applications that are simplistic and clean; that are used to
                  simplify daily life. <strong>Adaptability</strong> is the name
                  of her Game.
                </p>
                <a
                  href="https://www.linkedin.com/in/kalilah-clarke-36876530/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
                    alt="LinkedIn"
                  />
                </a>
                <a
                  href="https://github.com/KalilahClarke"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icon"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="Derek">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  className="photo"
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQHrQhk0MBWm2A/profile-displayphoto-shrink_800_800/0/1661121871117?e=1673481600&v=beta&t=jlWtR7ei-nuHJLdgqoXngFEYHxevv-yoGJdzBuFytZI"
                  alt="Derek Peterson"
                />
                <h3>Derek Peterson</h3>
                <p>
                  <strong>8.3 Pursuit Fellow</strong> <br />
                </p>
              </div>
              <div class="flip-card-back">
                <p>Pursuit Fellow | Full Stack Web Developer | Collaborating with other web developers to create solutions with amazing softwares.</p>
                <a
                  href="https://www.linkedin.com/in/derekpeterson-plutus/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
                    alt="LinkedIn"
                  />
                </a>
                <a
                  href="https://github.com/derekpeterson-plutus"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    className="icon"
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
