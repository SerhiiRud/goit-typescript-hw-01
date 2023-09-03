import { concatenation } from "./concatenation";
const input = document.querySelector("input");
const button = document.querySelector("button");
if (button && input) {
    input.addEventListener("click", () => {
        concatenation("Hello!", input.value);
    });
}
