document.addEventListener('DOMContentLoaded', (event) => {
    function fetchData() {
        // Supponiamo che il server Modbus sia raggiungibile tramite delle API REST
        fetch('http://192.168.10.5/api/modbus/19625')
            .then(response => response.json())
            .then(data => {
                document.getElementById('temp1').textContent = data.value;
            })
            .catch(error => {
                console.error('Errore nel recupero di Temp 1:', error);
                document.getElementById('temp1').textContent = 'Errore';
            });

        fetch('http://192.168.10.5/api/modbus/19653')
            .then(response => response.json())
            .then(data => {
                document.getElementById('temp2').textContent = data.value;
            })
            .catch(error => {
                console.error('Errore nel recupero di Temp 2:', error);
                document.getElementById('temp2').textContent = 'Errore';
            });
    }

    // Aggiorna i dati ogni 5 secondi
    setInterval(fetchData, 5000);

    // Carica i dati inizialmente
    fetchData();
});