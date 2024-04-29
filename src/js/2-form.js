import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let formData = {
	email: "",
	message: ""
};


const savedFormData = localStorage.getItem("feedback-form-state");
if (savedFormData) {
	formData = JSON.parse(savedFormData);
}

function saveFormData() {
	localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

document.querySelector(".feedback-form").addEventListener("input", (event) => {
	const { name, value } = event.target;
	formData[name] = value.trim();
	saveFormData();
});

document.querySelector(".feedback-form").addEventListener("submit", (event) => {
	event.preventDefault();


	if (formData.email && formData.message) {
		console.log(formData);
		localStorage.removeItem("feedback-form-state");
		formData = { email: "", message: "" };
		document.querySelector(".feedback-form").reset();
	} else {
		alert("Fill please all fields");
	}
});
