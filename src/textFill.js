import textToLines from './textToLines';

const textFill = (ctx, textBox, x, y) => {
  const lineCount = textBox.rows;
  let lineLength = textBox.cols;
  const lines = textToLines(textBox.value, lineLength, lineCount);
  const lineHeight = 16;

  lines.forEach(line => ctx.fillText(line, x, (y += lineHeight)));
};

export default textFill;
