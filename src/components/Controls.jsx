import {Slider, Select, MenuItem} from "@mui/material";

const Controls = ({ onGenerate, onSort, setSize, size, onAlgoSelect }) => {
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
      <select onChange={onAlgoSelect} className="AlgoSelect">
        <option value="bub">Bubble Sort</option>
        <option value="sel">Selectin Sort</option>
      </select>
      <button onClick={onGenerate}>Generate</button>
      <button onClick={onSort}>Sort!</button>
    </div>
  );
};

export default Controls;
