// create palindrome for

const palindrome = (str) => {
  if (typeof str !== "string" || str === "") {
    console.log("Data tidak valid");
  } else {
    const toLower = str.toLowerCase();
    const textPalindrome = toLower.split("").reverse().join("");
    if (toLower === textPalindrome) {
      console.log(`${toLower} adalah palindrome`);
    } else {
      console.log(`${toLower} bukan palindrome`);
    }
  }
};

palindrome("kasur rusak");
