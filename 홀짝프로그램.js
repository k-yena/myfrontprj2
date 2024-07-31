let i = 1;
if ( i%2 == 0 ) {
    console.log("짝수입니다.")    
}else{
    console.log("홀수입니다.")
} 


let score = input("나의 점수는:");
if (score>=90){
    console.log("A입니다.")
}else if ( 80 <= score ){
    console.log("B입니다.")
}else if (70 <= score ){
    console.log("C입니다.")
}else if (60 <= score){
    console.log("D입니다.")
}else{
    console.log("F입니다.")
}


// 중국집 키오스크
// 1번 누르면 짜장면, 2번 누르면 짬뽕,3번 볶음밥
// let menu=window.prompt("메뉴를 고르세요.");

let menu=1;

switch (menu) {
    case 1 :
        console.log("짜장")
        break;
    case 2 :
        console.log("짬뽕")
        break;
    case 3 :
        console.log("볶음밥")
        break;
    case 4 :
        console.log("탕수육")
        break;   
    default :
        console.log("4가지 중에 선택하세요")
        break;                              
}


// 은행 입출금

let money = 1;

switch (money){
    case 1 :
        console.log("돈을 입금")
        break;
    case 2 :
        console.log("돈을 출금")
        break; 
    case 3 :
        console.log("잔액이 부족합니다.")
        break;
    default:
        console.log("잘못 입력하셨습니다. 다시 입력해주세요")
        break;                       
}

