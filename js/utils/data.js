
import {getRandom} from './util.js';

const USER_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const USER_NAMES = ['Катя', 'Оля', 'Дима', 'Игорь', 'Наташа', 'Вася', 'Оксана', 'Тимур'];


// функция, возвращающая случайный элемент из массива
const getRandomElement = (array) => array[getRandom(0, array.length - 1)];

const generatedIds = new Set();
const generateCommentId = () => {
  let id = getRandom(1, 1000);
  while (generatedIds.has(id)) {
    id = getRandom(1, 1000);
  }
  generatedIds.add(id);
  return id;
};

// Выношу генерацию 1 комментария в отдельную функцию
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandom(1, 6)}.svg`,
  message: `${getRandomElement(USER_COMMENTS)} ${getRandomElement(USER_COMMENTS)}`,
  name: getRandomElement(USER_NAMES),
});

//Функция для генерации массива комментариев случайной длины
const createComments = () => {
  const quantity = getRandom(1, 10); //Генерируем случайное количество комментариев (1-10)

  // Вместо массива можно добавить функционального программирования.
  return Array(quantity).fill(null).map(() => createComment());
};

// Функция для генерации поста, id я передаю параметром
const createPost = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: 'Одна из моих любимых фотографий',
  likes: getRandom(15, 200),
  comments: createComments(),
});

// Генерация всех записей. В данной записи i - это номер итерации
const createPosts = (quantity) => Array(quantity).fill(null).map((item, i) => createPost(i + 1));

export {
  createPosts
};
