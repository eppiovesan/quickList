//os itens iniciais são inseridos pelo script e não direto no html, para evitar inchar desnecessariamente a estrutura do arquivo
// objeto item {id, name, checked}
const initialItems = [
    {id: 1, name: "Pão de forma", checked:false},
    {id: 2, name: "Café preto", checked:false},
    {id: 3, name: "Suco de laranja", checked:false},
    {id: 4, name: "Bolacha", checked:false}
]

const ul = document.querySelector("ul")


initialization()
const item = document.querySelector(".items")
const cbItem = document.querySelector(".cbItem")
const lblItem = document.querySelector(".lblItem")
const btnExcluir = document.querySelector(".btnExluir")
const btnVoltar = document.querySelector("#btnVoltar")
const btnAdicionarItem = document.querySelector("#btnAdicionar")
const inputDescriptionItem = document.querySelector("#inputDescriptionItem")


//função que inicializa os itens da lista
function initialization()
{
    //iniciando a lista vazia
    ul.innerHTML = ''

    //adicionando os itens da lista inicial
    for (i=0; i<initialItems.length;i++){
        ul.append(createItem(initialItems[i]))      
    }

}
// função que insere os itens
function createItem(item){

    // criando o item da lista
    const li = document.createElement("li")
    li.classList.add("items")
    
    // criando checkbox da lista 
    const checkbox = document.createElement("input")
    

    //preenchendo propriedades do checkbox da lista
    checkbox.type = "checkbox"
    checkbox.id = `item-${item.id}`
    checkbox.checked = item.checked
    checkbox.classList.add("cbItem")

    //criando o label do checkbox
    const label = document.createElement("label")
    label.textContent = item.name
    label.classList.add("lblItem")
    
    //criando o botão para excuir item
    const btnExcluir = document.createElement("button") // criado elemento específico  para não interferir no clique do checkbox
    btnExcluir.classList.add("btnSemFormatacao") // removida formatação para pegar somente o icone
    btnExcluir.classList.add("btnExluir")

    // adicionando checkbox, label e botão ao item da lista
    li.append(checkbox)
    li.append(label)
    li.append(btnExcluir)

    return li
}

// recuperando o valor digitando pelo usuario
inputDescriptionItem.addEventListener("change", (event) => {
    event.preventDefault()
})

//

btnAdicionarItem.addEventListener("click", (event)=>{
    let cont = Number(ul.children.length + 1)
    event.preventDefault()

    let newItem = {id: cont, name: inputDescriptionItem.value, checked: false }
    // adiciona o novo item à lista
    ul.append(createItem (newItem))
    
    //limpando o texto do input
    inputDescriptionItem.value = ''
})


// capturando alterações na lista
ul.addEventListener("change", (event) => {
    //evento para riscar o texto ou remover o riscado
    // precisou ser feito dentro do evento click da lista porque os itens adicionados 
    // após a incialização não estavam pegando os eventos do botão 
    if (event.target.classList.contains("cbItem")){
        // recuperando o que disparou o evento
        const lblItem = event.target.parentElement
        //incluindo ou removendo o riscado do texto
        lblItem.classList.toggle("textDecoration")
    }
    

})

// capturando cliques na lista
ul.addEventListener("click", (event)=>{
    //evento para excluir item da lista
    // precisou ser feito dentro do evento click da lista porque os itens adicionados 
    // após a incialização não estavam pegando os eventos do botão 
    if (event.target.classList.contains("btnExluir")){
        // recuperando o que disparou o evento
        const btExcluir = event.target.parentElement       

        //removendo o item
        btExcluir.remove()
        alert("O item foi removido da lista")
    }
})


// evento do botão Voltar
btnVoltar.addEventListener("click", (event) => {
    event.preventDefault()
    initialization()
})

