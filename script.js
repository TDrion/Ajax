$(document).ready(function(){
    var sea;
    $('#pak').click(function(){
        sea = $('#sea').val();

        pak();
    });
    $('#sea').keydown(function(e){
        if(e.keyCode == 13){
            sea = $(this).val();

            pak()
        }
    });

    function pak(){

        var flickrURL =  "http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags="+
        sea +"&jsoncallback=?"
        $.ajax (
            {
                dataType: 'json',
                method:'GET',
                url: flickrURL,
                success: laadFotos
            }
        )
    }
    function laadFotos(data){
        $('#niks').html("");
        for(var i = 0; i < data.items.length; i++){
            var plaatjes = data.items[i];
            var htmlCode = "<div class='container'><div class='fotos'> <a href='"+ plaatjes.link +"' target='_blank'><img src='"+ plaatjes.media.m + "' alt='"+ plaatjes.title +"'></a></div class='title' ><h4>"+ plaatjes.title +"</h4></div>";
            $('#niks').append(htmlCode);
        }
        $("#saus a").attr("href", data.link).text(data.title + " on Flickr");
    }
})


