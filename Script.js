var areaPlacarPlayerUm = document.getElementById("playerUm");
var areaPlacarPlayerDois = document.getElementById("playerDois");
var combinacoes = 0;
var playerUmJoga = true;
var playerDoisJoga = false;
var placarPlayerUm = 0;
var placarPlayerDois = 0;
var bibliotecaDeCores = ["#aeb249", "#f4b6c2", "#651e3e", "#4b8932", "#536878", "#3d1e6d", "#2f9599", "#594f4f", "#aeb249", "#f4b6c2", "#651e3e", "#4b8932", "#536878", "#3d1e6d", "#2f9599", "#594f4f"];
// Armazena qual casa ficou com qual cor
var registroSequencia = [];
var acertos = 0;

// #aeb249, #f4b6c2, #651e3e, #94ed71, #536878, #3d1e6d, 2f9599, 594f4f

var array = [];
var count = 0;

// Atribuidor de cores aleatórias para as casas
for(i=0; i<16; i++){
  var random = Math.floor((Math.random() * 16));
  for(h=0; h<16; h++){
    while(random == array[h]){
      var random = Math.floor((Math.random() * 16));
      h = 0;
    }
  }
  registroSequencia[count] = bibliotecaDeCores[random];
  array[count] = random;
  count++;
}


// Salva quantas casas o player clicou
var tentativas = 0;
// Registra as cores das casas que foram tentadas
var valArray = [];
// Registra quais casas foram tentadas
var valValores = []

// Função para quando clica em ambas as casas
function showImg(val){
  // Sistema pra verificar se (if) a cor já saiu e só validar caso não tenha saido
  document.getElementById("img"+val).style.backgroundColor = registroSequencia[val];
  valArray[tentativas] = registroSequencia[val];
  valValores[tentativas] = val;
  console.log(valArray);
  console.log(valValores);
  tentativas++;
  // Para quando o player fizer a segunda tentativa
  if(tentativas == 2){
  	// Caso as cores sejam diferentes
      document.getElementById("img2").style.backgroundColor = 'red';
          for (var i = 0; i < 2000000000; i++) {
            console.log(i);
      }
      document.getElementById("img2").style.backgroundColor = '#efeded';
      console.log("ta rapido")
    if(valArray[0] != valArray[1]){
      // Função para mostrar a segunda opção e atrasar um pouco (não funciona)
      // Função pra apagar tudo
      console.log(valValores[1]);
      console.log(registroSequencia[val]);
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
      // Se ocorrerem 8 combinações o jogo acaba
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