import Canvas from "./Canvas";
import Controls from "./Controls";
import { createRef, useEffect, useRef, useState } from "react";
import { genRandArray } from "../utils/funcs";
import { bubbleSortAnim, selSortAnim } from "../utils/anims";
const Sort = () => {
  const [heights, setHeights] = useState([]);
  const [size, setSize] = useState(10);
  const [renderKey, setRenderKey] = useState(0);
  const bars = useRef([]);
  useEffect(() => {
    bars.current = Array(size)
      .fill(0)
      .map((_, i) => createRef());
    generate();
  }, [size]);
  const generate = () => {
    setHeights(genRandArray(size, 5, 20));
    setRenderKey((prev) => prev + 1);
  };
  const sort = () => {
    bubbleSortAnim(heights, bars.current);
  };
  return (
    <div className="sort">
      <Controls
        onSort={sort}
        onGenerate={generate}
        setSize={setSize}
        size={size}
      />
      <Canvas heights={heights} bars={bars.current} key={renderKey} />
    </div>
  );
};

export default Sort;
