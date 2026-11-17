let bgcolor = document.getElementById("bgcolor");
let textColor=document.getElementById("textColor");
let fontFamily=document.getElementById("fontfamily");
let editorBox=document.getElementById("editorbox");

bgcolor.addEventListener("input", function(){
  editorBox.style.backgroundColor=bgcolor.value;

});

textColor.addEventListener("input",function(){
  editorBox.style.color=textColor.value;
});

fontFamily.addEventListener("change",function(){
  editorBox.style.fontFamily=fontFamily.value;
});