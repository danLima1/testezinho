$(document).ready(function() {

    $('#iniciarBot').click(function() {
        // Verificação de se o usuário está logado, caso necessário
        // Implemente sua lógica de verificação do lado do servidor!
        // 
        // Exemplo:
        // if (usuarioLogado()) { // Lógica de verificação do usuário 
            // Envie um sinal para sua API para ativar o bot
            $.ajax({
                url: '/ativarBot', 
                method: 'POST', 
                data: { usuario: 'daniel' },  
                success: function(response) {
                    $('#statusBot').text('Status: Ativo'); 
                    // ... Outra  lógica aqui (ex: começar  a  atualizar os  sinais)
                    atualizarSinais(); //  Chame  essa  função  periodicamente para  atualizar  os  sinais
                }, 
                error: function(error) {
                    console.error('Erro ao ativar o Bot', error); 
                    // Trate o erro (ex: mostre  uma mensagem ao usuário)
                    $('#statusBot').text('Status: Erro');
                }
            });
        // } else {
        //     // Redirecione  o  usuário  para  a página  de login, ou exiba  um  alerta
        // }

    });

    $('#pararBot').click(function() {
        //  Envie  um  sinal  para  sua  API  para  desativar  o  bot
        $.ajax({
            url: '/desativarBot',
            method: 'POST', 
            data: { usuario: 'daniel' }, 
            success: function(response) {
                $('#statusBot').text('Status: Desligado'); 
            }, 
            error: function(error) {
                console.error('Erro ao desativar o Bot', error); 
                $('#statusBot').text('Status: Erro'); 
            }
        });
    });

    function atualizarSinais() {
        $.ajax({
            url: '/sinais', 
            method: 'GET', 
            // Adicione  parâmetros de usuario (ou token) à  sua  requisição  de sinais
            data: { usuario: 'daniel' },
            success: function(response) {
                // ... Renderizar a lista  de  sinais na  tela com os  dados da  resposta 
                $('#sinaisList').html(''); // Limpe a lista 
                response.forEach(function(sinal) {
                    $('#sinaisList').append(`<li>${sinal}</li>`); //  Exibe cada  sinal
                });
            }, 
            error: function(error) {
                console.error('Erro ao buscar os Sinais', error);
                // Trate  o erro 
            }
        });
        // Defina  o  intervalo de tempo (em milissegundos)  para  chamar  essa função (ex: a cada  5  segundos)
        setTimeout(atualizarSinais, 5000); 
    } 
});