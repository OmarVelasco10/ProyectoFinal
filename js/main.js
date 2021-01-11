function showDiv(id, element, option) {

    document.getElementById(`${id}2`).style.display = element.value == 2 ? 'block' : 'none';
    document.getElementById(`${id}1`).style.display = element.value == 1 ? 'block' : 'none';
    document.getElementById(`${id}0`).style.display = element.value == 0 ? 'block' : 'none';

    if (option == 0) {
        document.getElementById(`${id}0`).style.display = element.value == 0 ? 'block' : 'none';
    } else if (option == 1) {
        document.getElementById(`${id}1`).style.display = element.value == 1 ? 'block' : 'none';
    } else if (option == 2) {
        document.getElementById(`${id}2`).style.display = element.value == 2 ?'block' : 'none';
    }
}