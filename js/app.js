function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

$(function(){

  let currentQuestionNumber = 3;
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
    console.log(currentQuestion)
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
    // console.log('Image question');
    const $template = $('.question-image-template');
    $template.find('.instructions').text(currentQuestion.question);
    $template.find('.answer').text(currentQuestion.answer);
    $template.find('.button').text(currentQuestion.buttontext);
    $(currentQuestion.options).each(function(i, animal){
      $template.find('.choiceimages').append(`
        <figure class="image is-200x200 choiceimage" data-choice='${animal}'>
          <img src="../images/${animal}.jpeg" alt="${animal}">
        </figure>`);
    });
    $template.find('.checkbutton').hide();
    $template.on('click', '.choiceimage', function(){
      choice = $(this).data('choice');
      // console.log(choice);
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
    $('.question-image-template').show();
    return $template;
  }



  // AUDIO-TEXT QUESTIONS
  const $input = $('.input');

  function showQuestionAudioText(currentQuestion){
    // console.log('Audio question', currentQuestion);
    const $template = $('.question-audio-text-template');
    $template.find('.instructions').text(currentQuestion.question);
    $template.find('.button').text(currentQuestion.buttontext);
    $template.find('.sounds audio').attr('src', `../sounds/${currentQuestion.audioFile}`);
    $template.on('click', '.checkbutton', function(){
      // console.log('inside the click function');
      if($input.val() === currentQuestion.rightAnswer){
        // console.log('inside the if statement inside the check click function',$input.val(), 'correct answer', currentQuestion.rightAnswer);
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
        // console.log('ELSEIF---> inputValue===>', $input.val());
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
          // console.log(currentQuestionNumber);
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
    console.log('word-order', $('.question-word-order-template'));
    // console.log('word order question', currentQuestion);
    const $template = $('.question-word-order-template');
    $template.find('.instructions').text(currentQuestion.question);
    $template.find('.button').text(currentQuestion.buttontext);
    // generate number of buttons depending on array length
    const arrayOfWords = currentQuestion.rightAnswer.split(' ');
    shuffleArray(arrayOfWords);
    console.log(arrayOfWords);
    for(let i = 0; i < arrayOfWords.length ; i++) {
      const $button = $(`<button class="button is-medium">${arrayOfWords[i]}</button>`);
      $template.find('.words').append($button);
      $($button).on('click', function(){
        $('#droparea').append(`<button class="button is-medium word-answer inline-block">${$(this).text()}</button>`);
      });
    }

    $('#droparea').on('click','.word-answer' , function(){
      console.log('hi')
      $(this).remove()
    });

    $('.checkbutton').on('click', function(){
      wordsAnswer = $('#droparea .word-answer').map((i, word) => $(word).text()).get();
      if(wordsAnswer.join(" ") === currentQuestion.rightAnswer){
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
    })

    $('.question-word-order-template').show();
    return $template;
  }


});
















// ****** OLD ****** //



// starting page select lang
// $('.question, .modal ').hide();

// // show first french question
//
// $imagefr.on('click', function (){
//   showQuestion(currentQuestionNumber);
// $question1.show();
// $firstpage.hide();
// $checkbutton1.hide();
// });
//
// // show checkbutton after image click
//
// $choiceimage2.on('click', function(){
//   $checkbutton1.show();
//   $choiceimage2.addClass('correct');
// });
//
// $choiceimage1.add($choiceimage3).on('click', function(){
//   $checkbutton1.show();
//   $choiceimage1.add($choiceimage3).addClass('incorrect');
// });
//
//
// // show correct or incorrect answer modal
//
// $checkbutton1.on('click', function(){
//   if($choiceimage2.hasClass('correct')){
//     $modalcorrect1.show();
//   } else {
//     $modalincorrect1.show();
//   }
// });
//
// // proceed to q2 or try again
//
// $correctbutton1.on('click', function(){
//   $modalcorrect1.hide();
//   $question1.hide();
//   $question2.show();
// });
//
// $incorrectbutton1.on('click', function(){
//   $modalincorrect1.hide();
// });
//
//
// // check answer for q2
//
// $checkbutton2.on('click', function(){
//   if($input2.val() === 'Je n\'aime pas les serpents.'){
//     $modalcorrect2.show();
//     $question2.hide();
//   } else {
//     $modalincorrect2.show();
//     $question2.hide();
//   }
// });
//
//
// // proceed to q3 or retry q2
//
// $correctbutton2.on('click', function (){
//   $modalcorrect2.hide();
//   $question3.show();
// });
//
// $incorrectbutton2.on('click', function(){
//   $modalincorrect2.hide();
//   $question2.show();
// });
//
// // check answer for q3
// $checkbutton3.on('click', function(){
//   if($input3.val() === 'I don\'t like snakes.'){
//     $modalcorrect3.show();
//     $question3.hide();
//   } else {
//     $modalincorrect3.show();
//     $question3.hide();
//   }
// });
//
//
// // proceed to q4 or retry q3
//
// $correctbutton3.on('click', function (){
//   $modalcorrect3.hide();
//   $question4.show();
// });
//
// $incorrectbutton3.on('click', function(){
//   $modalincorrect3.hide();
//   $question3.show();
// });
//
//
// // q4 functionality
//
// $word1.on('click', function(){
//   $word1.appendTo('#droparea');
// });
// $word2.on('click', function(){
//   $word2.appendTo('#droparea');
// });
// $word3.on('click', function(){
//   $word3.appendTo('#droparea');
// });
// $word4.on('click', function(){
//   $word4.appendTo('#droparea');
// });
// $word5.on('click', function(){
//   $word5.appendTo('#droparea');
// });
// $word6.on('click', function(){
//   $word6.appendTo('#droparea');
// });
//
// // check answer for q4
//
// $checkbutton4.on('click', function(){
//   if(($word2.index() === 0) &&
//   ($word5.index() === 1) &&
//   ($word3.index() === 2) &&
//   ($word1.index() === 3) &&
//   ($word6.index() === 4) &&
//   ($word4.index() === 5)) {
//     $modalcorrect4.show();
//     $question4.hide();
//   } else {
//     $modalincorrect4.show();
//     $question4.hide();
//   }
// });
//
//
// // end game
//
// $correctbutton4.on('click', function (){
//   $modalcorrect4.hide();
//   $firstpage.show();
// });
//
// $incorrectbutton4.on('click', function(){
//   $modalincorrect4.hide();
//   $question4.show();
// });
