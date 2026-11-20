const btns = document.querySelectorAll(".button");
const output = document.getElementById("output");


btns.forEach(i => {
	i.addEventListener("click", () => {
		output.value += i.textContent;
	})
})
