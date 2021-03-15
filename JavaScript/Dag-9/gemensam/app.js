const listCoursesButton = document.querySelector('#listCourses');

//Skapa en funktion för att lista kurser.
const listCourses = function(){
  //Hämta data ur courses.json filen
  fetch('courses.json')
    //När anropet är klart och data finns.
    .then(response => response.json())
    .then(data => console.log(data))
}

const listCoursesApi = function(){
  //Hämta data ur courses.json filen
  fetch('http://localhost:3000/courses')
    //När anropet är klart och data finns.
    .then((response) => response.json())
    .then((data) => console.log(data));
}

listCoursesButton.addEventListener('click', () => {
  listCoursesApi();
});