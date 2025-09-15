import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Faq() {
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
        <h2>Frequently Asked Questions</h2>

        <div class="faq">
          <input type="checkbox" id="q1" class="faq-input" />
          <label for="q1">How do I search for a location on the map?</label>
          <div class="faq-content">
            <p>
              Enter the name of a building, lecture hall, or landmark into the
              search bar and press <b>Search</b>. The map will highlight the
              location and show its details.
            </p>
          </div>
        </div>

        <div class="faq">
          <input type="checkbox" id="q2" class="faq-input" />
          <label for="q2">
            Can I see the route from my current location to a destination?
          </label>
          <div class="faq-content">
            <p>
              Yes. Once you allow location access, the map will show your
              current location. Select any marker and click <b>Go Here 🚶</b> to
              see the walking route.
            </p>
          </div>
        </div>

        <div class="faq">
          <input type="checkbox" id="q3" class="faq-input" />
          <label for="q5">Does the map work on mobile devices?</label>
          <div class="faq-content">
            <p>
              Yes, the map is responsive and works on most smartphones. Allow
              location permissions for better navigation.
            </p>
          </div>
        </div>

        <div class="faq">
          <input type="checkbox" id="q4" class="faq-input" />
          <label for="q4">Can I use the map offline?</label>
          <div class="faq-content">
            <p>
              No, the map requires internet access to load tiles and calculate
              routes.
            </p>
          </div>
        </div>

        <div class="faq">
          <input type="checkbox" id="q5" class="faq-input" />
          <label for="q3">Why is my location not accurate?</label>
          <div class="faq-content">
            <p>
              GPS accuracy depends on your device and environment. Try stepping
              outside or enabling high-accuracy mode on your phone.
            </p>
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

export default Faq;
