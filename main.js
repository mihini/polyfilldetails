var details = document.getElementById("details");
var content = document.getElementsByClassName("content")[0];
// console.log(details.open);
// console.log(content);

details.addEventListener("click", function(){
  if(details.open){
    content.style.visibility= "hidden";
  }else{
    content.style.visibility= "visible";
  }
});
