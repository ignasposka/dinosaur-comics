const initWrapper = () => {
  let ctx;
  let image;
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
      ctx.font = "2vw monospace";
    },
    buildImage: () => {
      let textbox1 = document.querySelector(".text-input-1");
      let textbox2 = document.querySelector(".text-input-2");
      let textbox3 = document.querySelector(".text-input-3");
      let imgWidth = document.querySelector('#canvas').width;
      let imgHeight = document.querySelector('#canvas').height;
      
      ctx.fillText(textbox1.value, imgWidth * 0.43, imgHeight * 0.16);
      ctx.fillText(textbox2.value, imgWidth * 0.55, imgHeight * 0.40);  
      ctx.fillText(textbox3.value, imgWidth * 0.70, imgHeight * 0.05);                
      image.classList.add("hidden");
      textbox1.classList.add('hidden');
      textbox2.classList.add("hidden");
      textbox3.classList.add("hidden");
    }
  };
};

(() => {
  let wrapper = initWrapper();
  let textAreas = document.querySelectorAll("textarea");
  textAreas.forEach(ta =>
    ta.addEventListener("input", wrapper.textAreaHandler)
  );
  wrapper.setUpCanvas();
  let buildImageButton = document.querySelector("#build-img-btn");
  buildImageButton.addEventListener("click", wrapper.buildImage);
})();
