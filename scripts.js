function checksSubmission(event){
  event.preventDefault();
  const checkedItems = document.querySelectorAll("input:checked");
  let checkedItemsArray = Array.from(checkedItems);
  checkedItemsArray.sort();

checkedItemsArray.forEach(function(item) {
  let arrayOfValues = [];
  arrayOfValues.push(item.value);
  arrayOfValues.sort();
  console.log("This is the arrayOfValues in alpha-order: " + arrayOfValues);
});

checkedItemsArray.forEach(function(item){
  const pTag = document.createElement("p");
  pTag.append(item.value);
  document.body.append(pTag);
});
}

window.addEventListener("load", function(){
  document.querySelector("form#grocery_list").addEventListener("submit", checksSubmission);
});