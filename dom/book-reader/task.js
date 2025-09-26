const fontSizes = document.querySelectorAll('.font-size');
const textColors = document.querySelectorAll('.color.text_color_black, .color.text_color_gray, .color.text_color_whitesmoke');
const bgColors = document.querySelectorAll('.color.bg_color_black, .color.bg_color_gray, .color.bg_color_white');
const book = document.getElementById('book');

function changeFontSize(event) {
	event.preventDefault();

	fontSizes.forEach(item => item.classList.remove('font-size_active'));
	event.target.classList.add('font-size_active');

	book.classList.remove('book_fs-big', 'book_fs-small');
	if (event.target.dataset.size === 'small') {
		book.classList.add('book_fs-small');
	} else if (event.target.dataset.size === 'big') {
		book.classList.add('book_fs-big');
	}
}

fontSizes.forEach(item => item.addEventListener('click', changeFontSize));