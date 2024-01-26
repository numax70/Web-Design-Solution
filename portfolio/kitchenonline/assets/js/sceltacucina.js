var sceltacucina;
var nomecucina;
var tipocucina;
var myvariable;

window.addEventListener('load', init);

function init(){
    myvariable = localStorage.getItem('variabili');
    scegli();
}

function scegli(){
    
    sceltacucina = document.getElementById('sceltacucina');
    nomecucina = document.getElementById('nomecucina');
    tipocucina = document.getElementById('tipocucina');
    
        switch(myvariable){
            case 'cecilia':
                sceltacucina.innerHTML = '<img src="assets/img/cucina1.png" class="img-fluid d-block mx-auto" alt="cucina cecilia">';
                tipocucina.innerHTML='Cucina easy'
                nomecucina.innerHTML = 'Cecilia';  
                break;
            case 'mango':
                sceltacucina.innerHTML = '<img src="assets/img/cucina2.png" class="img-fluid d-block mx-auto" alt="cucina cecilia">';
                tipocucina.innerHTML='Cucina easy'
                nomecucina.innerHTML = 'Mango';  
                break;
            case 'venere':
                sceltacucina.innerHTML = '<img src="assets/img/cucina3.png" class="img-fluid d-block mx-auto" alt="cucina venere">';
                tipocucina.innerHTML='Cucina easy'
                nomecucina.innerHTML = 'Venere';  
                break;
            case 'extra' :
                sceltacucina.innerHTML = '<img src="assets/img/cucina4.png" class="img-fluid d-block mx-auto" alt="cucina extra">';
                tipocucina.innerHTML='Cucina easy'
                nomecucina.innerHTML = 'Extra';  
                break;  
            case 'etnica':
                sceltacucina.innerHTML = '<img src="assets/img/cucina5.png" class="img-fluid d-block mx-auto" alt="cucina etnica">';
                tipocucina.innerHTML='Cucina easy'
                nomecucina.innerHTML = 'Etnica';  
                break;
            case 'villa': 
                sceltacucina.innerHTML = '<img src="assets/img/cucina6.png" class="img-fluid d-block mx-auto" alt="cucina villa-nova">';
                tipocucina.innerHTML='Cucina easy'
                nomecucina.innerHTML = 'Villa-Nova';  
                break; 
                
                case 'olmeo':
                    sceltacucina.innerHTML = '<img src="assets/img/foto_cucine_smart1.png" class="img-fluid d-block mx-auto" alt="cucina olmeo">';
                    tipocucina.innerHTML='Cucina smart'
                    nomecucina.innerHTML = 'Olmeo';  
                    break;
                case 'poldo':
                    sceltacucina.innerHTML = '<img src="assets/img/foto_cucine_smart2.png" class="img-fluid d-block mx-auto" alt="cucina poldo">';
                    tipocucina.innerHTML='Cucina smart'
                    nomecucina.innerHTML = 'poldo';  
                    break;
                case 'rodrigo':
                    sceltacucina.innerHTML = '<img src="assets/img/foto_cucine_smart3.png" class="img-fluid d-block mx-auto" alt="cucina rodrigo">';
                    tipocucina.innerHTML='Cucina smart'
                    nomecucina.innerHTML = 'Rodrigo';  
                    break;
                case 'olimpia' :
                    sceltacucina.innerHTML = '<img src="assets/img/foto_cucine_smart4.png" class="img-fluid d-block mx-auto" alt="cucina olimpia">';
                    tipocucina.innerHTML='Cucina smart'
                    nomecucina.innerHTML = 'Olimpia';  
                    break;  
                case 'cosma':
                    sceltacucina.innerHTML = '<img src="assets/img/foto_cucine_smart5.png" class="img-fluid d-block mx-auto" alt="cucina cosma">';
                    tipocucina.innerHTML='Cucina smart'
                    nomecucina.innerHTML = 'Cosma';  
                    break;
                    case 'electra': 
                    sceltacucina.innerHTML = '<img src="assets/img/foto_cucine_smart6.png" class="img-fluid d-block mx-auto" alt="cucina electra">';
                    tipocucina.innerHTML='Cucina smart'
                    nomecucina.innerHTML = 'Electra';  
                    break;         
    
        } 
    }

    
