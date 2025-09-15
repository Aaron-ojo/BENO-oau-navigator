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
            locate lecture theatres with images and shortest routes.
          </p>
          <p className="built">
            Built by OAU students • 2025 • Motto: “For Learning and Culture”.
          </p>
          <p className="team">Team</p>
          <div className="team-grouping">
            <p className="names">Araoye Ademolaro Precious</p>
            <br />
            <p className="names">Adejumo Adeyinka Mosope</p>
            <br />
            <p className="names">Agunbiade Boluwatife Favour</p>
            <br />
            <p className="names">Tunde-Lawal Boluwatife John</p>
            <br />
            <p className="names">Ojo Aaron Oloruntoba</p>
            <br />
          </div>
          <div className="team-grouping">
            <p className="names">Apara Victor Akinkunmi</p>
            <br />
            <p className="names">Osunmakinde Emmanuel Mercy</p>
            <br />
            <p className="names">Ibrahim Aishah Olohuntoki</p>
            <br />
            <p className="names">Ige King Oluwagbemisoke</p>
            <br />
            <p className="names">Akinleye Ayomide Victor</p>
            <br />
          </div>
          <div className="team-grouping">
            <p className="names">Adegbite Similoluwa Adebowale</p>
            <br />
            <p className="names">Ayantola Abdulaleem Akintoye</p>
            <br />
            <p className="names">Akinrodoye George Opeyemi</p>
            <br />
            <p className="names">Banjo Ayodeji Michael</p>
            <br />
            <p className="names">Ajibade Abiola James</p>
            <br />
          </div>
          <div className="team-grouping">
            <p className="names">Abass Olabiyi Nathaniel</p>
            <br />
            <p className="names">Faleti Oluwadamilola Esther</p>
            <br />
            <p className="names">Abiodun Oluwatimilehin Oluwole</p>
            <br />
            <p className="names">Fagbohun Oluwatunmise Ayanfeoluwa</p>
            <br />
          </div>
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
