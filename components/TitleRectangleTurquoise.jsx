export default function TitleRectangleTurquoise( props ) {
  return (
    <div className="relative w-full h-48 mb-10">
      <div className="absolute bg-turquoise h-full w-full md:w-4/5 block"></div>
      <h1 className="absolute w-full text-2xl md:text-3xl flex justify-center pt-16 pl-6 z-10">
        {props.children}
      </h1>
    </div>
  );
}
