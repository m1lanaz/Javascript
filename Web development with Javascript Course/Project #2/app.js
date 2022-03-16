$(document).ready(function(){
    
    $("#get-pokemon-button").on('click', function(){

       $.get('https://pokeapi.co/api/v2/pokemon/', function(data, status){
           console.log(data);
           
            var string = "";
            
            string += "<ul>";

            $.each(data.results, function(index, value){
                string += "<li>" + value + "</li>";
            });

            string += "</ul>";

            $('#poke-list').html(string);
       });
    });

});