import React from "react";

function ContactUs() {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary u-center-text">Contact Us</h2>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  name
                </label>
              </div>

              <div className="form__group">
                <input
                  type="phone"
                  className="form__input"
                  placeholder="Phone number"
                  id="phone"
                  required
                />
                <label htmlFor="phone" className="form__label">
                  Phone number
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>

              <div className="form__group">
                <textarea
                  type="text"
                  className="form__input"
                  placeholder="Tell us about your event or ask us anything here"
                  id="contact"
                  rows="6"
                  cols="12"
                  required
                ></textarea>
                <label htmlFor="contact" className="form__label">
                Tell us about your event or ask us anything here
                </label>
              </div>

              <div className="form__group">
                <button className="btn btn--grey">Submit &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
