const formSubscription = document.getElementById("form-subscription");

const validateSubscriptionForm = () => {
	const lastName = document.getElementById("txtNom");
	const firstName = document.getElementById("txtPrenom");
	const email = document.getElementById("email");
	const phoneNumber = document.getElementById("numTel");
	const address = document.getElementById("txtAdresse");
	const city = document.getElementById("txtVille");
	const zipCode = document.getElementById("txtCodePostal");
	const recipePackage = document.getElementById("selForfait");

	const lastNameValue = lastName.value.trim();
	const firstNameValue = firstName.value.trim();
	const emailValue = email.value.trim();
	const phoneNumberValue = phoneNumber.value.trim();
	const addressValue = address.value.trim();
	const cityValue = city.value.trim();
	const zipCodeValue = zipCode.value.trim();
	const recipePackageValue = recipePackage.value.trim();

	let noError = true;

	if (lastNameValue === "") {
		setError(lastName, "Ce champ est requis.");
		noError = false;
	} else {
		setSuccess(lastName);
	}

	if (firstNameValue === "") {
		setError(firstName, "Ce champ est requis.");
		noError = false;
	} else {
		setSuccess(firstName);
	}

	if (emailValue === "") {
		setError(email, "Ce champ est requis.");
		noError = false;
	} else if (!isValidEmail(emailValue)) {
		setError(email, "Adresse courriel invalide.");
		noError = false;
	} else {
		setSuccess(email);
	}

	if (phoneNumberValue === "") {
		setError(phoneNumber, "Ce champ est requis.");
		noError = false;
	} else {
		setSuccess(phoneNumber);
	}

	if (addressValue === "") {
		setError(address, "Ce champ est requis.");
		noError = false;
	} else {
		setSuccess(address);
	}

	if (cityValue === "") {
		setError(city, "Ce champ est requis.");
		noError = false;
	} else {
		setSuccess(city);
	}

	if (zipCodeValue === "") {
		setError(zipCode, "Ce champ est requis.");
		noError = false;
	} else if (!isValidZipCode(zipCodeValue)) {
		setError(zipCode, "Code postal invalide.");
		noError = false;
	} else {
		setSuccess(zipCode);
	}

	if (recipePackageValue === "") {
		setError(recipePackage, "Ce champ est requis.");
		noError = false;
	} else {
		setSuccess(recipePackage);
	}

	return noError;
};

const isValidEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const isValidZipCode = (zipCode) => {
	const re = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
	return re.test(String(zipCode).toUpperCase());
};

const setError = (element, message) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".errorMessage");

	errorDisplay.innerText = message;
	inputControl.classList.add("error");
	inputControl.classList.remove("success");
};

const setSuccess = (element) => {
	const inputControl = element.parentElement;
	const errorDisplay = inputControl.querySelector(".errorMessage");

	errorDisplay.innerText = "";
	inputControl.classList.remove("error");
	inputControl.classList.add("success");
};
