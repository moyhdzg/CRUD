const tasks = new Storage('tasks', taskStorage.fromObject);

function generateID(length) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function clean () {
    document.getElementById("taskName").value = "";
    document.getElementById("taskDesc").value = "";
}


function add(){
    let id = generateID(5);
    let tName =  document.getElementById("taskName").value;
    let tDescription = document.getElementById("taskDesc").value;
    const tCurrent = new taskStorage(id,tName,tDescription) 
    tasks.createItem(tCurrent)
    populateTable(tasks.readItems());
    clean();
}

function populateTable(tasks) {
    const tbody = document.getElementById('tableContent');
    tbody.innerHTML = '';
    tasks.forEach((toDo) => tbody.appendChild(createTr(toDo)));
}

function createTr(toDo) {
    const tdHTML = `
    <td>${toDo.getId()}</td>
    <td>${toDo.getTask()}</td>
    <td>${toDo.getDesc()}</td>
    `;
    const tr = document.createElement('tr');
    tr.innerHTML = tdHTML;
    return tr;
}