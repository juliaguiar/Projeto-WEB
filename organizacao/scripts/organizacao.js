
var menu;

function menu(){
	minhav="<ul><li><a href='http://www.ufal.edu.br/' title='perfil'>Organização X</a></li><li><a href='cadastro_atividade.html' title='cadastro_atividade'>Criar Nova Atividade</a></li><li><a href='cadastro_projeto.html' title='cadastro_projeto'>Criar Novo Projeto</a></li><li><a href='#' title='sair'>Sair do Transforma Maceió</a></li></ul>";
	document.getElementById('menu_organizador').innerHTML=minhav;
}

function sem_menu(){
	document.getElementById('menu_organizador').onmouseout = function() {
		document.getElementById('menu_organizador').innerHTML="";
	};
}

function colorImg(x) {
    x.style.border = "3px solid #663300";
}

function normalImg(x) {
    x.style.border = "none";
}

function valida_atividade(form) {
	if (form.titulo_atv.value=="") {
	alert("Preencha o campo 'Título'.");
		form.titulo_atv.focus();
                form.css({"border-color" : "#F00", "padding": "2px"}); 
	return false;
	}
	if (form.projeto_atv.value=="") {
	alert("Preencha o campo 'Projeto'.");
		form.projeto_atv.focus();
	return false;
	}
	if (form.data_atv.value=="") {
	alert("Preencha o campo 'Data'.");
		form.data_atv.focus();
	return false;
	}else{
		alert("Cadastro realizado com sucesso!")
	}
}

function valida_projeto(form) {
	if (form.titulo_proj.value=="") {
	alert("Preencha o campo 'Título'.");
		form.titulo_proj.focus();
                form.css({"border-color" : "#F00", "padding": "2px"}); 
	return false;
	}
	if (form.autor_proj.value=="") {
	alert("Preencha o campo 'Autor'.");
		form.autor_proj.focus();
	return false;
	}
	if (form.data_inicio_proj.value=="") {
	alert("Preencha o campo 'Data de Início'.");
		form.data_inicio_proj.focus();
	return false;
	}
	if (form.data_termino_proj.value=="") {
	alert("Preencha o campo 'Data de Término'.");
		form.data_termino_proj.focus();
	return false;
	}else{
		alert("Cadastro realizado com sucesso!")
	}
}
