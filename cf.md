## let, const, var 

## Object 를 만듦
const nicoInfo = {
    name:"haeun",
    age:20,
    gender:"Female"
}
# 
function sayHello(name,age){
    console.log(`Hello ${name} you are ${age} years old`);
}

const greetHaeun = sayHello("haeun",20);
console.log(greetHaeun);

#
const calculator = {
    plus: function(a,b){
        return a+b;
    }
}
const plus = calculator(5,5)
console.log(plus)

## JS로 html 조종 가능(JS가 html 이김)
const title=document.getElementById("title");
title.innerHTML = "Hi from JS";
title.style.color = 'red';
document.title='I won you now'

### setInterval(함수, 실행할 시간 간격)
1초 = 1000 밀리세컨드

### classList를 이용하면 클래스를 조작하는 다양한 메서드들을 쓸 수 있다.
- classList.add : 클래스를 필요에 따라 삽입한다.
- classList.remove : 클래스를 필요에 따라 제거한다.
- classList.contains : 값이 존재하는지 체크한다. (true/false)
- classList.toggle : 클래스 값이 있는지 체크하고 없으면 더하고 있으면 제거한다.

### JSON.stringify
- 자바스크립트 object를 string으로 바꿔준다.

### forEach()
- array에 담겨있는 것들 각각에 한번씩 함수를 실행시킨다.

### filter
- filter는 array의 모든 아이템을 통해 함수를 실행하고 
true인 아이템들만 가지고 새로운 array를 만든다.