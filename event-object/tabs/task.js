document.addEventListener('DOMContentLoaded', function() {
	const tabs = document.querySelectorAll('.tab');
	const tabContents = document.querySelectorAll('.tab__content');

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			const isActive = tab.classList.contains('tab_active');
			tabs.forEach(tab => tab.classList.remove('tab_active'));
			if (!isActive) {
				tab.classList.add('tab_active');
			}

			tabContents.forEach(content => content.classList.remove('tab__content_active'));

			if (!isActive) {
				tabContents[index].classList.add('tab__content_active');
			} else {
				tabContents[index].classList.remove('tab__content_active');
			}
		});
	});
});