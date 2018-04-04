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
    correctModal: 'Très bien!',
    incorrectModal: 'Attention!'},
  {
    type: 'translate',
    question: 'Traduis cette phrase.',
    rightAnsweranswer: 'I don\'t like snakes.',
    correctModal: 'Très bien!',
    incorrectModal: 'Attention!'},
  {
    type: 'word-order',
    question: 'Mets les mots dans l\'ordre correct.',
    rightAnswer: 'Mon animal préféré est un lapin.',
    options: [
      'Mon', 'animal', 'préféré', 'est', 'un', 'lapin.'
    ]}
];

const modalsFr = [

  {
    correct: 'Excellent!',
    incorrect: 'Essaie encore!',
    options: [
      'Continue', 'Retour'
    ]
  },
  {
    correct: 'Génial!',
    incorrect: 'Essaie encore!',
    options: [
      'Continue', 'Retour'
    ]
  },
  {
    correct: 'Parfait - 100%!',
    incorrect: 'Oups!',
    options: [
      'Continue', 'Retour'
    ]
  }
];
