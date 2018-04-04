console.log('Data.js Loaded!!');

const questionsFr = [
  {
    type: 'image',
    question: 'Clique sur l\'image correcte.',
    answer: 'Le chien:',
    options: [
      'cat', 'dog','mouse'
    ],
    rightAnswer: 'dog',
    correctModal: 'Très bien!',
    incorrectModal: 'Attention!'
  },

  {
    type: 'audio-text',
    question: 'Écoute et écris la phrase.',
    audioFile: 'frquestion2.mp3',
    rightAnswer: 'Je n\'aime pas les serpents.',
    correctModal: 'Génial!',
    incorrectModal: 'Essaie encore!'},

  {
    type: 'translate',
    question: 'Traduis cette phrase.',
    rightAnswer: 'I don\'t like snakes.',
    correctModal: 'Excellent!',
    incorrectModal: 'Essaie encore!'},


  {
    type: 'word-order',
    question: 'Mets les mots dans l\'ordre correct.',
    options: [
      'Mon', 'animal', 'préféré', 'est', 'un', 'lapin.'
    ],
    rightAnswer: 'Mon animal préféré est un lapin.',
    correctModal: 'Parfait - 100%!',
    incorrectModal: 'Oups!'}
];
