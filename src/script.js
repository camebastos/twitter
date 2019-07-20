let send = document.getElementById('send');
let btn = document.getElementById('btn-post');
let box = document.getElementById('box-post');
const count = document.getElementById('count-post');
const charMax = 140;

box.addEventListener('keyup', btnBlocked, changeCollor);

function btnBlocked() {
    if (box.value.length === 0 || box.value.length > 140 || box.value === ' ') {
        send.disabled = true;
    } else {
        send.disabled = false;
    }
}

send.addEventListener('click', twittar);

function twittar() {
    let newTweet = document.createElement('li');
    let list = document.getElementById('list-post');

    newTweet.innerHTML = box.value;
    list.appendChild(newTweet);
    list.insertBefore(newTweet, list.firstChild);
    box.value = '';


    let dateHour = newTweet;
    let newDate = document.createElement('p');

    dateHour.insertBefore(newDate, dateHour.firstChild);
    newDate.innerHTML = tweetTime();

    btnBlocked();
    charCount();

}

box.addEventListener('input', charCount);

function charCount() {
    let charDig = parseInt(box.value.length);
    let charRest = charMax - charDig;
    count.innerHTML = charRest;
    changeCollor();
    autoResize();
}

box.addEventListener('keyup', changeCollor);


function changeCollor() {
    if (box.value.length < 120) {
        count.style.color = "black";
    } else if (box.value.length >= 120 && box.value.length <= 129) {
        count.style.color = "green";
    } else if (box.value.length >= 130 && box.value.length <= 139) {
        count.style.color = "yellow";
    } else if (box.value.length >= 140) {
        count.style.color = "red";
    }
}

function tweetTime() {
    let date = new Date;
    let hour = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let hourMinutes = hour + ":" + minutes;

    return hourMinutes
}

function autoResize() {
    box.style.cssText = "height:auto; padding:0";
    box.style.cssText = "height:" + box.scrollHeight + "px";
}
