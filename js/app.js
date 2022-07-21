function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmailLowerCase(input, invalidMsg) {
	// validate email format
	const emailRegex =/^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#contactme-form");

const EMAIL_INVALID = "Please enter email all lowercase";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();
	// validate the form
	let emailValid = validateEmailLowerCase(form.elements["user-email"], EMAIL_INVALID);
	// if valid, submit the form.
	if (emailValid) {
		alert("Demo only. No form was posted.");
	}
});
