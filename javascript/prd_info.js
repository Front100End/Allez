let option_wrap = document.querySelector(".option_wrap");
let option_opener = document.querySelector(".option_opener");
let option_list = document.querySelector(".option_list");
let opener_icon = document.querySelector(".opener_icon");

// 옵션 display 설정 함수
const option_open = (list, icon) => {
  if (list.style.display == "none") {
    list.style.display = "flex";
    icon.style.transform = "rotate(180deg)";
  } else {
    list.style.display = "none";
    icon.style.transform = "rotate(360deg)";
  }
};

//가상 API
let product_one = {
  kinds: ["색상", "사이즈"],
  // value: {
  //   0: ["블랙", "블루", "레드"],
  //   1: ["S", "L", "XL"],
  // },
  value: [
    ["블랙", "블루", "레드"],
    ["S", "L", "XL"],
  ],
  // 재고 : {
  //   0: ["black","L","22"],
  //   1: []
  // }
};
// ------------색상,사이즈 등 옵션 생성함수 --------------

const option_create = (kinds, value) => {
  let Add_option_opener = [];
  let Add_option_list = [];
  let Add_option_icon = [];
  let Add_option_item = [];
  let Add_option_text = [];
  let option_opener_count = [];
  let fixed_select_option = []; //두가지 옵션 모두 선택 시 사용될 옵션

  for (let i = 0; i < kinds.length; i++) {
    let Add_option_wrap = document.createElement("div");
    Add_option_wrap.classList.add("option_selectbox");

    Add_option_opener[i] = document.createElement("button");
    Add_option_opener[i].classList.add("option_opener");
    Add_option_opener[i].setAttribute("disabled", "");
    Add_option_opener[0].removeAttribute("disabled");
    option_opener_count.push(Add_option_opener[i]);
    // Add_option_opener.addEventListener("click", option_open);

    Add_option_text[i] = document.createElement("strong");
    Add_option_text[i].classList.add("opener_text");
    Add_option_text[i].innerText = `[${kinds[i]}]을 선택해주세요`;

    Add_option_icon[i] = document.createElement("span");
    Add_option_icon[i].classList.add("opener_icon");

    Add_option_list[i] = document.createElement("ul");
    Add_option_list[i].classList.add("option_list");
    for (let j = 0; j < value[i].length; j++) {
      Add_option_item[j] = document.createElement("li");
      Add_option_item[j].classList.add("option_item");
      Add_option_item[j].innerText = value[i][j];
      Add_option_item[j].addEventListener("click", function (item) {
        //옵션 선택 시 button innerText로 fix
        // let choice_item_innertext_array = [];

        Add_option_text[i].innerText = item.target.innerText;

        if (fixed_select_option.length <= Add_option_opener.length) {
          fixed_select_option[i] = Add_option_opener[i].innerText;
        }
        console.log(fixed_select_option);

        // for (let i = 0; i < item.target.parentElement.children.length; i++) {
        //   choice_item_innertext_array.push(
        //     item.target.parentElement.children[i].innerText
        //   ); //choice_item_innertext_array에 클릭한 전체 메뉴 안에 옵션들 임시저장
        // }
        // console.log(choice_item_innertext_array);

        // if (fixed_select_option.some(choice_item_innertext_array) == false) {
        //   fixed_select_option.push(
        //     item.target.parentElement.children.innerText
        //   );
        // }
        // console.log(fixed_select_option);

        Add_option_list[i].style.display = "none";
        Add_option_icon[i].style.transform = "rotate(360deg)";

        //diabled 제거 및 최종 구매요소 확인
        if (i + 1 < kinds.length) {
          Add_option_opener[i + 1].removeAttribute("disabled");
        }
        //모든 option 선택 시 fix 옵션 박스 생성
        if (fixed_select_option.length == Add_option_opener.length) {
          fixed_option_create(fixed_select_option);
          fixed_select_option = [];
          for (let i = 0; i < Add_option_text.length; i++) {
            Add_option_text[i].innerText = `[${kinds[i]}]을 선택해주세요`;
            if (Add_option_opener[i] != Add_option_opener[0]) {
              Add_option_opener[i].setAttribute("disabled", "");
            }
          }
        }
      });
      Add_option_list[i].appendChild(Add_option_item[j]);
    }

    //option 선택 시에 화살표 변경

    Add_option_opener[i].addEventListener("click", function () {
      if (Add_option_list[i].style.display == "none") {
        Add_option_list[i].style.display = "flex";
        Add_option_icon[i].style.transform = "rotate(180deg)";
      } else {
        Add_option_list[i].style.display = "none";
        Add_option_icon[i].style.transform = "rotate(360deg)";
      }
    });

    Add_option_opener[i].appendChild(Add_option_text[i]);
    Add_option_opener[i].appendChild(Add_option_icon[i]);
    Add_option_wrap.appendChild(Add_option_opener[i]);
    Add_option_wrap.appendChild(Add_option_list[i]);
    option_wrap.appendChild(Add_option_wrap);
  }
};
option_create(product_one.kinds, product_one.value);

// ------------색상,사이즈 등 옵션 생성함수 --------------

// ----------------fix옵션 박스 생성함수-----------------

const fixed_prd = document.querySelector(".fixed_prd");
const fixed_box = document.querySelector(".fixed_box");
const fixed_option = document.querySelector(".fixed_option");
const fixed_option_delete = document.querySelector("#fixed_option_delete");
const option_delivery_text = document.querySelector(".option_delivery span");
const option_count = document.querySelector(".option_countbox input");
const count_minus = document.querySelector("#count_minus");
const count_plus = document.querySelector("#count_plus");

const fixed_delete = (e) => {
  e.preventDefault();
  e.target.parentElement.remove();
};

const fixed_option_count_plus = (e) => {
  e.preventDefault();
  let value_type = Number(option_count.value);
  value_type = value_type + 1;
  option_count.value = String(value_type);
};
const fixed_option_count_minus = (e) => {
  e.preventDefault();
  let value_type = Number(option_count.value);
  if (value_type > 1) {
    value_type = value_type - 1;
    option_count.value = String(value_type);
  }
};

const fixed_option_create = (option) => {
  let time = new Date().getDay();
  let month = new Date().getMonth();
  let date = new Date().getDate();
  if (date > 29) {
    date = 0;
    month = month + 1;
  }
  let day = ["월", "화", "수", "목", "금", "토", "일"];
  let day_text = day[time + 1];

  let Fixed_box = document.createElement("div");
  Fixed_box.classList.add("fixed_box");

  let Fixed_option = document.createElement("strong");
  Fixed_option.classList.add("fixed_option");
  let String = "";
  for (let i = 0; i < option.length; i++) {
    if (option[i] == option[0]) {
      String = String + `${option[i]}`;
    } else {
      String = String + ` / ${option[i]}`;
    }
  }
  Fixed_option.innerText = String;

  let Fixed_option_delete = document.createElement("button");
  Fixed_option_delete.classList.add("fixed_option_delete");
  Fixed_option_delete.addEventListener("click", fixed_delete);
  Fixed_option_delete.innerText = "X";

  let Option_delivery = document.createElement("div");
  Option_delivery.classList.add("option_delivery");
  let span = document.createElement("span");
  Option_delivery.appendChild(span);
  span.innerText = `${month + 1}/${date + 2}(${day_text}) 도착예정`;

  let Option_count_wrap = document.createElement("div");
  Option_count_wrap.classList.add("option_count_wrap");
  let Option_countbox = document.createElement("form");
  Option_countbox.classList.add("option_countbox");
  let Count_minus = document.createElement("button");
  Count_minus.classList.add("count_minus");
  Count_minus.innerText = "-";
  Count_minus.addEventListener("click", fixed_option_count_minus);

  let Count = document.createElement("input");
  Count.value = 1;
  let Count_plus = document.createElement("button");
  Count_plus.classList.add("count_plus");
  Count_plus.innerText = "+";
  Count_plus.addEventListener("click", fixed_option_count_plus);

  Option_countbox.appendChild(Count_minus);
  Option_countbox.appendChild(Count);
  Option_countbox.appendChild(Count_plus);

  let option_price = document.createElement("em");
  option_price.classList.add("option_price");
  option_price.innerText = "24,400";
  let price_span = document.createElement("span");
  price_span.innerText = "원";
  option_price.appendChild(price_span);
  Option_count_wrap.appendChild(Option_countbox);
  Option_count_wrap.appendChild(option_price);

  Fixed_box.appendChild(Fixed_option);
  Fixed_box.appendChild(Option_delivery);
  Fixed_box.appendChild(Option_count_wrap);
  Fixed_box.appendChild(Fixed_option_delete);
  fixed_prd.appendChild(Fixed_box);
};

// ----------------fix옵션 박스 생성함수-----------------

// option 리스트 생성 함수
// function option_list_create(item, i, button) {
//   Add_option_list = document.createElement("ul");
//   Add_option_list.classList.add("option_list");
//   for (let j = 0; j < item.length; j++) {
//     Add_option_item = document.createElement("li");
//     Add_option_item.classList.add("option_item");
//     Add_option_item.innerText = item[i][j];
//     Add_option_list.appendChild(Add_option_item);
//   }
// }
