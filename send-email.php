<?php
require("./PHPMailer-6.6.0/src/PHPMailer.php");
require("./PHPMailer-6.6.0/src/SMTP.php");

$json = file_get_contents("php://input");
$object = json_decode($json);

$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->IsSMTP();
$mail->SMTPDebug = $_ENV["debug"];
$mail->SMTPAuth = $_ENV["auth"];
$mail->SMTPSecure = $_ENV["secure"];
$mail->Host = $_ENV["host"];
$mail->Port = $_ENV["port"];
$mail->IsHTML(true);
$mail->Username = $_ENV["username"];
$mail->Password = $_ENV["password"];
$mail->SetFrom($_ENV["from"]);
$mail->Subject = "Novo contato do site de " . $object->name;
$mail->Body = "Nome: " . $object->name . "<br>Email: " . $object->email;
$mail->AddAddress($_ENV["address"]);

if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    return;
}