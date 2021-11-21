/*const $html = document.querySelector('html')
				const $checkbox = document.querySelector('#switch')

				$checkbox.addEventListener('change', function(){
					$html.classList.toggle('dark-mode')})
*/

const toggle = document.getElementById('toggle');
const body = document.querySelector('body')
const a = document.querySelector('a')

toggle.onclick = function () {
	toggle.classList.toggle('active');
	body.classList.toggle('active');
	a.classList.toggle('active')
}