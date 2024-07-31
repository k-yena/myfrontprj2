//  1~10 찍기

for (let i=1; i<=10 ; i++){
    console.log(i);
}

// 1~10 누적합
tot = 0
for (let i=1; i<=10 ; i++){
    tot=tot+i;
}
console.log(tot)

// 홀짝 찍기
for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log("짝수")
    }
    else{
        console.log("홀수")
    }
}

// 구구단
for(let i = 2;i<=9;i++){
    for(let j=1;j<=9;j++){
        console.log(`${i}X${j}=${i*j}`)
    }
}


// // 배열을 반복문으로 돌리기1
// let arr=['apple','banana','candy']
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }



// 배열을 반복문으로 돌리기2
let arr=['apple','banana','candy']
for (let i in arr){
    console.log(arr[i]);
}



// // 배열을 반복문으로 돌리기3
// let arr=['apple','banana','candy']
// for (let obj of arr){
//     console.log(obj);
// }