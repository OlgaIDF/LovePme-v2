document
  .querySelector("#legal_personality")
  .addEventListener("change", function () {
    var radios = document.querySelectorAll("input");
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked === true) break;
    }
    if (radios[i].value == "personne physique") {
      document.querySelector(".personne_physique").style.display = "inline";
      document.querySelector(".personne_morale").style.display = "none";
      document.querySelector("#legal_personality").style.color = "grey";
    } else if (radios[i].value == "personne morale") {
      document.querySelector(".personne_morale").style.display = "inline";
      document.querySelector(".personne_physique").style.display = "none";
      document.querySelector("#legal_personality").style.color = "grey";
    }
  });
function showModal(){
   const modal = new bootstrap.Modal(document.querySelector("#modal"));
   modal.show();
}
document.questionPersonneMorale.onclick = function () {
  
  for (var i = 0; i < radios.length; i++)
  var radVal1 = document.questionPersonneMorale.questionPersonneMorale1.value;
  var radVal2 = document.questionPersonneMorale.questionPersonneMorale2.value;
  var radVal3 = document.questionPersonneMorale.questionPersonneMorale3.value;
   if (radVal1=="Oui"||radVal2=="Oui"||radVal3=="Oui") {
     
    showModal();
  }
  if (radVal1 == "Non" && radVal2 == "Non" && radVal3 == "Non") {
    document.querySelector("#legal_personality").style.display = "none";
    document.querySelector(".personne_morale").style.display = "none";
    document.querySelector(".registrationForm").style.display = "inline";
  }
}; 
document.questionPersonnePhysique.onclick = function () {
  var radVal1 = document.questionPersonnePhysique.questionPersonnePhysique1.value;
  var radVal2 = document.questionPersonnePhysique.questionPersonnePhysique2.value;
  var radVal3 = document.questionPersonnePhysique.questionPersonnePhysique3.value;
    document.questionPersonnePhysique.questionPersonnePhysique3.value;
  if (radVal1 == "Oui" || radVal2 == "Oui" || radVal3 == "Oui") {
    showModal();
  }
  if (radVal1 == "Non" && radVal2 == "Non" && radVal3 == "Non") {
    document.querySelector("#legal_personality").style.display = "none";
    document.querySelector(".personne_physique").style.display = "none";
    document.querySelector(".registrationForm").style.display = "inline";
  }
};     
  
