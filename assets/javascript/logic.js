var topics = ["Tennis", "Baseball", "Football", "Basketball", "Quidditch", "Bowling", "Golf", "Soccer", "Lacrosse"];

for (var i = 0; i < topics.length; i++)
{
    $(".topic-button").html(topics[i].append());
}

function populateGifs(i)
{
    $('button').on('click', function()
{
        var x = $(this).data("search");
    


    var queryURL = "https.api.giphy.com/v1/gifs/search?q=" +topics[i]+"_key=bglWwAGazAMFE0xYpqM481pRnlhe41vQ"
    $.ajax({url:queryURL,method:'GET'})
        .done(funtion(response){
            document.getElementById(".topic-button").innerHTML = (response);


        )};
}
}

function animateGif()
{
// could not come up with animation logic
}