const Option_inner = document.querySelector(".product_option_add .inner");
const Option_wrap = document.querySelector(".option_wrap");
const add_btn = document.getElementById("add_btn");
const Option_fix_area = document.querySelector(".product_option_area");
const Value_size_fix2 = document.querySelector("#value_size_fix");
const Option_wrap_all = document.querySelectorAll(".value_wrap");
// const Join_option_whether = document.querySelector("#join_option_checked");

let Option_btn_click = 2;
let Option_page = 0;
let Option_wrap_add = null;
let Option_value = null;
let Value_wrap_array = [];
let inner_option_name = [];

add_btn.addEventListener("click", add_option);
Option_inner.addEventListener("click", option_delete);

// console.log(Option_wrap_all[0].children);
// console.log(Option_wrap_all[1].children);

// console.log(Option_inner.childElementCount);

// console.log(Option_wrap.childNodes);

default_option_add("크기");
default_option_add("색상");

function default_option_add(Option_name_fix, checked, important) {
  Option_wrap_add = document.createElement("div");
  Option_wrap_add.classList.add("option_wrap");
  add_option_type();
  add_option_name(Option_name_fix);
  add_option_value();
  add_option_check();
  Checkbox.setAttribute("checked", "checked");
  Selection.innerText = "필수";
  Selection.style.color = "red";
  Delete_button.setAttribute("disabled", "disabled");
  Option_inner.appendChild(Option_wrap_add);
}

// for (i = 0; i <= Option_inner.childElementCount - 1; i++) {}
function add_option(event) {
  event.preventDefault();
  let item = event.target;
  if (document.querySelector(".option_name_add") == null) {
    let Option_name_add = document.createElement("input");
    Option_name_add.classList.add("option_name_add");
    Option_name_add.setAttribute("placeholder", "옵션명을 적어주세요.");
    Option_name_add.setAttribute("onkeypress", "add_option_input_fixed(event)");
    Option_inner.appendChild(Option_name_add);
    Option_name_add.focus();
  }
}

function add_option_input_fixed(event) {
  let item = event.target;
  let Option_name_fix = item.value;
  if (event.key == "Enter") {
    Option_wrap_add = document.createElement("div");
    Option_wrap_add.classList.add("option_wrap");
    add_option_type();
    add_option_name(Option_name_fix);
    add_option_value();
    add_option_check();
    Set_value_color();
    Set_value_size();
    Option_inner.appendChild(Option_wrap_add);
    item.remove();
  }
}

function add_option_type() {
  let Option = document.createElement("div");
  Option.classList.add("option");
  let Option_division = document.createElement("p");
  Option_division.classList.add("option_division");
  Option_division.innerText = "옵션타입";
  Option.appendChild(Option_division);
  let Option_selector = document.createElement("select");
  Option_selector.classList.add("option_type_select");
  Option.appendChild(Option_selector);
  let Option_selector_menu = document.createElement("option");
  Option_selector_menu.innerText = "기본";
  Option_selector.appendChild(Option_selector_menu);

  Option_wrap_add.appendChild(Option);
}

function add_option_name(Option_name_fix) {
  let Option = document.createElement("div");
  Option.classList.add("option");
  let Option_division = document.createElement("p");
  Option_division.classList.add("option_division");
  Option_division.innerText = "옵션명";
  Option.appendChild(Option_division);
  let Option_name = document.createElement("input");
  Option_name.classList.add("option_name");
  Option_name.setAttribute("readonly", "readonly");
  Option_name.value = Option_name_fix;
  Option.appendChild(Option_name);

  Option_wrap_add.appendChild(Option);
}

function add_option_value() {
  let Option = document.createElement("div");
  Option.classList.add("option");
  let Option_division = document.createElement("p");
  Option_division.classList.add("option_division");
  Option_division.innerText = "옵션값";
  Option.appendChild(Option_division);
  Value_wrap = document.createElement("div");
  Value_wrap.classList.add("value_wrap");
  Value_wrap_array.push(Value_wrap);

  Option_value = document.createElement("input");
  Option_value.classList.add("option_value");
  Option_value.setAttribute("onkeypress", "set_value(event)");
  Value_wrap.appendChild(Option_value);
  Option.appendChild(Value_wrap);

  Option_wrap_add.appendChild(Option);
}

function add_option_check(checked, important) {
  Checkbox = document.createElement("input");
  Checkbox.classList.add("join_checked");
  Checkbox.setAttribute("type", "checkbox");
  Checkbox.setAttribute("name", "join_checked");
  Selection = document.createElement("span");
  Selection.innerText = "선택";
  Selection.style.color = "#bdbdbd";
  Delete_button = document.createElement("button");
  Delete_button.classList.add("option_delete");
  Delete_button.innerText = "X";
  Option_wrap_add.appendChild(Checkbox);
  Option_wrap_add.appendChild(Selection);
  Option_wrap_add.appendChild(Delete_button);
}

function option_delete(event) {
  let item = event.target;

  if (item.classList[0] == "option_delete") {
    let delete_this = item.parentElement;
    delete_this.remove();
  }
}
let Size_array = [];
let Color_array = [];

function Set_value_size() {
  for (let i = 0; i < Value_wrap_array[0].children.length - 1; i++) {
    let have = Value_wrap_array[0].children[i].children[0].innerHTML;
    if (Size_array.includes(have) == false) {
      Size_array.push(Value_wrap_array[0].children[i].children[0].innerHTML);
    }
  }
  console.log(Size_array);
}

function Set_value_color() {
  for (let i = 0; i < Value_wrap_array[1].children.length - 1; i++) {
    let have = Value_wrap_array[1].children[i].children[0].innerHTML;
    if (Color_array.includes(have) == false) {
      Color_array.push(Value_wrap_array[1].children[i].children[0].innerHTML);
    }
  }
  console.log(Color_array);
}

function set_value(event, index) {
  let item = event.target;
  if (event.key === "Enter") {
    let Value_space = document.createElement("div");
    Value_space.classList.add("value_space");
    Value = document.createElement("span");
    Value.classList.add("value");
    let Value_delete_btn = document.createElement("button");
    Value_delete_btn.classList.add("value_delete_btn");
    Value_delete_btn.innerHTML = '<i class="fas-solid fa-x"></i>';
    Value_space.appendChild(Value);
    Value_space.appendChild(Value_delete_btn);
    Value.innerText = item.parentElement.lastElementChild.value;
    // let Value_byteCheck = item.parentElement.lastElementChild.value;
    // console.log(Value_byteCheck.length);
    // let byteLength = 0;
    // for (let i = 0; i < Value_byteCheck.length; i++) {
    //   if (escape(Value_byteCheck.charAt(i)).length >= 4) {
    //     byteLength += 3;
    //   } else if (escape(Value_byteCheck.charAt(i)) === "%7") {
    //     byteLength += 3;
    //   } else {
    //     if (escape(Value_byteCheck.charAt(i)) != "%0D") {
    //       byteLength += 1;
    //     }
    //   }
    // }
    // console.log(byteLength);
    // // Value_byteCheck. = byteLength;
    // Value_byteCheck.length = byteLength;
    // console.log(Value_byteCheck.length)

    // Value.innerText = Value_byteCheck;
    // Value_delete_btn.addEventListener("click", set_value_delete);
    // item.parentElement.insertBefore(Value_space, item);
    // item.value = "";
    Value_delete_btn.addEventListener("click", set_value_delete);
    item.parentElement.insertBefore(Value_space, item);
    item.value = "";
    Set_value_size();
    Set_value_color();
  }
}

//set_value 저장 원래 되던거 갑자기 코드 변경됨
// 한글로입력되는거 해결하기
function set_value_delete(event) {
  let item = event.target;
  let delete_value = item.parentElement.parentElement.children[0].innerText;

  if (item.parentElement.classList[0] == "value_delete_btn") {
    let delete_this = item.parentElement.parentElement;
    delete_this.remove();

    for (let i = 0; i < Size_array.length; i++) {
      if (Size_array.includes(delete_value)) {
        Size_array.pop(delete_value);
      }
    }
    for (let i = 0; i < Color_array.length; i++) {
      if (Color_array.includes(delete_value)) {
        Color_array.pop(delete_value);
      }
    }

    for (let i = 0; i < Set_value_area_array.length; i++) {
      for (let j = 0; j < 2; j++) {
        let Checktext =
          Set_value_area_array[i].children[1].children[j].children[0].innerText;
        let CheckElement =
          Set_value_area_array[i].children[1].children[j].children[0];

        if (delete_value == Checktext) {
          CheckElement.parentElement.parentElement.parentElement.remove();
        }
      }
    }
  }
}

//JoinOption

let Value_size_fix;
let Set_value_area;
let Set_value_area_array = [];
let join_value_array = [];
let Size_count = 0;
let Color_count = 0;

function join_option() {
  let Option_length = Size_array.length * Color_array.length;
  console.log(Option_length);
  for (let i = 0; i < Option_length; i++) {
    Set_value_area = document.createElement("ul");
    Set_value_area.classList.add("set_value_area");
    Set_value_area_array.push(Set_value_area);
    join_option_checkbox();
    join_option_title_add();
    join_option_price();
    join_option_inventory();
    join_option_inventory_add();
    join_option_state();
    Option_fix_area.appendChild(Set_value_area);
  }
}

function join_option_checkbox() {
  let Selection_checked = document.createElement("input");
  Selection_checked.setAttribute("type", "checkbox");
  Selection_checked.classList.add("selection_checked");
  Set_value_area.appendChild(Selection_checked);
}

function join_option_title_add() {
  let Option_title_add = [];
  let Value_name = [];
  let Checked = document.getElementsByName("join_checked");
  let Checked_leng = Checked.length;

  Value_size_fix = document.createElement("div");
  Value_size_fix.classList.add("value_size_fix");

  if (Color_count == Color_array.length) {
    Color_count = 0;
    Size_count++;
  }

  if (Size_count == Size_array.length) {
    Size_count = 0;
  }

  Option_title_add[0] = document.createElement("li");
  Option_title_add[0].classList.add("option_title_add");
  Value_name[0] = document.createElement("span");
  Value_name[0].classList.add("value_size");
  Option_title_add[0].appendChild(Value_name[0]);

  Option_title_add[1] = document.createElement("li");
  Option_title_add[1].classList.add("option_title_add");
  Value_name[1] = document.createElement("span");
  Value_name[1].classList.add("value_color");
  Option_title_add[1].appendChild(Value_name[1]);

  Value_name[0].innerText = Size_array[Size_count];
  Value_name[1].innerText = Color_array[Color_count];

  Value_size_fix.appendChild(Option_title_add[0]);
  Value_size_fix.appendChild(Option_title_add[1]);
  Set_value_area.appendChild(Value_size_fix);

  Color_count++;

  // for (let i = 0; i < Checked_leng; i++) {
  //   Option_title_add[i] = document.createElement("li");
  //   Option_title_add[i].classList.add("option_title_add");
  //   Value_name[i] = document.createElement("span");
  // Value_name[i].innerText = Size_array[Size_count];
  // Value_name[i].innerText = Color_array[Color_count];

  //   Option_title_add[i].appendChild(Value_name[i]);
  //   Value_size_fix.appendChild(Option_title_add[i]);
  //   Set_value_area.appendChild(Value_size_fix);
  // }
}

function Value_name_set() {
  let Checked = document.getElementsByName("join_checked");
  let Checked_leng = Checked.length;
  for (let i = 0; i < Checked_leng; i++) {
    // Value_name[i].innerText =
  }
}

function join_option_price() {
  let Option_title = document.createElement("li");
  Option_title.classList.add("option_title");
  let Value_price = document.createElement("input");
  Value_price.classList.add("value_price");
  Value_price.setAttribute("placeholder", "￦");
  Value_price.setAttribute("onkeypress", "numberset(event)");
  Option_title.appendChild(Value_price);
  Set_value_area.appendChild(Option_title);
}

function join_option_inventory() {
  let Option_title = document.createElement("li");
  Option_title.classList.add("option_title");
  let Value_inventory = document.createElement("input");
  Value_inventory.classList.add("value_inventory");
  Value_inventory.setAttribute("onkeypress", "numberset(event)");
  Option_title.appendChild(Value_inventory);
  Set_value_area.appendChild(Option_title);
}

function join_option_inventory_add() {
  let Option_title = document.createElement("li");
  Option_title.classList.add("option_title");
  let Value_inventory_add = document.createElement("input");
  Value_inventory_add.classList.add("value_inventory_add");
  Value_inventory_add.setAttribute("onkeypress", "invenadd_numberset(event)");
  Option_title.appendChild(Value_inventory_add);
  Set_value_area.appendChild(Option_title);
}

function join_option_state() {
  let Option_title = document.createElement("li");
  Option_title.classList.add("option_title_state");
  let State_select = document.createElement("select");
  State_select.classList.add("state_slect");
  let State_select_option_1 = document.createElement("option");
  State_select_option_1.innerText = "판매중";
  let State_select_option_2 = document.createElement("option");
  State_select_option_2.innerText = "미판매";
  let State_select_option_3 = document.createElement("option");
  State_select_option_3.innerText = "품절";
  State_select.appendChild(State_select_option_1);
  State_select.appendChild(State_select_option_2);
  State_select.appendChild(State_select_option_3);
  Option_title.appendChild(State_select);
  let Join_option_delete = document.createElement("button");
  Join_option_delete.classList.add("join_value_delete");
  // Join_option_delete.addEventListener("click", join_option_delete(event));
  Join_option_delete.innerText = "X";
  Join_option_delete.addEventListener("click", join_option_delete);
  Option_title.appendChild(Join_option_delete);
  // Value_delete_btn.addEventListener("click", set_value_delete());
  Set_value_area.appendChild(Option_title);
}

function join_option_delete(event) {
  let item = event.target;
  let delete_this = item.parentElement.parentElement;
  let delete_index = Set_value_area_array.indexOf(delete_this);

  if (item.classList[0] == "join_value_delete") {
    delete_this.remove();
    Set_value_area_array.pop(Set_value_area_array[delete_index]);
  }
}

function numberset(event) {
  let item = event.target;
  let str = item.value;
  str = str.replace(/,/gi, "");
  str = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  item.value = str;
}

let num = 24232;
console.log(typeof num);
num = num.toLocaleString();
console.log(num);

function invenadd_numberset(event) {
  let item = event.target;
  let inven_value =
    item.parentElement.parentElement.children[3].children[0].value;
  let inven = item.parentElement.parentElement.children[3].children[0];
  let str = item.value;
  str = str.replace(/,/gi, "");
  str = str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  item.value = str;

  if (event.keyCode == 13 || event.keyCode == 9) {
    let num = inven_value.replace(/[^\d]+/g, "");
    let str_num = str.replace(/[^\d]+/g, "");
    num = Number(num);
    str_num = Number(str_num);
    let result = num + str_num;
    result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    inven.value = result;
    item.value = "";
  }
}

// function option_type(event) {
//   let option_wrap = document.createElement("div");
//   option_wrap.classList("option");
//   let option_division = document.createElement("p");
//   option_division.innerText("옵션타입");
//   let option_selector = document.createElement("select");
//   option_selector.classList("option_type");
//   let option_selector_menu = document.createElement("option");
//   option_selector_menu.innerText("기본");
//   option_selector.appendChild(option_selector_menu);

// }

// join_Algorithm 만들어보자!

console.log(document.querySelectorAll(".join_checked"));
console.log(document.querySelector(".join_checked").parentElement.children);

// var checkboxes = document.querySelectorAll(".join_checked");
// for (var checkbox of checkboxes) {
//   checkbox.addEventListener("click", function () {
//     if (this.checked == true) {
//       console.log("check됨");
//       console.log(this.parentElement.children[2].children[1].children[0]);
//     } else {
//       console.log("안됨");
//     }
//   });
// }

//옵션값 추가 시 자동 join
join_option();
