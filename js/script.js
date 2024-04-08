const filterBtns = document.querySelectorAll('.our-work .list-unstyled li');
const images = document.querySelectorAll('.our-work .image');

filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const selectedCategory = this.dataset.category;

    images.forEach(image => {
      const imageCategory = image.dataset.category;
      
      if (selectedCategory === '.all' || imageCategory === selectedCategory) {
        image.classList.remove('hidden');
      } else {
        image.classList.add('hidden');
      }
    });

    // Remove 'active' class from all buttons and add it to the clicked one
    filterBtns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

// Scroll to the project section on click

const projectSec = document.getElementById("project");


function startProject() {
  projectSec.scrollIntoView({behavior: "smooth" });
  console.log("Scrolling")
  }
