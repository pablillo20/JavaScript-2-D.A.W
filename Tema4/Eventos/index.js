
const btn = document.querySelector("button");

btn[0].addEventListener("mouseover", () => document.body.style.background="red");
btn[0].addEventListener("mouseout", () => document.body.style.background="red");
btn[1].addEventListener("click", () => document.body.style.background="blue");
btn[1].addEventListener("click", () => btn[0].removeEventListener("mouseout"));
btn[1].addEventListener("click", () => btn[0].removeEventListener("mouseover"));



