function calc(opr)
{
  var a2=0;


  var a1 = cal.display.value;
  a2 = a1.charAt(a1.length-1);
  if(a2 == '/' || a2 == '+' || a2 == '-' || a2 == '*')
  { 
    cal.display.value = a1.substring(0,a1.length-1);
    cal.display.value += opr;       
  }
  else
  {
   cal.display.value+= opr;
  }
}
