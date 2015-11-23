function confirmaProjeto(){
    var confirmacao = window.confirm("Deseja realmente se inscrever nesse projeto?");

    if(confirmacao == true){
        alert('Inscrição feita com sucesso!');
    }else{
        alert('Inscrição cancelada!');
    }
}

function confirmaAtividade(){
    var confirmacao = window.confirm("Deseja realmente se inscrever nessa atividade?");

    if(confirmacao == true){
        alert('Inscrição feita com sucesso!');
    }else{
        alert('Inscrição cancelada!');
    }
}
