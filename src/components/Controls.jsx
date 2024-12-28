import Slider from "@mui/material/Slider";
const Controls = ({ onGenerate, onSort, setSize, size }) => {
  const onSlide = (event, newValue) => {
    if (typeof newValue === "number") setSize(newValue);
  };
  return (
    <div className="controls">
      <Slider
        defaultValue={size}
        min={2}
        max={50}
        valueLabelDisplay="auto"
        onChange={onSlide}
      />
      <button onClick={onGenerate}>Generate</button>
      <button onClick={onSort}>Sort!</button>
    </div>
  );
};

export default Controls;
