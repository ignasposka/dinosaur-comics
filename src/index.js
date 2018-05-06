import buildImage from './buildImage';
import returnBack from './returnBack';
import textAreaHandler from './textAreaHandler';

const initWrapper = () => {
  const limitWidth = 700;
  let buildImageButton = document.querySelector('#build-img-btn');
  let canvas = document.querySelector('canvas');
  let ctx = canvas.getContext('2d');
  let imageSrc = document.querySelector('img').src;
  let image = new Image();
  image.src = imageSrc;

  image.onload = () => {
    canvas.width = image.width;
    canvas.crossOrigin = 'Anonymous';
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };
  ctx.font =
    window.innerWidth < limitWidth
      ? '2vw Lucida Console'
      : '13.3333px Lucida Console';

  return {
    buildImage: () => buildImage(ctx, buildImageButton),
    returnBack: (e, toEdit = false) =>
      returnBack(toEdit, ctx, buildImageButton),
    textAreasDelegate: e => {
      if (e.target.classList.contains('text-input')) {
        textAreaHandler(e);
      }
    }
  };
};

(() => {
  let wrapper = initWrapper();
  let textAreas = document.querySelector('#text-areas');
  let buildImageButton = document.querySelector('#build-img-btn');
  let createNewButton = document.querySelector('#create-new-btn');
  let editButton = document.querySelector('#edit-btn');

  textAreas.addEventListener('input', wrapper.textAreasDelegate);
  buildImageButton.addEventListener('click', wrapper.buildImage);
  createNewButton.addEventListener('click', wrapper.returnBack);
  editButton.addEventListener('click', e => wrapper.returnBack(e, true));
})();
