/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);

    const reversedStr = cleanStr.split('').reverse().join('');
    console.log(reversedStr);

    return cleanStr === reversedStr;
}

function palindromeChecker(){

    const inputText = document.getElementById("inputText");
    const result = document.getElementById("result");

    if(isPalindrome(inputText.value)){
        result.textContent = `"${inputText.value}" is a Palindrome`;
    }else{
        result.textContent = `"${inputText.value}" is not a Palindrome`;
    }

}

document.getElementById('checkBtn').addEventListener("click", palindromeChecker);