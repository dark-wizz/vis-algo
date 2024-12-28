import Bar from "./Bar";

const Canvas = ({ heights, bars }) => {
  return (
    <div className="canvas">
      <div className="wrapper">
        {heights.map((h, i) => {
          return <Bar key={i} h={h} ref={bars[i]} />;
        })}
      </div>
    </div>
  );
};

export default Canvas;
