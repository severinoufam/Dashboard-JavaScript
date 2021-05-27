
var fields = document.querySelectorAll("#form-user-create [name]");//formulario.

var user = {};//JSON.

document.getElementById("form-user-create").addEventListener("submit", function(event){

    event.preventDefault();//cancela o comportamento padão do evento.

    fields.forEach(function(fields, index){

        if(fields.name == "gender"){
    
            if(fields.checked){
    
                user[fields.name] = fields.value;
    
            }
    
        }else{
    
            user[fields.name] = fields.value;
    
        }
    
    });

    console.log(user);
    
});