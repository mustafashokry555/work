var sub = document.getElementById("subject");
var comment = document.getElementById("clintComment");
var clintName = document.getElementById("clintName");
var email = document.getElementById("clintEmail");
var cont ;
if(localStorage.getItem("testimonial")==null)
{
  cont = [];
}
else
{
  cont = JSON.parse(localStorage.getItem("testimonial"));
}
function submit() {
 
  var opinion = {
    name: clintName.value,
    mail: email.value,
    subject: sub.value,
    comm: comment.value,
  }
    cont.push(opinion);
    localStorage.setItem("testimonial",JSON.stringify(cont));
    reset();
}



function reset() {
  clintName.value = "";
  sub.value = "";
  email.value="";
  comment.value="";
}

