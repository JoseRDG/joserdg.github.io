<?php
$nombre = $_POST['nombre'];
$celphone = $_POST['celular'];
$mail = $_POST['correo'];
if ($_POST[tiposeguro] == "") {$tiposeguro = "Tipo de seguro";}
if ($_POST[tiposeguro] == "1") {$tiposeguro = "Seguro contrato";}
if ($_POST[tiposeguro] == "2") {$tiposeguro = "Seguro de cumplimiento";}
if ($_POST[tiposeguro] == "3") {$tiposeguro = "Seguro de garantía";}
if ($_POST[tiposeguro] == "4") {$tiposeguro = "Seguro de hogar";}
if ($_POST[tiposeguro] == "5") {$tiposeguro = "Seguro de vida";}
if ($_POST[tiposeguro] == "6") {$tiposeguro = "Seguro de vehículos";}

/*$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";*/

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su celular es: " . $celphone . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Tipo de seguro: " . $tiposeguro . " \r\n";

$paracomercial = 'jose.radadg@gmail.com';
$asunto = 'Mensaje de Landing';

if(mail($paracomercial, $asunto, $mensaje)){
        echo "Su mensaje fue enviado satisfactoriamente.

        <head><meta http-equiv=REFRESH content=0;index.html></head>";
        
}else{
        echo "Fall&ooacute; el envio del mensaje. Intente de nuevo.

        <head><meta http-equiv=REFRESH content=0;index.html></head>";
}
?>