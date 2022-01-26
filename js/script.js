
function afficherVarA(){
    var a = 5;
    document.write(a);
}

// Question2
// function getFirstitle(){
//   document.getElementsById("firstitle").innerHTML = " ";
//   // const content = element.innerHTML;
//   //  element.innerHTML = htmlString;
//   //   let contenuH1 =  htmlString.getElementById("firstitle");
//   //   document.write(contenuH1);
//   }
  function getFirstitle(){
            document.getElementById("firstitle").innerHTML="GIT";
       }
// Question3
let allh1 = document.getElementsByTagName('h1');
       //a
 function getAllH1Elems() {
      var num = allh1.length;
      alert('There are ' + num + ' hiTags in this document');
    }
       //b


function displayH1Content(){
    for (var i = 0; i < allh1.length; i++) {
      alert(allh1[i].innerHTML);
  }
}



// Question4
function getSuiviEvent(){
  const elmntButton = document.getElementById("buttonId");// Prend en param l'id du bouton
  elmntButton.addEventListener('click',function (event){
    firstitle.textContent ="Elément cliqué via la propriété handleEvent"});//firstitle étant l'ID du premier h1
}
// Question 5 - 6

// function addList(){
//       document.getElementsById("logiciels").item(0).id ="itemDeMaListe";
//       forEach((item, i) => {
//         // crée un nouvel élément div
//         var newLi = document.createElement("li");
//         // et lui donne un peu de contenu
//         var newContent = document.createTextNode('item');
//         // ajoute le nœud texte au nouveau div créé
//         newLi.appendChild(newContent);
//
//         // ajoute le nouvel élément créé et son contenu dans le DOM
//         var currentLi = document.getElementById('logiciels');
//         document.body.insertBefore(newLi, currentLi);
//       });
//     }

// function add_li()
// {
//   var ma_liste = document.getElementById("logiciels");
//   var les_li = ma_liste.getElementsByTagName("li");
//   var longueur_ma_liste = les_li.length;
//   var num_new_li = longueur_ma_liste + 1;
//   var contenu_ma_liste = ma_liste.innerHTML;
//   var li_to_add = '  <li id="li' + num_new_li + '">du texte dans le new li> ' + num_new_li + '<\/li>';
//   console.log("Actuellement, " + longueur_ma_liste + " <li> dans la liste");
//   contenu_ma_liste = contenu_ma_liste + li_to_add;
//   ma_liste.innerHTML = contenu_ma_liste;
//   longueur_ma_liste = les_li.length;
//
//   console.log("Et maintenant, " + longueur_ma_liste + " <li> dans la liste");
//   console.log("Le dernier item de la liste est :\n" + li_to_add);
// }
// function add_li()
// {
//   var ma_liste = document.getElementById("logiciels");
//   var les_li = ma_liste.getElementsByTagName("li");
//   var longueur_ma_liste = les_li.length;
//   var num_new_li = longueur_ma_liste + 1;
//   var contenu_ma_liste = ma_liste.innerHTML;
//   var li_to_add = '  <li id="li' + num_new_li + '">du texte dans le new li> ' + num_new_li + '<\/li>';
//   console.log("Actuellement, " + longueur_ma_liste + " <li> dans la liste");
//   contenu_ma_liste = contenu_ma_liste + li_to_add;
//   ma_liste.innerHTML = contenu_ma_liste;
//   longueur_ma_liste = les_li.length;
//
//   console.log("Et maintenant, " + longueur_ma_liste + " <li> dans la liste");
//   console.log("Le dernier item de la liste est :\n" + li_to_add);
// }
function validateForm(){
    var name = document.forms["myForm"]["name"];
    var email = document.forms["myForm"]["email"];
    var message = document.forms["myForm"]["message"];

    if (name.value == "")
    {
        document.getElementById('errorname').innerHTML="Veuillez entrez un nom valide";
        name.focus();
        return false;
    }else{
        document.getElementById('errorname').innerHTML="";
    }

    if (email.value == "")
    {
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide";
        email.focus();
        return false;
    }else{
        document.getElementById('erroremail').innerHTML="";
    }

    if (email.value.indexOf("@", 0) < 0)
    {
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide";
        email.focus();
        return false;
    }

    if (email.value.indexOf(".", 0) < 0)
    {
        document.getElementById('erroremail').innerHTML="Veuillez entrez une adresse mail valide";
        email.focus();
        return false;
    }

    if (message.value == "")
    {
        document.getElementById('errormsg').innerHTML="Veuillez entrez un message valide";
        message.focus();
        return false;
    }else{
        document.getElementById('errormsg').innerHTML="";
    }

    // Afficher l'heure de l'envoi via une fenêtre (flux de sortie)
     window.open("../src/popUp.html");

     //Ce que retourna la fction por valider le bon remplissage du formulaire
  return true;
}
