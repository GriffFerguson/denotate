"use strict";
var form = document.getElementsByClassName('letter');
var formWrapper = document.getElementById('answer');
var userAnswer;
document.body.addEventListener('submit', e => {
    e.preventDefault();
    userAnswer = '';
    for (var letter of form) {
        userAnswer += letter.getAttribute('value');
    }
    console.log(userAnswer);
    if (answer == userAnswer) {
        document.body.classList.add('correct');
        setTimeout(() => {
            document.body.classList.remove('correct');
            generateLevel();
        }, 1500);
    }
    else {
        document.body.classList.add('incorrect');
        setTimeout(() => {
            document.body.classList.remove('incorrect');
        }, 1000);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3Vlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9iaW4vZ3Vlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUNwRCxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ25ELElBQUksVUFBa0IsQ0FBQztBQUV2QixRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRTtJQUN6QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDbEIsVUFBVSxHQUFHLEVBQUUsQ0FBQTtJQUNmLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ3JCLFVBQVUsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlDO0lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN2QixJQUFJLE1BQU0sSUFBSSxVQUFVLEVBQUU7UUFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDekMsYUFBYSxFQUFFLENBQUE7UUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0tBQ1g7U0FBTTtRQUNILFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN4QyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQy9DLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtLQUNYO0FBQ0wsQ0FBQyxDQUFDLENBQUEifQ==