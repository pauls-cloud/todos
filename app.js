
   var input = document.getElementById("add");
   var ul = document.getElementById('list');

   // Create a new todo item 
   var addToDo = ()=> {
    if(event.keyCode == 13){
     var li = document.createElement("li");
     var inputValue=input.value;
     li.className ="list-group-item li"
     var text = document.createTextNode(inputValue);
     li.appendChild(text);
     if (inputValue === '') {
       alert("please enter your todo item");
     } else 
        if(inputValue.length <= 50) {
            ul.appendChild(li);
         }
         else{
            alert('Max Length is 50');
         }
     input.value = "";

     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "remove";
     
     span.appendChild(txt);
     li.appendChild(span);
     var close = document.getElementsByClassName("remove");
     var i;
     for (i = 0; i < close.length; i++) {
       close[i].onclick = function() {
         var div = this.parentElement;
         div.remove();
       }
     }
   }
   }
   input.addEventListener('keyup', addToDo);