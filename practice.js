let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3= document.querySelector(".Result");
let input = document.querySelector("#userdata");
let shiftInput = document.querySelector("#space");
let output = document.querySelector(".s1");
let str = "";

btn1.onclick = function () {
    btn1.style.backgroundColor = "blue";
    btn2.style.backgroundColor = "";

    let Alphabets = input.value;
    let shift = parseInt(shiftInput.value);
    str="";

    for (let i = 0; i < Alphabets.length; i++) {
        let char = Alphabets[i];
        let ascii = Alphabets.charCodeAt(i);

        if (char >= 'A' && char <= 'Z') {
            ascii = ((ascii - 65 + shift) % 26 + 26) % 26 + 65;
            str += String.fromCharCode(ascii);
        } else if (char >= 'a' && char <= 'z') {
            ascii = ((ascii - 97 + shift) % 26 + 26) % 26 + 97;
            str += String.fromCharCode(ascii);
        } else {
            str += char;
        }
    }

    
};

btn2.onclick = function () {
    btn1.style.backgroundColor = "";
    btn2.style.backgroundColor = "blue";

    let Alphabets = input.value;
    let shift = parseInt(shiftInput.value);
    str="";

    for (let i = 0; i < Alphabets.length; i++) {
        let char = Alphabets[i];
        let ascii = Alphabets.charCodeAt(i);

        if (char >= 'A' && char <= 'Z') {
            ascii = ((ascii - 65 - shift) % 26 + 26) % 26 + 65;
            str += String.fromCharCode(ascii);
        } else if (char >= 'a' && char <= 'z') {
            ascii = ((ascii - 97 - shift) % 26 + 26) % 26 + 97;
            str += String.fromCharCode(ascii);
        } else {
            str += char;
        }
    }

    
};
btn3.onclick =function(){
    output.textContent=str;
}
