function add_li()
{
  var ma_liste = document.getElementById("logiciels");
  var les_li = ma_liste.getElementsByTagName("li");
  var longueur_ma_liste = les_li.length;
  var num_new_li = longueur_ma_liste + 1;
  var contenu_ma_liste = ma_liste.innerHTML;
  var li_to_add = '  <li id="li' + num_new_li + '">du texte dans le new li> ' + num_new_li + '<\/li>';
  console.log("Actuellement, " + longueur_ma_liste + " <li> dans la liste");
  contenu_ma_liste = contenu_ma_liste + li_to_add;
  ma_liste.innerHTML = contenu_ma_liste;
  longueur_ma_liste = les_li.length;

  console.log("Et maintenant, " + longueur_ma_liste + " <li> dans la liste");
  console.log("Le dernier item de la liste est :\n" + li_to_add);
}
//
// document.ul.onload = addElement;
//
// function addElement () {
//   // crée un nouvel élément div
//   var newLi = document.createElement("li");
//   // et lui donne un peu de contenu
//   var newContent = document.createTextNode('item');
//   // ajoute le nœud texte au nouveau div créé
//   newLi.appendChild(newContent);
//
//   // ajoute le nouvel élément créé et son contenu dans le DOM
//   var currentLi = document.getElementById('logiclels');
//   document.ul.insertBefore(newLi, currentLi);
// }


// function add_li("logiciels") {
//     // Stockage  de la listedans var mylist
//     var mylist = document.getElementById("logiciels");
//     // Taille de la liste ==>nobre d'items
//     var itemNber = mylist.getElementsByTagName("li").length;
//     //Creer un new noeud item de liste
//     var creatNoeudLi = document.createElement("li");
//     // Creer un noeud texte
//     var creatNoeudtxt = document.createTextNode("item n°" + (itemNber + 1));
//    // Attacher le noeud texte au noeud item de liste
//     creatNoeudLi.appendChild(creatNoeudtxt);
//     // Attacher noeud-item de liste au noeud liste
//     mylist.appendChild(creatNoeudLi);
//
//     console.log(creatNoeudLi);
// }
// function add_li(sId) {
//     var oUl = document.getElementById(sId); // récupération de la liste
//     var iLength = oUl.getElementsByTagName("li").length; // longueur de la liste (nombre d'items)
//
//     var oLi = document.createElement("li"); // on cré un nouveau noeud item de liste
//     var oText = document.createTextNode("Ceci est l'item de liste n°" + (iLength + 1)); // on cré un noeud texte
//
//     oLi.appendChild(oText); // on attache le noeud texte au noeud item de liste
//     oUl.appendChild(oLi); // on attache le noeud item de liste au noeud liste
//
//     return oLi;
// }
