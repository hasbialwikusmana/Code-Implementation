const divideAndSort = (num) => {
  if (typeof num !== "number") {
    console.log("input data dengan tipe data Number");
  } else {
    const numStr = num.toString().split("0");
    const numMap = numStr.map((e) => e.split("").sort().join(""));
    console.log(parseInt(numMap.join("")));
    console.log(numMap);
  }
};

divideAndSort(5956560159466056);
