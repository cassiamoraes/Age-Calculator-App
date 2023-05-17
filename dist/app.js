import { CalculatorController } from "./controllers/calculator.controller.js";
const controller = new CalculatorController();
const btn = document.querySelector('.btn');
btn.addEventListener('click', showDates);
function showDates() {
    controller.print();
}
