 const inputtitle = document.getElementById("input-title")
 const textinput = document.getElementById("text-input")
 const image = document.getElementById("formFile")
 const plus = document.getElementById("btncraet")
 
 
plus.addEventListener("click",function(){
    const value1 = inputtitle.value
    const value2 = textinput.value
    const imagesfile = image.files[0]
    const token = localStorage.getItem("token")
    const form = new FormData()
    form.append("title",value1)
    form.append("body",value2)
    if(imagesfile){
        form.append("image",imagesfile)
    }
    const header = {
         "Authorization":`Bearer ${token}`,
         "Content-Type" : "multipart/form-data"

    }
    axios.post("https://tarmeezacademy.com/api/v1/posts",form,{
        headers : header
    }).then((Response)=>{

         const modalElement = document.getElementById('posta')
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        
        if (modalInstance) {
            modalInstance.hide();
        }

          document.getElementById("ale").style.background="#d4edda"
        document.getElementById("toast-alert").style.display="block"
        document.getElementById("content").innerHTML ="sacusflilly created "
         setTimeout(()=>{
            document.getElementById("toast-alert").style.display="none"
         },2000)


        getpost()

        console.log(Response)
   getpost()
    }).catch((error)=>{
        console.log(error.response.data.message)
        const modalElement = document.getElementById('posta')
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        
        if (modalInstance) {
            modalInstance.hide();
        }
        
        document.getElementById("toast-alert").style.display="block";
        document.getElementById("content").innerHTML=error.response.data.message
        console.log("hello")
        document.getElementById("ale").style.background="#f8d7da"
        setTimeout(()=>{
            document.getElementById("toast-alert").style.display="none";
        },4000)
    })



})
  function getpost(){
    axios.get("https://tarmeezacademy.com/api/v1/posts")
    .then((Response)=>{
        const posts = Response.data.data
        document.getElementById("post").innerHTML = ""
         var til = ""
        for(post of posts){
            if(post.title !=null){
                til = post.title
            }
        const ccontent =  `
       <div class="container mt-5" id="post">
        <div class="container mt-5 col-9">
            <div class="card">
                <div class="card-header shadow p-3">
                    <img src="${post.author.profile_image}"   class="rounded-circle border border-2" style="width: 45px; height: 45px;" alt="profil">
                    <span class="fw-bold">${post.author.name} </span>
                </div>
                <div class="card-body pt-2">
                    <img src="${post.image}" class="rounded-2" style="height: 320px; width: 100%;object-fit: cover;" alt="">
                    <span class="fst-italic text-black-50 bg-white">${post.created_at}</span>
                    <h4 class="mt-2">${post.title}</h4>
                    <p>${post.body}</p>
                    <hr>
                    <div class="ico"></div>
                  <i class="fa-solid fa-pen"></i>
                  <span>(${post.comments_count}) comment</span>
                </div>
            </div>
        </div>
    </div>
    
        `
        document.getElementById("post").innerHTML += ccontent
        }
    }).catch((error)=>{
    console.log(Error)
    })
}
