function rot13(str) {
  var string="";
  for(var i=0;i<str.length;i++){
    var temp=str.charAt(i);
    //console.log(temp);
    var charnum = str.charCodeAt(i)
    //console.log(charnum)
    if(charnum>=65 && charnum<=90){
      //console.log(String.fromCharCode(charnum));
      var charnum1=charnum+13;
      //console.log(charnum1);
      if(charnum1>90){
        var x=charnum1-91;
        //console.log(x);
        var charnum2= 65+x;
        //console.log(charnum2);
        //console.log(String.fromCharCode(charnum2))
        string=string+String.fromCharCode(charnum2)
        //console.log(string);
      }
      else{
        //console.log(String.fromCharCode(charnum1))
        string=string+String.fromCharCode(charnum1)
      }
      //console.log(string)
    }
    else{
      string=string+temp;
    }//console.log(string)
    
  }
  console.log(string);
  return string;
}

rot13("SERR PBQR PNZC");