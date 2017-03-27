$(document).ready(function () {
      
    $("#myBtn").click(function(){
         $('#myModal').modal('show');
    });
});

function start(al) {
      var bar = document.getElementById('progressBar');
      var status = document.getElementById('status');      
      bar.value = al;
      al++;
        var sim = setTimeout("start("+al+")",10);
        if(al == 2){
          
          bar.value = 883;
          clearTimeout(sim);
                 }
        }