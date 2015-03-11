


function show(id){
    $(".view").attr("width","20%");
    $("#"+id).attr("width","75%");
    e.attr("width")
    $("#"+id).attr("width","75%");
    //$("#mainView").attr("src","Piece 3 Take 5 Emily.mp4");
}

function show2(id){
    $(".view").attr("width","0%");
    $("#"+id).attr("width","100%");
    e.attr("width")
}

function  show3(id1,id2){
    $(".view").attr("width","0%");
    $("#"+id1).attr("width","45%");
    $("#"+id2).attr("width","45%");

}

var videos1 =main.map(function (obj) {
    return Popcorn("#" + obj.id);
})

var videos2 =Videos.map(function (obj) {
    return Popcorn("#" + obj.id);
})

var videos= videos1.concat(videos2);

scrub = $("#scrub"),
    loadCount = 0,
    events = "play pause timeupdate seeking".split(/\s+/g);

// iterate both media sources
Popcorn.forEach( videos, function( media, type ) {

    // when each is ready...
    media.on( "canplayall", function() {

        // trigger a custom "sync" event
        this.emit("sync");

        // set the max value of the "scrubber"
        scrub.attr("max", this.duration() );

        // Listen for the custom sync event...
    }).on( "sync", function() {

        // Once both items are loaded, sync events
        if ( ++loadCount == 2 ) {

            // Iterate all events and trigger them on the video B
            // whenever they occur on the video A
            events.forEach(function( event ) {

                //videos.a.on( event, function() {
                  videos[0].on(event, function(){
                    // Avoid overkill events, trigger timeupdate manually
                    if ( event === "timeupdate" ) {
                        if ( !this.media.paused ) {
                            return;
                        }
                        for(i=1 ; i<videos.length; i++){
                            videos[i].emit("timeupdate");
                        }

                        // update scrubber
                        scrub.val( this.currentTime() );

                        return;
                    }
                       

                    if ( event === "seeking" ) {
                        for(i=1;i<videos.length;i++){
                            videos[i].currentTime( this.currentTime());
                        }
                       
                    }

                    if ( event === "play" || event === "pause" ) {
                        for(i=1;i<videos.length;i++){
                            videos[i][ event ] ();
                        }
                       

                    }
                });
            });
        }
    });
});


scrub.bind("change", function() {
    var val = this.value;

        for(i=0;i<videos.length;i++){
        videos[i].currentTime( val);
         }
   
});

// With requestAnimationFrame, we can ensure that as
// frequently as the browser would allow,
// the video is resync'ed.
function sync() {

    var t = videos[0].currentTime();
    for ( i=1; i<videos.length;i++){
        if (videos[i].media.readyState === 4 ) {
            videos[i].currentTime( t);
        }
    }
    
}

sync();