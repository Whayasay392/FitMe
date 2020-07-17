<?php

$conn = mysqli_connect('localhost', 'root', '', 'fitme');
$message = '';


if (isset ($_POST['submit'])){
    $email = $_POST['email'];
    $email = mysqli_real_escape_string($conn, $email);


    $query = "INSERT INTO find (email) VALUES ('$email')";

    $result = mysqli_query($conn, $query);
    if($result){
        echo "<script>
        alert('successfully subscribed');

        window.location.pathname='/'
        </script>";
    }

    else{
        echo "<script>
        alert('unsuccessful')
        </script>";
    }
}