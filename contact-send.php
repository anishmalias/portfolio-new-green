<?php
extract($_POST);
$EmailFrom = "info@codehints.in";
$EmailTo = "anish.alias00@gmail.com";
$Subject = "Enquire from portfolio";
echo $name;

 $Name = Trim(stripslashes($_REQUEST['name'])); 
 $Email = Trim(stripslashes($_REQUEST['email'])); 
 $Subject = Trim(stripslashes($_REQUEST['subject'])); 
 $Message = Trim(stripslashes($_REQUEST['message'])); 


// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $Subject;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 


// redirect to success page 
if (mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>")){
	echo "<span class='msg-wrap msg-sucess'>Your Message Send successfully</span><a href='#' class='close'></a>";
}
else{
	echo "<span class='msg-wrap msg-fail'>There was an error. Please try again.</span><a href='#' class='close'></a>";
}
?>