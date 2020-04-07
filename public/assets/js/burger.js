console.log('loaded')

$('#devour').click(function(){
    const id = $(this).attr('data-id')
    $.ajax({
        url: '/api/burger/'+id,
        method: 'PUT',
    }).then((results)=>{
        if(results === "OK"){
            location.reload()
        }
    }
    )
})
$("#addburger").on('submit',function(event){
    event.preventDefault()
    const burgerName = $("#textName").val().trim()
    $.post('/api/burger',{burger_name: burgerName, devoured: 0}).then((results)=>{
        if(results === "OK"){
            location.reload()
        }
    })
})