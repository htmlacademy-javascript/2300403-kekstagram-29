import {getRandomInteger, createRandomIdFromRangeGenerator} from './randomizers.js';
import {COMMENTS, NAMES, DESCRIPTIONS} from './data.js';

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generateUrl = createRandomIdFromRangeGenerator(1, 25);
const generateCommentId = createRandomIdFromRangeGenerator(1, 750);

// Функция получения массива - описание фотографии
const photoDescription = function () {

  const randomDescription = getRandomInteger(0, DESCRIPTIONS.length - 1);
  const randomLikes = getRandomInteger(15, 200);
  const randomCommentsNumber = getRandomInteger(0, 30);

  // Получение массива comments
  const similarComments = function () {
    const randomComment = getRandomInteger(0, COMMENTS.length - 1);
    const randomAvatar = getRandomInteger(1, 6);
    const randomName = getRandomInteger(0, NAMES.length - 1);
    return {
      id: generateCommentId(),
      avatar: `img/avatar-${randomAvatar}.svg`,
      message: COMMENTS[randomComment],
      name: NAMES[randomName],
    };
  };

  const randomSimilarComments = Array.from({length: randomCommentsNumber}, similarComments);

  return {
    id: generatePhotoId(),
    url: `photos/${generateUrl()}.jpg`,
    description: DESCRIPTIONS[randomDescription],
    likes: randomLikes,
    comments: randomSimilarComments,
  };
};

const startGenerate = () => {
  const similarDescriptions = Array.from({length: 25}, photoDescription);
  return similarDescriptions;
};

export {startGenerate};
