const btns = document.querySelectorAll(".button");
const output = document.getElementById("output");


btns.forEach(i => {
	i.addEventListener("click", () => {
		if (output.value === "0") {
			output.value = "";
		}
		if (i.classList.contains("number") || i.classList.contains("equation")) {
			output.value += i.textContent;
		}
		if (i.textContent === "del" && output.value.length > 0) {
			output.value = output.value.slice(0, -1);
		}
		if (i.textContent === "AC") {
			output.value = "";
		}
	//	if (i.textContent === "%") {
	//		output.value = math.evaluate(output.value);
	//	}
		if (i.textContent === "=") {
			output.value = math.evaluate(output.value);
		}
	})
})
