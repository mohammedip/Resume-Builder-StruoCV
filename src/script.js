const form1 =document.getElementById('personal-info-form');
const form2 =document.getElementById('professional-details-form');
const form3 =document.getElementById('technical-skills-form');
const form4 =document.getElementById('languages-form');
const form5 =document.getElementById('interests-form');
const form6 =document.getElementById('education-form');
const form7 =document.getElementById('work-experience-form');
const form8 =document.getElementById('certifications-form');
const form9 =document.getElementById('CVModel-form');
const form10=document.getElementById('CVModel-preview');
const buttonsSuivant =document.querySelectorAll('#suivant');
const buttonsPrecedent =document.querySelectorAll('#precedent');
const buttonTrminer = document.getElementById('terminer')
const formToPdf = document.getElementById('formToPdf');
const cvModelInputs = document.querySelectorAll('.cvModelChoice');
const cv=document.getElementById('cv');


let idCount=0;

function IndicatorAvancer(etape) {
     
            const indicator = document.getElementById(`step-indicator-${etape}`);   
            indicator.classList.remove('bg-gray-300', 'text-gray-500');
            indicator.classList.add('bg-fuchsia-700', 'text-white');
    }
function IndicatorReculer(etape) {
     
      const indicator = document.getElementById(`step-indicator-${etape}`);   
      indicator.classList.add('bg-gray-300', 'text-gray-500');
      indicator.classList.remove('bg-fuchsia-700', 'text-white');
}
function showings(form) {

            form.classList.remove('hidden');
            form.classList.add('showing');
 
}
function hideforms(form) {

            form.classList.add('hidden');
            form.classList.remove('showing');
        }
function displayImg(event) {
          const img = document.getElementById("profileImage");
          const text = document.getElementById("Text");
          img.src = URL.createObjectURL(event.target.files[0]);
          img.classList.remove("hidden");
          text.classList.add("hidden");

        }

function ToPdf() {
  
  const style = {
    margin: 0.5,
    filename: 'CV_Model1.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
};

      html2pdf().set(style).from(cv).save();

      }

function ajouter1(listId, inputId) {
  const list = document.getElementById(listId);
  let input=document.getElementById(inputId);
  const listItem = document.createElement('li');
 
  
  if (input.value !== '') {
     
      listItem.className = 'text-gray-700 mb-2 ml-6';
      listItem.id = idCount;
      listItem.innerText = input.value;
      listItem.innerHTML += `<button
      type="button"
      class="bg-red-500 text-white text-xs  px-2 py-1 rounded hover:bg-red-600 transition ml-10"
     onclick="supprimer('${listItem.id}')" >
      <i class="fa-solid fa-trash-can"></i>
    </button>`
      list.appendChild(listItem);
      input.value = '';
      idCount++;
  }
} 


    
   
      function ajouter(listId, inputId ) {
        
        const list = document.getElementById(listId);
        let inputs=document.querySelectorAll(`[id^="${inputId}"]`);
        const values = [];
       
        
        inputs.forEach((input) => {
          if (input.value.trim() !== '') {
            values.push(input.value.trim()); 
            input.value = ''; 
          }
        });

        if (values.length > 0) {

            const listItem = document.createElement('li');
            listItem.className = 'text-gray-700 mb-2 ml-6';
            listItem.id = idCount;
            listItem.innerHTML += `${values.join('<br> - ')}<button
            type="button"
            class="bg-red-500 text-white text-xs  px-2 py-1 rounded hover:bg-red-600 transition ml-10"
           onclick="supprimer('${listItem.id}')" >
            <i class="fa-solid fa-trash-can"></i>
          </button>`
            list.appendChild(listItem);
            idCount++;
        }
      }

      function supprimer(listItemId) {
        const listItem=document.getElementById(listItemId);
        listItem.remove()

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
  }else if(event.target.closest("form")===form10){
  
    hideforms(form10);
    showings(form9);

  }
  });
})
cvModelInputs.forEach((cvModelInput)=>{
  cvModelInput.addEventListener('click',()=>{

  hideforms(form9);
  showings(form10);
  
const hard_skills_list = document.getElementById('hard-skills-list').children;
let hard_skills = "";
for (let i = 0; i < hard_skills_list.length; i++) {
  hard_skills += hard_skills_list[i].textContent + "<br>";
}
  const soft_skills_list = document.getElementById('soft-skills-list').children;
let soft_skills = "";
for (let i = 0; i < soft_skills_list.length; i++) {
  soft_skills += soft_skills_list[i].textContent + "<br>";
}
  const languages_list = document.getElementById('languages-list').children;
let languages = "";
for (let i = 0; i < languages_list.length; i++) {
  languages += languages_list[i].textContent + "<br>";
}
  const interests_list = document.getElementById('interests-list').children;
let interests = "";
for (let i = 0; i < interests_list.length; i++) {
  interests += interests_list[i].textContent + "<br>";
}
  const education_list = document.getElementById('education-list').children;
let education = "";
for (let i = 0; i < education_list.length; i++) {
  education += education_list[i].textContent + "<br>";
}
  const work_experience_list = document.getElementById('work-experience-list').children;
let work_experience = "";
for (let i = 0; i < work_experience_list.length; i++) {
  work_experience += work_experience_list[i].textContent + "<br>";
}
  const certifications_list = document.getElementById('certifications-list').children;
let certifications = "";
for (let i = 0; i < certifications_list.length; i++) {
  certifications += certifications_list[i].textContent + "<br>";
}


if(cvModelInput.value==="Modern CV"){

cv.innerHTML=` <div class="max-w-4xl mx-auto bg-white shadow-lg flex">

        <!-- Sidebar -->
        <aside class="w-1/3 bg-gray-800 text-white p-6">
          <!-- Profile Picture -->
          <div class="flex justify-center mb-6">
            <img src="https://via.placeholder.com/120" alt="Profile Picture" class="rounded-full border-4 border-gray-700">
          </div>
    
          <!-- Profile Info -->
          <div class="mb-6">
            <h2 class="text-lg font-bold mb-2">Profil</h2>
            <p class="text-sm"><strong>Adresse:</strong> Mon adresse précise</p>
            <p class="text-sm"><strong>Email:</strong> email@example.com</p>
            <p class="text-sm"><strong>Téléphone:</strong> +212 600 000 000</p>
            <p class="text-sm"><strong>Date de Naissance:</strong> JJ/MM/AAAA</p>
            <p class="text-sm"><strong>Permis:</strong> Oui/Non</p>
          </div>
    
          <!-- Skills -->
          <div class="mb-6">
            <h2 class="text-lg font-bold mb-2">Compétences</h2>
            <ul class="text-sm space-y-1">
              <li>- Compétence 1</li>
              <li>- Compétence 2</li>
              <li>- Compétence 3</li>
            </ul>
          </div>
    
          <!-- Hobbies -->
          <div>
            <h2 class="text-lg font-bold mb-2">Loisirs</h2>
            <ul class="text-sm space-y-1">
              <li>- Loisir 1</li>
              <li>- Loisir 2</li>
              <li>- Loisir 3</li>
            </ul>
          </div>
        </aside>
    
        <!-- Main Content -->
        <main class="w-2/3 p-6">
          <!-- Header -->
          <div class="mb-6">
            <h1 class="text-3xl font-bold text-gray-800">NOM PRENOM</h1>
            <p class="text-lg text-gray-600">Métier</p>
            <p class="mt-4 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non molestie ligula, non commodo magna.
            </p>
          </div>
    
          <!-- Professional Experience -->
          <div class="mb-6">
            <h2 class="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Expériences Professionnelles</h2>
            
            <div class="mb-4">
              <p class="font-bold text-gray-700">Poste Occupé - Entreprise</p>
              <p class="text-sm text-gray-500">Sept 2018 - Présent</p>
              <p class="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lacinia nisi.
              </p>
            </div>
    
            <div class="mb-4">
              <p class="font-bold text-gray-700">Poste Occupé - Entreprise</p>
              <p class="text-sm text-gray-500">Sept 2016 - Sept 2018</p>
              <p class="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lacinia nisi.
              </p>
            </div>
          </div>
    
          <!-- Education -->
          <div>
            <h2 class="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">Formations</h2>
    
            <div class="mb-4">
              <p class="font-bold text-gray-700">Diplôme - Établissement</p>
              <p class="text-sm text-gray-500">Sept 2014 - Juin 2016</p>
              <p class="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis.
              </p>
            </div>
    
            <div class="mb-4">
              <p class="font-bold text-gray-700">Diplôme - Établissement</p>
              <p class="text-sm text-gray-500">Sept 2012 - Juin 2014</p>
              <p class="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis.
              </p>
            </div>
          </div>
        </main>
      </div>`;

}else if(cvModelInput.value==="Classic CV"){

  cv.innerHTML=`<div class="flex items-center gap-6">
          <img src="${document.getElementById('profile-photo').src}" alt="Profile Picture" class="w-24 h-24 rounded-full">
          <div>
            <h1 class="text-2xl font-bold">${document.getElementById('full-name').value}</h1>
            <p class="text-gray-600 text-sm">${document.getElementById('job-title').value}</p>
            <p class="text-gray-600 mt-2">${document.getElementById('profile-summary').value}</p>
          </div>
        </div>
    
        <hr class="my-6">
    
        <!-- Education Section -->
        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-3">Education</h2>
          ${education}
        </div>
    
        <hr class="my-6">
    
        <!-- Skills Section -->
        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-3">Hard Skills</h2>
          ${hard_skills}
        </div>
    
        <hr class="my-6">
     <!-- Skills Section -->
        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-3">Soft Skills</h2>
          ${soft_skills}
        </div>
    
        <hr class="my-6"> <!-- Skills Section -->
        <!-- Experience Section -->
        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-3">Profotional Experience</h2>
          <div class="space-y-4">
            ${ work_experience}
          </div>
        </div>
    
        <hr class="my-6">
        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-3">Certifications</h2>
          ${certifications}
        </div>
    
        <hr class="my-6">
        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-3">Languages</h2>
          ${languages}
        </div>
    
        <hr class="my-6">
         <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-3">Loisirs </h2>
          ${interests}
        </div>
    
        <hr class="my-6">

        <!-- Contact Section -->
        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-3">Contact</h2>
          <p class="text-gray-600">Adresse: ${document.getElementById('address').value}</p>
          <p class="text-gray-600">Email: ${document.getElementById('email').value}</p>
          <p class="text-gray-600">Téléphone: ${document.getElementById('phone').value}</p>
          <p class="text-gray-600">LinkedIn: ${document.getElementById('linkedin').value}</p>
          <p class="text-gray-600">GitHub: ${document.getElementById('github').value}</p>
          <p class="text-gray-600">Portfolio: ${document.getElementById('portfolio').value}</p>
        </div>`;

}

})

})