



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



/*var videos = {
 a: Popcorn("#allfive"),
 b: Popcorn("#Sarah"),
 c: Popcorn("#Joanna"),
 d: Popcorn("#Emily"),
 e: Popcorn("#Wendy"),
 f: Popcorn("#Master")

 },

 */
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
                        /*if ( !this.media.paused ) {
                            return;
                        }
                        videos.b.emit( "timeupdate" );
                        videos.c.emit( "timeupdate" );
                        videos.d.emit( "timeupdate" );
                        videos.e.emit( "timeupdate" );
                        videos.f.emit( "timeupdate" );

                        // update scrubber
                        scrub.val( this.currentTime() );

                        return;
                    }
                    */

                    if ( event === "seeking" ) {
                        for(i=1;i<videos.length;i++){
                            videos[i].currentTime( this.currentTime());
                        }
                        /*
                        videos.b.currentTime( this.currentTime() );
                        videos.c.currentTime( this.currentTime() );
                        videos.d.currentTime( this.currentTime() );
                        videos.e.currentTime( this.currentTime() );
                        videos.f.currentTime( this.currentTime() );
                        */
                    }

                    if ( event === "play" || event === "pause" ) {
                        for(i=1;i<videos.length;i++){
                            videos[i][ event ] ();
                        }
                        /*
                        videos.b[ event ]();
                        videos.c[ event ]();
                        videos.d[ event ]();
                        videos.e[ event ]();
                        videos.f[ event ]();
                        */

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
    /*
    videos.a.currentTime( val );
    videos.b.currentTime( val );
    videos.c.currentTime( val );
    videos.d.currentTime( val );
    videos.e.currentTime( val );
    videos.f.currentTime( val );
    */
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
    /*
    var t = videos.a.currentTime();
    if (videos.b.media.readyState === 4 ) {
        videos.b.currentTime( t);
    }
    if (videos.c.media.readyState === 4 ) {
        videos.c.currentTime( t);
    }
    if (videos.d.media.readyState === 4 ) {
        videos.d.currentTime( t);
    }
    if (videos.e.media.readyState === 4 ) {
        videos.e.currentTime( t);
    }
    if (videos.f.media.readyState === 4 ) {
        videos.f.currentTime( t);
    }
    requestAnimationFrame( sync );
    */
}

sync();