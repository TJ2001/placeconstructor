//Business Logic
function Place (name, location, landmarks, visit, notes) {
  this.placeName = name;
  this.locationName = location;
  this.landmarksNames = landmarks;
  this.visit = visit;
  this.notes = notes;
}


//User Logic
$(function(){
  // var landmarksArray = [];
  // $("button.addInput").click(function(){
  //   // $("#addLandmarks").append("<input type='text' class='form-control' id='new-landmarks'>");
  //   // $(landmarksArray).push($("#addLandmarks input").val());
  //   // console.log($("#addLandmarks input").val());
  //   // console.log(landmarksArray);
  // });
  $("form").submit(function(event){
    event.preventDefault();

    var inputtedPlace = $("#new-place-name").val();
    var inputtedLocation = $("#new-location").val();
    var inputtedLandmarks = $(".new-landmarks").val();
    var inputtedLastVisit = $("#new-last-visit").val();
    var inputtedNotes = $("#new-notes").val();

    var newPlace = new Place(inputtedPlace, inputtedLocation, inputtedLandmarks, inputtedLastVisit, inputtedNotes);

    $(".places").append("<li>" + inputtedPlace + "</li>");

    $(".places li").last().click(function(){
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName);
      $(".location").text(newPlace.locationName);
      $(".landmarks").text(newPlace.landmarksNames);
      $(".last-visit").text(newPlace.visit);
      $(".notes").text(newPlace.notes);
    });

    $("div#addLandmarks").empty().append("<label for = 'new-landmarks'>Landmarks</label><input type='text' class='form-control' id='new-landmarks'>");
    $("input#new-place-name").val("");
    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-last-visit").val("");
    $("input#new-notes").val("");
  });
});
