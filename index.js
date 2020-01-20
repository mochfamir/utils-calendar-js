module.exports = (month, year) => {
  let date = new Date(year, month, 1);
  const days = [1];

  while (date.getMonth() === month) {
    date.setDate(date.getDate() + 1);

    if (date.getDate() !== 1) {
      days.push(date.getDate());
    }
  }

  date.setDate(date.getDate() - 1);

  if (date.getDay() < 6) {
    for (let i = date.getDay(); i < 6; i++) {
      date.setDate(date.getDate() + 1);
      days.push(date.getDate());
    }
  }

  date = new Date(year, month, 1);
  if (date.getDay() > 0) {
    for (let i = date.getDay(); i > 0; i--) {
      date.setDate(date.getDate() - 1);
      days.splice(0, 0, date.getDate());
    }
  }

  const result = [];
  let week = [];
  for (let i = 0; i < days.length; i++) {
    week.push(days[i]);

    if (week.length === 7) {
      result.push(week);
      week = [];
    }
  }

  return result;
}