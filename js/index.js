const profExpBut = document.querySelector('.prof-exp-but');
const educationBut = document.querySelector('.education-but');
const activitiesBut = document.querySelector('.activities-but');
const profExpInfo = document.querySelector('.professional-experience');
const educationInfo = document.querySelector('.education');
const activitiesInfo = document.querySelector('.activities');
const resumeBox = document.querySelector('.resume-box');

profExpBut.addEventListener('click', () => {
  if (!profExpBut.classList.contains("resume-link__active")) {
    profExpBut.classList.add('resume-link__active');
    profExpInfo.style.display = "block";
    
    if (educationBut.classList.contains('resume-link__active')) {
      educationInfo.style.display = 'none';
      educationBut.classList.remove('resume-link__active');
    }

    if (activitiesBut.classList.contains('resume-link__active')) {
      activitiesInfo.style.display = 'none';
      activitiesBut.classList.remove('resume-link__active');
    }
    
  }
});

educationBut.addEventListener('click', () => {
  if (!educationBut.classList.contains("resume-link__active")) {
    educationBut.classList.add("resume-link__active");
    educationInfo.style.display = 'block';

    if (profExpBut.classList.contains('resume-link__active')) {
      profExpInfo.style.display = 'none';
      profExpBut.classList.remove("resume-link__active");
    }
    
    if (activitiesBut.classList.contains('resume-link__active')) {
      activitiesInfo.style.display = 'none';
      activitiesBut.classList.remove('resume-link__active');
    }

  }
});

activitiesBut.addEventListener('click', () => {
  if (!activitiesBut.classList.contains("resume-link__active")) {
    activitiesBut.classList.add("resume-link__active");
    activitiesInfo.style.display = 'block';

    if (profExpBut.classList.contains('resume-link__active')) {
      profExpInfo.style.display = 'none';
      profExpBut.classList.remove("resume-link__active");
    }
    
    if (educationBut.classList.contains('resume-link__active')) {
      educationInfo.style.display = 'none';
      educationBut.classList.remove('resume-link__active');
    }

  }
});