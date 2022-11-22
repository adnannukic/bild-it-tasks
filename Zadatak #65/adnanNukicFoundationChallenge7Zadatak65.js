/*
7. Pretpostaviti da # predstavlja tipku BACKSPACE koja se pritisne. Napišite funkciju
koja pretvara string koji sadrži # u string bez #.
PRIMJERI:
erase("he##l#hel#llo") ➞ "hello"
erase("major# spar##ks") ➞ "majo spks"
erase("si###t boy") ➞ "t boy"
erase("####") ➞ ""
*/

function erase(str) {
    let tempArr = [];
    let erasedStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '#') tempArr.push(str[i]);
        else if (tempArr.length !== 0) tempArr.pop();
    }
    for(let i = 0; i < tempArr.length; i++) {
        erasedStr += tempArr[i];
    }

    return erasedStr;
}

console.log(erase("####"));