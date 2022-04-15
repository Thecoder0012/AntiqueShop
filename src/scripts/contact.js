document.querySelector('button').addEventListener('click', function () {

    const name = document.forms["contact"]["name"].value;
    const email = document.forms["contact"]["email"].value;
    const message = document.forms["contact"]["message"].value;


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
});