function decryptMessage() {
    // Pega o valor da mensagem criptografada do campo de entrada
    const encryptedMessage = document.getElementById("encryptedMessage").value;
    // Pega a chave privada que o usuário inseriu
    const privateKey = document.getElementById("privateKey").value;

    if (!privateKey) {
        alert("Por favor, insira a chave privada.");
        return; 
    }

    // Criamos uma nova instância do JSEncrypt, que é nossa ferramenta para lidar com criptografia
    const jsEncrypt = new JSEncrypt();
    // Configuramos a chave privada que o usuário forneceu
    jsEncrypt.setPrivateKey(privateKey);

    // Tentamos descriptografar a mensagem criptografada usando a chave privada
    const decryptedMessage = jsEncrypt.decrypt(encryptedMessage);

    if (decryptedMessage) {
        document.getElementById("decryptedMessage").value = decryptedMessage;
    } else {
        alert("Erro ao descriptografar a mensagem. Verifique a chave privada.");
    }
}
