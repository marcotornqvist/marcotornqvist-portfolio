const yourString = "The quick brown fox jumps over the lazy dog"; //replace with your string.
const maxLength = 6; // maximum number of characters to extract

// trim the string to the maximum length
const trimmedString = yourString.substring(0, maxLength);

// re-trim if we are in the middle of a word
export default truncateText = trimmedString.substring(
  0,
  Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
);
