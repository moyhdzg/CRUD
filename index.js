
function add(){
    let id = generateID(5);
    console.log(id);
    let tName =  document.getElementById("taskName").value;
    console.log(tName);
    let tDescription = document.getElementById("taskDesc").value;
    console.log(tDescription);
    const currentTask1 = {id,tName,tDescription}
    const currentTask2 = [id,tName,tDescription]
    console.log(currentTask1);
    console.log(currentTask2)
    clean();
}
 

function clean () {
    document.getElementById("taskName").value = "";
    document.getElementById("taskDesc").value = "";
}

function generateID(length) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
