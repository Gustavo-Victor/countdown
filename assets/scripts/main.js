//elements and variables
const btnSubscribe = window.document.querySelector('#subscribe'); 
const btnSubmit = window.document.querySelector('#submit'); 
const btnCancel = window.document.querySelector("#cancel"); 
const modalOverlay = window.document.querySelector('.modal-overlay'); 
const daysEl = window.document.getElementById('days');
const hoursEl = window.document.getElementById('hours');
const minutesEl = window.document.getElementById('minutes');
const secondsEl = window.document.getElementById('seconds');
const modalForm = window.document.querySelector(".modal-form"); 
const inputName = window.document.getElementById('name'); 
const inputEmail = window.document.getElementById('email');


//events
btnSubscribe.addEventListener('click', toggleModal);
btnSubmit.addEventListener('click', () => {
    let name = inputName.value; 
    let email = inputEmail.value; 
    if(!name == '' && !email == '') {
        name = name.trim().replace(/\d/, '');    
        email = email.trim(); 

        if(name.length < 3) {
            window.alert('Nome deve no mínimo 3 caracteres...'); 
        } else {
            if(!validateEmail(email)){
                window.alert(`
                    Insira um endereço de e-mail válido 
                    - 3 caracteres no mínimo antes do @ 
                    - Sem espaços 
                    - 3 caracacteres no mínimo após o @
                    - Ter que o ponto (.)
                    - Após o ponto deve haver no mínimo 3 caracteres
                `); 
                console.log('não válido');

            } else {
                // window.alert(`Muito obrigado!\nNome: ${name}\nEmail: ${email}`);  
                console.log('email válido')
                console.log(name, email);         
                window.alert(`Obrigado!\nNome: ${name}\nEmail: ${email}`)       
                inputName.value = '';
                inputEmail.value = ''; 
                toggleModal();
            }
        }
    

    } 

});
btnCancel.addEventListener('click', toggleModal);
modalForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
})

//functions
function startCountdown() {
    const targetDate = new Date(2023, 02, 18, 00, 00, 00); //date in the future
    const currentDate = new Date(); 
    const totalSeconds = (targetDate - currentDate) / 1000; 

    let days = Math.floor(totalSeconds / 3600 / 24); 
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds % 60);

    daysEl.textContent = formatTime(days); 
    hoursEl.textContent = formatTime(hours); 
    minutesEl.textContent = formatTime(minutes); 
    secondsEl.textContent = formatTime(seconds); 
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time; 
}

function toggleModal() {
    modalOverlay.classList.toggle('active'); 
}


function validateEmail(email) {
    let regex = /\S+([\w]{2,5})@\S+[a-z]{3,10}\.\S+[a-z]{2,7}/;
    return regex.test(email); 
}

//interval
setInterval(startCountdown, 1000); 
