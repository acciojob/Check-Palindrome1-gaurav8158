// complete the given function

function palindrome(str){
let str1 = text.toLowerCase();
	let str2 = str1.split("").reverse().join("");
	if(str1===str2) return true
	else false
}
module.exports = palindrome
