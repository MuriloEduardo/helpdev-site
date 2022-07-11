<?php
$json = file_get_contents("php://input");
$object = json_decode($json);

$myEmail = $_ENV["address"];

$email = $object->email;

$subject = "Novo contato do site de " . $object->name;

$headers = "From: $myEmail\r\n";
$headers .= "Reply-To: $email\r\n";

$body = "Formulário enviado\n";
$body .= "Nome: " . $name . "\n";
$body .= "Email: " . $email . "\n";

$email_to = $myEmail;

$status = mail($email_to, $subject, $body, $headers);

if(!$status) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    return;
}