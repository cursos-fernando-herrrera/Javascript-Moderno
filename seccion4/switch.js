
console.log("%c STRUCTURA SWITCH" , "color:orange;font-weight:bold;");


const dia = "2";


switch ( dia ) {
  case 0:
    console.log("domingo");
    
    break;
  case 1:
    console.log("lunes");
    break;
  case 2:
    console.log("martes");
    break;  

  default:
    console.log("no es lunes, martes o domingo");
    
    break;
}
