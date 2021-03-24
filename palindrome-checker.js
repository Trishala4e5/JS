function palindrome(str) {
  var str1=str.replace(/[^0-9a-z]/gi, '')
  //console.log(str1);
  var str2=str1.toLowerCase()
  //console.log(str2)
  var str3=str2.split('').reverse().join('');
  console.log(str3);
  console.log(str2==str3);
  return(str2==str3);
  }
  



palindrome("not a palindrome");