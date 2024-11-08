const form1 =document.getElementById('personal-info-form');
const form2 =document.getElementById('professional-details-form');
const form3 =document.getElementById('technical-skills-form');
const form4 =document.getElementById('languages-form');
const form5 =document.getElementById('interests-form');
const form6 =document.getElementById('education-form');
const form7 =document.getElementById('work-experience-form');
const form8 =document.getElementById('certifications-form');
const form9 =document.getElementById('CVModel-form');
const buttonsSuivant =document.querySelectorAll('#suivant');
const buttonsPrecedent =document.querySelectorAll('#precedent');
const buttonTrminer = document.getElementById('terminer')
const formToPdf = document.getElementById('formToPdf');


function IndicatorAvancer(etape) {
     
            const indicator = document.getElementById(`step-indicator-${etape}`);   
            indicator.classList.remove('bg-gray-300', 'text-gray-500');
            indicator.classList.add('bg-blue-500', 'text-white');
    }
function IndicatorReculer(etape) {
     
      const indicator = document.getElementById(`step-indicator-${etape}`);   
      indicator.classList.add('bg-gray-300', 'text-gray-500');
      indicator.classList.remove('bg-blue-500', 'text-white');
}
function showings(form) {

            form.classList.remove('hidden');
            form.classList.add('showing');
 
}
function hideforms(form) {

            form.classList.add('hidden');
            form.classList.remove('showing');
        }

function ToPdf() {
         
          html2pdf().from(formToPdf).save();
      }




buttonsSuivant.forEach(function(buttonSuivant) {
  buttonSuivant.addEventListener("click",(event)=>{
if(event.target.closest("form")===form1){

hideforms(form1);
showings(form2);
IndicatorAvancer(1) 
}else if(event.target.closest("form")===form2){

  hideforms(form2);
  showings(form3);
  IndicatorAvancer(2) 
}else if(event.target.closest("form")===form3){

  hideforms(form3);
  showings(form4);
  IndicatorAvancer(3) 
}else if(event.target.closest("form")===form4){

  hideforms(form4);
  showings(form5);
  IndicatorAvancer(4) 
}else if(event.target.closest("form")===form5){

  hideforms(form5);
  showings(form6);
  IndicatorAvancer(5) 
}else if(event.target.closest("form")===form6){

  hideforms(form6);
  showings(form7);
  IndicatorAvancer(6) 
}else if(event.target.closest("form")===form7){

  hideforms(form7);
  showings(form8);
  IndicatorAvancer(7) 
}else if(event.target.closest("form")===form8){

  hideforms(form8);
  showings(form9);
  IndicatorAvancer(8) 
}
});
})


buttonsPrecedent.forEach(function(buttonPrecedent) {
  buttonPrecedent.addEventListener("click",(event)=>{
  
   if(event.target.closest("form")===form2){
  
    hideforms(form2);
    showings(form1);
    IndicatorReculer(1)
  }else if(event.target.closest("form")===form3){
  
    hideforms(form3);
    showings(form2);
    IndicatorReculer(2)
  }else if(event.target.closest("form")===form4){
  
    hideforms(form4);
    showings(form3);
    IndicatorReculer(3)
  }else if(event.target.closest("form")===form5){
  
    hideforms(form5);
    showings(form4);
    IndicatorReculer(4)
  }else if(event.target.closest("form")===form6){
  
    hideforms(form6);
    showings(form5);
    IndicatorReculer(5)
  }else if(event.target.closest("form")===form7){
  
    hideforms(form7);
    showings(form6);
    IndicatorReculer(6)
  }else if(event.target.closest("form")===form8){
  
    hideforms(form8);
    showings(form7);
    IndicatorReculer(7)
  }else if(event.target.closest("form")===form9){
  
    hideforms(form9);
    showings(form8);
    IndicatorReculer(8)
  }
  });
})

buttonTrminer.addEventListener("click",()=>{

  ToPdf();

})
