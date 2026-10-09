logaut()

const btn = document.getElementById("btnlogin")
btn.addEventListener("click", function() {
    const user = document.querySelector("#recipient-name").value;
    const pass = document.querySelector("#pass").value;
    const paramitrs = {
        "username": user,
        "password": pass,
    }
    axios.post("https://tarmeezacademy.com/api/v1/login", paramitrs)
    .then((Response) => {
        const token = Response.data.token
        console.log(Response.data)
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(Response.data.user))

        
        const modalElement = document.getElementById('exampleModal')
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        
        if (modalInstance) {
            modalInstance.hide();
        }
        getbtn()
        setTimeout(()=>{
           box= document.getElementById("toast-alert").style.display="none"
        },2000)
        document.getElementById("content").innerHTML = "sacusflilly login"
        document.getElementById("ale").style.background="#d4edda"
       
        logaut()
    })
})

const logoutBtn = document.getElementById("btn6")
if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        logaut()
    })
}

function getbtn() {
    document.getElementById("toast-alert").style.display = "block"
}
function logaut() {
    let btn1 = document.getElementById("btn1")
    let btn2 = document.getElementById("btn2")
    let aout = document.getElementById("btn6")
    const btn7= document.getElementById("btnplus")

    if (localStorage.getItem("token") != null) {
        if (btn1) btn1.style.display = "none";
        if (btn2) btn2.style.display = "none";
        if (aout) aout.style.display = "block";
        btn7.style.display="block"
        function output(){
    const user = null
    const getname = localStorage.getItem("user")
    if(getname !=null){
        user = JSON.parse(getname)
    }
}
        const names = o()
        const value6 = names.username
        document.getElementById("user1").innerHTML = value6

    } else {
        
        if (aout) aout.style.display = "none";
    }
}
