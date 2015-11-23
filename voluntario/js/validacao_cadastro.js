/* ARQUIVO JAVASCRIPT */


/* Função que valida o cadastro de um projeto */
function validar_projeto(){
    var nomeProj = document.form_projeto.nomeProj.value;
    var imagem = document.form_projeto.imagem.value;
    var dataiProj = document.form_projeto.dataiProj.value;
    var datafProj = document.form_projeto.datafProj.value;
    var email = document.form_projeto.email.value;
    var descricaoProj = document.form_projeto.descricaoProj.value;

    if(nomeProj == ""){
        alert('Por favor, preencha o campo nome.');
        document.form_projeto.nomeProj.focus();
        return false;
    }

    if(nomeProj.length < 6){
        alert('Por favor, informe um nome com no mínimo 6 caracteres.');
        document.form_projeto.nomeProj.focus();
        return false;
    }

    if(dataiProj == ""){
        alert('Por favor, preencha o campo data início.');
        document.form_projeto.dataiProj.focus();
        return false;
    }

    if(datafProj == ""){
        alert('Por favor, preencha o campo data fim.');
        document.form_projeto.datafProj.focus();
        return false;
    }

    if(email == ""){
        alert('Por favor, preencha o campo email.');
        document.form_projeto.email.focus();
        return false;
    }

    if(email.indexOf('@') == -1 || email.indexOf('.') == -1){
        alert('Por favor, informe um endereço de email válido.');
        document.form_projeto.email.focus();
        return false;
    }

    if(descricaoProj == ""){
        alert('Por favor, preencha o campo descrição.');
        document.form_projeto.descricaoProj.focus();
        return false;
    }

    if(descricaoProj.length < 10){
        alert('Por favor, informe uma descrição com no mínimo 10 caracteres.');
        document.form_projeto.descricaoProj.focus();
        return false;
    }

    alert('Projeto cadastrado com sucesso!');

}


/* Função que valida o cadastro de uma atividade */
function validar_atividade(){
    var nomeAtiv = document.form_atividade.nomeAtiv.value;
    var dataiAtiv = document.form_atividade.dataiAtiv.value;
    var datafAtiv = document.form_atividade.datafAtiv.value;
    var nomeProj2 = document.form_atividade.nomeProj2.value;
    var descricaoAtiv = document.form_atividade.descricaoAtiv.value;

    if(nomeAtiv == ""){
        alert('Por favor, preencha o campo nome.');
        document.form_atividade.nomeAtiv.focus();
        return false;
    }

    if(nomeAtiv.length < 6){
        alert('Por favor, informe um nome com no mínimo 6 caracteres.');
        document.form_atividade.nomeAtiv.focus();
        return false;
    }

    if(dataiAtiv == ""){
        alert('Por favor, preencha o campo data início.');
        document.form_atividade.dataiAtiv.focus();
        return false;
    }

    if(datafAtiv == ""){
        alert('Por favor, preencha o campo data fim.');
        document.form_atividade.datafAtiv.focus();
        return false;
    }

    if(nomeProj2 == ""){
        alert('Por favor, preencha o campo nome do projeto.');
        document.form_atividade.nomeProj2.focus();
        return false;
    }

    if(nomeProj2.length < 6){
        alert('Por favor, informe um nome de projeto com no mínimo 6 caracteres.');
        document.form_atividade.nomeProj2.focus();
        return false;
    }

    if(descricaoAtiv == ""){
        alert('Por favor, preencha o campo descrição.');
        document.form_atividade.descricaoAtiv.focus();
        return false;
    }

    if(descricaoAtiv.length < 10){
        alert('Por favor, informe uma descrição com no mínimo 10 caracteres.');
        document.form_atividade.descricaoAtiv.focus();
        return false;
    }

    alert('Atividade cadastrada com sucesso!');

}