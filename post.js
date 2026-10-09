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
getpost()
