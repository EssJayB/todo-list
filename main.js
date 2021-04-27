document.addEventListener('DOMContentLoaded', function(){
    // when user clicks 'add' button
    var addButton = document.getElementById('addButton');
    addButton.addEventListener('click' , addTodoItem);

    //changes colour of the text
    var colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', changeTextColor);

});

function addTodoItem() {
    //retrieve text from input box
    var inputText = document.getElementById('todoInput').value;
    console.log(inputText);
    //append text to the list div <div id="todoItems"></div>
    var todoItem = document.createElement('p');
    todoItem.innerText = inputText;
    //<p>Input text</p>
    todoItem.id = 'item';
    todoItem.class = 'colourful';
    document.getElementById('todoItems').appendChild(todoItem);
}

//function to change colour of the text
function changeTextColor() {
    var color = generateRandomColor();
    document.getElementById('todoItems').style.color = color;    
}

//function to generate random colour
function generateRandomColor() {
    var colors = [ 'red', 'purple', 'yellow', 'green', 'blue'];
    
    var randomNumber = Math.random() * colors.length; //generates random number between 0 and 1
    var randomNumberfloored = Math.floor(randomNumber);
    return colors[randomNumberfloored];
}