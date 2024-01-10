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
            class="validate"
            target="_self"
            novalidate=""
          >
            <div id="mc_embed_signup_scroll" className="pt-6">
              <h2 className="text-center ">Join our email list!</h2>

              <div class="mc-field-group">
                <label for="mce-EMAIL">
                  Email Address 
                  {/* <span class="asterisk">*</span> */}
                  {/* <input
                    type="email"
                    name="EMAIL"
                    class="required email"
                    id="mce-EMAIL"
                    required=""
                    value=""
                  /> */}
                  <input
                    type="email"
                    name="EMAIL"
                    class="required email"
                    id="mce-EMAIL"
                    required=""
                    value={email}
                    placeholder="Good things incoming!"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                {/* <div class="indicates-required">
                  <span class="asterisk">*</span> indicates required
                </div> */}
              </div>
              <div hidden="">
                <input type="hidden" name="tags" value="2270440" />
              </div>
              <div id="mce-responses" class="clear foot">
                <div
                  class="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  class="response"
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
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                    value="Subscribe"
                  />
                  <p style={{ margin: "0px auto" }}>
                    <a
                      href="http://eepurl.com/iHFVvk"
                      title="Mailchimp - email marketing made easy and fun"
                    >
                      <span
                        style={{
                          display: "inline-block",
                          backgroundColor: "transparent",
                          borderRadius: "4px",
                        }}
                      >
                        <img
                          class="refferal_badge"
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                          alt="Intuit Mailchimp"
                          style={{
                            width: "220px",
                            height: "40px",
                            display: "flex",
                            padding: "2px 0px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

{
  /* //   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const onSubmit = (e) => { 
//     e.preventDefault();
//     const url =
//       "https://eatyerveggies.us4.list-manage.com/subscribe/post-json?u=ed3887d0c66e0bebf95e5adf4&amp;id=db78bcafa9&amp;f_id=00812fe9f0";
//     jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
//       const { msg, result } = data;
//       // do something with response
//       alert(msg);
//     });
//   };

//   return (

//     <div className="w-full bg-turquoise h-80 grid justify-items-center">
//       <p className="text-center pt-16 text-xl">Join our email list!</p>
//       <form action="" method="get" className="text-center ">
//         <div onSubmit={onSubmit}>
//           <label for="email" onChange={(e) => setEmail(e.target.value)}>
//             Email:{" "}
//           </label>
//           <br></br>
//           <input
//             type="email"
//             name="EMAIL"
//             // class="required email"
//             id="mce-EMAIL"
//             className="w-64 rounded h-8"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="submit"
//             value="Subscribe!"
//             className="text-l p-2 m-3 bg-white uppercase rounded-md justify-center w-[95%] text-black hover:font-bold"
//             isLoading={loading}
//           />
//         </div>
//       </form>
//       {/* action="https://eatyerveggies.us4.list-manage.com/subscribe/post-json?u=ed3887d0c66e0bebf95e5adf4&amp;id=db78bcafa9&amp;f_id=00812fe9f0" */
}
//       {/* <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="" />
//     </div>*/}

{
  /* 

    //   <div id="mc_embed_shell">
    //     <link 
    //       href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
    //       rel="stylesheet"
    //       type="text/css"
    //     />
    //     <style type="text/css">
    //       {/* #mc_embed_signup{background:"#fff", clear:"left", width: "600px"} */
}
//       {/* /* Add your own Mailchimp form style overrides in your site stylesheet
//       or in this style block. We recommend moving this block and the
//       preceding CSS link to the HEAD of your HTML file. */}
{
  /* //     </style>
    //     <div id="mc_embed_signup">
    //       <form 
    //         action="https://eatyerveggies.us4.list-manage.com/subscribe/post?u=ed3887d0c66e0bebf95e5adf4&amp;id=db78bcafa9&amp;f_id=00812fe9f0"
    //         method="post"
    //         id="mc-embedded-subscribe-form"
    //         name="mc-embedded-subscribe-form"
    //         class="validate"
    //         target="_self"
    //         novalidate=""
    //       >
    //         <div id="mc_embed_signup_scroll" className="pt-8">
    //           <h2 className="grid justify-items-center">
    //             Join our email list!
    //           </h2>
    //           <div class="indicates-required">
    //             <span class="asterisk">*</span> indicates required
    //           </div>
    //           <div class="mc-field-group">
    //             <label for="mce-EMAIL">
    //               Email Address <span class="asterisk">*</span>
    //             </label>
    //             <input
    //               type="email"
    //               name="EMAIL"
    //               class="required email"
    //               id="mce-EMAIL"
    //               required=""
    //               value=""
    //             />
    //             <span
    //               id="mce-EMAIL-HELPERTEXT"
    //               class="helper_text"
    //               className="hidden"
    //             ></span>
    //           </div>
    //           <div hidden="">
    //             <input type="hidden" name="tags" value="2270440" />
    //           </div>
    //           <div id="mce-responses" class="clear foot">
    //             <div
    //               class="response"
    //               id="mce-error-response"
    //               className="hidden"
    //             ></div>
    //             <div
    //               class="response"
    //               id="mce-success-response"
    //               className="hidden"
    //             ></div>
    //           </div>
    //           <div
    //             aria-hidden="true"
    //             // style="position: absolute; left: -5000px;"
    //             className="absolute -ml-96"
    //           >
    //             {/* /* real people should not fill this in and expect good things
    //               - do not remove this or risk form bot signups */
}
{
  /* //             <input 
    //               type="text"
    //               name="b_ed3887d0c66e0bebf95e5adf4_db78bcafa9"
    //               tabindex="-1"
    //               value=""
    //             />
    //           </div>
    //           <div class="optionalParent">
    //             <div class="clear foot">
    //               <input
    //                 type="submit"
    //                 name="subscribe"
    //                 id="mc-embedded-subscribe"
    //                 class="button"
    //                 value="Subscribe"
    //               />
    //               <p
    //                 // style="margin: 0px auto;"
    //                 className="mx-auto my-0"
    //               >
    //                 <a
    //                     href="http://eepurl.com/iHFVvk"
    //                     title="Mailchimp - email marketing made easy and fun"
    //                   >
    //                 <span
    //                       // style="display: inline-block; background-color: transparent; border-radius: 4px;"
    //                       className="inline-block rounded"
    //                     >
    //                 {/* <img
    //                         class="refferal_badge"
    //                         src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
    //                         alt="Intuit Mailchimp"
    //                         // style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"
    //                       /> 
    //                 </span>
    //                 </a>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   </div>*/
}
