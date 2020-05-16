let todoItems = ["Todo 1", "Todo 2", "Todo 3"];
function loadItems(){
    $(".items").empty();
    todoItems.forEach(element => {
        $(".items").append(`<li class="todoItem"><span class="delete"><i class="far fa-trash-alt"></i></span>${element} </li>`);
    });
    $(".items").last().slideDown(500);
    
    setDeleteListener();
}

function setDeleteListener(){
    $(".delete").on("click", function(e){
        e.stopPropagation();
        todoItems.splice($(this).parent().index(),1);
        $(this).parent().slideToggle(500, function(){
            loadItems();
        });
    });
    liListen();
}


function liListen(){
    $(".todoItem").on("click", function(){
        $(this).toggleClass("done");
    });
}

$("#icon").on("click", function(){
    $(".textInput").slideToggle(500);
});



setInputListener();
loadItems();

function setInputListener(){
    $("#input").on("keypress", function(key){
        if(key.which == 13){
            let content = $("#input").val();
            if(content !== ""){
                todoItems.push(content);
                loadItems();
                $(this).val("");
            }
        }
    });
}