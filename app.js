var app = new Vue({
  el: '#app',
  data: {
    firstName: "Mathilde",
    lastName: "Dumazet",
    description: "Je suis étudiante en journalisme à Sciences Po.",
    photo: "https://media-exp1.licdn.com/mpr/mpr/shrinknp_200_200/p/4/005/0ac/295/068f4bf.jpg",
    twitter: "MathildeDumazet",
    github: "MathildeDumazet",
    mail: "mathilde.dumazet@gmail.com",
    experiences: [{
      dateBegin: "July 2017",
      dateEnd: false,
      name: "Le Monde",
      title: "Journaliste stagiaire au service culture",
      logo: 'http://www.sppef.fr/wp-content/uploads/2017/10/sppef_logo-le-monde-sites-monuments.png',
      description: "Production de contenus éditoriaux",
    }, {
      dateBegin: "May 2017",
      dateEnd: "June 2017",
      name: "Slate.fr",
      title: "Journaliste stagiaire",
      logo: 'http://www.slate.fr/sites/all/themes/slate/images/fb_placeholder.jpg',
      description: "Production de contenus éditoriaux",
    }, {
      dateBegin: "March 2016",
      dateEnd: "April 2016",
      name: "Little White Lies",
      title: "Journaliste stagiaire et critique cinéma",
      logo: 'https://pbs.twimg.com/profile_images/688056455660974080/lq8r5IbC.jpg',
      description: false,
    }],
    formations: [{
      dateBegin: "2016",
      dateEnd: "2018",
      name: "Master de Journalisme",
      university: "Sciences Po Paris"
    }, {
      dateBegin: "2013",
      dateEnd: "2016",
      name: "Bachelor Sciences sociales",
      university: "Sciences Po Paris",
    }],
    languages: ["Anglais"],
    skills: ["Indesign", "Social networks", "Cultural policies", "HTML"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})