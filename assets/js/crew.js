const btnsContainer = document.querySelector(".slider__left-buttons")
const silderTopText = document.querySelector(".slider__left-texts__top")
const silderCrewName = document.querySelector(".slider__left-texts__middle")
const silderDescription = document.querySelector(".slider__left-texts__bottom")
const sliderImg = document.querySelector(".slider__right-img")

const changingSliderContent = (topText, crewName, description, imgSrc) => {
	silderTopText.innerHTML = topText.trim();
	silderCrewName.innerHTML = crewName.trim();
	silderDescription.innerHTML = description.trim();
	sliderImg.setAttribute("src", imgSrc);
}

btnsContainer.addEventListener("click", (e) => {
	let element = e.target.id;
	let activeElem = document.querySelector(".btn--active");
	// removeing active btn
	activeElem.setAttribute("src", "./assets/crew/circle.png");
	activeElem.classList.remove("btn--active")
	document.querySelector(`#${element}`).classList.add("btn--active")
	// changing content and active btn
	if (element === "first") {
		 changingSliderContent("Commander", "Douglas Hurley", "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.","./assets/crew/image-douglas-hurley.webp");
		 document.querySelector(`#${element}`).setAttribute("src", "./assets/crew/circle_active.png");
	} else if (element === "second") {
		changingSliderContent("Mission Specialist", "MARK SHUTTLEWORTH", "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.","./assets/crew/image-mark-shuttleworth.webp");
		document.querySelector(`#${element}`).setAttribute("src", "./assets/crew/circle_active.png")
	}else if (element === "third") {
		changingSliderContent("PILOT", "Victor Glover", "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.", "./assets/crew/image-victor-glover.webp");
		document.querySelector(`#${element}`).setAttribute("src", "./assets/crew/circle_active.png")
	}else if (element === "forth") {
		changingSliderContent("Flight Engineer", "Anousheh Ansari", "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.", "./assets/crew/image-anousheh-ansari.webp");
		document.querySelector(`#${element}`).setAttribute("src", "./assets/crew/circle_active.png")
	}
})