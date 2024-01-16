import React from 'react'
import Image from 'next/image';
import parse from "html-react-parser";


const FullscriptSupplement = (props) => {
    const { supplement } = props;
return (
  <div className="grid md:grid-cols-[30%_70%] px-4 py-10">
    <a
      href="https://us.fullscript.com/welcome/autoimmunenutrition/store-start"
      target="_blank"
      className="my-auto mx-auto "
    >
      <Image src={supplement.photo} width={182} height={370}></Image>
    </a>
    <div className="pt-4 grid p-2 mx-auto place-content-start">
      <h2 className="text-xl md:text-3xl font-bold mx-auto text-center my-4">
        {supplement.title}
      </h2>
      <p className="text-center">{parse(supplement.description)}</p>
    </div>
  </div>
);


};

export default FullscriptSupplement


//doesn't work 

    // var script = (function () {
    //   if (document.currentScript) {
    //     return document.currentScript;
    //   }
    //   var scripts = document.getElementsByTagName("script");
    //   return scripts[scripts.length - 1];
    // })();
    // var settings = JSON.parse(script.attributes["data-fs"].value);

    // var ajax = function (callback, data, x) {
    //   const url = "//us.fullscript.com/oembed/embed.js";
    //   const product_id = props;
    //   const store_slug = "cclaynutrition";
    //   const product_card = true;

    //   try {
    //     x = new (this.XMLHttpRequest || ActiveXObject)("MSXML2.XMLHTTP.3.0");
    //     x.open(data ? "POST" : "GET", url, 1);
    //     x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    //     x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //     x.onreadystatechange = function () {
    //       x.readyState > 3 && callback && callback(x.responseText, x);
    //     };
    //     x.send(data);
    //   } catch (e) {
    //     window.console && console.log(e);
    //   }
    // };

    // if (settings.return == "product_card") {
    //   var url =
    //     "https://us.fullscript.com/oembed?url=us.fullscript.com/products/" +
    //     settings.product_id +
    //     "&return=" +
    //     settings.return +
    //     "&store_slug=" +
    //     settings.store_slug;
    // } else {
    //   var url =
    //     "https://us.fullscript.com/oembed?url=us.fullscript.com/" +
    //     settings.product_ids +
    //     "&store_slug=" +
    //     settings.store_slug;
    // }

    // ajax(url, function (responseText, request) {
    //   var json = JSON.parse(responseText);
    //   var div = document.createElement("div");

    //   div.innerHTML = json.html;

    //   var iFrame = div.children[0];

    //   if (settings.return == "product_card") {
    //     iFrame.setAttribute("width", 202);
    //     iFrame.setAttribute("height", 390);
    //   } else {
    //     iFrame.setAttribute("width", "100%");
    //     iFrame.setAttribute("height", "403");
    //   }

    //   var eventMethod = window.addEventListener
    //     ? "addEventListener"
    //     : "attachEvent";
    //   var eventer = window[eventMethod];
    //   var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    //   eventer(messageEvent, function (e) {
    //     if (
    //       e.data.event === "iFrameHeight" &&
    //       typeof e.data.height === "number"
    //     ) {
    //       iFrame.setAttribute("height", e.data.height);
    //     }
    //   });

    //   script.parentNode.insertBefore(div.children[0], script.nextSibling);
    // });