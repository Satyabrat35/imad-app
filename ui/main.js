var button = document.getElementById('counter');


button.onclick = function() {
    
var req = new XMLHTTPRequest();
req.onreadystatechange = function(){
    if(req.readystate === XMLHTTPRequest.DONE){
        if(req.status === 200){
            var counter = req.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
};
    
   req.open('GET','http://satyabrat35.imad.hasura-app.io/counter',true);
   req.send(null);
    
};