import { INIT, CREATE, REMOVE, EDIT } from '../constants/actionTypes';

export const initDiary = (diaryList) => ({
  type: INIT,
  data: diaryList
});

export const createDiary = (date, content, emotion, dataId) => ({
  type: CREATE,
  data: {
    id: dataId,
    date: new Date(date).getTime(),
    content,
    emotion,
    },
});

export const removeDiary = (targetId) => ({
  type: REMOVE,
  targetId,
});

export const editDiary = (targetId, date, content, emotion) => ({
  type: EDIT,
  data: {
    id : targetId,
    date: new Date(date).getTime(),
    content,
    emotion,
  }
})