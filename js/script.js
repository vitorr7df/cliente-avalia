const enviarPesquisa = function () {
    const formData = {
        p1: $('input[name=p1]:checked').val(),
        p2: $('input[name=p2]:checked').val(),
        p3: $('input[name=p3]:checked').val(),
        p4: $('input[name=p4]:checked').val(),
        p5: $('input[name=p5]:checked').val(),
    };

    $.ajax({
        type: 'POST',
        url: '/enviarPesquisa', // Rota do servidor que recebe e salva os dados da pesquisa
        data: formData,
        dataType: 'json',
        success: function (response) {
            // Ação de sucesso (opcional) - Você pode exibir uma mensagem de sucesso, redirecionar o usuário, etc.
            console.log('Dados da pesquisa enviados com sucesso!');
        },
        error: function (error) {
            // Ação em caso de erro (opcional) - Você pode exibir uma mensagem de erro, registrar o erro, etc.
            console.error('Erro ao enviar dados da pesquisa:', error);
        },
    });
};
