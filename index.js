let imagemDog = document.getElementById('imagemDog')
let infoDog = document.getElementById('perfil')

let dog = {
  nome: '',
  sexo: '',
  cor: '',
  porte: '', 
  peso: '', 
  data: '',

  parar: function () {
    imagemDog.innerHTML = `<img src="https://i.pinimg.com/originals/1f/e4/d2/1fe4d2d3bbabc4777b69092957dfeb42.gif" alt="cachorro" height="200" width="200">`
  },

  latir: function () {
    imagemDog.innerHTML = `<img src="https://i.pinimg.com/originals/4d/3e/33/4d3e33d2278c4e9386e7bb1c310047e1.gif" alt="cachorro latindo" height="200"></img>`
  },

  comer: function () {
    imagemDog.innerHTML = `<img src="https://i.pinimg.com/originals/fb/70/f4/fb70f46e3b39b589e07381735466f561.gif" alt="cachorro comendo" height="200"></img>`
  },

  pular: function(){
    imagemDog.innerHTML = `<img src="https://i.pinimg.com/originals/2c/a5/7c/2ca57cbbd8721c4f5fb893cba5a2217d.gif" alt="cachorro pulando" height="200" width="200"></img>`
  },

  correr: function () {
    imagemDog.innerHTML = `<img src="https://i.pinimg.com/originals/1b/11/0a/1b110aba188775ecac41384a43ab2135.gif" alt="cachorro correndo" height="200"></img>`
  },

  abaneORabo: function(){
    imagemDog.innerHTML = `<img src="https://i.pinimg.com/originals/22/3c/e3/223ce3a581b95ba733bfcbedd4b2130b.gif" alt="cachorro abanando o rabo" height="200" width="200"></img>`
  },

  dormir: function(){
    imagemDog.innerHTML = `<img src="https://i.pinimg.com/originals/8f/01/00/8f010018cf3fd71285fb4980b8a1c07a.gif" alt="cachorro dormindo" height="200" width="200"></img>`
  },

};

const envio = document.getElementById("submit");

envio.addEventListener("click", function (e) {
  e.preventDefault();
  let nome = document.getElementById('inputnome').value;
  let sexo = document.getElementById('sexo').value; 
  let cor = document.getElementById('cor').value; 
  let porte = document.getElementById('porte').value; 
  let peso = document.getElementById('peso').value; 
  let data = document.getElementById('inputNascData').value; 

  dog.nome = nome;
  dog.sexo = sexo;
  dog.cor = cor;
  dog.porte = porte;
  dog.peso = peso;
  dog.data = data;

  infoDog.innerHTML = `<h2> Pet cadastrado! Se chama ${nome}, é ${sexo}, tem a coloração ${cor}, é de porte ${porte}, pesa ${peso}Kg e nasceu em ${data}. </h2>`;

  console.log('O ' + nome + ' é '+ sexo +' , tem a coloração '+ cor +' , é de porte '+ porte + ', pesa '+ peso +'kg e nasceu em '+ data +'.')

});


const parar = document.getElementById('parar');
parar.addEventListener('click', function(e){
  e.preventDefault();
  dog.parar()
});

const latir = document.getElementById('latir');
latir.addEventListener('click', function(e){
  e.preventDefault();
  dog.latir()
});

const pular = document.getElementById('pular');
pular.addEventListener('click', function(e){
  e.preventDefault();
  dog.pular()
});

const abaneORabo = document.getElementById('abanar');
abaneORabo.addEventListener('click', function(e){
  e.preventDefault();
  dog.abaneORabo()
});

const comer = document.getElementById('comer');
comer.addEventListener('click', function(e){
  e.preventDefault();
  dog.comer()
});

const dormir= document.getElementById('dormir');
dormir.addEventListener('click', function(e){
  e.preventDefault();
  dog.dormir()
});

const correr= document.getElementById('correr');
correr.addEventListener('click', function(e){
  e.preventDefault();
  dog.correr()
});

