function cheekPalindrome(str){
    let str1="";
    for(let i=str.length-1;i>=0;i--){
        str1= str1+ str[i];
    }
    if(str1==str){
        return "yes";
    }else{
        return "No";
    }
}
console.log(cheekPalindrome("abcdcba"));