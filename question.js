const question = [
  {
    name: 'Question 1 - Est-ce que tu as bien dormi ?',
    answers: [
      {
        text: 'Oui comme un loir, j’ai l’habitude de me coucher tôt !',
        gif: 'https://media.giphy.com/media/l3M7smiKhkOcw/giphy.gif',
        point: 20,
      },
      {
        text: 'Plutôt bien, au moins 7h de sommeil',
        gif: 'https://media.giphy.com/media/KD8Ldwzx90X9hi9QHW/giphy.gif',
        point: 15,
      },
      {
        text: 'Non, j’ai encore rêvé de code (moins de 5h de sommeil)',
        gif: 'https://media.giphy.com/media/elrFAUtV7ZOH7TSPhF/giphy.gif',
        point: 10,
      },
      {
        text: 'Je suis insomniaque chronique',
        gif: 'https://media.giphy.com/media/cl2PsDEg80omBDkq8G/giphy.gif',
        point: 5,
      },
    ],
    advice:
      'Il est recommandé de dormir au moins 7 heures par nuit. Suit le lien pour trouver des conseils : https://institut-sommeil-vigilance.org/10-recommandations-de-nos-medecins-du-sommeil-pour-bien-dormir/',
  },
  {
    name: 'Question 2 - Dis moi ce que tu manges, je te dirais si c’est bien ? ',
    answers: [
      {
        text: '5 fruits et légumes comme tous les jours !',
        gif: 'https://media.giphy.com/media/26BGFJ4c5v2dhlYdy/giphy.gif',
        point: 20,
      },
      {
        text: 'Je ne sais pas, c’est pas moi qui cuisine',
        gif: 'https://media.giphy.com/media/v8U7hrVmE6thV9ulhc/giphy.gif',
        point: 5,
      },
      {
        text: 'Aujourd’hui c’est resto, faut se faire plaisir !',
        gif: 'https://media.giphy.com/media/iJgoGwkqb1mmH1mES3/giphy.gif',
        point: 15,
      },
      {
        text: 'Exclusivement de burgers mais y a de la salade, ça équilibre !',
        gif: 'https://media.giphy.com/media/iZjoLdS1nwMRq/giphy.gif',
        point: 10,
      },
    ],
    advice:
      'conseil pour bien manger : Il est recommandé de manger équilibré et environ 5 fruits et légumes par jour : https://www.mangerbouger.fr/l-essentiel/les-recommandations-sur-l-alimentation-l-activite-physique-et-la-sedentarite',
  },
  {
    name: 'Question 3 - Tu n’arrives toujours pas à saisir les fonctions d’ordre supérieur sur Javascript, quel est ton mood ?',
    answers: [
      {
        text: 'Tu restes toute la nuit éveillé en enchainant les tutoriels sur YouTube',
        gif: 'https://i.pinimg.com/originals/1e/66/a2/1e66a2c2c2ac84ebd2c4eb2a18398e3c.jpg',
        point: 20,
      },
      {
        text: 'C’est pas grave, avec de l’entrainement ça va rentrer !',
        gif: 'https://i.pinimg.com/originals/2c/2e/8f/2c2e8fac7552022ce2074a10902fc054.jpg',
        point: 15,
      },
      {
        text: 'Tu lâches l’affaire !',
        gif: 'https://i.pinimg.com/originals/fe/48/e2/fe48e2532fe7642a73b4c4e74e923a4f.jpg',
        point: 10,
      },
      {
        text: 'Les ordres de fonction supér- quoi?',
        gif: 'https://i.pinimg.com/originals/20/db/ee/20dbeed1f5d4da547203d893a1d079b1.jpg',
        point: 5,
      },
    ],
    advice:
      "Conseil : Une attitude positive vous permet de vous détendre, de vous souvenir, de vous concentrer et d'absorber les informations tout en apprenant. Vous êtes prêt à accueillir de nouvelles expériences et à reconnaître de nombreux types d'opportunités d'apprentissage. Et quand on voit des opportunités, l’espoir augmente :https://medium.com/@chrisplusone/the-benefits-of-positive-thinking-for-students-6510ce1b9a2b",
  },
  {
    name: 'Question 4 - Quel sportif est-tu?',
    answers: [
      {
        text: 'Appel moi The ROCK!',
        gif: 'https://media.giphy.com/media/GPUS2VOQXRgYLR6CjP/giphy.gif',
        point: 20,
      },
      {
        text: "J'ai pas encore réussi à merger le corps avec la tête...",
        gif: 'https://media.giphy.com/media/SRrbiFCfEzFPaKsXMA/giphy.gif',
        point: 15,
      },
      {
        text: 'Sportif du dimanche, toujours une bière à la main',
        gif: 'https://media.giphy.com/media/zeLBsAG6nzx3tb2c5c/giphy.gif',
        point: 10,
      },
      {
        text: 'Pfffffff la réponse me fatigue déjà',
        gif: 'https://media.giphy.com/media/8hXXilmk33wtmAGJNu/giphy.gif',
        point: 5,
      },
    ],
    advice:
      'https://toutpourmasante.fr/se-mettre-au-sport-9-conseils-pour-bien-commencer/',
  },
  {
    name: 'Question 5 - Continuer a sortir',
    answers: [
      {
        text: 'De temps en temps pour enflammer le dance floor',
        gif: 'https://media.giphy.com/media/blSTtZehjAZ8I/giphy.gif',
        point: 15,
      },
      {
        text: 'Il faut me trainer pour sortir',
        gif: 'https://media.giphy.com/media/bde9wzYKKO7EA/giphy.gif',
        point: 10,
      },
      {
        text: 'Tous les jours!!!',
        gif: 'https://media.giphy.com/media/h8NdYZJGH1ZRe/giphy-downsized-large.gif',
        point: 20,
      },
      {
        text: "Quoi? le covid c'est terminé?",
        gif: 'https://media.giphy.com/media/3oz8xVhDcU1txAYI1i/giphy.gif',
        point: 5,
      },
    ],
    advice: "Conseil du jour: sors tous les jours pour t'aérer l'esprit ",
  },
];

export default question;
 
