$('#btn-avaliou').click(function () {
    let p1 = $('input[name=p1]:checked').val()
    let p2 = $('input[name=p2]:checked').val()
    let p3 = $('input[name=p3]:checked').val()
    let p4 = $('input[name=p4]:checked').val()
    let p5 = $('input[name=p5]:checked').val()
    let obs = $("#obs").val()
    let nome = $("#nome").val()

    let formData = {
        p1: p1,
        p2: p2,
        p3: p3,
        p4: p4,
        p5: p5,
        obs: obs,
        nome: nome
    };

    $.ajax({
        type: 'POST',
        url: './enviarPesquisa',
        data: JSON.stringify(formData), // Converta o objeto formData para JSON
        dataType: 'json',
        contentType: 'application/json', // Adicione o header 'Content-Type'
        success: function (response) {
            console.log('Dados da pesquisa enviados com sucesso!');
            console.log(formData);
        },
        error: function (error) {
            console.error('Erro ao enviar dados da pesquisa:', error);
        },
    });
})