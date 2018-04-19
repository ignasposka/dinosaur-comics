const initWrapper = () => {
  let ctx;
  let image;
  const limitWidth = 700;
  let buildImageButton = document.querySelector("#build-img-btn");

  const textFill = (ctx, textBox, x, y) => {
    const lineCount = textBox.rows;
    let lineLength = textBox.cols;
    const lines = textToLines(textBox.value, lineLength, lineCount);
    const lineHeight = 16;

    lines.forEach(line => ctx.fillText(line, x, (y += lineHeight)));
  };

  const textToLines = (text, lineLength, maxLineNumber) => {
    let start = 0;
    let lineCount = Math.min(Math.ceil(text.length / lineLength), maxLineNumber);
    let lines = [];
    for (let i = 0; i < lineCount; i++) {
      let line = text.substring(start, (i + 1) * lineLength);
      if (text.indexOf((i + 1) * lineLength) + 1) {
        let cutTo = line.lastIndexOf(" ");
        start += cutTo;
        line = line.substring(0, cutTo);
      } else {
        start += lineLength;
      }
      lines.push(line.charAt(0) != " " ? line : line.substring(1));
    }
    return lines;
  };
  return {
    textAreaHandler: e => {
      let classList = e.target.classList;
      if (e.target.value) {
        if (!classList.contains("invisible")) {
          classList.add("invisible");
        }
      } else if (classList.contains("invisible")) classList.remove("invisible");
    },
    setUpCanvas: () => {
      let canvas = document.querySelector("canvas");
      ctx = canvas.getContext("2d");
      image = document.querySelector("img");
      canvas.width = image.width;
      canvas.crossOrigin = "Anonymous";
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      ctx.font =
        window.innerWidth < limitWidth
          ? "2vw Lucida Console"
          : "13.3333px Lucida Console";
    },
    buildImage: () => {
      let textbox1 = document.querySelector(".text-input-1");
      let textbox2 = document.querySelector(".text-input-2");
      let textbox3 = document.querySelector(".text-input-3");
      let imgWidth = document.querySelector("#canvas").width;
      let imgHeight = document.querySelector("#canvas").height;

      textFill(ctx, textbox1, imgWidth * 0.43, imgHeight * 0.16);
      textFill(ctx, textbox2, imgWidth * 0.55, imgHeight * 0.4);
      textFill(ctx, textbox3, imgWidth * 0.7, imgHeight * 0.05);
      image.classList.add("hidden");
      textbox1.classList.add("hidden");
      textbox2.classList.add("hidden");
      textbox3.classList.add("hidden");
      buildImageButton.classList.add("hidden");
    },
    reset: () => {
      let imgWidth = document.querySelector("#canvas").width;
      let imgHeight = document.querySelector("#canvas").height;
      let textInputs = document.querySelectorAll(".text-input");

      ctx.clearRect(
        imgWidth * 0.43,
        imgHeight * 0.1,
        imgWidth * 0.25,
        imgHeight * 0.3
      );
      ctx.clearRect(
        imgWidth * 0.55,
        imgHeight * 0.35,
        imgWidth * 0.25,
        imgHeight * 0.25
      );
      ctx.clearRect(
        imgWidth * 0.7,
        imgHeight * 0.02,
        imgWidth * 0.25,
        imgHeight * 0.2
      );
      textInputs.forEach(input => {
        input.classList.remove("hidden", "invisible");
        input.value = "";
      });
      buildImageButton.classList.remove("hidden");
    }
  };
};

(() => {
  let wrapper = initWrapper();
  let textAreas = document.querySelectorAll("textarea");
  let buildImageButton = document.querySelector("#build-img-btn");
  let createNewButton = document.querySelector("#create-new-btn");

  textAreas.forEach(ta =>
    ta.addEventListener("input", wrapper.textAreaHandler)
  );
  wrapper.setUpCanvas();
  buildImageButton.addEventListener("click", wrapper.buildImage);
  createNewButton.addEventListener("click", wrapper.reset);
})();
