<?php

require_once('phpmailer/class.phpmailer.php');

$mail = new PHPMailer();

if( isset( $_POST['template-contactform-submit'] ) AND $_POST['template-contactform-submit'] == 'submit' ) {
    if( $_POST['nombre'] != '' AND $_POST['correo'] != '' AND $_POST['mensaje'] != '' ) {

        $name = $_POST['nombre'];
        $email = $_POST['correo'];
        //$phone = $_POST['template-contactform-phone'];
        //$service = $_POST['template-contactform-service'];
        //$subject = $_POST['template-contactform-subject'];
        $message = $_POST['mensaje'];

        $subject = isset($subject) ? $subject : 'Te buscan en tu web';

        //$botcheck = $_POST['template-contactform-botcheck'];

        $toemail = 'jose.radadg@gmail.com'; // Your Email Address
        $toname = 'JoseRDG'; // Your Name

        if( $botcheck == '' ) {

            $mail->SetFrom( $email , $name );
            $mail->AddReplyTo( $email , $name );
            $mail->AddAddress( $toemail , $toname );
            $mail->Subject = $subject;

            $name = isset($name) ? "Nombre: $name<br><br>" : '';
            $email = isset($email) ? "Email: $email<br><br>" : '';
            //$phone = isset($phone) ? "Celular: $phone<br><br>" : '';
            //$service = isset($service) ? "Service: $service<br><br>" : '';
            $message = isset($message) ? "Mensaje: $message<br><br>" : '';

            $referrer = $_SERVER['HTTP_REFERER'] ? '<br><br><br>This Form was submitted from: ' . $_SERVER['HTTP_REFERER'] : '';

            $body = "$name $email $message $referrer";

            $mail->MsgHTML( $body );
            $sendEmail = $mail->Send();

            if( $sendEmail == true ):
                echo 'Hemos recibido tu mensaje, pronto nos comunicaremos contigo';
            else:
                echo 'Email <strong>could not</strong> be sent due to some Unexpected Error. Please Try Again later.<br /><br /><strong>Reason:</strong><br />' . $mail->ErrorInfo . '';
            endif;
        } else {
            echo 'Bot <strong>Detected</strong>.! Clean yourself Botster.!';
        }
    } else {
        echo 'Please <strong>Fill up</strong> all the Fields and Try Again.';
    }
} else {
    echo 'An <strong>unexpected error</strong> occured. Please Try Again later.';
}

?>