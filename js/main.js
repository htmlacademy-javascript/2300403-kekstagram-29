const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Алексей',
  'Екатерина',
  'Иван',
  'Николай',
  'Татьяна',
  'Сергей',
  'Варвара',
  'Леонид',
  'Виктория',
  'Анна',
];

const DESCRIPTIONS = [
  'Полевые маки в ярких оттенках',
  'Тропический пляж с белым песком',
  'Природный водопад с пением воды',
  'Городская скульптура на фоне неба',
  'Солнечный закат на горизонте',
  'Старинная архитектура в историческом центре',
  'Заснеженные вершины гор',
  'Разноцветные лодки на озере',
  'Взлетающий шар в небе',
  'Причудливые облака на закате',
  'Водопад с облачным дождем',
  'Закат на горном хребте',
  'Цветущие сакуры в парке',
  'Мощный вулкан с извержением',
  'Магическая полярная сияние',
  'Раскаты грома над океаном',
  'Пасторальная деревня с зелеными полями',
  'Грандиозный фейерверк ночью',
  'Загадочный лес с пышной растительностью',
  'Искусственное озеро с парящими лебедями',
  'Солнечный закат над пустыней',
  'Расцветающий сад с яркими цветами',
  'Кристально чистая горная река',
  'Архитектурное чудо в историческом центре',
  'Панорамный вид на океан'
];

// Функция по получению случайного числа из диапазона
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Функция получения случайного не повторяющегося числа из диапозона
const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

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


const similarDescriptions = Array.from({length: 25}, photoDescription);

similarDescriptions;

// Генерация данных: console.log(similarDescriptions);
