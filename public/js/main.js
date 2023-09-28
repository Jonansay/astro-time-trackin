
document.addEventListener("DOMContentLoaded", () => {
    const select = (param) => document.querySelector(param);

    const selecta = (param) => document.querySelectorAll(param);

    const iconElipsis = selecta(".item__icon-elipsis");

    const daily = select("#daily");

    const weekly = select("#weekly");

    const monthly = select("#monthly");

    const subjectsArray = selecta(".item__subject");

    const arrayHoursText = document.querySelectorAll(".hours__text-hrs");
  

    const lastHoursArray = document.querySelectorAll(".hours__l-w-hours-span");

    const url = "../data.json";
    // let finalData = "";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        

        daily.addEventListener("click", () => {
          monthly.classList.toggle("active", false);
          weekly.classList.toggle("active", false);
          daily.classList.toggle("active");
          for (let i = 0; i <= 5; i++) {
            subjectsArray[i].innerHTML = data[i].title;
            arrayHoursText[i].innerHTML = data[i].timeframes.daily.current;
            lastHoursArray[i].innerHTML = data[i].timeframes.daily.previous;
          }
        });

        weekly.addEventListener("click", () => {
          daily.classList.toggle("active", false);
          monthly.classList.toggle("active", false);
          weekly.classList.toggle("active");
          for (let i = 0; i <= 5; i++) {
            subjectsArray[i].innerHTML = data[i].title;
            arrayHoursText[i].innerHTML = data[i].timeframes.weekly.current;
            lastHoursArray[i].innerHTML = data[i].timeframes.weekly.previous;
          }
        });

        monthly.addEventListener("click", () => {
          daily.classList.toggle("active", false);
          weekly.classList.toggle("active", false);
          monthly.classList.toggle("active");
          for (let i = 0; i <= 5; i++) {
            subjectsArray[i].innerHTML = data[i].title;
            arrayHoursText[i].innerHTML = data[i].timeframes.monthly.current;
            lastHoursArray[i].innerHTML = data[i].timeframes.monthly.previous;
          }
        });
      });
  });



