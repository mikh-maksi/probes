n1.addEventListener("input", fnc1);
n1.addEventListener("change", fnc2);

function fnc1(event){
  if (Number(n1.value)>=100){
    n1.setAttribute("chk", 1);
  }
  if (n1.hasAttribute("chk")){
      if ((Number(n1.value)>=145) && (Number(n1.value)<=210))
      {
        n1.style = "border: 3px solid green";
        txt.innerHTML='';
      }
      else{
        n1.style = "border: 3px solid red";
        txt.innerHTML='Out of range from 145 to 210';
      }
}
}
function fnc2(event){
 
      if ((Number(n1.value)>=145) && (Number(n1.value)<=210))
      {
        n1.style = "border: 3px solid green";
        txt.innerHTML='';
      }
      else{
        n1.style = "border: 3px solid red";
        txt.innerHTML='Out of range from 145 to 210';

      }

}
