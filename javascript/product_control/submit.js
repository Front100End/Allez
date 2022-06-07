const save = document.querySelector(".table_save");
const reset = document.querySelector(".table_reset");

save.addEventListener("click", save_confirm);
reset.addEventListener("click", reset_confirm);

function save_confirm() {
  if (confirm("저장 하시겠습니까?") == true) {
    alert("저장 되었습니다.");
  }
}
function reset_confirm() {
  if (confirm("리셋 하시겠습니까?") == true) {
    alert("리셋 되었습니다.");
  }
}
