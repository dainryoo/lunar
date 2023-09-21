const dates = require("./dates.json");

const getSolarDate = (lunarDate) => {
  if (!this.isValidDate(lunarDate)) {
    return false;
  }
  return true;
}

const getLunarDate = (solarDate) => {
  if (!this.isValidDate(solarDate)) {
    return false;
  }
  return true;
}

const isValidDate = (date) => {
  if (!date) {
    return false;
  }
  return true;
}


module.exports = {
  getSolarDate,
  getLunarDate,
  isValidDate
};