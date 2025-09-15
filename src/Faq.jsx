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
          <label for="q3">Does the map work on mobile devices?</label>
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
          <label for="q5">Why is my location not accurate?</label>
          <div class="faq-content">
            <p>
              GPS accuracy depends on your device and environment. Try stepping
              outside or enabling high-accuracy mode on your phone.
            </p>
          </div>
        </div>

        <div class="faq">
          <input type="checkbox" id="q6" class="faq-input" />
          <label for="q6">
            Is my live location stored or shared with anyone?
          </label>
          <div class="faq-content">
            <p>
              No. Your live location is only used temporarily to display your
              route. It is not stored or shared.
            </p>
          </div>
        </div>

        <div class="faq">
          <input type="checkbox" id="q7" class="faq-input" />
          <label for="q7">
            Can I use the app without granting location permission?
          </label>
          <div class="faq-content">
            <p>
              Yes, but the routing feature will not work. You can still explore
              locations manually.
            </p>
          </div>
        </div>

        <div class="faq">
          <input type="checkbox" id="q8" class="faq-input" />
          <label for="q8">
            Does the app work in the background if I minimize it?
          </label>
          <div class="faq-content">
            <p>
              No. The app stops tracking when you minimize it. You must keep it
              open to use live navigation.
            </p>
          </div>
        </div>

        <div class="faq">
          <input type="checkbox" id="q9" class="faq-input" />
          <label for="q9">
            Why does the map appear blank or not load at all?
          </label>
          <div class="faq-content">
            <p>
              This may happen if your internet connection is unstable, or if map
              tiles fail to load. Refresh the page and check your connection
            </p>
          </div>
        </div>

        <div class="faq">
          <input type="checkbox" id="q10" class="faq-input" />
          <label for="q10">Why are some markers missing or duplicated?</label>
          <div class="faq-content">
            <p>
              The database may not be up-to-date. If you notice errors, please
              report them for correction.
            </p>
          </div>
        </div>

        <div class="faq">
          <input type="checkbox" id="q11" class="faq-input" />
          <label for="q11">
            How often is the campus location data updated?
          </label>
          <div class="faq-content">
            <p>
              Location data is updated manually whenever new buildings or
              landmarks are added.
            </p>
          </div>
        </div>

        <div class="faq">
          <input type="checkbox" id="q12" class="faq-input" />
          <label for="q12">
            Will the blue navigation line update as I move around campus?
          </label>
          <div class="faq-content">
            <p>
              Yes. The route automatically refreshes based on your live GPS
              location, so the blue line will move as you walk.
            </p>
          </div>
        </div>
        <div class="faq">
          <input type="checkbox" id="q13" class="faq-input" />
          <label for="q13">How do I zoom in or out on the map?</label>
          <div class="faq-content">
            <p>
              Use the + and – buttons on the map, or pinch-to-zoom if you are on
              a mobile device.
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
