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


const questionsIt = [
  {
    type: 'image',
    question: 'Clicca sull\'immagine giusta.',
    answer: 'Il topo:',
    options: [
      'cat', 'dog','mouse'
    ],
    rightAnswer: 'mouse',
    correctModal: 'Bravo!',
    incorrectModal: 'Attenzione!'
  },

  {
    type: 'audio-text',
    question: 'Ascolta e scriva la frase.',
    audioFile: 'itquestion2.mp3',
    rightAnswer: 'Non mi piacciono i cani.',
    correctModal: 'Esatto!',
    incorrectModal: 'Prova ancora!'},

  {
    type: 'translate',
    question: 'Traduca questa frase.',
    rightAnswer: 'I don\'t like dogs.',
    correctModal: 'Ottimo lavoro!',
    incorrectModal: 'Riprovi!'},


  {
    type: 'word-order',
    question: 'Metta le parole nel giusto ordine.',
    options: [
      'Il', 'mio', 'animale', 'preferito', 'è', 'un', 'coniglio.'
    ],
    rightAnswer: 'Il mio animale preferito è un coniglio.',
    correctModal: 'Perfetto - 100%!',
    incorrectModal: 'Ops!'}
];
