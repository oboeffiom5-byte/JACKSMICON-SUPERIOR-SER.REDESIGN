function checkNumber(){
    let username = Number(document.getElementById(`num`).value)
    if (username % 2 == 0){
        document.getElementById(`cont`).textContent=`This is Even Number`
        document.getElementById(`message`).textContent =`EVEN NUMBER`
        return
    }
    else if (username ==""){
        alert(`input a number`)
    }
    else {
        document.getElementById(`cont`).textContent=`This is an Odd number`
        document.getElementById(`message`).textContent=`ODD NUMBER`
    }
}

// const x = new Date().toLocaleDateString()
// const y = new Date().getHours()
// if (y>18){
//     console.log(`Good Evening`)
// }
// else{
//     console.log(`Good Night`)
// }
// console.log(x)

// const num = new Array(`good`,`find`,`right`).splice()
// console.log(num);


// if (num.length>3){
//     console.log(`this is incorrect`);
    
// }
// else{
//     console.log(`This is correct`);
    
// }


// let t = Math.sqrt(4)
// console.log(t);













