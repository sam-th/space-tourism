const $ = document;
const buttonsContainer = $.querySelector('.slider-left__bottom-left');
const buttons = $.querySelectorAll(".slider-left__bottom-left__button")
const topText = $.querySelector('.slider-left__bottom-right__toptext')
const title = $.querySelector('.slider-left__bottom-right__title')
const mainText = $.querySelector('.slider-left__bottom-right__maintext')
const image = $.querySelector(".slider-right__mainimage")

function changingContents(imageSrc,topTextValue, titleValue, mainTextValue) {
    topText.innerHTML = topTextValue;
    title.innerHTML = titleValue;
    mainText.innerHTML = mainTextValue;
    image.setAttribute("src",imageSrc)
}

buttonsContainer.addEventListener("click", (e) => {
    let userSelectedElem = e.target

    buttons.forEach(button => {
        button.classList.remove("slider-left__bottom-left__button--active")
    });
    if (userSelectedElem.classList[0] == "slider-left__bottom-left__button"){
        userSelectedElem.classList.add("slider-left__bottom-left__button--active")
    };

    if (userSelectedElem.innerHTML == "2") {
        changingContents("./assets/technology/image-spaceport-portrait.jpg","THE TERMINOLOGY…","SPACEPORT","A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.");        
    }else if (userSelectedElem.innerHTML == "1") {
        changingContents("./assets/technology/image-launch-vehicle-portrait.jpg","THE TERMINOLOGY…", "LAUNCH VEHICLE", "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!")
    }else if (userSelectedElem.innerHTML == "3") {
        changingContents("./assets/technology/image-space-capsule-portrait.jpg","THE TERMINOLOGY…","SPACE CAPSULE","A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.");

    }
})