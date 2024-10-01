
document.getElementById('addRowBtn').addEventListener('click', function() {
    var table = document.getElementById('infoTable');
    var newRow = table.insertRow(-1); 
    
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    
    cell1.textContent = 'Novo Nome';
    cell2.textContent = 'Nova Idade';
});


document.getElementById('updateContentBtn').addEventListener('click', function() {
    var contentDiv = document.getElementById('content');
    var paragraph = contentDiv.querySelector('p');
    paragraph.textContent = 'O conteúdo do parágrafo foi atualizado!';
    paragraph.style.color = 'red'; 
});


document.getElementById('addDivBtn').addEventListener('click', function() {
    var contentDiv = document.getElementById('content');
    var newDiv = document.createElement('div');
    newDiv.style.border = '1px solid #000';
    newDiv.style.padding = '10px';
    newDiv.style.marginTop = '10px';
    newDiv.textContent = 'Novo bloco de conteúdo adicionado!';
    
    contentDiv.appendChild(newDiv);
});

document.getElementById('removeParagraphBtn').addEventListener('click', function() {
    var contentDiv = document.getElementById('content');
    var paragraph = contentDiv.querySelector('p');
    
    if (paragraph) {
        contentDiv.removeChild(paragraph);
    } else {
        alert('Nenhum parágrafo encontrado para remover.');
    }
});