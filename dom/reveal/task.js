const revealElements = document.querySelectorAll('.reveal');

function checkVisibility() {
	revealElements.forEach(element => {
		const elementTop = element.getBoundingClientRect().top;
		const elementBottom = element.getBoundingClientRect().bottom;

		if (elementTop < window.innerHeight && elementBottom >= 0) {
			element.classList.add('reveal_active');
		} else {
			element.classList.remove('reveal_active');
		}
	});
}

window.addEventListener('scroll', checkVisibility);

checkVisibility();