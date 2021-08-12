const today = new Date();
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  
const sorter = (whole, monday, tuesday, wednesday, thursday, friday, saturday, sunday, todayList, tomorrowList, doneList, challengeList) => {
    const d = new Date(whole);
    
  const dayName = days[d.getDay()];
  
    whole.map(part => {
      if (!part.done) {
        if (dayName) {
          if (
            today.getFullYear() === new Date(Date.parse(part.time)).getFullYear() &&
            today.getMonth() === new Date(Date.parse(part.time)).getMonth() &&
            today.getDay() === new Date(Date.parse(part.time)).getDay()
          ) {
            todayList.unshift(part);//.sort((a, b) => b.time - a.time);
          }
          if (
            tomorrow.getFullYear() === new Date(Date.parse(part.time)).getFullYear() &&
            tomorrow.getMonth() === new Date(Date.parse(part.time)).getMonth() &&
            tomorrow.getDay() === new Date(Date.parse(part.time)).getDay()
          ) {
            tomorrowList.unshift(part);
          }
        } else {
          challengeList.unshift(part);
        }
      } else {
        doneList.unshift(part);
      }
      return { todayList, tomorrowList, doneList, challengeList };
    });
  todayList.sort((a, b) => a.time > b.time ? 1 : -1);
  tomorrowList.sort((a, b) => a.time > b.time ? 1 : -1);
  challengeList.sort((a, b) => a.time > b.time ? 1 : -1);
  doneList.sort((a, b) => a.time > b.time ? 1 : -1);
};

export default sorter;