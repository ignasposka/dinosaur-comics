const textToLines = (text, lineLength, maxLineNumber) => {
  let start = 0;
  let lineCount = Math.min(Math.ceil(text.length / lineLength), maxLineNumber);
  let lines = [];
  for (let i = 0; i < lineCount; i++) {
    let line = text.substring(start, start + lineLength);
    if (
      line.indexOf(' ') != -1 &&
      i < lineCount - 1 &&
      text[(i + 1) * lineLength] != ' '
    ) {
      let cutTo = line.lastIndexOf(' ');
      start += cutTo;
      line = line.substring(0, cutTo);
    } else {
      start += lineLength;
    }
    lines.push(line.charAt(0) != ' ' ? line : line.substring(1));
  }
  return lines;
};

export default textToLines;
