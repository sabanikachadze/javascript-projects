const sidebarOpener = document.querySelector(".sidebar-toggle")
const sidebarCloser = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

sidebarOpener.addEventListener('click', function(){
  if(sidebar.classList.contains('show-sidebar')){
    sidebar.classList.remove('show-sidebar')
  }
  else{
    sidebar.classList.add('show-sidebar')
  };
});


sidebarCloser.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar')
})