const initWrapper = () => {
  let ctx;
  let image;
  const limitWidth = 700;
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
      ctx.font = window.innerWidth < limitWidth ? "2vw Lucida Console" : "13.3333px Lucida Console";
    },
    buildImage: () => {
      let textbox1 = document.querySelector(".text-input-1");
      let textbox2 = document.querySelector(".text-input-2");
      let textbox3 = document.querySelector(".text-input-3");
      let imgWidth = document.querySelector('#canvas').width;
      let imgHeight = document.querySelector('#canvas').height;
      let buildImageButton = document.querySelector("#build-img-btn");
      
      ctx.fillText(textbox1.value, imgWidth * 0.43, imgHeight * 0.16);
      ctx.fillText(textbox2.value, imgWidth * 0.55, imgHeight * 0.40);  
      ctx.fillText(textbox3.value, imgWidth * 0.70, imgHeight * 0.05);                
      image.classList.add("hidden");
      textbox1.classList.add('hidden');
      textbox2.classList.add("hidden");
      textbox3.classList.add("hidden");
      buildImageButton.classList.add('hidden');
    },
    reset: () => {
      let imgWidth = document.querySelector('#canvas').width;
      let imgHeight = document.querySelector('#canvas').height;

      ctx.clearRect(imgWidth * 0.43, imgHeight * 0.10, imgWidth * 0.25, imgHeight * 0.1);
      ctx.clearRect(imgWidth * 0.55, imgHeight * 0.35, imgWidth * 0.25, imgHeight * 0.1);
      ctx.clearRect(imgWidth * 0.70, imgHeight * 0.02, imgWidth * 0.25, imgHeight * 0.1);      
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
  createNewButton.addEventListener('click', wrapper.reset);
})();
