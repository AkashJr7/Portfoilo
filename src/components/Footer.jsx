import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"logo"}
          alt="Founder"
        />

        <h2>Akash joshi</h2>
        <p>If you are consistent in adapting a habit nobody can stop u from achieving your goal</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/channel/UCLKviQTd9-WuJpJJwHE9-mA" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.linkedin.com/in/akash-joshi-23455222b/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/AkashJr7" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
