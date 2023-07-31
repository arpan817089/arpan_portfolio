<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <title>feedback</title>

    <!-- Sweet alert cdn -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</head>

<body>

</body>

</html>
<?php
session_start();
$conn = mysqli_connect("localhost", "root", "", "portfolio");
if (isset($_POST['submit'])) {
    $First_Name = $_POST['firstName'];
    $Last_Name = $_POST['lastName'];
    $Email = $_POST['email'];
    $Place = $_POST['place'];
    $Message = $_POST['message'];

    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into feedback_form(First_Name,Last_Name,Email,Country,Message) values(?,?,?,?,?)");
        $stmt->bind_param("sssss", $First_Name, $Last_Name, $Email, $Place, $Message);
        $execval = $stmt->execute();
        echo $execval;
        echo '<script type="text/javascript">';
        echo 'setTimeout(function () { swal("","Thanks for your Feedback!", "success");';
        echo '}, 500);</script>';
        echo "<script>setTimeout(function (){window.location = 'index.php'},2000);</script>";
        $stmt->close();
        $conn->close();
    }
}
?>