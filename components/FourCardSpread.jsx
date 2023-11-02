import placeholder_image from "../public/placeholder_article_photo.jpg";
import Image from "next/image";

export default function FourCardSpread() {
  return (
    <div className="grid grid-cols-2 mx-4 md:grid-cols-4">
      <div className="grid p-4">
        <Image className="rounded-t-lg" src={placeholder_image} />
        <div className="border-solid border-2 rounded-b-lg shadow-md p-2 text-center text-xl">
          <p className="p-4 text-center text-xl">Article title</p>
        </div>
      </div>

      <div className="grid p-4">
        <Image className="rounded-t-lg" src={placeholder_image} />
        <div className="border-solid border-2 rounded-b-lg shadow-md p-2 text-center text-xl">
          <p className="p-4 text-center text-xl">Article title</p>
        </div>
      </div>

      <div className="grid p-4">
        <Image className="rounded-t-lg" src={placeholder_image} />
        <div className="border-solid border-2 rounded-b-lg shadow-md p-2 text-center text-xl">
          <p className="p-4 text-center text-xl">Article title</p>
        </div>
      </div>

      <div className="grid p-4">
        <Image className="rounded-t-lg" src={placeholder_image} />
        <div className="border-solid border-2 rounded-b-lg shadow-md p-2 text-center text-xl">
          <p className="p-4 text-center text-xl">Article title</p>
        </div>
      </div>
    </div>
  );
}
