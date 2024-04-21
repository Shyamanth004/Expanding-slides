var images = document.querySelectorAll("img");

images.forEach(function(image){
    image.addEventListener("click",function(){
        var ckimage = image;
        changestyle(ckimage);
    })
})

function changestyle(ckimage) {
    images.forEach(function(image){
        if(image == ckimage){
            image.style.opacity = "1";
            image.style.width = "350px";
        }
        else{
            image.style.opacity = "0.3";
            image.style.width = "30px";
        }
    });
};