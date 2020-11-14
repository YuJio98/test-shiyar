let codes = document.getElementById("codes");
let run = document.getElementById("run");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

run.onclick = ()=>{
     result.innerHTML = codes.value;
     localStorage.setItem("RESULT", codes.value);
}

remove.onclick = ()=>{
    result.innerHTML = "";
};

onload = ()=>{
    codes.value = localStorage.getItem("RESULT");
     result.innerHTML = codes.value;
}