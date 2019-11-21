const formatDates = objArray => {
  return objArray.map(obj => {
    let newObj = { ...obj };
    let newDate = newObj.created_at
      .split("")
      .splice(0, 10)
      .join("");
    let newTime = newObj.created_at
      .split("")
      .splice(11, 8)
      .join("");
    newObj.created_at = `${newDate} ${newTime}`;
    return newObj;
  });
};

export default formatDates;
