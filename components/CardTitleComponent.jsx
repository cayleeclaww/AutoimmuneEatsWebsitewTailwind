export default function CardTitle(props) {
  return (
    <>
      <div className="w-full mt-24">
        <p
          className="text-4xl md:text-6xl pl-6 pb-2 lowercase"
          style={{ textShadow: "3px 3px 3px #99CED3" }}
        >
          {props.children}
        </p>
      </div>
    </>
  );
}
