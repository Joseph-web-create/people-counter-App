// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById('save-el');
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}



function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countstr = count + ' - ';
    saveEl.innerHTML += countstr;

    countEl.innerText= 0;
    count= 0;
}