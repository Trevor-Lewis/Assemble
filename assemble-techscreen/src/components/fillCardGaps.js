function fillCardGaps(cardNumber, gaps) {
    return [...gaps, cardNumber.length]
      .map((val, key) => {
        const prevGap = key === 0 ? 0 : gaps[key - 1];
        return cardNumber.replace(/\s/g, "").substring(prevGap, val);
      })
      .join(" ")
      .replace(/ *$/, "");
  }
  
  export default fillCardGaps;