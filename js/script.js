function calculate() {
    const stawkaGraficzne = 20;
    const stawkaZarzadcze = 10;
    const stawkaProgramistyczne = 35;

    const iloscGodzinGraficzne = Math.max(0, parseFloat(document.getElementById('graficzne').value) || 0);
    const iloscGodzinZarzadcze = Math.max(0, parseFloat(document.getElementById('zarzadcze').value) || 0);
    const iloscGodzinProgramistyczne = Math.max(0, parseFloat(document.getElementById('programistyczne').value) || 0);

    const wynik = (iloscGodzinGraficzne * stawkaGraficzne) + (iloscGodzinZarzadcze * stawkaZarzadcze) + (iloscGodzinProgramistyczne * stawkaProgramistyczne);

    const resultElement = document.getElementById('result');
    
    if (wynik >= 0) {
        resultElement.textContent = `Total: $${wynik.toFixed(2)}`;
    } else {
        resultElement.textContent = "Please enter valid hours (non-negative values).";
    }
}