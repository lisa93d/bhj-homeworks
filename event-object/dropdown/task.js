
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
	const value = dropdown.querySelector('.dropdown__value');
	const list = dropdown.querySelector('.dropdown__list');
	const items = dropdown.querySelectorAll('.dropdown__item');


	value.addEventListener('click', () => {
		list.classList.toggle('dropdown__list_active');
	});

	items.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();


			list.classList.remove('dropdown__list_active');
			value.textContent = item.textContent.trim();
		});
	});

});