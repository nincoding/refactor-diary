const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
}

export default getStringDate;