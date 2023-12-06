import "./Contact.css";
import Plant1 from "./Plant1.jpg";
import Plant2 from "./Plant2.jpg";
import Plant3 from "./Plant6.jpg";
import Plant4 from "./Plant4.jpg";
import Plant5 from "./Plant5.jpg";

const Contact = () => {
  return (
    <main>
      <h1 className="plantcare-header contact-space">
        <span className="plantcare-textcolour">Contact us.</span>{" "}
        <span className="plantcare-textcolour-contrast">
          We are here to assist you in any way
        </span>{" "}
        <span className="plantcare-textcolour">we can.</span>
      </h1>

      <div class="container">
        <form id="contact" action="" method="post">
          <h4>Contact us today, and get a reply within 24 hours!</h4>
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Phone Number (Optional)"
              type="tel"
              tabindex="3"
            />
          </fieldset>

          <fieldset>
            <textarea
              placeholder="Type your Message Here...."
              tabindex="5"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <img src={Plant1} alt="Plant1" className="homepage-image" />
      <img src={Plant2} alt="Plant2" className="homepage-image-2" />
      <img src={Plant3} alt="Plant3" className="homepage-image-3" />
      <img src={Plant4} alt="Plant4" className="homepage-image-4" />
      <img src={Plant5} alt="Plant5" className="homepage-image-5" />
    </main>
  );
};

export default Contact;
