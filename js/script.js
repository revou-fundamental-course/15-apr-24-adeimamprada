let isCelsius = true; 
// true jika input adalah Celsius, false jika Fahrenheit

function convert() {
    const input = document.getElementById('inputValue').value;
    let result = 0;
    if (isCelsius) {
        result = (input * 9/5) + 32;
        document.getElementById('result').innerText = `${result}`;
    } else {
        result = (input - 32) * 5/9;
        document.getElementById('result').innerText = `${result}`;
    }
    updateModeKeterangan(); 
    // Memperbarui keterangan mode

    updateModeKeteranganLawan();

    updateCalculationMethod();
    
}

function reset() {
    document.getElementById('inputValue').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('calculationMethod').innerText = '';
}

function reverse() {
    isCelsius = !isCelsius;
    updateModeKeterangan(); 
    // Memperbarui keterangan mode
    updateModeKeteranganLawan()
    toggleDisplay()
}

function updateModeKeterangan() {
    const modeKeterangan = isCelsius ? "Celsius (°C):" : "Fahrenheit (°F):";
    document.getElementById('modeKeterangan').innerText = modeKeterangan;
}

function updateModeKeteranganLawan() {
    const modeKeteranganLawan = isCelsius ? "Fahrenheit (°F) :" : "Celsius (°C):" ;
    document.getElementById('modeKeteranganLawan').innerText = modeKeteranganLawan;
}

function updateCalculationMethod() {
    const input = document.getElementById('inputValue').value;
    if (isCelsius) {
        calculationMethod = `Untuk mengkonversi ${input} Celcius ke Fahrenheit: (${input} * 9/5) + 32 atau (${input} * 1.8) + 32.`;
        document.getElementById('calculationMethod').innerText = `${calculationMethod}`;
} 
    else {
        calculationMethod = `Untuk mengkonversi ${input} Fahrenheit ke Celcius: (${input} - 32) * 5/9 atau (${input} - 32) * 0.5556.`;
        document.getElementById('calculationMethod').innerText = `${calculationMethod}`;
    }

}

function toggleDisplay() {
    var cToF = document.getElementById('cToF');
    var fToC = document.getElementById('fToC');
    if (isCelsius) {
        cToF.style.display = "block";
        fToC.style.display = "none";
        isReverse = true;
    } else {
        cToF.style.display = "none";
        fToC.style.display = "block";
        isReverse = false;
    }
}