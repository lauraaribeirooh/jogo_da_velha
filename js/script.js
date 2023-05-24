//variaveis
let bnt1 = 0;
let bnt2 = 0;
let bnt3 = 0;
let bnt4 = 0;
let bnt5 = 0;
let bnt6 = 0;
let bnt7 = 0;
let bnt8 = 0;
let bnt9 = 0;
let controle = 0;
let jogadas = 0;
let finalJogo =  Boolean(false);

//click botão 1
function clickBtn1(){
    let btn = document.getElementById('btn1');

    if (btn.value == " " && !finalJogo) {
       if (controle == 0){
           controle = 1;
           btn.value = "X"
           btn1 = "X"
       }else {
        controle = 0;
        btn.value = "O"
        btn1 = "O"
       }
    }
}