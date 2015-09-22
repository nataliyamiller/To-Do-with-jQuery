$(document).ready(function() {
  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTaskDescription = $("input#new-task-description").val();
    var inputtedTaskImportance = $("input#new-task-importance").val();


    var newTask = { description: inputtedTaskDescription, importance: inputtedTaskImportance, completed: false };



  var newItem = "<h4><span class='to-do'>" + newTask.description + "  <button id='move'>Move to completed</button></span></h4>";


   $("p#tasks-to-do").append(newItem);


   var $clickedButton = $(".to-do #move").click(function() {
     var $this = $(this);
     $this.toggleClass("move");
     if($this.hasClass("move")) {
       $this.text("Move to to-do");
       newTask.completed = true;
       alert(newTask.completed);

     } else {
       $this.text("Move to completed");
       newTask.completed = false;
       alert(newTask.completed);
     }


     var $toDo = $(".to-do").last();
     $toDo.toggleClass(".to-do");
     if($toDo.hasClass(".to-do")) {
     $toDo.detach().appendTo("p#tasks-completed");
   } else {
     $toDo.detach().appendTo("p#tasks-to-do");
   }
   });





  //  if ($clickedButton) {
  //    newTask.completed = true;
  //  }




 //   $(".item").click(function() {
 //     $("button#move").click(function() {
 //     $(".item").detach().appendTo("ul#tasks-completed");
 //     $(this).removeClass("move").addClass("moved").appendTo("ul#tasks-completed");
 //   });
 // });

  //  $("button#move").last().click(function(){
  //   $(".to-do").detach().prependTo("ul#tasks-completed");
  //   $(this).removeClass("move").addClass("moved").appendTo("ul#tasks-completed");
  // });

    $("input#new-task-description").val("");
    $("input#new-task-importance").val("");


  // $(".to-do").last().click(function() {
  //   $("#show-task-to-do").show();
  //   $("#show-task-to-do h2").text(newTask.description);
  //   $(".task-description").text(newTask.description);
  //   $(".task-importance").text(newTask.importance);
  //     });
    });
  });
