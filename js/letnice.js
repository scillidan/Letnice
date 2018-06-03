function Year()
{
  let base = document.body;

  let year = new Date().getFullYear();

  const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
  ];
  
  const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday" 
  ]

  // let leap = new Date(year, 1, 29).getDate() === 29;
  // let days = leap ? 366 : 365;
  // let cell = parseInt((base.getBoundingClientRect().width - 52*2)/52);

  let week = 0;
  let count = 1;
  let month = 0;

  let style = "day";

  // make grid
  // while(week < 52)
  // {
  //   let x = parseInt(week * (cell+2));
  //   let day = 0;
  //   while(day < 7)
  //   {
  //     let y = parseInt(day * (cell+2))
  //     count++;
  //     base.innerHTML += `<rect class='day' x='${x}' y='${y}' title='${count}' width='${cell}' height='${cell}' rx="2" ry="2" onclick=""></rect>`;
  //     day += 1
  //   }
  //   week += 1
  // }

//  let i = 0;
//   while(month < 12)
//   {
//     let day = 0;
//     let x = 0;
//     while(day < new Date(year, month).monthDays(month))
//     {
//       if(i === 7)
//       {
//         week++
//         i=0
//       }
//       day++;
//       i++
//       count++;
//       let y = parseInt(count * (cell+1));
//       console.log(count + ", M" + month + ", W" + week + ", D" + day);
//       base.innerHTML += `<rect class='${CheckDay(year, month, day)}' x='${x}' y='${y}' title='${count}' width='${cell}' height='${cell}' rx="2" ry="2" onclick=""></rect>`;
//     }
//     month++;
//   }
// }

    //start container
    //add month text
      //mtwtfss
        //start comparing date with weekdays
          //start iterating through days from a match until month is over

  while(month < 12)
  {
    base.innerHTML += `
      <div class="month">
      <span class="m" x="" y='${month * 140}' dy="10">${monthNames[new Date(year, month).getMonth()].substr(0,1)}</span>
      <svg class="graph">
      ${doweeks()}
      </svg></div>
      `
    month++
  }

  function doweeks()
  {
    let html = "";
    let y = 0;

    while(week<7)
    {
      y += week * 20;
      html += `<text class="w" x="10" y='${y}' dy="10">${dayNames[new Date(year, month, week).getDay()].substr(0,1)}</text>`
      week++
      count++
    }
    week = 0;
    return html;
  }
}



Date.prototype.getMonthName = function()
{
  return this.monthNames[this.getMonth()]
}

function constructWeekLabels(w)
{
  let i = "";
  switch(w){
    case 0: i="M";break; case 1: i="T";break; case 2: i="W";break; case 3: i="T";break; case 4: i="F";break; case 5: i="S";break; case 6: i="S";
  }
  return i;
}
  
  // while(count <= days)
  // {
  //   t = new Date(year, month, count)
  //   let x = cell;
  //   let y = parseInt(count * (cell+2));
    
  //   console.log(t);

  //   base.innerHTML += `<rect class='${CheckDay(t)}' x='${x}' y='${y}' title='${count}' width='${cell}' height='${cell}' rx="2" ry="2" onclick=""></rect>`;
  //   count++;
  // }

  // function CheckDay(day)
  // {
  //   switch(day.getDay())
  //   {
  //     case 0:
  //       style = "weekend";
  //       break;
  //     case 6:
  //       style = "weekend";
  //       break;
  //     default:
  //       style = "day";
  //   }
  //   return style;
  // }