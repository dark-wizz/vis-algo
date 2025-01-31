import Canvas from "./Canvas";
import Controls from "./Controls";
import { useEffect, useState } from "react";
import { genRandArray } from "../utils/funcs";
import { bubbleSortAnim, selSortAnim } from "../utils/anims";
import { useAnimate } from "motion/react";

const Sort = () => {
  const [heights, setHeights] = useState([]);
  const [size, setSize] = useState(10);
  const [renderKey, setRenderKey] = useState(0);
  const [barsRef, animate] = useAnimate();
  const [algo, setAlgo] = useState("bub");
  useEffect(() => {
    generate();
  }, [size]);
  const generate = () => {
    setHeights(genRandArray(size, 5, 20));
    setRenderKey((prev) => prev + 1);
  };
  const sort = () => {
    switch (algo) {
      case "bub":
        bubbleSortAnim(heights, animate, barsRef);
        break;
      case "sel":
        selSortAnim(heights, animate, barsRef);
        break;
      default:
        console.error("selecting sort gone wrong!");
    }
  };
  const changeAlgo = (event) => {
    setAlgo(event.target.value);
    setRenderKey((prev) => prev + 1);
  };
  return (
    <div className="sort">
      <Controls
        onSort={sort}
        onGenerate={generate}
        setSize={setSize}
        size={size}
        onAlgoSelect={changeAlgo}
      />
      <Canvas heights={heights} barsRef={barsRef} key={renderKey} />
    </div>
  );
};

export default Sort;
