import textFill from './textFill';

const buildImage = (ctx, buildImageButton) => {
  let image = document.querySelector('img');
  let textbox1 = document.querySelector('.text-input-1');
  let textbox2 = document.querySelector('.text-input-2');
  let textbox3 = document.querySelector('.text-input-3');
  let imgWidth = document.querySelector('#canvas').width;
  let imgHeight = document.querySelector('#canvas').height;

  textFill(ctx, textbox1, imgWidth * 0.43, imgHeight * 0.16);
  textFill(ctx, textbox2, imgWidth * 0.55, imgHeight * 0.4);
  textFill(ctx, textbox3, imgWidth * 0.7, imgHeight * 0.05);
  image.classList.add('hidden');
  textbox1.classList.add('hidden');
  textbox2.classList.add('hidden');
  textbox3.classList.add('hidden');
  buildImageButton.classList.add('hidden');
};

export default buildImage;
