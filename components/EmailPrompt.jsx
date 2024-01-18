"use client";
import { useState } from "react";
// import jsonp from "jsonp";

export default function EmailPrompt() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-full bg-turquoise h-80 grid justify-items-center my-16">
      <div id="mc_embed_shell">
        {/* <link
          href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
          rel="stylesheet"
          type="text/css"
        />
        <style type="text/css"> */}
        {/* #mc_embed_signup{{background:"#fff", font:"14px Helvetica", width: "600px"}}  */}
        {/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */}
        {/* </style> */}
        <div id="mc_embed_signup">
          <form
            action="https://eatyerveggies.us4.list-manage.com/subscribe/post?u=ed3887d0c66e0bebf95e5adf4&amp;id=db78bcafa9&amp;f_id=00812fe9f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            novalidate=""
          >
            <div id="mc_embed_signup_scroll" className="pt-6">
              <h2 className="text-3xl font-bold my-4">Join our email list!</h2>
              <div className="mc-field-group">
                <label for="mce-EMAIL">
                  Email Address
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    required=""
                    value={email}
                    placeholder="Good things incoming!"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div hidden="">
                <input type="hidden" name="tags" defaultValue="2270440" />
              </div>
              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-5000px" }}
              >
                {/* real people should not fill this in and expect good things -
                do not remove this or risk form bot signups */}
                <input
                  type="text"
                  name="b_ed3887d0c66e0bebf95e5adf4_db78bcafa9"
                  tabIndex="-1"
                  defaultValue=""
                />
              </div>
              <div className="optionalParent">
                <div className="clear foot">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                    value="Sign up!"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
