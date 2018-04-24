const returnBack = (toEdit, ctx, buildImageButton) => {
  let imgWidth = document.querySelector('#canvas').width;
  let imgHeight = document.querySelector('#canvas').height;
  let textInputs = document.querySelectorAll('.text-input');

  ctx.fillStyle = '#ffffff';

  ctx.fillRect(
    imgWidth * 0.43,
    imgHeight * 0.1,
    imgWidth * 0.25,
    imgHeight * 0.3
  );
  ctx.fillRect(
    imgWidth * 0.55,
    imgHeight * 0.35,
    imgWidth * 0.25,
    imgHeight * 0.25
  );
  ctx.fillRect(
    imgWidth * 0.7,
    imgHeight * 0.02,
    imgWidth * 0.25,
    imgHeight * 0.2
  );

  ctx.fillStyle = '#000000';
  textInputs.forEach(input => {
    if (toEdit) {
      input.classList.remove('hidden');
    } else {
      input.classList.remove('hidden', 'invisible');
      input.value = '';
    }
  });
  buildImageButton.classList.remove('hidden');
};

export default returnBack;
