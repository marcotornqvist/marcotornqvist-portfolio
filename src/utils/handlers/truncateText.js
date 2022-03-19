const truncateText = (str, maxLength) => {
  // trim the string to the maximum length
  let trimmedString = str.substring(0, maxLength);

  // re-trim if we are in the middle of a word
  trimmedString = trimmedString.substring(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );

  return trimmedString + "...";
};

export default truncateText;
