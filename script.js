
    //get the input element
let filterItem = document.getElementById('filterItem');
//add event listner

filterItem.addEventListener("keyup",filter);
function filter(){
//get value of input box
let filterValue = filterItem.value.toUpperCase();

//get ul
let ul = document.getElementById('names');

//get li from ul
let li = document.querySelectorAll('li.list-group-item');
//loop through list-group from li
for(let i = 0 ; i < li.length;i++){
    let a = li[i].getElementsByTagName('a')[0];
    //check if matched
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
     li[i].style.display = '';
    } 
    else{
        li[i].style.display = 'none';
    }
}
}