const questionsFr = [
  {
    type: 'image',
    question: 'Clique sur l\'image correcte.',
    answer: 'Le chien:',
    options: [
      'cat', 'dog','mouse'
    ],
    rightAnswer: 'dog',
    buttontext: 'Vérifie',
    correctModal: 'Très bien!',
    correctModalButton: 'Continue',
    incorrectModal: 'Attention!',
    incorrectModalButton: 'Retour'
  },

  {
    type: 'audio-text',
    question: 'Écoute et écris la phrase.',
    audioFile: 'frquestion2.mp3',
    rightAnswer: 'Je n\'aime pas les serpents.',
    buttontext: 'Vérifie',
    correctModal: 'Génial!',
    correctModalButton: 'Continue',
    incorrectModal: 'Essaie encore!',
    incorrectModalButton: 'Retour'
  },

  {
    type: 'translate',
    question: 'Traduis cette phrase.',
    rightAnswer: 'I don\'t like snakes.',
    buttontext: 'Vérifie',
    correctModal: 'Excellent!',
    correctModalButton: 'Continue',
    incorrectModal: 'Essaie encore!',
    incorrectModalButton: 'Retour'
  },


  {
    type: 'word-order',
    question: 'Mets les mots dans l\'ordre correct.',
    options: [
      'Mon', 'animal', 'préféré', 'est', 'un', 'lapin.'
    ],
    rightAnswer: 'Mon animal préféré est un lapin.',
    buttontext: 'Vérifie',
    correctModal: 'Parfait - 100%!',
    correctModalButton: 'Continue',
    incorrectModal: 'Oups!',
    incorrectModalButton: 'Retour'
  }
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
    buttontext: 'Verifica',
    correctModal: 'Bravo!',
    correctModalButton: 'Avanti',
    incorrectModal: 'Attenzione!',
    incorrectModalButton: 'Indietro'
  },

  {
    type: 'audio-text',
    question: 'Ascolta e scriva la frase.',
    audioFile: 'itquestion2.mp3',
    rightAnswer: 'Non mi piacciono i cani.',
    buttontext: 'Verifica',
    correctModal: 'Esatto!',
    correctModalButton: 'Avanti',
    incorrectModal: 'Prova ancora!',
    incorrectModalButton: 'Indietro'
  },

  {
    type: 'translate',
    question: 'Traduca questa frase.',
    rightAnswer: 'I don\'t like dogs.',
    buttontext: 'Verifica',
    correctModal: 'Ottimo lavoro!',
    correctModalButton: 'Avanti',
    incorrectModal: 'Riprovi!',
    incorrectModalButton: 'Indietro'
  },


  {
    type: 'word-order',
    question: 'Metta le parole nel giusto ordine.',
    options: [
      'Il', 'mio', 'animale', 'preferito', 'è', 'un', 'coniglio.'
    ],
    rightAnswer: 'Il mio animale preferito è un coniglio.',
    buttontext: 'Verifica',
    correctModal: 'Perfetto - 100%!',
    correctModalButton: 'Avanti',
    incorrectModal: 'Ops!',
    incorrectModalButton: 'Indietro'
  }
];
