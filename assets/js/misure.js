var rowcol1;
var rowcol2;
var rowcol3;
var rowcol4;
var rowcol5;
var rowcol6;
var rowcol7;
var rowcol8;
var rowcol9;
var rowcol10;
var rowcol11;
var rowcol12;
var rowcol13;
var selezionaMateriale;

var labelvalue1;
var labelvalue2;
var labelvalue3;
var labelvalue4;
var labelvalue5;
var labelvalue6;
var labelvalue7;
var labelvalue8;

var errore1;
var errore2;
var errore3;
var errore4;
var errore5;
var errore6;
var errore7;
var errore8;
var errore9;
var errore10;
var errore11;
var errore12;
var errore13;

var selezionaMateriale1;
var selezionaMateriale2;
var btnInvia;
var ringrazia;
var btnStampa;
var btnCancella;

/*----variabili di appoggio---*/
var nomeArt1 = "";
var dimArt1 = 0;
var dimArt1bis = 0;
var nomeArt2 = "";
var dimArt2 = 0;
var dimArt2bis = 0;
var nomeArt3 = "";
var dimArt3 = 0;
var dimArt3bis = 0;
var nomeArt4 = "";
var dimArt4 = 0;
var dimArt4bis = 0;
var nomeArt5 = "";
var dimArt5 = 0;
var dimArt5bis = 0;
var nomeArt6 = "";
var dimArt6 = 0;
var dimArt6bis = 0;
var nomeArt7 = "";
var dimArt7 = 0;
var dimArt7bis = 0;
var nomeArt8 = "";
var dimArt8 = 0;
var dimArt8bis = 0;
var nomeArt9 = "";
var matArt9 = '';
var dimArt9bis = 0;
var nomeArt10 = "";
var matArt10 = '';
/* var dimArt10bis = 0;
var nomeArt11 = "";
var dimArt11 = 0;
var dimArt11bis = 0;
var nomeArt12 = "";
var dimArt12 = 0;
var dimArt12bis = 0;
var nomeArt13 = "";
var dimArt13 = 0;
var dimArt13bis = 0;
var nomeArt14 = "";
var dimArt14 = 0;
var dimArt14bis = 0;
var nomeArt15 = "";
var dimArt15 = 0;
var dimArt15bis = 0; */

window.addEventListener("load", init);

function init() {
  rowcol1 = document.getElementById("rowcol1");
  rowcol2 = document.getElementById("rowcol2");
  rowcol3 = document.getElementById("rowcol3");
  rowcol4 = document.getElementById("rowcol4");
  rowcol5 = document.getElementById("rowcol5");
  rowcol6 = document.getElementById("rowcol6");
  rowcol7 = document.getElementById("rowcol7");
  rowcol8 = document.getElementById("rowcol8");
  rowcol9 = document.getElementById("rowcol9");
  rowcol10 = document.getElementById("rowcol10");
  rowcol11 = document.getElementById("rowcol11");
  rowcol12 = document.getElementById("rowcol12");
  rowcol13 = document.getElementById("rowcol13");
  selezionaMateriale1 = document.getElementById('materialselection1');
  selezionaMateriale2 = document.getElementById('materialselection2');
  

  labelvalue1 = document.getElementById("labelvalue1");
  labelvalue2 = document.getElementById("labelvalue2");
  labelvalue3 = document.getElementById("labelvalue3");
  labelvalue4 = document.getElementById("labelvalue4");
  labelvalue5 = document.getElementById("labelvalue5");
  labelvalue6 = document.getElementById("labelvalue6");
  labelvalue7 = document.getElementById("labelvalue7");
  labelvalue8 = document.getElementById("labelvalue8");

  errore1 = document.getElementById("errore1");
  errore2 = document.getElementById("errore2");
  errore3 = document.getElementById("errore3");
  errore4 = document.getElementById("errore4");
  errore5 = document.getElementById("errore5");
  errore6 = document.getElementById("errore6");
  errore7 = document.getElementById("errore7");
  errore8 = document.getElementById("errore8");
  errore9 = document.getElementById("errore9");
  errore10 = document.getElementById("errore10");
  errore11 = document.getElementById("errore11");
  errore12 = document.getElementById("errore12");
  errore13 = document.getElementById("errore13");

  
  btnInvia = document.getElementById("invia");
  ringrazia = document.getElementById("ringrazia");
  btnStampa = document.getElementById("stampa_lista");
  btnCancella = document.getElementById("cancella");
  eventHandlers();
}

function eventHandlers() {
  btnInvia.addEventListener("click", controlloCampi);
  btnCancella.addEventListener("click", cancellaForm);
}

function controlloCampi() {
  if (rowcol1.value === "") {
    errore1.innerHTML = "Parametro obbligatorio !";
    return;
  } else if (rowcol2.value === "") {
    errore2.innerHTML = "Parametro obbligatorio !";
    return;
  } else if (rowcol3.value === "") {
    errore3.innerHTML = "Parametro obbligatorio !";
    return;
  } else if (rowcol4.value === "") {
    errore4.innerHTML = "Parametro obbligatorio !";
    return;
  } else if (rowcol4.value === "") {
    errore4.innerHTML = "Parametro obbligatorio !";
    return;
  } else if (rowcol5.value === "") {
    errore5.innerHTML = "Parametro obbligatorio !";
    return;
  } else if (rowcol6.value === "") {
    errore6.innerHTML = "Parametro obbligatorio !";
    return;
  } else if (rowcol7.value === "") {
    errore7.innerHTML = "Parametro obbligatorio !";
    return;
  } else if (rowcol8.value === "") {
    errore8.innerHTML = "Parametro obbligatorio !";
    return;
  } else if (rowcol9.value === "") {
    errore9.innerHTML = "Parametro obbligatorio !";
    return;
  } else if (rowcol10.value === "") {
    errore10.innerHTML = "Parametro obbligatorio !";
    return;
  } else if (rowcol11.value === "") {
    errore11.innerHTML = "Parametro obbligatorio !";
    return;
  } else if (rowcol12.value === "") {
    errore12.innerHTML = "Parametro obbligatorio !";
    return;
  } else if (rowcol13.value === "") {
    errore13.innerHTML = "Parametro obbligatorio !";
    return;
  } else {
    ringrazia.innerHTML = "Grazie per aver compilato il form !";
    btnStampa.style.visibility = "visible";
    btnCancella.style.visibility = "visible";

    nomeArt1 = labelvalue1.value;
    dimArt1 = Number(rowcol1.value);
    dimArt1bis = Number(rowcol2.value);

    nomeArt2 = labelvalue2.value;
    dimArt2 = Number(rowcol3.value);
    dimArt2bis = Number(rowcol4.value);
    
    nomeArt3 = labelvalue3.value;
    dimArt3 = Number(rowcol5.value);
    dimArt3bis = Number(rowcol6.value);
    
    nomeArt4 = labelvalue4.value;
    dimArt4 = Number(rowcol7.value);
    dimArt4bis = Number(rowcol8.value);

    nomeArt5 = labelvalue5.value;
    dimArt5 = Number(rowcol9.value);
    dimArt5bis = Number(rowcol10.value);
    
    nomeArt6 = labelvalue6.value;
    dimArt6 = Number(rowcol11.value);
    

    nomeArt7 = labelvalue7.value;
    dimArt7 = Number(rowcol2.value);
    
    
    nomeArt8 = labelvalue8.value;
    dimArt8 = Number(rowcol13.value);
    
    nomeArt9 = selezionaMateriale1.options[selezionaMateriale1.selectedIndex].text;
    matArt9 = selezionaMateriale1.value;
    
    nomeArt10 = selezionaMateriale2.options[selezionaMateriale2.selectedIndex].text;
    matArt10 = selezionaMateriale2.value;

    stampaLista();
  }
}

function stampaLista() {
  var label1 = document.getElementById("label1");
  var rowcm1 = document.getElementById("rowcm1");
  var rowcm2 = document.getElementById("rowcm2");
  
  var label2 = document.getElementById("label2");
  var rowcm3 = document.getElementById("rowcm3");
  var rowcm4 = document.getElementById("rowcm4");
  
 
  var label3 = document.getElementById("label3");
  var rowcm5 = document.getElementById("rowcm5");
  var rowcm6 = document.getElementById("rowcm6");
  
  var label4 = document.getElementById("label4");
  var rowcm7 = document.getElementById("rowcm7");
  var rowcm8 = document.getElementById("rowcm8");
  
  var label5 = document.getElementById("label5");
  var rowcm9 = document.getElementById("rowcm9");
  var rowcm10 = document.getElementById("rowcm10");
 
  var label6 = document.getElementById("label6");
  var rowcm11 = document.getElementById("rowcm11");
  
  var label7 = document.getElementById("label7");
  var rowcm12 = document.getElementById("rowcm12");
  
  var label8 = document.getElementById("label8");
  var rowcm13 = document.getElementById("rowcm13");
  
  var label9 = document.getElementById("label9");
  var rowcm14 = document.getElementById("rowcm14");
  
  var label10 = document.getElementById("label10");
  var rowcm15 = document.getElementById("rowcm15");

  var data = document.getElementById("data"); 

  /*------Data Odierna---*/
  data.innerHTML = new Date().toLocaleDateString();

  /*---Compilo lista---*/
  if (dimArt1 !== 0) {
    label1.innerHTML = nomeArt1.substring(0, nomeArt1.length - 13);
    rowcm1.innerHTML = `${dimArt1}`;
    rowcm2.innerHTML = `${dimArt1bis}`;
    
  }
  if (dimArt2 !== 0) {
    label2.innerHTML = nomeArt2.substring(0, nomeArt2.length);
    rowcm3.innerHTML = `${dimArt2}`;
    rowcm4.innerHTML = `${dimArt2bis}`;
  } else{
    alert('pippa');
  }
  if (dimArt3 !== 0) {
    label3.innerHTML = nomeArt3.substring(0, nomeArt3.length);
    rowcm5.innerHTML = `${dimArt3}`;
    rowcm6.innerHTML = `${dimArt3bis}`;
    
  }
  if (dimArt4 !== 0) {
    label4.innerHTML = nomeArt4.substring(0, nomeArt4.length);
    rowcm7.innerHTML = `${dimArt4}`;
    rowcm8.innerHTML = `${dimArt4bis}`;
    
  } 
  if (dimArt5 !== 0) {
    label5.innerHTML = nomeArt5.substring(0, nomeArt5.length - 13);
    rowcm9.innerHTML = `${dimArt5}`;
    rowcm10.innerHTML = `${dimArt5bis}`;
    
  } 
  if (dimArt6 !== 0) {
    label6.innerHTML = nomeArt6.substring(0, nomeArt6.length - 13);
    rowcm11.innerHTML = `${dimArt6}`;
  } 
  if (dimArt7 !== 0) {
    label7.innerHTML = nomeArt7.substring(0, nomeArt7.length - 13);
    rowcm12.innerHTML = `${dimArt7}`;
  } 
  if (dimArt8 !== 0) {
    label8.innerHTML = nomeArt8.substring(0, nomeArt8.length - 13);
    rowcm13.innerHTML = `${dimArt8}`;
  }
  if (matArt9 !== '') {
    label9.innerHTML = 'Colore selezionato:';
     rowcm14.innerHTML = `${matArt9}`;
  } 
  if (matArt10 !== '') {
    label10.innerHTML = 'Maniglia selezionata:'
    rowcm15.innerHTML = `${matArt10}`;
  }    
}

function cancellaForm() {
  location.reload();
}

function printDiv(areastampa){
  var stampacontenuto = document.getElementById('areastampa');
  var contenutoOriginale = document.body.innerHTML;
  document.body.innerHTML = stampacontenuto.innerHTML;
  window.print();
  document.body.innerHTML = contenutoOriginale;
}
