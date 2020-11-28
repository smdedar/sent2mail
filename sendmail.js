function sendmail() {
    var mail = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    Email.send({
        Host: "smtp.gmail.com", //for gmail use
        Username: "dedar3000@gmail.com", //gmail name
        Password: "01719972285", //gmail password
        To: mail, //receiver gmail
        From: "dedar3000@gmail.com", //sender gmail
        Subject: subject, //gmail subject
        Body: '<button style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;"><a href="' + downloadlink + '">Download File</a></button> <br> <strong>This File is Wipe After 6 Months<strong>' //gmail body
    }).then(
        message => alert(message)
    );
}
