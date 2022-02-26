<?php
if(isset($_POST)){
    error_reporting(0);
    $name=$_POST["name"];
    $email=$_POST["email"];
    $subject=$_POST["subject"];
    $comments=$_POST["comments"];

    
    $dominio=$_SERVER["HTTP_HOST"];
    $to="javier.atoaxaca@gmail.com";
    $subject_mail="Contacto desde el formulario del Sitio $dominio:$subject";

    $message="<p>
        Datos enviado desde el formulario del sitio <b>$dominio</b>
    </p>
    <ul>
        <li>Nombre:<b>$name</b></li>
        <li>Email:<b>$email</b></li>
        <li>Asunto: $subject </li>
        <li>Comentarios:$comments </li>
    </ul>";
    $headers="MIME-Version:1.0\r\n"."Content-Type:text/html;charset=utf-8\r\n"."From:Envio Automatico no Responder <no-reply@$dominio>";

    $send_mail=mail($to,$subject_mail,$message,$headers);

    if ($send_mail) {
        $res=[
            "err"=>false,
            "message"=>"Error al Enviar tus Datos. Intenta Nuevamente"
        ];
        # code..
        
    }
    header("Access-Control-Allow-Origin:*");
    //header("Access-Control-Allow-Origin:https://javier.atoaxaca@gmail.com");
    header('Content-type:application/json');
    echo json_encode($res);
    exit;
}
?>