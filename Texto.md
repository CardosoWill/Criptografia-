# Criptografia-
criptografia um texto e descriptografia o mesmo 



Feito por: William Cardoso Hobold | José Carlos Reche



Sistema de Criptografia e Descriptografia de Mensagens
Foi desenvolvido para criar um sistema simples de criptografia e descriptografia de mensagens utilizando chaves públicas e privadas, através da biblioteca JSEncrypt.

Funções Principais
Gerar Chaves (generateKeys):

Esta função cria um par de chaves (pública e privada) utilizando a biblioteca JSEncrypt.
A chave pública pode ser compartilhada com qualquer pessoa que queira enviar mensagens criptografadas, enquanto a chave privada deve ser mantida em segredo pelo usuário.
Quando as chaves são geradas, elas são exibidas nos campos apropriados da interface, permitindo que o usuário as copie e as utilize posteriormente.

Criptografar Mensagem (encryptMessage):

Antes de criptografar uma mensagem, a função verifica se a chave pública foi gerada.
O usuário insere a mensagem que deseja criptografar, e a função utiliza a chave pública para transformar essa mensagem em uma forma secreta, que só pode ser revertida à sua forma original por alguém que possua a chave privada.
Se a criptografia for bem-sucedida, a mensagem criptografada é exibida em um campo na interface.
Descriptografar Mensagem (decryptMessage):

Para descriptografar uma mensagem, o usuário deve inserir a chave privada.
A função verifica se a chave foi fornecida e, em seguida, utiliza-a para tentar reverter a mensagem criptografada à sua forma original.
Se a operação for bem-sucedida, a mensagem original é exibida; caso contrário, um alerta informa que houve um erro.

Utilização
Geração de Chaves:

O usuário inicia o processo clicando no botão para gerar as chaves. Ao fazer isso, um par de chaves é gerado automaticamente, e as chaves são exibidas na tela.
Criptografia de Mensagens:

O usuário insere uma mensagem no campo designado e clica no botão para criptografar. A mensagem é então transformada e a versão criptografada é mostrada.
Descriptografia de Mensagens:

Para ler uma mensagem criptografada, o usuário deve copiar a chave privada, colá-la no campo correspondente e inserir a mensagem criptografada. Após clicar no botão de descriptografar, a mensagem original é exibida.