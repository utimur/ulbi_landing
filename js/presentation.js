const img1 =  document.getElementById("homeio-img-1")
const img2 =  document.getElementById("homeio-img-2")
const img3 =  document.getElementById("homeio-img-3")

const lungoImg1 =  document.getElementById("lungo-img-1")
const lungoImg2 =  document.getElementById("lungo-img-2")
const lungoImg3 =  document.getElementById("lungo-img-3")

const leftButton = document.getElementById("homeio-left-button")
const rightButton = document.getElementById("homeio-right-button")

var imgCount = 8;
var lungoImgCount = 14;


function presentation(img1,img2,img3,imgCount,maxSize,minSize, maxSizeAnim, minSizeAnim,projectName)
{
    var clickCount = 0;
    const maxSizeF = maxSize
    const minSizeF = minSize
    const maxSizeAnimF = maxSizeAnim
    const minSizeAnimF= minSizeAnim
    const name = projectName

    img3.onmouseover = () => {
        img3.style.width = minSizeAnimF
        img3.style.height = minSizeAnimF
        img2.style.width = maxSizeAnimF
        img2.style.height = maxSizeAnimF
    }
    img3.onmouseout = () => {
        img3.style.width = minSizeF
        img3.style.height = minSizeF
        img2.style.width = maxSizeF
        img2.style.height = maxSizeF
    }
    img1.onmouseover = () => {
        img1.style.width = minSizeAnimF
        img1.style.height = minSizeAnimF
        img2.style.width = maxSizeAnimF
        img2.style.height = maxSizeAnimF
    }
    img1.onmouseout = () => {
        img1.style.width = minSizeF
        img1.style.height = minSizeF
        img2.style.width = maxSizeF
        img2.style.height = maxSizeF
    }

    img3.onclick = () =>{
        clickCount += 1;
        if (clickCount === imgCount-1) {
            rightButton.disabled = true;
        }
        leftButton.disabled = false;
        img1.style.visibility = "visible"
        img1.src = `img/${projectName}/${clickCount}.jpg`
        img2.src = `img/${projectName}/${clickCount+1}.jpg`
        if (clickCount !== imgCount-1) {
            img3.src = `img/${projectName}/${clickCount + 2}.jpg`
        } else {
            img3.style.visibility = "hidden"
        }
        img2.style.width = maxSizeF
        img2.style.height = maxSizeF
        img1.style.height = minSizeF
        img1.style.width = minSizeF
        img3.style.height = minSizeF
        img3.style.width = minSizeF
    };

    img1.onclick = () => {
        clickCount -=1;
        if (clickCount === 0) {
            leftButton.disabled = true;
        }
        rightButton.disabled = false;
        img3.style.visibility = "visible"
        img1.src = `img/${projectName}/${clickCount}.jpg`
        img2.src = `img/${projectName}/${clickCount+1}.jpg`
        img3.src = `img/${projectName}/${clickCount+2}.jpg`
        if (clickCount !== 0) {
            img1.src = `img/${projectName}/${clickCount}.jpg`
        } else {
            img1.style.visibility = "hidden"
        }
    };
}

presentation(img1,img2,img3, imgCount,"512px", "128px", "452px","188px","homeio")
presentation(lungoImg1,lungoImg2,lungoImg3, imgCount,"512px", "128px", "452px","188px","lungo")

if(window.matchMedia('(max-width: 768px)').matches){
    presentation(img1,img2,img3, imgCount,"192px", "64px", "162px","94px","homeio")
    presentation(lungoImg1,lungoImg2,lungoImg3, imgCount,"192px", "64px", "162px","94px","lungo")
}
if(window.matchMedia('(max-width: 375px)').matches){
    presentation(img1,img2,img3, imgCount,"168px", "52px", "148px","72px","homeio")
    presentation(lungoImg1,lungoImg2,lungoImg3, imgCount,"168px", "52px", "148px","72px","lungo")
}


