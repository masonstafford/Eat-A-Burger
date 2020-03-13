$(document).on("click", ".eatMyBurger", function(event){ 
    event.preventDefault();
    
    var id = $(this).data("burgerid")
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(function(){
      console.log("updated id ", id);
      location.reload();
    });
  });
  $(document).on("submit", "#addBurger", function(event){ 
    event.preventDefault();
    
    var newBurger = {
      burger_name: $("#addBurger [name=burger]").val().trim()
    };
    console.log(newBurger);
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(function(){
      location.reload()
    });
  });
