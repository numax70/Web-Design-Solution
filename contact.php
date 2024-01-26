<?php 
$nome = $_POST['nome'];
$email = $_POST['email'];
$request = $_POST['request'];
$message = $_POST['message'];
$check = $_POST['check'];

$headers	 = 'MIME-Version: 1.0';
$testoEmail = 
              "Nome: " . $nome . "\n"
              . "Email: " . $email . "\n"
              . "Oggetto del messaggio: " . $request . "\n"
              . "Contenuto messaggio: " . $message . "\n"
              . "Per conferma accettazione privacy: " . $check;

mail('webdesignsolutionct@gmail.com', 'Nuovo messaggio dal sito web webdesignsolution', $testoEmail, $headers);
              
?>   