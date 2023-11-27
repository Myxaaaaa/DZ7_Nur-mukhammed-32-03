function toggleAnswer(riddleNumber) {
    const answerId = 'answer' + riddleNumber;
    const answer = document.getElementById(answerId);

    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        event.target.textContent = 'Скрыть ответ';
    } else {
        answer.style.display = 'none';
        event.target.textContent = 'Показать ответ';
    }
}

//не обращайте внимание на код ниже, то что нужно работает)))

let video = document.getElementById('myVideo');
  let toggleSoundButton = document.getElementById('toggleSoundButton');

  toggleSoundButton.addEventListener('click', function() {
    video.muted = false;
  });
