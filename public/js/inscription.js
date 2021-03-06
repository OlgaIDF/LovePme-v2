function showModal() {
  const modal = new bootstrap.Modal(document.querySelector("#modal"));
  modal.show();
}

var reponsesChecked = [];

function getReponses(questionsLimit, negativeAnswerLimit) {
  var cnt = 0;
  var negativeAnswerCnt = 0;

  for (var i = 0; i < reponses.length; i++) {
    if (reponses[i].checked) {
      reponsesChecked.push(reponses[i].value);
      cnt++;
      if (reponses[i].value == "Non") {
        negativeAnswerCnt++;
      }
    }
  }
  if (cnt === questionsLimit) {
    document.querySelector(".personne_morale").style.display = "none";
    document.querySelector(".personne_physique").style.display = "none";
    document.querySelector("#legal_personality").style.display = "none";
    if (negativeAnswerCnt > negativeAnswerLimit) {
      showModal();
      document.querySelector(".non-averti1").style.display = "inline";
    } else {
      document.querySelector(".communes").style.display = "inline";
    }
  }
 // return reponsesChecked;
}

document.forms.legalPersonality.addEventListener("change", function () {
 var questLP = 3;
 var negativeAnswers = 0;

  reponses = document.getElementsByClassName('lp');
  if (document.getElementById('Personne physique').checked) {
    document.querySelector(".personne_physique").style.display = "inline";
    document.querySelector(".personne_morale").style.display = "none";
    document.querySelector(".legal_personality").style.color = "grey";
    getReponses(questLP, negativeAnswers);
  } else if (document.getElementById('Personne morale').checked) {

    document.querySelector(".personne_morale").style.display = "inline";
    document.querySelector(".personne_physique").style.display = "none";
    document.querySelector(".legal_personality").style.color = "grey";
    getReponses(questLP, negativeAnswers)
  };
 // console.log('return getReponses testArray ='+test)

  //var reponsesNA1 = document.getElementsByClassName('na1');


});