function addition(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const answer = num1+num2;
    document.getElementById('result').innerHTML=`Answer is : ${answer}`;
}