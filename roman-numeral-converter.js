
 var roman=[[1000, 'M'],[900, 'CM'],[500, 'D'],[400, 'CD'],[100, 'C'],[90, 'XC'],[50, 'L'],[40, 'XL'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],
  [1, 'I']];
function convertToRoman(num) {
  //var result = ""
  //if (num === 0) {
    //return '';
  //}
  //for (var i = 0; i < roman.length; i++) {
    //if (num >= roman[i][0]) {
      //console.log(num)
      //result += roman[i][1] 
      //console.log(result)
      //num=num-roman[i][1]
      //return( roman[i][1] + convertToRoman(num - roman[i][0]));
    //}
  var total = "";
  for (var i = 0; i < roman.length; i++) {
    while (num >= roman[i][0]) {
      total += roman[i][1];
      num -= roman[i][0];
    }
  }console.log(total);
  return total;
}


convertToRoman(36);