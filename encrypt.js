let publicKey, privateKey;

function generateKeys() {
    // Criamos uma nova instância do JSEncrypt, definindo o tamanho da chave como 1024 bits
    const jsEncrypt = new JSEncrypt({default_key_size: 1024});
    
    // Geramos a chave pública e a chave privada
    publicKey = jsEncrypt.getPublicKey();
    privateKey = jsEncrypt.getPrivateKey();
    
    // Exibimos as chaves geradas nos campos apropriados da interface
    document.getElementById("publicKey").value = publicKey;
    document.getElementById("privateKey").value = privateKey;
    
}


function encryptMessage() {
    const message = document.getElementById("message").value;   

    if (!publicKey) {
        alert("Por favor, gere a chave pública primeiro.");
        return; 
    }

    // Criamos uma nova instância do JSEncrypt para realizar a criptografia
    const jsEncrypt = new JSEncrypt();
    // Configuramos a chave pública para a instância do JSEncrypt
    jsEncrypt.setPublicKey(publicKey);
    
    // Tentamos criptografar a mensagem usando a chave pública
    const encryptedMessage = jsEncrypt.encrypt(message);

    // Verificamos se a criptografia foi bem-sucedida
    if (encryptedMessage) {
        // Se funcionou, mostramos a mensagem criptografada no campo designado
        document.getElementById("encryptedMessage").value = encryptedMessage;
    } else {
        // Caso contrário, alertamos que houve um erro na criptografia
        alert("Erro ao criptografar a mensagem.");
    }
}
