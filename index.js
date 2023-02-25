let countValue = document.querySelector('#counter');

function increment()  { 
    // fetch tha value from UI
    let value = parseInt(countValue.innerText);
    // update tha value
    value = value + 1;
    // set value onto UI
    countValue.innerText = value;
};


function decrement ()  { 
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
};