

// Fonction pour basculer l'affichage des paramètres et du bouton de changement de thème
function settingtoggle(){
    // Ajoute ou retire la classe 'settingactivate' au conteneur des paramètres
    // Cela permet d'afficher ou de masquer les options de paramètres
    document.getElementById("setting-container").classList.toggle('settingactivate');
    // Ajoute ou retire la classe 'visualmodeshow' au conteneur du bouton de changement de thème
    // Cela contrôle la visibilité du bouton qui permet de passer en mode clair/sombre
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle('visualmodeshow');
  }
  
  // Fonction pour changer le mode visuel (clair ou sombre)
    function visualmode(){
    // Bascule la classe 'light-mode' sur l'élément <body>
    // Cela applique le thème clair (ou sombre si la classe est retirée)
      document.body.classList.toggle('light-mode');
      // Récupère tous les éléments qui ont la classe 'needtobeinvert'
      // Ces éléments nécessitent une inversion de leurs couleurs pour s'adapter au thème
      var elements = document.querySelectorAll('.needtobeinvert');
      // Parcourt tous ces éléments et leur applique ou retire la classe 'invertapplied'
      // Cela permet d'inverser leurs couleurs
      elements.forEach(function(element) {
          element.classList.toggle('invertapplied');
      });
  
  
    }
  let emptyArea = document.getElementById("emptyarea");
  // Récupération de l'élément contenant le menu mobile
   let mobileTogglemenu = document.getElementById("mobiletogglemenu");
  // Fonction pour afficher ou masquer le menu mobile lorsqu'on clique sur le bouton hamburger.
  function hamburgerMenu() {
      // Alterne la classe "stopscrolling" pour bloquer ou débloquer le défilement de la page.
      document.body.classList.toggle("stopscrolling");
    // Affiche ou masque le menu mobile en ajoutant ou supprimant la classe "show-toggle-menu".
   document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  // Alterne les animations des trois barres du bouton hamburger.
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
  }
  // Fonction pour fermer le menu mobile lorsqu'on clique sur un élément de la liste.
  function hidemenubyli(){
  // Supprime la classe "stopscrolling" pour réactiver le défilement de la page.
  document.body.classList.toggle("stopscrolling");
  // Masque le menu mobile en supprimant la classe "show-toggle-menu".
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
   // Réinitialise les animations des barres du bouton hamburger pour revenir à l'état initial.
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
  }
  
  // Sélectionne tous les éléments de type <section> sur la page
  const sections = document.querySelectorAll('section');
  // Sélectionne tous les éléments <li> des onglets de la barre de navigation pour la version desktop
  const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul li');
  // Sélectionne tous les éléments <li> des onglets de la barre de navigation pour la version mobile
  const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul li');
  
  // Ajoute un écouteur d'événement pour détecter les défilements de page
  window.addEventListener('scroll', ()=>{
    // Variable pour stocker l'ID de la section visible actuellement
    let current = "";
    // Parcours toutes les sections de la page
    sections.forEach(section => {
       // Position de la section par rapport au haut de la page
      const sectionTop = section.offsetTop;
      // Hauteur de la section
      const sectionHeight = section.clientHeight;
       // Si le défilement de la page a dépassé la section, met à jour la variable `current` avec l'ID de la section
      if(pageYOffset >= (sectionTop - 200)){
        // Récupère l'ID de la section
        current = section.getAttribute('id');
      }
    })
  
    // Met à jour les onglets de la version mobile
    mobilenavLi.forEach( li => {
      // Retire la classe 'active' de tous les onglets
      li.classList.remove('activeThismobiletab');
      // Si l'onglet correspond à la section visible
      if(li.classList.contains(current)){
        // Ajoute la classe 'active' à cet onglet
        li.classList.add('activeThismobiletab')
      }
    })
  
    // Met à jour les onglets de la version desktop
  navLi.forEach( li => {
    // Retire la classe 'active' de tous les onglets
    li.classList.remove('activeThistab');
    // Si l'onglet correspond à la section visible
    if(li.classList.contains(current)){
      // Ajoute la classe 'active' à cet onglet
      li.classList.add('activeThistab')
    }
  })
  });
  
  
  // Récupère le bouton "Retour en haut" à partir de son ID
  let mybutton = document.getElementById("backtotopbutton");
  // Définit une fonction qui s'exécute à chaque fois qu'il y a un défilement sur la fenêtre
  window.onscroll = function(){
    // Appelle la fonction scrollFunction pour gérer l'affichage du bouton
    scrollFunction()
  };
  
  // Fonction pour afficher ou cacher le bouton selon la position de défilement
  function scrollFunction(){
    // Vérifie si l'utilisateur a défilé de plus de 400 pixels en utilisant deux méthodes :
    // document.body.scrollTop pour Safari
    // document.documentElement.scrollTop pour Chrome, Firefox et autres
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
    {
      // Affiche le bouton si la condition est remplie
      mybutton.style.display = "block";
    }
     else{
        // Cache le bouton si la condition n'est pas remplie
        mybutton.style.display = "none";
       
        }
  }
  
  // Fonction pour remonter en haut de la page lorsqu'on clique sur le bouton
  function scrolltoTopfunction(){
    // Définit la position de défilement verticale du corps du document à 0 (pour Safari)
    document.body.scrollTop = 0;
     // Définit la position de défilement verticale de la partie HTML du document à 0 (pour Chrome, Firefox, etc.)
    document.documentElement.scrollTop = 0;
  }
  