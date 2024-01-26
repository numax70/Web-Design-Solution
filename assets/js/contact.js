var nome;
var email;
var request;
var message;
var check;
var btnInvia;
var mymodal;
var messagebody;
var modallabel;
var success;

  

window.addEventListener('load', init);

function init(){
    nome = document.getElementById('nome');
    email = document.getElementById('email');
    request = document.getElementById('request');
    message = document.getElementById('message');
    check = document.getElementById('check');
    btnInvia = document.getElementById('invia');
    mymodal = document.getElementById('mymodal');
    messagebody = document.getElementById('messagebody');
    modallabel = document.getElementById('modal-label');
    success = document.getElementById('success');
    eventHandlers();
}

function eventHandlers(){
    btnInvia.addEventListener('click', verifica);
}

function verifica(){
    if(nome.value ===''){
        callError();
        modallabel.innerHTML = "DATI OBBLIGATORI";
        messagebody.innerHTML = "<p style='color: #dd9933'>Inserisci il tuo nome !</p>";
        return ;
    } else if(email.value === ''){
        callError();
        modallabel.innerHTML = "DATI OBBLIGATORI";
        messagebody.innerHTML = "<p style='color: #dd9933'>Inserisci un indirizzo email !</p>";
    } else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
        callError(); 
        modallabel.innerHTML = "ERRORE FORMATO EMAIL";
        messagebody.innerHTML = "<p class='text-danger'>Formato email non valido !</p>";
        return false;
    } else if(request.value === ''){
        callError();
        modallabel.innerHTML = "DATI OBBLIGATORI";
        messagebody.innerHTML = "<p style='color: #dd9933'>Per cosa ci contatti ?</p><p>Inserisci l'oggetto del messaggio !</p>";
        return;
    } else if(message.value.length === 0){
        callError();
         modallabel.innerHTML = "DATI OBBLIGATORI";
         messagebody.innerHTML = "<p style='color: #dd9933'>Inserisci il tuo messaggio !</p>";
        return;
    }
     else if(check.checked === false){
         callError();
         modallabel.innerHTML = "DATI OBBLIGATORI";
         messagebody.innerHTML = "<p style='color: #dd9933'>Hai preso visione dell'informativa sulla privacy ?</p><p>Clicca su 'privacy' nel corpo della notifica per prenderne visione poi seleziona l'opzione per conferma di lettura</p>";
         return;
    } else {
       sendData();
    
   }
}

function callError(){
    $("#mymodal").modal("show");
}

function verificaEmail(email){
    var email = document.forms['myform'].email.value;
    callError();
    modallabel.innerHTML = "DATI OBBLIGATORI";
    messagebody.innerHTML = "<p style='color: #dd9933'>Inserisci un indirizzo email !</p>";
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        $("#mymodal").modal("show"); 
        modallabel.innerHTML = "FORMATO EMAIL CORRETTO";
        messagebody.innerHTML = "<p class='text-danger'>Formato email valido !</p>";
        
        
    }
    else {
        $("#mymodal").modal("show"); 
        modallabel.innerHTML = "ERRORE FORMATO EMAIL";
        messagebody.innerHTML = "<p class='text-danger'>Formato email non valido !</p>";
    }
    return false;
}


function sendData(){
    var nome = $('#nome').val(); 
    var email = $('#email').val();  
    var request = $('#request').val(); 
    var message = $('#message').val();
    var check = $('#check').val();

    $.ajax({
        type: "POST",
        url: "contact.php",
        data: "nome=" + nome + "&email=" + email + "&request=" + request + "&message=" +message + "&check = " + check,
        dataType: "html",
        success: (msg) =>{
            $("#mymodal").modal("show");
            modallabel.innerHTML = "Thank You !!";
            messagebody.innerHTML = "Email inviata correttamente"+ msg; 
            
        },
        error: ()=>{
            $("#mymodal").modal("show");
            modallabel.innerHTML = "ERRORE INVIO EMAIL";
            messagebody.innerHTML = "<p class='text-danger'>Messaggio non inviato, riprova più tardi !</p>";
            $("#mymodal").on('hidden.bs.modal', ()=> {
                setTimeout(location.reload.bind(location), 500);
            });
        } 
    });
    $("#mymodal").on('hidden.bs.modal', ()=> {
        setTimeout(location.reload.bind(location), 500);
    });
}