const img1 =  document.getElementById("homeio-img-1")
const img2 =  document.getElementById("homeio-img-2")
const img3 =  document.getElementById("homeio-img-3")

const lungoImg1 =  document.getElementById("lungo-img-1")
const lungoImg2 =  document.getElementById("lungo-img-2")
const lungoImg3 =  document.getElementById("lungo-img-3")

const leftButton = document.getElementById("homeio-left-button")
const rightButton = document.getElementById("homeio-right-button")
const lungoLeftButton = document.getElementById("lungo-left-button")
const lungoRightButton = document.getElementById("lungo-right-button")

var imgCount = 8;
var lungoImgCount = 14;


function presentation(img1,img2,img3,imgCount,maxSize,minSize, maxSizeAnim, minSizeAnim,projectName)
{
    var clickCount = 0;
    const maxSizeF = maxSize
    const minSizeF = minSize
    const maxSizeAnimF = maxSizeAnim
    const minSizeAnimF= minSizeAnim

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

presentation(img1,img2,img3, imgCount,"40vw", "20vw", "35vw","25vw","homeio")
presentation(lungoImg1,lungoImg2,lungoImg3, lungoImgCount,"40vw", "20vw", "35vw","25vw","lungo")

if(window.matchMedia('(max-width: 768px)').matches){
    console.log("match 768")
    leftButton.style.visibility = "visible"
    leftButton.style.display = "block"
    rightButton.style.visibility = "visible"
    rightButton.style.display = "block"

    lungoLeftButton.style.visibility = "visible"
    lungoLeftButton.style.display = "block"
    lungoRightButton.style.visibility = "visible"
    lungoRightButton.style.display = "block"

    lungoImg1.style.display = "none"
    img1.style.display = "none"
    lungoImg3.style.display = "none"
    img3.style.display = "none"

    img2.style.width = "60vw"
    lungoImg2.style.width = "60vw"
    img2.style.height = "60vw"
    lungoImg2.style.height = "60vw"

    function buttonClick(btn1, btn2, img,  projectName, imgCount) {
        var clickCount = 1;
        btn1.disabled = true
        btn2.onclick = () =>{
            clickCount += 1;
            btn1.disabled = false
            if (clickCount == imgCount)
            {
                btn2.disabled = true;
            }
            img.src = `img/${projectName}/${clickCount}.jpg`
            console.log(clickCount)
        };
        btn1.onclick = () => {
            clickCount -=1;
            btn2.disabled = false;
            if (clickCount == 1)
            {
                btn1.disabled = true;
            }
            img.src = `img/${projectName}/${clickCount}.jpg`
            console.log(clickCount)

        };
    }
    buttonClick(leftButton, rightButton, img2, "homeio", imgCount)
    buttonClick(lungoLeftButton, lungoRightButton, lungoImg2, "lungo", lungoImgCount)
}


