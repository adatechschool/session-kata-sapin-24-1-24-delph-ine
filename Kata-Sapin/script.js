//Fait sans avoir lu les étapes donc mis en commentaire
//function afficherPointeSapin(hauteur){
    //boucle pour les lignes
//for (let i = 1; i <= hauteur;i ++)//{

//espacement des étoiles     //crée l'espace
 //   let espaceAvantEtoile = ''.repeat(hauteur - i);
 //affiche étoiles
 //   let etoiles = '*'.repeat(2*i-1);
 
 //affiche la ligne
// console.log(espaceAvantEtoile + etoiles);
// }
//}

//tester la fonction
//afficherPointeSapin(4);
//----------------------------------------------

// Fait après avoir vu qu'il y avait des étapes..
//Etape 1
//1.1 une ligne d'etoiles
function afficherEtoiles(n) {
    //pour(n) etoiles
     console.log('*'.repeat(n)) 
     // à faire pour chaque n étoile !

  }
  
  afficherEtoiles(2)
  afficherEtoiles(3)
  afficherEtoiles(4)
  afficherEtoiles(5)

  //1.2 hauteur largeur
  function afficherRectangle(hauteur, largeur){
    for(let i= 0; i<hauteur; i++){
      afficherEtoiles(largeur);  
}
} 
  //affiche un carré de 5 lignes et 5 étoiles
  afficherRectangle(5, 5)

  //1.3 Triangle d'étoiles

  function afficherTriangleCoteDroite(n){
    for(let i = 1; i<= n;i++){
        //crée l'espace à gauche
        let espace ='*'.repeat(n-i);

        afficherEtoiles(i);
            //affiche le triangle avec slash.
            console.log('/'+'*'.repeat(i) + '\\');
    }
  }
  afficherTriangleCoteDroite(5);


 //1.4 Seconde moitié côté gauche du sapin

  function afficherTriangleCoteGauche(n){
    for(let i = 1; i<= n;i++){
        //crée l'espace à droite
        let espace =''.repeat(n-i);

        //afficherEtoiles(i);
            //affiche le triangle avec slash.
            console.log('/'+'*'.repeat(i) + '\\')
    }
  }
  afficherTriangleCoteGauche(5);

  //Mis en commentaire car rien d'aligner.
  //1.5 Assemblage et déco 

  //function afficherSapin(etages, hauteur_etage) {
   // for(let i = 1; i <= hauteur_etage; i++){
        //espacement pour aligner
    //    let espace =''.repeat(hauteur_etage-i);
   //     console.log(''.repeat(hauteur_etage)+'+');
    //    console.log(espace +'/'+'*'.repeat(i)+'|*'.repeat(i)+'\\');
   // }
//  }

 // afficherSapin(3, 3)
