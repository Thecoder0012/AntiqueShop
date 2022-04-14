
    document.querySelector('.btn').addEventListener('click',sendMessage)

    function sendMessage() {
    var name = document.forms["contact"]["Name"].value;
    var email = document.forms["contact"]["Email"].value;
    var message = document.forms["contact"]["Message"].value;


    if (name == "" && email == "" && message == "") {
    alert("OBS! You need to type in your information!");

} else if (name !== "" && email !== "" && message !== "") {
    alert("Your message is sent!")
} else if (name == "" && email !== "" && message !== "") {
    alert("Please enter your name")
} else if (name !== "" && email == "" && message !== "") {
    alert("Please enter your mail")
} else if (name !== "" && email !== "" && message == "") {
    alert("You forgot to type your message in the box")

}

}
