let mybutton = document.getElementById("btn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.documentElement.scrollTop > 30) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
function returnFunction() {
    document.documentElement.scrollTop = 0;
}
