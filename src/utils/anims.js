import { animate } from "motion/react";
import { xFromTranslate } from "./funcs";
import { bubbleSort, selectionSort } from "./sort";

export const bubbleSortAnim = async (arr, bars) => {
  const steps = bubbleSort(arr);
  for (let step of steps) {
    let ctrl = animate(bars[step[0]].current, {
      y: "-2em",
      backgroundColor: "purple",
    });
    ctrl = animate(bars[step[1]].current, {
      y: "-2em",
      backgroundColor: "purple",
    });
    await ctrl;
    ctrl = animate(bars[step[0]].current, {
      y: 0,
      backgroundColor: "pink",
    });
    ctrl = animate(bars[step[1]].current, {
      y: 0,
      backgroundColor: "pink",
    });
    await ctrl;
    if (step[2]) {
      await swapAnim(bars, step[0], step[1]);
    }
  }
};
export const selSortAnim = async (arr, bars) => {
  const steps = selectionSort(arr);
  console.log(steps);
  for (let step of steps) {
    if (step[3]) {
      await swapAnim(bars, step[0], step[2]);
      continue;
    }
    animate(bars[step[2]].current, {
      backgroundColor: "red",
    });
    await animate(bars[step[1]].current, {
      y: "-2em",
      backgroundColor: "purple",
    });
    await animate(bars[step[1]].current, {
      y: 0,
      backgroundColor: "pink",
    });

    animate(bars[step[2]].current, {
      backgroundColor: "pink",
    });
  }
};
async function swapAnim(bars, i1, i2) {
  let b1 = bars[i1].current;
  let b2 = bars[i2].current;

  let x1 = xFromTranslate(b1.style.transform);
  let x2 = xFromTranslate(b2.style.transform);
  const distance = i2 - i1;

  animate(
    b1,
    {
      x: `${x1 + distance * 2}em`,
      backgroundColor: ["#008000", "#ffc0cb"],
    },
    {
      backgroundColor: { times: [0.9, 1] },
    },
  );
  await animate(
    b2,
    {
      x: `${x2 - distance * 2}em`,
      backgroundColor: ["#008000", "#ffc0cb"],
    },
    {
      backgroundColor: { times: [0.9, 1] },
    },
  );
  let temp = bars[i1];
  bars[i1] = bars[i2];

  bars[i2] = temp;
}
