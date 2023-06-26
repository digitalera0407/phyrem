import React from 'react';

export default function ContactUs() {
  return (
    <div className="contact section-spacing" id="contact">
      <h2 class="text-center">Contact Us</h2>
      <div class="container">
        <div class="row">
          <div class="col-md-4 center-block">
            <div class="contact-form">
              <div class="success-sf">
                <p>Thank You! Your message has been sent.</p>
              </div>
              <div class="error-sf">
                <p>
                  Something went wrong, try refreshing and submitting the form
                  again.
                </p>
              </div>
              <button
                type="button"
                class="slide-right btn button zf-submitColor get_access"
                id="zf-submitColor"
                data-text="Contact Us"
                style={{ width: '100%' }}
              >
                Click Here to Contact Us
              </button>
              <form
                action="https://forms.zohopublic.com/phyrem/form/SalesInquiry/formperma/yz6_E_LRYXgQwCNp6svQJCB7LTZthf-mgOQnkYZVy5c/htmlRecords/submit"
                name="form2"
                method="POST"
                accept-charset="UTF-8"
                enctype="multipart/form-data"
                id="form2"
                style={{ display: 'none' }}
                siq_id="autopick_2859"
              >
                <div class="alert alert-danger hide">
                  <a
                    class="close"
                    data-close="alert"
                    onclick="$('.alert').hide()"
                  >
                    ×
                  </a>
                </div>

                <input type="hidden" name="zf_referrer_name" value="" />

                <input type="hidden" name="zf_redirect_url" value="" />
                <input type="hidden" name="zc_gad" value="" />

                <div class="form-group row">
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="slide-left form-control"
                      name="Name_First"
                      id="Name_First"
                      placeholder="First Name"
                      required=""
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="slide-left form-control"
                      name="Name_Last"
                      id="Name_Last"
                      placeholder="Last Name"
                      required=""
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <input
                      type="text"
                      class="slide-left form-control"
                      name="PhoneNumber_countrycode"
                      id="PhoneNumber_countrycode"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <input
                      type="email"
                      class="slide-left form-control"
                      name="Email"
                      id="Email"
                      placeholder="Email Address"
                      required=""
                    />
                  </div>
                </div>

                <div class="form-group row text-area">
                  <div class="col-md-12">
                    <textarea
                      class="slide-right form-control"
                      name="MultiLine"
                      id="MultiLine"
                      rows="4"
                      placeholder="Enter Your Message"
                      required=""
                    ></textarea>
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <input
                      type="text"
                      class="slide-left form-control"
                      name="SingleLine"
                      id="SingleLine"
                      placeholder="How did you hear about us?"
                      required=""
                    />
                    <p
                      class="zf-instruction"
                      style={{ fontSize: '12px', color: '#999' }}
                    >
                      Example: Google, Bing, Yahoo, Yelp, Facebook, etc.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  class="slide-right btn button zf-submitColor sales_inquery"
                  id="zf-submitColor"
                >
                  SEND{' '}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
