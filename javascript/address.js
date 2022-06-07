const Button_cart = document.getElementById("event");
//추후 id 이름 변경할 것.

function move_href(idx){
    idx.href = "/Allez_shop/html/login.html";
}
function hold_href(idx){
    idx.href = "#"
}

function match_media (){
    if(window.matchMedia("(max-width:768px)").matches){
        move_href(Button_cart);
    }else{
        hold_href(Button_cart);
    }
}   

match_media();

// function login_home(){
//     location.href("/Allez_shop/html/login.html");
// }

// function match_media(){
//     if(window.matchMedia("(max-width: 768px)").matches){
//         login_home(Button_cart);
//     }
//     else{

//     }
// }

// match_media();