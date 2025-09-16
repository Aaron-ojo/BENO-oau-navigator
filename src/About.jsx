import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function About() {
  return (
    <main>
      <header>
        <div className="header">
          <img src="oaulogo.png" alt="headerLogo" className="header-logo" />
          <p className="logo-title">OAU Campus Navigator</p>
          <NavBar />
        </div>
      </header>

      <section>
        <div className="details">
          <p className="aabout">About this project</p>
          <p className="oau">
            OAU Campus Navigator helps new and direct-entry students quickly
            locate lecture theatres.
          </p>
          <p className="built">
            Built by OAU students • 2025 • Motto: “For Learning and Culture”.
          </p>
          <p className="team">TEAM MEMBERS</p>
          <p className="names">Araoye Ademolaro Precious</p>

          <p className="names">Adejumo Adeyinka Mosope</p>

          <p className="names">Agunbiade Boluwatife Favour</p>

          <p className="names">Tunde-Lawal Boluwatife John</p>

          <p className="names">Ojo Aaron Oloruntoba</p>
          <p className="names">Apara Victor Akinkunmi</p>

          <p className="names">Osunmakinde Emmanuel Mercy</p>

          <p className="names">Ibrahim Aishah Olohuntoki</p>

          <p className="names">Ige King Oluwagbemisoke</p>

          <p className="names">Akinleye Ayomide Victor</p>

          <p className="names">Adegbite Similoluwa Adebowale</p>

          <p className="names">Ayantola Abdulaleem Akintoye</p>

          <p className="names">Akinrodoye George Opeyemi</p>

          <p className="names">Banjo Ayodeji Michael</p>

          <p className="names">Ajibade Abiola James</p>

          <p className="names">Abass Olabiyi Nathaniel</p>

          <p className="names">Faleti Oluwadamilola Esther</p>

          <p className="names">Abiodun Oluwatimilehin Oluwole</p>

          <p className="names">Fagbohun Oluwatunmise Ayanfeoluwa</p>

          <a href="mailto: ojoaaron93@gmail.com" className="contact">
            Contact
          </a>
        </div>
      </section>

      <footer>
        <div className="footer">
          <p className="designed">DESIGNED BY PART 2, GROUP 16 SWEP STUDENTS</p>
        </div>
      </footer>
    </main>
  );
}

export default About;
