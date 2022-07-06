const checkbox = document.querySelector('[data-checkbox]');
const container = document.querySelector('[data-container]');
const containerTop = document.querySelector('[data-container-top]');
const containerHeadText = document.querySelector('[data-container-head]');
const containerHeadSubText = document.querySelector('[data-container-subText]');
const containerCard = document.querySelectorAll('[data-container-card]');
const containerValueText = document.querySelectorAll('[data-value-text]');
const overviewText = document.querySelector('[data-overview]');
const containerCardSmall = document.querySelectorAll('[data-card-small]');
const cardSmallText = document.querySelectorAll('[data-card-text-small]');

// console.log(containerCard);

checkbox.addEventListener('change', () => {
	// container style
	container.classList.toggle('white');
	// container Top
	containerTop.classList.toggle('darkWhite');
	// ContainerHeadText
	containerHeadText.classList.toggle('whitetext');
	// Container Head subText
	containerHeadSubText.classList.toggle('whiteText');
	// Overview Text
	overviewText.classList.toggle('colorText');
	// container Card
	containerCard.forEach((item) => {
		item.classList.toggle('backWhite');
	});
	// container card main text
	containerValueText.forEach((item) => {
		item.classList.toggle('textChange');
	});
	// Small cards
	containerCardSmall.forEach((item) => {
		item.classList.toggle('backwhite');
	});
	// Small card text
	cardSmallText.forEach((item) => {
		item.classList.toggle('textChange');
	});
});
