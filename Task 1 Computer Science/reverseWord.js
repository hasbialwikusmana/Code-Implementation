const reverseWord = (str) => {
  if (typeof str !== "string" || str === "") {
    console.log("Data tidak valid");
  } else {
    const result = str.split(" ").reverse().join(" ");
    console.log(result);
  }
};
reverseWord("");
