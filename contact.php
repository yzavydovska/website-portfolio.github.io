<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "your_email@example.com"; 
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    mail($to, $subject, $email_message, $headers);

    $mailtoLink = "mailto:$to?subject=$subject&body=$message";
    header("Location: $mailtoLink");
    exit;

}
?>
