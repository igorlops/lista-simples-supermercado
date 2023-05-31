var itens = [];

var button = document.querySelector('input[type=submit]');

button.addEventListener('click',function(){
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=valor_produto]');
    var listaProdutos = document.querySelector('.lista-produtos')
    var total = document.querySelector('.valor_total');
    itens.push({
        nome:nomeProduto.value,
        preco:precoProduto.value
    })
    listaProdutos.innerHTML = "";

    var valor_total = 0;
    itens.map(function(e){
      listaProdutos.innerHTML +=  `
                    <div class="produto-single">
                        <h3>${e.nome}</h3>
                        <h3 class="price-produto">R$ ${parseFloat(e.preco).toFixed(2).replace('.',',')}</h3>
                    </div>
                    
                    `;
        valor_total += parseFloat(e.preco);

    })
    var valorComParse = parseFloat(valor_total).toFixed(2).replace('.',',');
    console.log(valorComParse)
    total.innerHTML = valorComParse;
    nomeProduto.value="";
    precoProduto.value="";
})