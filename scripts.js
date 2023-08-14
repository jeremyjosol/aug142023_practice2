function checksSubmission(event){
  event.preventDefault();
  const checkedItems = document.querySelectorAll("input:checked");
  let checkedItemsArray = Array.from(checkedItems);

checkedItemsArray.forEach(function(item){
  const pTag = document.createElement("p");
  pTag.append(item.value);
  document.body.append(pTag);
});
}

window.addEventListener("load", function(){
  document.querySelector("form#grocery_list").addEventListener("submit", checksSubmission);
});