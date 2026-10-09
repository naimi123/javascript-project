const register = document.getElementById("btnregister")
register.addEventListener("click",function(){
    const username = document.getElementById("users").value
    const passored = document.getElementById("pass").value
    const email = document.getElementById("email").value
    const name = document.getElementById("name").value
     
    console.log(btn1,btn2) 
    const paramitre = {
        "username": username,
        "password": passored,
        "email": email,
        "name": name
    }
    
     axios.post("https://tarmeezacademy.com/api/v1/register", paramitre)
    .then((Response) => {
        const token = Response.data.token
        localStorage.setItem("token",token)
        const user = Response.data.user
        console.log(user)
        localStorage.setItem("user",JSON.stringify(user))
        const modalElement = document.getElementById('register')
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        
        if (modalInstance) {
            modalInstance.hide();
        }

           let btn1 = document.getElementById("btn1")
           let btn2 = document.getElementById("btn2")
           let aout = document.getElementById("btn6")
           const btn7= document.getElementById("btnplus")
           const  box= document.getElementById("toast-alert")


        if (localStorage.getItem("token") != null) {
        if (btn1) btn1.style.display = "none";
        if (btn2) btn2.style.display = "none";
        if (aout) aout.style.display = "block";
        btn7.style.display="block"
        if(box) box.style.display= "block"
        document.getElementById("ale").style.background="#d4edda"
        setTimeout(()=>{
           box= document.getElementById("toast-alert").style.display="none"
        },2000)
        document.getElementById("content").innerHTML = "sacusflilly register"
       

    } else {
        
        if (aout) aout.style.display = "none";
    }
        
         

    }).catch((error)=>{
        console.error(error)
    })

})