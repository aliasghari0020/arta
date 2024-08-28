const fileUploader = ()=>{
    document.querySelector("#uplpad-btn").addEventListener('click',()=>{
        
        document.getElementById('upload-avatar').click();
    })
}

if(document.querySelector("#uplpad-btn")){
    fileUploader()
}
