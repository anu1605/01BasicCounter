var number = document.getElementById('number');
var error = document.getElementById('error');
number.innerHTML = 0;
var limitExceeded = false;

function decrease(){
    if(number.innerHTML <= 0){
        error.innerHTML = "Counter Limit Exceeded";
        error.style.display = 'block'
        limitExceeded = true;
    }
    else {
        number.innerHTML = parseInt(number.innerHTML)-1;
        limitExceeded = false;
    }
}

document.addEventListener('mouseup', function(){
    
    if(limitExceeded){
        error.style.display = 'none';
    }
});

function increase(){
    if(number.innerHTML >= 10){
        error.innerHTML = "Counter Limit Exceeded";
        error.style.display = 'block'
        limitExceeded = true;
    }
    else {
        number.innerHTML = parseInt(number.innerHTML)+ 1;
        limitExceeded = false;
    }
}