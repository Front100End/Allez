const slide_prev_btn = document.getElementById("slide-btn-prev");
const slide_next_btn = document.getElementById("slide-btn-next");
const slide_container = document.getElementById("slide-container");
const slide_stop = document.getElementById("slide-stop-sec");
const img_sizing = document.getElementById("img-sizing");
const slide_container_four = document.querySelector(
  "#slide-container li:nth-child(4)"
);

let firstChild = slide_container.firstElementChild;
let lastChild = slide_container.lastElementChild;

let cloneFirst = firstChild.cloneNode(true);
let cloneLast = lastChild.cloneNode(true);
let clonefour = slide_container_four.cloneNode(true);

slide_container.appendChild(cloneFirst);
slide_container.insertBefore(cloneLast, slide_container.firstElementChild);
slide_container.insertBefore(clonefour, slide_container.firstElementChild);

let slideWidth = slide_stop.offsetWidth,
  slideheight = slide_stop.offsetHeight,
  currentIdx = -1,
  idx = 0,
  allIdx = 5,
  slideMove_Timer = undefined;

// slide_container.style.width = (allIdx + 3) * 100 + "%";

function slideleft(index) {
  index.style.left = -slideWidth * 2 + "px";
}

//basic slidemove
function slideMove(idx) {
  slide_container.style.left = slideWidth * idx + "px";
  slide_container.style.transition = "0.5s";
  slide_container.style.transitionTimingFunction = "ease-in";
  currentIdx = idx;
}

function StartSlide() {
  slideMove_Timer = setInterval(function () {
    slideMove(currentIdx - 1);
    if (currentIdx <= -allIdx - 2) {
      Stop_and_Sliding();
      currentIdx = 0;

      // slide_container.style.left = -slideWidth + "px";
      // slide_container.style.transition = "1s";
      // currentIdx = 0;
    }
  }, 4000);
}
function StopSlide() {
  clearInterval(slideMove_Timer);
}

function Stop_and_Sliding() {
  clearInterval(slideMove_Timer);
  slide_container.style.transition = "0s";
  slide_container.style.left = -slideWidth + "px";
  StartSlide();
}

function StopAnimation(index) {
  index.style.transition = "none";
}

slide_prev_btn.addEventListener("click", function () {
  slideMove(currentIdx + 1);
  clearInterval(slideMove_Timer);
  StartSlide();
});

slide_next_btn.addEventListener("click", function () {
  slideMove(currentIdx - 1);
  clearInterval(slideMove_Timer);
  StartSlide();
});

window.onresize = function resize() {
  slide_stop.style.height = img_sizing.offsetHeight + "px";
  clearInterval(slideMove_Timer);
  slideWidth = slide_stop.offsetWidth;
  slideheight = slide_stop.offsetHeight;
  slide_container.style.left = slideWidth * currentIdx + "px";
  StartSlide();
  match_media();
};

slideleft(slide_container);
StartSlide();

//#Problem
//슬라이드 첫번째 요소에 4초간 더 지연되는 문제 발견
//마지막 요소에서 첫번째 요소로 넘어갈 때 왼쪽으로 넘어감 방지.

//mouseenter event
// slide_stop.addEventListener('mouseenter',StopSlide);

// slide_stop.addEventListener('mouseleave',StartSlide);

//Button input

// let timerId = function slideMove_Time(){
//     slideMove(currentIdx - 1);
// }

// if(currentIdx < allIdx){
//     setInterval(timerId,3000);
//     if( idx == - 5){
//     clearInterval(timerId);
//     timerId = null;
//     slide_container.style.left = 0 + 'px';
//     slide_container.style.transition = '1s';
//     currentIdx = 0;
//     }
// }
