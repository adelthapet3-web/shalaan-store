
const bigImage = document.getElementById("bigImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {

  thumb.addEventListener("click", function(){

    // إزالة active من الكل
    thumbnails.forEach(img => img.classList.remove("active"));

    // إضافة active للصورة المختارة
    this.classList.add("active");

    // تأثير fade
    bigImage.classList.add("fade");

    setTimeout(() => {
      bigImage.src = this.src;
      bigImage.classList.remove("fade");
    }, 200);

  });

});