var button = document.getElementById('counter');


button.onclick = function() {
    
var req = new XMLHttpRequest();
req.onreadystatechange = function(){
    if(req.readyState === XMLHttpRequest.DONE){
        
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

var nameinput = document.getElementById('name');
var name = nameinput.value;
var submit  = document.getElementById('subbtn');
submit.onclick = function() {
    
    var names = ['aman' , 'aditya' , 'deepak' ];
    var list = '';
    for(var i=0 ; i < names.length ; i++){
        list += '<li>' + names[i] + '</li>';
    }
var ul = document.getElementById('nameslist');
ul.innerHTML = list;
};
