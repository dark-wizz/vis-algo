import { xFromTranslate } from "./funcs";
import { bubbleSort, selectionSort } from "./sort";

export const bubbleSortAnim = async (arr, animate, scope) => {
  const steps = bubbleSort(arr);
  for (let step of steps) {
    let ctrl = animate(`.b${step[0]}`, {
      y: "-2em",
      backgroundColor: "purple",
    });
    ctrl = animate(`.b${step[1]}`, {
      y: "-2em",
      backgroundColor: "purple",
    });
    await ctrl;
    ctrl = animate(`.b${step[0]}`, {
      y: 0,
      backgroundColor: "pink",
    });
    ctrl = animate(`.b${[step[1]]}`, {
      y: 0,
      backgroundColor: "pink",
    });
    await ctrl;
    if (step[2]) {
      await swapAnim(animate, scope, step[0], step[1]);
    }
  }
};
export const selSortAnim = async (arr, animate, scope) => {
  const steps = selectionSort(arr);
  for (let step of steps) {
    if (step[3]) {
      await swapAnim(animate, scope, step[0], step[2]);
      continue;
    }
    animate(`.b${step[2]}`, {
      backgroundColor: "red",
    });
    await animate(`.b${step[1]}`, {
      y: "-2em",
      backgroundColor: "purple",
    });
    await animate(`.b${step[1]}`, {
      y: 0,
      backgroundColor: "pink",
    });
    animate(`.b${step[2]}`, {
      backgroundColor: "pink",
    });
  }
};
async function swapAnim(animate, scope, i1, i2) {
  let b1 = scope.current.querySelector(`.b${i1}`);
  let b2 = scope.current.querySelector(`.b${i2}`);

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
  b1.classList.replace(`b${i1}`, `b${i2}`);
  b2.classList.replace(`b${i2}`, `b${i1}`);
}
