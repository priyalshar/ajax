function send() {
  
    let name, email, textarea;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    textarea = document.getElementById("textarea").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("textarea", textarea);
    
    window.open('display.html');

 document.location.href='http://www.google.com',true;
    //Ajax post method
    function sdata() {
        let xhr = new XMLHttpRequest();
        let data = JSON.stringify(send());
        xhr.open("POST", "http://localhost:4000/storedata", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
        

    }
}