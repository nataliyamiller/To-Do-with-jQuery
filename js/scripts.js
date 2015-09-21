$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTaskDescription = $("input#new-task-description").val();
    var inputtedTaskImportance = $("input#new-task-importance").val();

    var newTask = { description: inputtedTaskDescription, importance: inputtedTaskImportance };

    $("ul#tasks-to-do").append("<li><span class='to-do'>" + newTask.description + " " + newTask.importance + "</span></li>");

    $("input#new-task-description").val("");
    $("input#new-task-importance").val("");
  });
});
