var ul = document.getElementById('ul');

function Adicionar() {
    var inputProduto = document.getElementById('produto');
    var Produto = inputProduto.value.trim();

    if (valorProduto !== '') {
        var li = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = function(){
            if(checkbox.checked){
                li.classList.add('checked');
            }else{
                li.classList.remove('checked');
            }
        }

        li.appendChild(checkbox)
        li.appendChild(document.createTextNode(Produto));

        ul.appendChild(li);

        produto.value = '';
    }
}

function Limpar(){
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
}