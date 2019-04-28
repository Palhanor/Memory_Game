// DOM
var areaPlacarPlayerUm = document.getElementById("playerUm");
var areaPlacarPlayerDois = document.getElementById("playerDois");

// Registra quem joga
var playerUmJoga = true;
var playerDoisJoga = false;

// Placar do jogo
var placarPlayerUm = 0;
var placarPlayerDois = 0;

// Numero de combinações acertadas
var combinacoes = 0;

// Biblioteca com as coeres das casas
var bibliotecaDeCores = ["#aeb249", "#f4b6c2", "#651e3e", "#4b8932", "#536878", "#3d1e6d", "#2f9599", "#594f4f", "#aeb249", "#f4b6c2", "#651e3e", "#4b8932", "#536878", "#3d1e6d", "#2f9599", "#594f4f"];

// Armazena qual casa ficou com qual cor
var registroSequencia = [];

// Salva quantas casas o player clicou
var tentativas = 0;

// Registra as cores das casas que foram tentadas
var valArray = [];

// Registra quais casas foram tentadas
var valValores = [];

// Controlador de distribuição aleatória das cores
var array = [];
var count = 0;

// Atribuidor de cores aleatórias para as casas
for(i=0; i<16; i++){
  // Gera um valor aleatório
  var random = Math.floor((Math.random() * 16));
  for(h=0; h<16; h++){
  	// Se o valor já estiver registrado no array ele tenta um novo valor
    while(random == array[h]){
      // Novo valor aleatório gerado 
      var random = Math.floor((Math.random() * 16));
      h = 0;
    }
  }
  // Uma cor referente ao valor aleatório é atribuida à devida posição num array
  registroSequencia[count] = bibliotecaDeCores[random];
  // Array de controle para impedir a repetição de valores aleatórios
  array[count] = random;
  count++;
}

// Função para quando clica em ambas as casas
function showImg(val){
  // Registra a casa e a cor selecionadas
  valValores[tentativas] = val;
  valArray[tentativas] = registroSequencia[val];
  tentativas++;
  console.log("Cores escolhidas: "+valArray);
  console.log("Valores das casas escolhidas: "+valValores);
  console.log("Numero de tentativas: "+tentativas);
  // Só dá prosseguimento caso as casas selecionadas sejam diferentes
  if (valValores[0] != valValores[1]) {
  	  // Exibe a cor na posição clicada pelo usuario - ERRO COM A EXIBIÇÃO DA SEGUNDA COR!
	  document.getElementById("img"+val).style.backgroundColor = registroSequencia[val];
	  console.log("Acendeu a casa "+val+" com a cor "+registroSequencia[val]);
	  // Para quando o player fizer a segunda tentativa
	  if(tentativas == 2){
	  	// Caso as cores sejam diferentes
	    if(valArray[0] != valArray[1]){
	      // Função pra apagar tudo
	      document.getElementById("img"+valValores[0]).style.backgroundColor = "#efeded";
	      document.getElementById("img"+valValores[1]).style.backgroundColor = "#efeded";
	      valArray = [];
	      valValores = [];
	      tentativas = 0;
	      // Se for a vez do player 1 passa a ser do player 2
	      if(playerUmJoga == true){
	      	playerUmJoga = false;
	      	playerDoisJoga = true;
	      }
	      // Se for a vez do player 2 passa a ser do player 1
	      else{
	      	playerUmJoga = true;
	      	playerDoisJoga = false;
	      }
	    }
	    // Caso as cores sejam iguais
	    else{
	      combinacoes++;
	      valArray = [];
	      valValores = [];
	      tentativas = 0;
	      // Se for a vez do player 1 ele ganha um ponto
	      if(playerUmJoga == true){
	      	placarPlayerUm++;
	      	areaPlacarPlayerUm.innerHTML = placarPlayerUm;
	      	console.log("Player Um: " + placarPlayerUm);
	      	console.log("Player Dois: " + placarPlayerDois);
	      }
	      // Se for a vez do player 2 ele ganha um ponto
	      else{
	      	placarPlayerDois++;
	      	areaPlacarPlayerDois.innerHTML = placarPlayerDois;
	      	console.log("Player Um: " + placarPlayerUm);
	      	console.log("Player Dois: " + placarPlayerDois);
	      }
	      // Se ocorrerem 8 combinações ou um dos playes pontuar mais que 4 o jogo acaba
	      if((combinacoes == 8) || (placarPlayerUm > 4) || (placarPlayerDois > 4)){
	      	if(placarPlayerUm > placarPlayerDois){
	      		document.getElementById("playerUmBox").style.border = "1px solid red";
	      		document.getElementById("playerUmBox").style.boxShadow = "0px 0px 10px red";
	      	}
	      	else if(placarPlayerDois > placarPlayerUm){
	      		document.getElementById("playerDoisBox").style.border = "1px solid red";
	      		document.getElementById("playerDoisBox").style.boxShadow = "0px 0px 10px red";
	      	}
	      	else{
	      		alert("Player 1: " + placarPlayerUm + "Player 2: " + placarPlayerDois + " - Players EMPATARAM!");
	      	}
	      }
	    }
	  }
  }
  // Se as casas forem iguais ele retorna as duas para o cinza e zera as tentativas
  else {
  	// Função para apagar tudo
  	document.getElementById("img"+valValores[0]).style.backgroundColor = "#efeded";
  	document.getElementById("img"+valValores[1]).style.backgroundColor = "#efeded";
    valArray = [];
    valValores = [];
    tentativas = 0;
  	// Se for a vez do player 1 passa a ser do player 2
    if(playerUmJoga == true){
      	playerUmJoga = false;
      	playerDoisJoga = true;
    }
    // Se for a vez do player 2 passa a ser do player 1
    else{
      	playerUmJoga = true;
      	playerDoisJoga = false;
    }
  }
}