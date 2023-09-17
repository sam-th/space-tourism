let $ = document;
const buttonsContaner = $.querySelector(".main__right-topbar");
const buttons = $.querySelectorAll(".main__right-topbar__item");
const imge = $.querySelector(".main__left-img");
const title = $.querySelector(".main__right-main__title");
const text = $.querySelector(".main__right-main__text")
const distance = $.querySelector(".distance")
const time = $.querySelector(".time")

let planets = []
buttons.forEach(button => {
    planets.push(button.innerHTML)
})

function changingActiveItem(elem) {
    buttons.forEach(button => {
        if (button.classList[1] == "main__right-topbar__item--active") {
            button.classList.remove("main__right-topbar__item--active");
        }
    })
    elem.classList.add('main__right-topbar__item--active')
};
function changeingContent(imgeSrcValue, titleValue, textValue, timeValue, distanceValue) {
    imge.setAttribute("src", imgeSrcValue);
    title.innerHTML = titleValue;
    text.innerHTML = textValue;
    time.innerHTML = timeValue;
    distance.innerHTML = distanceValue;
}
function displayContent(elemntText, elem) {
    if (elemntText == "mars") {
        changingActiveItem(elem)
        changeingContent("./assets/destination/image-mars.webp", "MARS", "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!", "9 MONTHS", "225 MIL. km")
    } else if (elemntText == "moon") {
        changingActiveItem(elem)
        changeingContent("./assets/destination/image-moon.webp", "MOON", "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", "3 days", "384,400 KM")
    } else if (elemntText == "europa") {
        changingActiveItem(elem)
        changeingContent("./assets/destination/image-europa.webp", "EUROPA", "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", "3 years", "628 MIL. km")
    } else if (elemntText == "titan") {
        changingActiveItem(elem)
        changeingContent("./assets/destination/image-titan.webp", "TITAN", "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.", "7 years", "1.6 BIL. km")
    }
}
buttonsContaner.addEventListener("click", (e) => {
    elemntText = e.target.innerHTML.toLowerCase();
    elem = e.target
    displayContent(elemntText, elem)
})