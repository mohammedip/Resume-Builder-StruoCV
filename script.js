let currentStep = 0;
const form1 =document.getElementById('personal-info-form');
const form2 =document.getElementById('professional-details-form');
const form3 =document.getElementById('technical-skills-form');
const form4 =document.getElementById('languages-form');
const form5 =document.getElementById('interests-form');
const form6 =document.getElementById('education-form');
const form7 =document.getElementById('work-experience-form');
const form8 =document.getElementById('certifications-form');
const buttonsSuivant =document.querySelectorAll('#suivant');
const buttonsPrecedent =document.querySelectorAll('#precedent');



function updateStepIndicator(etape) {
     
            const indicator = document.getElementById(`step-indicator-${etape}`);   
            indicator.classList.remove('bg-gray-300', 'text-gray-500');
            indicator.classList.add('bg-blue-500', 'text-white');
    }
function showings(form) {

            form.classList.remove('hidden');
            form.classList.add('showing');
 
}
function hideforms(form) {

            form.classList.add('hidden');
            form.classList.remove('showing');
        }






buttonsSuivant.forEach(function(buttonSuivant) {
  buttonSuivant.addEventListener("click",(event)=>{
if(event.target.closest("form")===form1){

hideforms(form1);
showings(form2);
updateStepIndicator(1) 
}else if(event.target.closest("form")===form2){

  hideforms(form2);
  showings(form3);
  updateStepIndicator(2) 
}else if(event.target.closest("form")===form3){

  hideforms(form3);
  showings(form4);
  updateStepIndicator(3) 
}else if(event.target.closest("form")===form4){

  hideforms(form4);
  showings(form5);
  updateStepIndicator(4) 
}else if(event.target.closest("form")===form5){

  hideforms(form5);
  showings(form6);
  updateStepIndicator(5) 
}else if(event.target.closest("form")===form6){

  hideforms(form6);
  showings(form7);
  updateStepIndicator(6) 
}else if(event.target.closest("form")===form7){

  hideforms(form7);
  showings(form8);
  updateStepIndicator(7) 
}
});
})


buttonsPrecedent.forEach(function(buttonPrecedent) {
  buttonPrecedent.addEventListener("click",(event)=>{
  
   if(event.target.closest("form")===form2){
  
    hideforms(form2);
    showings(form1);
  }else if(event.target.closest("form")===form3){
  
    hideforms(form3);
    showings(form2);
  }else if(event.target.closest("form")===form4){
  
    hideforms(form4);
    showings(form3);
  }else if(event.target.closest("form")===form5){
  
    hideforms(form5);
    showings(form4);
  }else if(event.target.closest("form")===form6){
  
    hideforms(form6);
    showings(form5);
  }else if(event.target.closest("form")===form7){
  
    hideforms(form7);
    showings(form6);
  }else if(event.target.closest("form")===form8){
  
    hideforms(form8);
    showings(form7);
  }
  });
})