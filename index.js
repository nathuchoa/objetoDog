var imagemDog = document.getElementById('imagemDog')
var infoDog = document.getElementById('perfil')

var dog = {
  nome: '',
  nascimento: '',

  parar: function () {
    imagemDog.innerHTML = `<img src="https://images.vexels.com/media/users/3/239031/isolated/preview/e88026be3961deeaae5177f394ea6940-cachorro-da-montanha-suico-2.png" alt="cachorro" height="200" width="200">`
  },

  latir: function () {
    imagemDog.innerHTML = `<img src="https://c.tenor.com/P3qBe2UYu9IAAAAC/cachorro-cao-amigo.gif" alt="cachorro pulando" height="200"></img>`
  },

  comer: function () {
    imagemDog.innerHTML = `<img src="https://meucaovelhinho.com.br/wp-content/uploads/2016/04/cao_comendo4.gif" alt="cachorro pulando" height="200"></img>`
  },

  pular: function(){
    imagemDog.innerHTML = `<img src="https://www.imagensanimadas.com/data/media/202/cachorro-imagem-animada-0731.gif" alt="cachorro pulando" height="200" width="200"></img>`
  },

  abaneORabo: function(){
    imagemDog.innerHTML = `<img src="https://i.pinimg.com/originals/b0/73/9a/b0739a321d83761c189b217c43efac85.gif" alt="cachorro pulando" height="200" width="200"></img>`
  },

  exibirDog: function(){
    console.log(cachorro)
    /* infoDog.innerHTML = `<h2> Essa fofurinha se chama ${nome} e nasceu em ${data} </h2>`; */
  },
};

var envio = document.getElementById("submit");

envio.addEventListener("click", function (e) {
  e.preventDefault();
  var nome = document.getElementById('inputnome').value;
  var data = document.getElementById('inputNascData').value; 
  console.log(nome + ' nasceu em ' + data);
  dog.nome = nome;
  dog.data = data;
 

});


var parar = document.getElementById('parar');
parar.addEventListener('click', function(e){
  e.preventDefault();
  dog.parar()
});

var latir = document.getElementById('latir');
latir.addEventListener('click', function(e){
  e.preventDefault();
  dog.latir()
});

var pular = document.getElementById('pular');
pular.addEventListener('click', function(e){
  e.preventDefault();
  dog.pular()
});

var abaneORabo = document.getElementById('abanar');
abaneORabo.addEventListener('click', function(e){
  e.preventDefault();
  dog.abaneORabo()
});

var comer = document.getElementById('comer');
comer.addEventListener('click', function(e){
  e.preventDefault();
  dog.comer()
});

/* 
ZICÃO
  ATRIBUTOS
  - raça
  - cor
  - porte
  - pelagem
  - sexo
  - idade
  - peso
  - ehCastrado

  METODOS
  - latir
  - andar
  - comer
  - fazerCoco
  - fazerXixi
  - rolar
  - rasgarOLixo
  - dormir */
