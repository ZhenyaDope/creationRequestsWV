const site = document.querySelector('.site'),
	keywords = document.querySelector('.keyword'),
	result = document.querySelector('.result'),
	inputN = document.querySelector('.n'),
	inputSclick = document.querySelector('.sclick'),
	inputPar = document.querySelector('.par'),
	error = document.querySelector('.error'),
	clearBtn = document.querySelector('.clearBtn'),
	createBtn = document.querySelector('.createBtn');

function checkValueInput() {
	return keywords.value != false && inputN.value != false && inputSclick.value != false && inputPar.value != false
		? true
		: false;
}

function createRequest() {
	if (checkValueInput()) {
		let arrKeywords = keywords.value.split('\n');
		result.value = null;
		error.style.display = 'none';
		arrKeywords.forEach((e) => {
			if (e.length >= 3) {
				result.value += `${site.value};${e};${inputN.value};${inputSclick.value};&lr=${inputPar.value};\n`;
			}
		});
		result.style.display = 'block';
	} else {
		error.style.display = 'block';
		result.style.display = 'none';
	}
}

function clearInputValue() {
	(site.value = null),
		(keywords.value = null),
		(result.value = null),
		(inputN.value = null),
		(inputSclick.value = null),
		(inputPar.value = null),
		(result.style.display = 'none');
	error.style.display = 'none';
}
clearBtn.addEventListener('click', clearInputValue);
createBtn.addEventListener('click', createRequest);
