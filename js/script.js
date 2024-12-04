const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
  
const validate = (e) => {
  e.preventDefault();
 
  if (name.value.length < 3) {
    errorElement.innerHTML = 'Seu nome deve ter ao menos 3 caracteres';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Use um Email válido';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Por favor, use um email valido';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Escreva uma mensagem maior';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Obrigado! Iremos retornar assim que possível'; 

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);

AOS.init({
  duration: 1200, // Tempo da animação
  once: true, // A animação acontece apenas uma vez
  offset: 200, // Distância que o usuário precisa rolar antes de disparar a animação
});

AOS.init();

// Abre e fecha o modal da introdução
document.getElementById("saiba-mais-btn").onclick = function() {
  document.getElementById("intro-modal").style.display = "block";
}

document.getElementById("close-intro-modal").onclick = function() {
  document.getElementById("intro-modal").style.display = "none";
}

// Abre e fecha o modal para a lista de ONGs
document.getElementById("doe-agora-btn").onclick = function() {
  document.getElementById("doe-modal").style.display = "block";
}

document.getElementById("close-doe-modal").onclick = function() {
  document.getElementById("doe-modal").style.display = "none";
}

// Fecha os modais ao clicar fora deles
window.onclick = function(event) {
  if (event.target == document.getElementById("intro-modal")) {
      document.getElementById("intro-modal").style.display = "none";
  } else if (event.target == document.getElementById("doe-modal")) {
      document.getElementById("doe-modal").style.display = "none";
  }
}

let faq = document.getElementById("faq")

faq.addEventListener('click', ()=>{
  alert('O FAQ ainda está em processo de desenvolvimento, por favor, tente novamente em outro momento')
})

let retorno = document.getElementById("return")

retorno.addEventListener('click', ()=>{
  alert('Não há status de retorno')
})

let comoDoar = document.getElementById('comoDoar')

comoDoar.addEventListener('click', ()=>{
  alert('No ínicio do site existe um botão chamado Doe Agora, clique nele e selecione uma ONG de seu interesse')
})

document.getElementById("otherOng").onclick = function() {
  document.getElementById("doe-modal").style.display = "block";
}