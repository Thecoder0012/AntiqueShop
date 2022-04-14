/* login button */

function loginButton() {
    var mail=document.forms["myForm"]["Mail"].value;
    var kode=document.forms["myForm"]["Kode"].value;

        if(mail == "myemail@gmail.com" && kode == "1234"){
           document.write('<html> <body> <h2> <center>');
           document.write("Welcome" + " " + mail);
          
           setTimeout(wait, 3000);

           function wait(){
            window.location.href='index.html';
            document.getElementsByClassName('.login').innerHTML = "Logout";
           }
        }else{
          alert("wrong login");
        }
}