// let light = 'green'

// if(light === 'red'){
//     console.log('หยุดรถ');
// }
// else if(light === 'yellow'){
//     console.log('เตรียมหยุดรถ');
// }
// else if(light === 'green'){
//     console.log('ไปต่อ');
// }
// else{
//     console.log('ไฟสีอะไรไม่รู้จัก');
// }


// = == ===
// let num = 10
// console.log(num);
// console.log(num == 10 );
// console.log(num === '10' );

let answer = Math.random() * 10 + 1
answer = Math.floor(answer)
document.getElementById('answer').innerHTML = answer

function cal(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = document.getElementById('num2').value*1;
    console.log(num1);
    console.log(num2);
    let sum = num1+num2
    console.log(sum);
    
    if(sum === answer){
        alert('ถูกต้อง')
        answer = Math.random() * 10 + 1
        answer = Math.floor(answer)
        document.getElementById('answer').innerHTML = answer
    }
    else{
        alert('ผิดนะลองใหม่')
    }
}
