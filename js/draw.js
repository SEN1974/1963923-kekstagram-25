const photosElement = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const drawPhotos = (photos) => {
  const photosFragment = document.createDocumentFragment();
  photos.forEach(({url, likes, comments}) => {
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photosFragment.appendChild(photoElement);
  });
  photosElement.appendChild(photosFragment);
};

export{drawPhotos};
