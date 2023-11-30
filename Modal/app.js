const OpenButton = document.querySelector(".modal-btn")
const CloseButton = document.querySelector(".close-btn")
const modalOverlay  = document.querySelector(".modal-overlay")

OpenButton.addEventListener('click', function(){
  modalOverlay.classList.add('open-modal')
});


CloseButton.addEventListener('click', function(){
  modalOverlay.classList.remove('open-modal')
})