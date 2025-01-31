import Bar from "./Bar";

const Canvas = ({ heights, barsRef }) => {
  return (
    <div className="canvas">
      <div className="wrapper bars" ref={barsRef}>
        {heights.map((h, i) => {
          return <Bar key={i} h={h} id={i} />;
        })}
      </div>
    </div>
  );
};

export default Canvas;
