//  1 - social Issues
//  2 - Immigrants
//  3 - Domestic Policies
//  4 - Health care
//  5 - Economics
//  6 - Environment
//  7 - Foreign
var issue1 = 0;
var issue2 = 0;
var issue3 = 0;
var issue4 = 0;
var issue5 = 0;
var issue6 = 0;
var issue7 = 0;

function addToValue(issue, answer){
  switch(issue){
    case 1:
      issue1 += answer;
      break;
    case 2:
      issue2 += answer;
      break;
    case 3:
      issue3 += answer;
      break;
    case 4:
      issue4 += answer;
      break;
    case 5:
      issue5 += answer;
      break;
    case 6:
      issue6 += answer;
      break;
    case 7:
      issue7 += answer;
      break;
  }
}

function calculateUserArray(){
  issue1 = Number($("input[name=question25]:checked").val()) + Number($("input[name=question26]:checked").val()) + Number($("input[name=question27]:checked").val()) + Number($("input[name=question28]:checked").val());
  issue2 = Number($("input[name=question1]:checked").val()) + Number($("input[name=question2]:checked").val()) + Number($("input[name=question3]:checked").val()) + Number($("input[name=question4]:checked").val());
  issue3 = Number($("input[name=question5]:checked").val()) + Number($("input[name=question6]:checked").val()) + Number($("input[name=question7]:checked").val()) + Number($("input[name=question8]:checked").val());
  issue4 = Number($("input[name=question9]:checked").val()) + Number($("input[name=question10]:checked").val()) + Number($("input[name=question11]:checked").val()) + Number($("input[name=question12]:checked").val());
  issue5 = Number($("input[name=question13]:checked").val()) + Number($("input[name=question14]:checked").val()) + Number($("input[name=question15]:checked").val()) + Number($("input[name=question16]:checked").val());
  issue6 = Number($("input[name=question17]:checked").val()) + Number($("input[name=question18]:checked").val()) + Number($("input[name=question19]:checked").val()) + Number($("input[name=question20]:checked").val());
  issue7 = Number($("input[name=question21]:checked").val()) + Number($("input[name=question22]:checked").val()) + Number($("input[name=question23]:checked").val()) + Number($("input[name=question24]:checked").val());
  var userArray = [];
  userArray[0] = (issue1/4)
  userArray[1] = (issue2/4)
  userArray[2] = (issue3/4)
  userArray[3] = (issue4/4)
  userArray[4] = (issue5/4)
  userArray[5] = (issue6/4)
  userArray[6] = (issue7/4)
  console.log(userArray)
  var sessionString = "";

  for(i = 0; i < userArray.length; i++){
    if(i < userArray.length-1)
      sessionString += userArray[i] + ',';
    else
      sessionString += userArray[i];
  };

  sessionStorage.setItem('userCharacteristics', sessionString);
  window.location.href = 'recommendation.html'
}

function test(){
  console.log($("input[name=question1]:checked").val())
}
