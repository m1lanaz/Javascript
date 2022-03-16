$(document).ready(function(){
    
    $("#get-pokemon-button").on('click', function(){

       $.get('https://pokeapi.co/api/v2/pokemon/', function(data, status){
           console.log(data);

            var string = "";
            
            string += "<table class='table'>";

            $.each(data.results, function(index, value){
                string += "<tr><td><a href='" +value.url+"'>"+ value.name + "</td><td><button class='hide-button btn btn-primary'>Hide</button></td></tr>";
            });

            string += "</table>";

            $('#poke-list').html(string);
       });
    });

});