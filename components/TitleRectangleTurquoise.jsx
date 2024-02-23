// Generates turquoise background strip behind main titles 

export default function TitleRectangleTurquoise(props) {
  return (
    <div className="bg-turquoise w-full md:w-4/5 h-48 mb-10 flex justify-center items-center">
      <h1
        className="hidden md:block text-3xl text-center pr-8"
        style={{ paddingLeft: "25%" }}
      >
        {props.children}
      </h1>
      <h1 className="text-2xl text-center px-8 md:hidden">
        {props.children}
      </h1>
    </div>
  );
}
