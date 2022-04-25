const divideAndSort = (num) => {
  if (typeof num !== "number") {
    console.log("input data dengan tipe data Number");
  } else {
    const numStr = num.toString().split("0");
    const numMap = numStr
      .map((item) =>
        item
          .split("")
          .sort((a, b) => a - b)
          .join("")
      )
      .join("");
    const numHasil = parseInt(numMap);
    console.log(numHasil);
    // console.log(numStr);
  }
};

divideAndSort(5956560159466056);
