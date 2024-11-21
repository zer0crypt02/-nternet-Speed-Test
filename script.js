const startButton = document.getElementById('start-test');
const loadingCircle = document.getElementById('loading-circle');
const speedDisplay = document.getElementById('speed');
const pingDisplay = document.getElementById('ping');
const resultsDiv = document.getElementById('results');
const downloadSpeedDisplay = document.getElementById('download-speed');
const uploadSpeedDisplay = document.getElementById('upload-speed');

function simulateSpeedTest() {
    startButton.disabled = true;
    loadingCircle.style.display = 'block';
    resultsDiv.style.display = 'none';
    
    // Ping simulasyonu
    setTimeout(() => {
        const ping = Math.floor(Math.random() * 50) + 10;
        pingDisplay.textContent = ping;
    }, 500);

    // İndirme hızı testi simulasyonu
    let progress = 0;
    const downloadInterval = setInterval(() => {
        progress += Math.random() * 5;
        const currentSpeed = (Math.sin(progress / 10) * 20 + 50).toFixed(1);
        speedDisplay.textContent = currentSpeed;
        
        if (progress >= 100) {
            clearInterval(downloadInterval);
            downloadSpeedDisplay.textContent = speedDisplay.textContent;
            
            // Yükleme hızı testi simulasyonu
            progress = 0;
            const uploadInterval = setInterval(() => {
                progress += Math.random() * 5;
                const currentSpeed = (Math.sin(progress / 10) * 15 + 30).toFixed(1);
                speedDisplay.textContent = currentSpeed;
                
                if (progress >= 100) {
                    clearInterval(uploadInterval);
                    uploadSpeedDisplay.textContent = speedDisplay.textContent;
                    completeTest();
                }
            }, 100);
        }
    }, 100);
}

function completeTest() {
    loadingCircle.style.display = 'none';
    resultsDiv.style.display = 'block';
    startButton.disabled = false;
}

startButton.addEventListener('click', simulateSpeedTest);