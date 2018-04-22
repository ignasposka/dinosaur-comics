import buildImage from "./buildImage";

const initWrapper = () => {
  let ctx;
  let image;
  const limitWidth = 700;
  let buildImageButton = document.querySelector("#build-img-btn");

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
    buildImage: () => buildImage(ctx, buildImageButton, image),
    returnBack: (e, toEdit = false) => {
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
        if (toEdit) {
          input.classList.remove("hidden");
        } else {
          input.classList.remove("hidden", "invisible");
          input.value = "";
        }
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
  let editButton = document.querySelector("#edit-btn");

  textAreas.forEach(ta =>
    ta.addEventListener("input", wrapper.textAreaHandler)
  );
  wrapper.setUpCanvas();
  buildImageButton.addEventListener("click", wrapper.buildImage);
  createNewButton.addEventListener("click", wrapper.returnBack);
  editButton.addEventListener("click", e => wrapper.returnBack(e, true));
})();
