function showList(trecho) {
    // Esconde todas as listas
    let lists = document.querySelectorAll('.list');
    lists.forEach(list => list.style.display = 'none');
    
    // Mostra a lista correspondente ao trecho
    let selectedList = document.getElementById(trecho);
    if (selectedList) {
        selectedList.style.display = 'block';
    }
}