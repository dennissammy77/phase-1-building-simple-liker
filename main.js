// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded',()=>{
  const modal = document.getElementById("modal");
  const likes = document.querySelectorAll(".like");
  console.log(likes)
  likes.forEach((like)=>{
    console.log(like)
    like.addEventListener("click",()=>{
      mimicServerCall().then(()=>{
        like.querySelector(".like-glyph").classList.toggle("activated-heart")
      }).catch((error)=>{
        modal.classList.toggle("hidden")
        modal.querySelector("#modal-message").textContent=error
        setTimeout(function() {
          modal.classList.toggle("hidden")
        }, 3000);
      })
    })
  })
});
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
