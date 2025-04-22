import React from "react";
import aboutimage from "../images/about.png";

export default function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          animi rem voluptatibus minus. Dolore nobis accusantium illum! Animi,
          deserunt cum libero neque ipsum perferendis, doloremque quod,
          reprehenderit tenetur dolor magni? Accusantium temporibus deleniti
          maiores distinctio debitis accusamus veniam similique perspiciatis
          nostrum quidem quae in cumque, hic obcaecati iusto soluta sequi
          doloremque ipsam amet enim nobis id tempore dignissimos magni. Harum!
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}
