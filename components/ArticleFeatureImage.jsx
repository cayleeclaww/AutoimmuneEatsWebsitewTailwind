import Image from "next/image";

export default function ArticleFeatureImage(props) {
  //PROBLEM: how to get photo to work.... may need internet connection...? 
    return (
      <div className="w-full flex justify-center p-4">
        <Image
          className="flex w-[80%] mt-4 "
          style={{ boxShadow: "10px 10px 15px #99CED3" }}
          src={props.photoFeature}
          alt={props.photoFeatureAlt}
        />
      </div>
    );}