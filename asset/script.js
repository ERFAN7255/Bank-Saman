// clock //

const hourElem = document.querySelector("#hour");
const minuteElem = document.querySelector("#minute");
const secondElem = document.querySelector("#seconds");

setInterval(function () {
  let myDate = new Date();

  let nowHour = myDate.getHours();
  let nowMinute = myDate.getMinutes();
  let nowSecond = myDate.getSeconds();

  if (nowHour < 10) {
    nowHour = "0" + nowHour;
  }
  if (nowMinute < 10) {
    nowMinute = "0" + nowMinute;
  }
  if (nowSecond < 10) {
    nowSecond = "0" + nowSecond;
  }

  hourElem.innerHTML = nowHour;
  minuteElem.innerHTML = nowMinute;
  secondElem.innerHTML = nowSecond;
}, 1000);

// scrollBar

let customScroll = document.querySelector("#scroll");
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let documentHeight = document.body.clientHeight;
  let windowHeight = window.innerHeight;
  let scrollPercent = scrollTop / (documentHeight - windowHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  customScroll.style.width = scrollPercentRounded + "%";
});

// sticky navBar

let scrollShowNavBar = document.querySelector("#stickyNavBar");
let removeActiveLiBank = document.querySelector("#Bank");
document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 120) {
    scrollShowNavBar.classList.add("fixed-top");
    removeActiveLiBank.classList.remove("active");
  } else {
    scrollShowNavBar.classList.remove("fixed-top");
    removeActiveLiBank.classList.add("active");
  }
});

// Custom ContextMenu

let body = document.body;
let contextMenu = document.querySelector("#contextMenu");
body.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  if ((contextMenu.style.display = "none")) {
    contextMenu.style.display = "block";
    contextMenu.style.zIndex = "99";
    contextMenu.style.left = event.clientX + "px";
    contextMenu.style.top = event.clientY + "px";
  } else {
    contextMenu.style.display = "none";
    contextMenu.style.left = event.clientX + "px";
    contextMenu.style.top = event.clientY + "px";
  }
});
body.addEventListener("click", function () {
  contextMenu.style.display = "none";
});
body.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    contextMenu.style.display = "none";
  }
});
// change theme

const switchElement = document.querySelector('.switch')
switchElement.addEventListener('click', function () {
  document.body.classList.toggle('dark')
  if (document.body.className.includes('dark')) {
      localStorage.setItem('theme','dark')
    } else {
        localStorage.setItem('theme','light')
    }
})
window.onload = function () {
    let localStorageTheme = localStorage.getItem('theme')
    if (localStorageTheme === 'dark') {
        document.body.classList.add('dark')
    }
}
