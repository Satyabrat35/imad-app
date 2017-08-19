

var submit  = document.getElementById('subbtn');
submit.onclick = function() {
    
    var req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if(req.readyState === XMLHttpRequest.DONE){
        
        if(req.status === 200){
            console.log("user logged in");
            alert("user logged in");
        }
        else if(req.status === 403){
            alert("incorrect username/password");
        }
        else if(req.status === 500){
            alert("jai shree ram!!!");
        }
    }
};
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
    // the value must be refreshed before submitting
    console.log(username);
    console.log(password);
   req.open('POST','http://satyabrat35.imad.hasura-app.io/login',true);
   req.send(JSON.stringify({username : username , password:password}));
    
    
};
