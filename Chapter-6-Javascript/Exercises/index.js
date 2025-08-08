function calculate() {
    const price = parseFloat(document.getElementById("Petrol_Price").value);
    const liters = parseFloat(document.getElementById("liters").value);
    const totalAmountElement = document.getElementById("totalAmount");

    if (isNaN(price) || isNaN(liters)) {
        totalAmountElement.textContent = "Please enter valid numbers.";
        totalAmountElement.style.color = "red";
        return;
    }

    const total = price * liters;
    totalAmountElement.textContent = `AED ${total.toFixed(2)}`;
    totalAmountElement.style.color = "green";
}
