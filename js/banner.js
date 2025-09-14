 document.addEventListener("DOMContentLoaded", () => {
   const el = document.querySelector(".banner"); // <-- must match HTML
   if (el) {
      console.log("Banner found:", el);
      ScrollReveal().reveal('.banner', { delay: 200 });
   }
});