fetch("https://jsonplaceholder.typicode.com/todos/")
.then( (response) => response.json() )
// .then( (response) => console.log(response) );
.then((response) => {
    const specificTodo = response.find(todo => todo.id === 1);
    if (specificTodo) {
        const todoItemDiv = document.getElementById('todo-item');
        todoItemDiv.innerHTML = `
            <p>ID: ${specificTodo.id}</p>
            <p>Title: ${specificTodo.title}</p>
            <p>Completed: ${specificTodo.completed}</p>
        `;
    }
})
.catch((error) => console.error('Error fetching data:', error));

// var objek = document.getElementById("test");
// objek.setAttribute("class", "test");
// objek.innerHTML = "-";

var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    // objek.style.color = "red";
    // objek.style.backgroundColor = "blue";

    var body = document.body;
    body.classList.toggle("darkmode")
});

function Penjumlahan(){
    a = prompt ("Masukkan data pertama");
    b = prompt ("Masukkan data kedua");
    alert(a + "+" +  b + " = " + ( Number(a) + Number(b) ) );
 }

 function Pengurangan(){
    a = prompt ("Masukkan data pertama");
    b = prompt ("Masukkan data kedua");
    alert(a + "+" + b + " = " + ( Number(a) - Number(b) ) );
 }

function Pembagian(){
    a = prompt ("Masukkan data pertama");
    b = prompt ("Masukkan data kedua");
    alert(a + "+" + b + " = " + ( Number(a) / Number(b) ) );
 }

 
function Perkalian(){
    a = prompt ("Masukkan data pertama");
    b = prompt ("Masukkan data kedua");
    alert(a + "+" + b + " = " + ( Number(a) * Number(b) ) );
 }