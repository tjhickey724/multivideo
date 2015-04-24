

	
	var Videos= [
	//{id: "allfive", src: 'http://people.brandeis.edu/~dfit99/AllFive'}
        {id: 'Master', src: 'http://people.brandeis.edu/~dfit99/Master' },
        {id: 'Emily' , src: 'http://people.brandeis.edu/~dfit99/Emily' },
        {id: 'Joanna', src: 'http://people.brandeis.edu/~dfit99/Joanna'},
	    {id: 'Wendy', src: 'http://people.brandeis.edu/~dfit99/Wendy'},
        {id: 'Sarah', src: 'http://people.brandeis.edu/~dfit99/Sarah'}
    ];		
		
        // Create an array of videos
    Template.VideoTemplate.helpers({
	    array: function () {
		    return Videos}
	});
		
			
		
		
	Template.VideoTemplate2.helpers({
	    array: function () {
			return Videos}
    });
			

		
