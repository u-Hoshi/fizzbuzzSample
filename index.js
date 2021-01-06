// console.logに出力

for (var i = 1; i < 21; i++) {
    if ((i % 3) === 0 && (i % 5) === 0) {
        console.log("fizubuzz")
    }else if ((i % 3) === 0) {
        console.log("fizz")
    } else if ((i % 5) === 0) {
        console.log("buzz")
    } else {
        console.log(i)
    }
}


// innerHtmlで書き換えていく
var v = 0
function countup() {
    var log = document.getElementById('countup')
    if ((v % 3) === 0 && (v % 5) === 0) {
        log.innerHTML = 'fizzbuzz'
    }else if ((v % 3) === 0) {
        log.innerHTML = 'fizz'
    } else if ((v % 5) === 0) {
        log.innerHTML = 'buzz'
    } else {
        log.innerHTML = v
    }
    v= v + 1
}



// 要素を足していく
var s =0
function countup2() {
    var log3 = document.getElementById('countup2')
    var log2 =document.createElement('p')
    if ((s % 3) === 0 && (s % 5) === 0) {
        log2.textContent = 'fizzbuzz'
        log3.appendChild(log2);
    }else if ((s % 3) === 0) {
        log2.textContent = 'fizz'
        log3.appendChild(log2);
    } else if ((s % 5) === 0) {
        log2.textContent = 'buzz'
        log3.appendChild(log2);
    } else {
        log2.textContent = s
        log3.appendChild(log2);
        
    }
    s= s + 1
}