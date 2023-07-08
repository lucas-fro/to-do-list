var ul = document.getElementById('ul');

function Adicionar() {
    var inputProduto = document.getElementById('produto');
    var Produto = inputProduto.value.trim();

    if (Produto !== '') {
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
        
        let btnExclir = document.createElement('button');
        btnExclir.classList.add('btnExcluir');
        btnExclir.innerHTML = '<i class="bi bi-trash"></i>';
        btnExclir.onclick = () => {
            li.remove();
        }

       
        li.appendChild(checkbox)
        li.appendChild(document.createTextNode(Produto + '.'));
        li.appendChild(btnExclir);

        ul.appendChild(li);

        inputProduto.value = '';
    }else{
        alert('Preencha o campo');
    }
}

function Limpar(){
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
}