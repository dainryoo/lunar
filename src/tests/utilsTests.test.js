const {
	getLunarDate,
  getSolarDate,
  isValidDate
} = require("../data/utils.js");

test('isValidDate functionality', () => {
  expect(isValidDate()).toBe(false);
  expect(isValidDate(undefined)).toBe(false);
  expect(isValidDate(null)).toBe(false);
});

test('getLunarDate functionality', () => {
  // https://www.hko.gov.hk/en/gts/time/conversion.htm
  // Lunar day of 2/23 in 1969 should be Apr 9th on the solar calendar
  // Lunar day of 2/23 in 2011 should be Mar 27th on the solar calendar
});
