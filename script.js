setInterval(runTime, 1000);

function runTime(){
    const time = new Date();
    const h = time.getHours();
    const sec = time.getSeconds();
    const min = time.getMinutes();

 document.getElementById("time").innerHTML = `
   ${h} :
   ${min} :
   ${sec}
   `;
}

// now run the dateTime function every second using setInterval;

  // Fade-in animation on scroll
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    observer.observe(section);
  });


// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
}
);

