        var myTemplate = $.templates("#VideoTemplate");
        var myTemplate2 = $.templates("#VideoTemplate2");
        var myTemplate3= $.templates("#VideoTemplate3");
        // Create an array of books
            var Videos = [
                {id: "Master", src: "Piece 3 Take 5 Master.mp4" },
                {id: "Emily", src: "Piece 3 Take 5 Emily.mp4" },
                {id: "Joanna", src: "Piece 3 Take 5 Joanna.mp4"},
                {id: "Wendy", src: "Piece 3 Take 5 Wendy.mp4"},
                {id: "Sarah", src: "Piece 3 Take 5 Sarah.mp4"}  /*,
                {id: "Master2", src: "Piece 3 Take 5 Master.mp4" },
                {id: "Emily2", src: "Piece 3 Take 5 Emily.mp4" },
                {id: "Joanna2", src: "Piece 3 Take 5 Joanna.mp4"},
                {id: "Wendy2", src: "Piece 3 Take 5 Wendy.mp4"},
                {id: "Sarah2", src: "Piece 3 Take 5 Sarah.mp4"},
                {id: "Master3", src: "Piece 3 Take 5 Master.mp4" },
                {id: "Emily3", src: "Piece 3 Take 5 Emily.mp4" },
                {id: "Joanna3", src: "Piece 3 Take 5 Joanna.mp4"},
                {id: "Wendy3", src: "Piece 3 Take 5 Wendy.mp4"},
                {id: "Sarah3", src: "Piece 3 Take 5 Sarah.mp4"},
                {id: "Master4", src: "Piece 3 Take 5 Master.mp4" },
                {id: "Emily4", src: "Piece 3 Take 5 Emily.mp4" },
                {id: "Joanna4", src: "Piece 3 Take 5 Joanna.mp4"},
                {id: "Wendy4", src: "Piece 3 Take 5 Wendy.mp4"},
                {id: "Sarah4", src: "Piece 3 Take 5 Sarah.mp4"},
                {id: "Master5", src: "Piece 3 Take 5 Master.mp4" },
                {id: "Emily5", src: "Piece 3 Take 5 Emily.mp4" },
                {id: "Joanna5", src: "Piece 3 Take 5 Joanna.mp4"},
                {id: "Wendy5", src: "Piece 3 Take 5 Wendy.mp4"},
                {id: "Sarah5", src: "Piece 3 Take 5 Sarah.mp4"},
                {id: "Master6", src: "Piece 3 Take 5 Master.mp4" },
                {id: "Emily6", src: "Piece 3 Take 5 Emily.mp4" },
                {id: "Joanna6", src: "Piece 3 Take 5 Joanna.mp4"},
                {id: "Wendy6", src: "Piece 3 Take 5 Wendy.mp4"},
                {id: "Sarah6", src: "Piece 3 Take 5 Sarah.mp4"}*/
            ];

            var main = [
                {id: "allfive", src: "Piece 3 Take 5 All Cameras.mp4"}
            ];
        myTemplate.link("#VideoStart", Videos);
        myTemplate2.link("#VideoDisplay", Videos);
        myTemplate3.link("#main", main);