function validateForm() {
  const name = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    alert("Name must be filled out");
    return false;
  }

  if (email === "") {
    alert("Email must be filled out");
    return false;
  }

  if (!emailformat.test(email)) {
    alert("Invalid email format");
    return false;
  }

  alert("Form submitted successfully");
  return true;
}



let slideIndex = 0;
        const slider = document.getElementById("slide");
        const slides = slider.getElementsByTagName("img");
        const intervalTime = 4000; 

        function autoSlide() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex-1].style.display = "block";
        }

        function prevSlide() {
            slideIndex--;
            if (slideIndex < 1) {
                slideIndex = slides.length;
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";
        }

        function nextSlide() {
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";
        }

        document.getElementById("prev").addEventListener("click", prevSlide);
        document.getElementById("next").addEventListener("click", nextSlide);
        setInterval(autoSlide, intervalTime);
