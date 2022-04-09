let id = 0;

document.getElementById('add').addEventListener('click', () => {
let table = document.getElementById('list');
let row = table.insertRow(1);

row.setAttribute('id', `item-${id}`);
row.insertCell(0).innerHTML = document.getElementById('firstName').value;
row.insertCell(1).innerHTML = document.getElementById('lastName').value;
row.insertCell(2).innerHTML = document.getElementById('new-date').value;

document.getElementById('firstName').value = '';
document.getElementById('lastName').value = '';
document.getElementById('new-date').value = '';


let actions = row.insertCell(3);

actions.appendChild(createDeleteButton(id++));
document.getElementById('new-date').value = '';

});

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = ( ) => {
        console.log(`Delete row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

