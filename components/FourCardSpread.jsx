import placeholder_image from "../public/placeholder_article_photo.jpg";
import Image from "next/image";

// this component needs to be deleted - will delete after Did You Know? and Related Article sections are built out using CardComponent at the bottom of each article page, in ArticleComponent.


export default function FourCardSpread(props) {
  return (
    <>
      <div className="w-full mt-24">
        <p
          className="text-4xl md:text-6xl pl-6 pb-2 lowercase"
          style={{ textShadow: "3px 3px 3px #99CED3" }}
        >
          {props.children}
        </p>
        <div className="grid grid-cols-2 mx-4 md:grid-cols-4">
          <div className="grid p-4">
            <Image
              className="rounded-t-lg"
              src={placeholder_image}
              alt="placeholder image"
            />
            <div className="border-solid border-2 rounded-b-lg shadow-md p-2 text-center text-xl">
              <p className="p-4 text-center text-xl">Article title</p>
            </div>
          </div>

          <div className="grid p-4">
            <Image
              className="rounded-t-lg"
              src={placeholder_image}
              alt="placeholder image"
            />
            <div className="border-solid border-2 rounded-b-lg shadow-md p-2 text-center text-xl">
              <p className="p-4 text-center text-xl">Article title</p>
            </div>
          </div>

          <div className="grid p-4">
            <Image
              className="rounded-t-lg"
              src={placeholder_image}
              alt="placeholder image"
            />
            <div className="border-solid border-2 rounded-b-lg shadow-md p-2 text-center text-xl">
              <p className="p-4 text-center text-xl">Article title</p>
            </div>
          </div>

          <div className="grid p-4">
            <Image
              className="rounded-t-lg"
              src={placeholder_image}
              alt="placeholder image"
            />
            <div className="border-solid border-2 rounded-b-lg shadow-md p-2 text-center text-xl">
              <p className="p-4 text-center text-xl">Article title</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
