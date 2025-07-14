import "./index.css";

export default function TextRotation({ text, radius, fontSize, pathToImg }) {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          margin: "20px",
          fontSize: fontSize,
        }}
      >
        <div
          className="logo"
          style={{ backgroundImage: `url(${pathToImg})` }}
        ></div>
        <div
          className="text"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            fontSize: fontSize,
          }}
        >
          {text.split("").map((letter, idx) => {
            const angle = (360 * idx) / text.length;
            const rad = (angle * Math.PI) / 180;
            const x = radius + radius * Math.cos(rad);
            const y = radius + radius * Math.sin(rad);

            return (
              <span
                key={idx}
                style={{
                  position: "absolute",
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) rotate(${angle + 90}deg)`,
                  transformOrigin: "center",
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
