function populate3BestMatches(){
  var sortedMatches = returnBestMatches();
  //only display top 3 picks
  //get reference to document element

  for(i = 0; i < sortedMatches.length; i++){
    var name = sortedMatches[i].name;
    var desc = sortedMatches[i].desc;
    var party = sortedMatches[i].party;
    var img = sortedMatches[i].picture;
    var url = sortedMatches[i].url;
    var candidateCard = "<h1># " + Number(i+1) + "</h1><div><h3><a href='" + url + "'>" + name + "</a></h3><img src='" + img + "' width='300' height='300'><h4>Description: </h4><p>" + desc + "</p><h4>Party</h4><p>" + party + "</p></div><hr>";
    $('#candidatesDisplay').append(candidateCard);
  }
}

function returnBestMatches(){
  var weightedDifferences = calculateMatches();
  var byDifference = weightedDifferences.slice();
  byDifference.sort(function(a,b) {
    return a.difference - b.difference
  });
  // console.log('by difference')
  // console.log(byDifference)
  return byDifference
}

function calculateMatches(){
  //pull array from the sessionStorage. The value should be a string with commas seperating numbers
  var value = sessionStorage.getItem('userCharacteristics');
  // var value = "1,-2,3,0,2,-3,1"
  //convert the strings pulled from sessionStorage into arrays
  var array = value.split(',')
  //the converted array represents the users point
  var userCharacteristics = [];
  for(i = 0; i < array.length; i++){
    userCharacteristics[i] = Number(array[i]);
  }
  //use CalculateDistance() method on the users point and all of the candidates
  //TODO: make candidates list
  var the_candidates = getCandidates();
  //an array of the compatibility values
  var comparision = [];
  for(i = 0; i < the_candidates.length; i ++){
    var difference = calculateDistance(userCharacteristics, the_candidates[i].characteristics)
    //This is an array that contains the candidate profile and the difference calculation
    // console.log(the_candidates[i].characteristics)
    var calcualtion = the_candidates[i];
    calcualtion.difference = difference;
    //push that to the comparison array
    comparision[i] = calcualtion;
  }
  console.log(comparision);
  return comparision
}

// point 1 and point 2 should be arrays
function calculateDistance(point1, point2){
  var vectorDifference = [];
  var sum = 0;
  var final;
  //there are 7 dimensions for each point
  //Step 1: Find the difference between each respective dimension
  for(j=0; j < point1.length; j++){
    // console.log(vectorDifference)
    vectorDifference[j] = point1[j] - point2[j];
  }
  //Step 2: Sum the Square each of the dimensions of the difference vector
  for(k=0; k < point1.length; k++){
    sum += Math.pow(vectorDifference[k], 2);
  }
  // console.log(sum)
  final = Math.sqrt(sum);
  // console.log(final);
  return final;

}

//testing
// var test_p1 = [22, 1, 42, 10];
// var test_p2 = [20, 0, 36, 8];
// calculateDistance(test_p1, test_p2);
$(document).ready(function(){
  populate3BestMatches();
})
