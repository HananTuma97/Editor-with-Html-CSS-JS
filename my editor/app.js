let codes=document.getElementById("code");
let run= document.getElementById("run");
let remove= document.getElementById("remove");
let result= document.getElementById("result");

run.onclick =() =>{
    result.innerHTML=codes.value; 
    localStorage.setItem("ResulT", codes.value);
    
};

remove.onclick=()=>{
    result.innerHTML="";
    codes.value= "";
}

onload= ()=>{
    codes.value= localStorage.getItem("ResulT");
}