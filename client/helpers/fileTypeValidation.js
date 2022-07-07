export function fileTypeValidation(value, arr) {
	let valid = true;
	if (value) {
		value.forEach((el) => {
			const type = el.name.split('.').pop();
			
			if (!arr.includes(type)) {
				valid = false;
			}
		});
	}
	return valid;
}
