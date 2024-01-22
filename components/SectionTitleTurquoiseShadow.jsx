export default function SectionTitleTurquoiseShadow(props) {
  return (
    <>
      <div className="w-full mt-24">
        <p
          className="text-4xl md:text-6xl px-6 pb-2 lowercase"
          style={{ textShadow: "3px 3px 3px #99CED3" }}
        >
          {props.children}
        </p>
      </div>
    </>
  );
}
