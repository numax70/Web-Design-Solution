var myId;

window.addEventListener('load', init);

function init(){
    myId = document.getElementById('smart');
    localStorage.clear();

}
function verifica(id){
    let variable = id;
    localStorage.setItem('variabili', variable);
    location.href="misure.html";
}