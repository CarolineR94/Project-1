function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

$(function(){

  let currentQuestionNumber = 0;
  const $imagefr = $('.imagefr');
  let choice = null;
  let language = null;
  const $firstpage = $('.firstpage');
  let currentQuestionNumberIt = 0;
  let currentQuestionNumberFr = 0;

  const $imageit = $('.imageit');


  $('.question, .modal ').hide();

  $imagefr.on('click', function (){
    showQuestion(currentQuestionNumber);
    language = 'french';
    $firstpage.hide();
  });

  $imageit.on('click', function (){
    showQuestionIt(currentQuestionNumberIt);
    language = 'italian';
    $firstpage.hide();
  });


  // SHOW FRENCH QUESTIONS

  function showQuestion(questionId){
    const currentQuestion = questionsFr[questionId];
    if(currentQuestion.type === 'image'){
      const $template = showQuestionImage(currentQuestion);
      $('.mainContainerForAllQuestions').html($template);
    } else if(currentQuestion.type === 'audio-text'){
      const $template = showQuestionAudioText(currentQuestion);
      $('.mainContainerForAllQuestions').html($template);
    } else if(currentQuestion.type === 'translate'){
      const $template = showQuestionTranslate(currentQuestion);
      $('.mainContainerForAllQuestions').html($template);
    } else if(currentQuestion.type === 'word-order'){
      const $template = showQuestionWordOrder(currentQuestion);
      $('.mainContainerForAllQuestions').html($template);
    }
  }

  // SHOW ITALIAN QUESTIONS

  function showQuestionIt(questionId){
    const currentQuestion = questionsIt[questionId];
    if(currentQuestion.type === 'image'){
      const $template = showQuestionImage(currentQuestion);
      $('.mainContainerForAllQuestions').html($template);
    } else if(currentQuestion.type === 'audio-text'){
      const $template = showQuestionAudioText(currentQuestion);
      $('.mainContainerForAllQuestions').html($template);
    } else if(currentQuestion.type === 'translate'){
      const $template = showQuestionTranslate(currentQuestion);
      $('.mainContainerForAllQuestions').html($template);
    } else if(currentQuestion.type === 'word-order'){
      const $template = showQuestionWordOrder(currentQuestion);
      $('.mainContainerForAllQuestions').html($template);
    }
  }



  // IMAGE QUESTIONS

  function showQuestionImage(currentQuestion){
    const $template = $('.question-image-template');
    $template.find('.instructions').text(currentQuestion.question);
    $template.find('.answer').text(currentQuestion.answer);
    $template.find('.button').text(currentQuestion.buttontext);
    $(currentQuestion.options).each(function(i, animal){
      $template.find('.choiceimages').append(`
        <figure class="image is-200x200 choiceimage" data-choice='${animal}'>
          <img src="./images/${animal}.jpeg" alt="${animal}">
        </figure>`);
    });
    $template.find('.checkbutton').hide();
    $template.on('click', '.choiceimage', function(){
      choice = $(this).data('choice');
      $template.find('.checkbutton').show();
    });
    $template.on('click', '.checkbutton', function(){
      if(choice === currentQuestion.rightAnswer){
        $('.answer-modal p').text(currentQuestion.correctModal);
        $('.answer-modal button').text(currentQuestion.correctModalButton);
        currentQuestionNumber++;
        currentQuestionNumberIt++;
        $('.answer-modal').show();
        $('.close-modal').on('click', function(){
          $('.answer-modal').hide();
        });
        if(language === 'french'){
          showQuestion(currentQuestionNumber);
        } else{
          showQuestionIt(currentQuestionNumberIt);
        }
      } else{
        $('.answer-modal p').text(currentQuestion.incorrectModal);
        $('.answer-modal button').text(currentQuestion.incorrectModalButton);
        $('.answer-modal').show();
        $('.close-modal').on('click', function(){
          $('.answer-modal').hide();
        });
      }
    });
    $('.question-image-template').show();
    return $template;
  }



  // AUDIO-TEXT QUESTIONS
  const $input = $('.input');

  function showQuestionAudioText(currentQuestion){
    const $template = $('.question-audio-text-template');
    $template.find('.instructions').text(currentQuestion.question);
    $template.find('.button').text(currentQuestion.buttontext);
    $template.find('.sounds audio').attr('src', `../sounds/${currentQuestion.audioFile}`);
    $template.on('click', '.checkbutton', function(){
      if($input.val() === currentQuestion.rightAnswer){
        $('.answer-modal p').text(currentQuestion.correctModal);
        $('.answer-modal button').text(currentQuestion.correctModalButton);
        currentQuestionNumber++;
        currentQuestionNumberIt++;
        $('.answer-modal').show();
        $('.close-modal').on('click', function(){
          $('.answer-modal').hide();
        });

        console.log(language);
        if(language === 'french'){
          showQuestion(currentQuestionNumber);
        } else{
          showQuestionIt(currentQuestionNumberIt);
        }

      } else{
        $('.answer-modal p').text(currentQuestion.incorrectModal);
        $('.answer-modal button').text(currentQuestion.incorrectModalButton);
        $('.answer-modal').show();
        $('.close-modal').on('click', function(){
          $('.answer-modal').hide();
        });
      }
    });

    $('.question-audio-text-template').show();
    return $template;
  }



  // TRANSLATE QUESTIONS
  function showQuestionTranslate(currentQuestion){
    const $input = $('.input');
    const $template = $('.question-translate-template');
    $template.find('.instructions').text(currentQuestion.question);
    $template.find('.button').text(currentQuestion.buttontext);
    $template.on('click', '.checkbutton', function(){
      if($input.val() === currentQuestion.rightAnswer){
        $('.answer-modal p').text(currentQuestion.correctModal);
        $('.answer-modal button').text(currentQuestion.correctModalButton);
      } else{
        $('.answer-modal p').text(currentQuestion.incorrectModal);
        $('.answer-modal button').text(currentQuestion.incorrectModalButton);
      }
      $('.answer-modal').show();
      $('.close-modal').on('click', function(){
        $('.answer-modal').hide();
        if($input.val() === currentQuestion.rightAnswer){
          currentQuestionNumber++;
          currentQuestionNumberIt++;
          console.log(language);
          if(language === 'french'){
            showQuestion(currentQuestionNumber);
          } else{
            showQuestionIt(currentQuestionNumberIt);
          }
        }
      });
    });
    $('.question-translate-template').show();
    return $template;
  }




  // WORD ORDER QUESTIONS

  function showQuestionWordOrder(currentQuestion){
    const $template = $('.question-word-order-template');
    $template.find('.instructions').text(currentQuestion.question);
    $template.find('.button').text(currentQuestion.buttontext);
    const arrayOfWords = currentQuestion.rightAnswer.split(' ');
    shuffleArray(arrayOfWords);
    for(let i = 0; i < arrayOfWords.length ; i++) {
      const $button = $(`<button class="button is-medium">${arrayOfWords[i]}</button>`);
      $template.find('.words').append($button);
      $($button).on('click', function(){
        $('#droparea').append(`<button class="button is-medium word-answer inline-block">${$(this).text()}</button>`);
      });
    }

    $('#droparea').on('click','.word-answer' , function(){
      $(this).remove();
    });

    $('.checkbutton').on('click', function(){
      wordsAnswer = $('#droparea .word-answer').map((i, word) => $(word).text()).get();
      if(wordsAnswer.join(' ') === currentQuestion.rightAnswer){
        $('.answer-modal p').text(currentQuestion.correctModal);
        $('.answer-modal button').text(currentQuestion.correctModalButton);

      } else{
        $('.answer-modal p').text(currentQuestion.incorrectModal);
        $('.answer-modal button').text(currentQuestion.incorrectModalButton);
      }
      $('.answer-modal').show();
      $('.close-modal').on('click', function(){
        $('.answer-modal').hide();
        if(wordsAnswer.text() === currentQuestion.rightAnswer){
          currentQuestionNumber++;
          currentQuestionNumberIt++;
          console.log(currentQuestionNumber);
          showQuestion(currentQuestionNumber);
        }
      });
    });

    $('.question-word-order-template').show();
    return $template;
  }
});
