function simulateInvestment() {
    const initialAmount = parseFloat(document.getElementById("initial-amount").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value);
    const years = parseInt(document.getElementById("years").value);

    if (isNaN(initialAmount) || isNaN(interestRate) || isNaN(years)) {
        alert("Por favor, insira valores válidos para todos os campos.");
        return;
    }

    const finalAmount = initialAmount * Math.pow((1 + interestRate / 100), years);
    const resultText = `Após ${years} anos, seu investimento será de R$ ${finalAmount.toFixed(2)}`;

    document.getElementById("result-text").textContent = resultText;
}
