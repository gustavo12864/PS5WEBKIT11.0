
// Função para tentar carregar o payload via fetch e WebSocket
function loadPayload() {
    console.log("Tentando carregar payload...");
    // Conexão com o servidor local para o download do payload
    fetch('http://192.168.0.109:9020/goldhen.bin')
        .then(response => response.blob())
        .then(data => {
            console.log("Payload carregado com sucesso!");
            // Processar o payload aqui, como injeção ou execução de código
        })
        .catch(error => {
            console.log("Falha ao carregar payload via fetch:", error);
        });

    // Também tentando via WebSocket
    const ws = new WebSocket('ws://192.168.0.109:9020');
    ws.onopen = () => {
        console.log('Conectado ao WebSocket');
        ws.send('Enviar payload');
    };
    ws.onerror = (error) => {
        console.log("Erro no WebSocket:", error);
    };
}
loadPayload();
    