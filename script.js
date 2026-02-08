//Seleção dos elementos (objetos DOM criados pelo browser) para depois manipular em JS, poderia ser feito tmb com query selector
const form = document.getElementById('taskForm');          
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');
 


//O que quero que aconteça quando utilizador dá submit do formulário:
//"submit", "click", "input" são eventos pré-definidos pelo browser (DOM), triggers que accionam o que está dentro desta função 
form.addEventListener('submit', function(event) {
    event.preventDefault();                        // evita reload da página ao dar submit, para não perdermos a info
    const taskText = input.value.trim();                   //.value é propriedade do elemento  <input> que tem texto escrito pelo utilizador  
    if (taskText === "") {return};                 //impedir imputs vazios(trim importante para garantir validação)

    const li = createTask(taskText);               
    list.appendChild(li);                          //adicionar li a list (<ul> que já existe no html base)
    input.value = "";                               //Limpa input, para utilizador poder escrever outra tarefa
    input.focus();                                  //meter cursor de volta no input
});



function createTask(taskText) {
    const li =  document.createElement('li');                                       //criar elemento li    

    const span = document.createElement('span');                                    //criar elemento span (terá texto da task)
    span.textContent = taskText;

    const checkBtn = document.createElement('button');                              //criar botão Check
    checkBtn.textContent = "✔";                                                     //definir conteúdo
    checkBtn.classList.add("btnCheck");                                             //definir classe
    checkBtn.setAttribute("aria-label", "Mark task as completed");                  //definir aria-label para acessibilidade
    checkBtn.addEventListener('click', () => li.classList.toggle('completed'));     //com btn criado é possivel "ouvir" clicks no elemento
                                                                                    //se elemento não tiver classe "completed", adiciona, se tiver remove (método toggle da propriedade classList de um elemento)
    const deleteBtn = document.createElement('button');                             //igual para botão Delete
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("btnDelete");
    deleteBtn.setAttribute("aria-label", "Delete task");
    deleteBtn.addEventListener("click", () => li.remove());                         //click remove elemento li da lista

    li.appendChild(span);                                                           //adicionar os 3 elementos filho ao <li>
    li.appendChild(checkBtn);
    li.appendChild(deleteBtn);

    return li;
}