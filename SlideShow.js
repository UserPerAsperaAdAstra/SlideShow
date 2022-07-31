const buttonNextPhoto=document.createElement('button');
buttonNextPhoto.innerText=">";
buttonNextPhoto.id="NextPhoto";
buttonNextPhoto.style.position="absolute";
buttonNextPhoto.style.left="1000px";
buttonNextPhoto.style.top="150px";
buttonNextPhoto.addEventListener("click",function() { ChangeToNextPhoto() });
document.body.appendChild(buttonNextPhoto);


const buttonPreviousPhoto=document.createElement('button');
buttonPreviousPhoto.innerText="<";
buttonPreviousPhoto.id="PreviousPhoto";
buttonPreviousPhoto.style.position="absolute";
buttonPreviousPhoto.style.left="177px";
buttonPreviousPhoto.style.top="150px";
buttonPreviousPhoto.addEventListener("click",function() { ChangeToPreviousPhoto() });
document.body.appendChild(buttonPreviousPhoto);


const SlideShowImg=document.createElement('img');
SlideShowImg.innerText="SLIDESHOW";
SlideShowImg.id="SlideShowImg";
SlideShowImg.style.position="absolute";
SlideShowImg.style.backgroundColor="Yellow";
SlideShowImg.style.left="200px";
SlideShowImg.style.top="100px";
SlideShowImg.style.height="600px";
SlideShowImg.style.width="800px";
document.body.appendChild(SlideShowImg);


document.body.style.backgroundColor="Green";

var ii=1;
SlideShowImg.src=".//Photos//Sunset" + ii + ".jpg"

function ChangeToNextPhoto() {
    ii++;
    if (ii>6) ii=1;
    SlideShowImg.src=".//Photos//Sunset" + ii + ".jpg";
    videno=SlideShowImg.src.slice(10,);
}

function ChangeToPreviousPhoto() {
    ii--;
    if (ii<1) ii=6;
    SlideShowImg.src=".//Photos//Sunset" + ii + ".jpg";
    videno=SlideShowImg.src.slice(10,);
}
