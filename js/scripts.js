$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTaskDescription = $("input#new-task-description").val();
    var inputtedTaskImportance = $("input#new-task-importance").val();


    var newTask = { description: inputtedTaskDescription, importance: inputtedTaskImportance };

    $("ul#tasks-to-do").append("<li><span class='to-do'>" + newTask.description + " </span><button id='move'> Move to completed tasks</button></li>");
    $("button#move").click(function(){
    $(".to-do").detach().prependTo("ul#tasks-completed");
    $("button").detach();
    $("li").remove();
  });

    $("input#new-task-description").val("");
    $("input#new-task-importance").val("");


  $(".to-do").last().click(function() {
    $("#show-task-to-do").show();
    $("#show-task-to-do h2").text(newTask.description);
    $(".task-description").text(newTask.description);
    $(".task-importance").text(newTask.importance);
    });
  });
});
