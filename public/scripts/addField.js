// Procurar o botão
document.querySelector('#add-time')
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Qua campos?
    const fields = newFieldsContainer.querySelectorAll('input')
    
    // Para cada campo, limpar
    fields.forEach(function(field) {
        // Pegar o field do momento e limpa os campos
        field.value = ""
        console.log(field)
    })

    // Colocar na página
    document.querySelector('#schedule-itens').appendChild(newFieldsContainer)
}