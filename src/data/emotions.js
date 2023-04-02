export const emotions = [
  { name: "emotion1", color: "#64c964" },
  { name: "emotion2", color: "#9dd772" },
  { name: "emotion3", color: "#fdce17" },
  { name: "emotion4", color: "#fd8446" },
  { name: "emotion5", color: "#fd565f" },
];

export const emotionList = [
  {
    emotion_id: 1,
    emotion_img : process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_descript: '완전 좋음'
  },
  {
    emotion_id: 2,
    emotion_img : process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_descript: '좋음'
  },
  {
    emotion_id: 3,
    emotion_img : process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_descript: '그럭저럭'
  },
  {
    emotion_id: 4,
    emotion_img : process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_descript: '나쁨'
  },
  {
    emotion_id: 5,
    emotion_img : process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_descript: '끔찍함'
  }
]