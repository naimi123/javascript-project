
 let aout = document.getElementById("btn6")
 let btn1 = document.getElementById("btn1")
 let btn2 = document.getElementById("btn2")
 const btn3 = document.getElementById("btnplus")
aout.addEventListener("click",function(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    if (btn1) btn1.style.display = "inline-block";
    if (btn2) btn2.style.display = "inline-block";
    btn3.style.display = "none"
      document.getElementById("toast-alert").style.display = "block"
      document.getElementById("content").innerHTML ="sacusflilly logout"
      document.getElementById("ale").style.background="#d4edda"
      
    setTimeout(()=>{
       document.getElementById("toast-alert").style.display = "none"
    },2000)


    
})