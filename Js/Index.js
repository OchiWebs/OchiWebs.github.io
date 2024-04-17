function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    sidebar.classList.toggle("active");
    overlay.style.display = (sidebar.classList.contains("active")) ? "block" : "none";
}

function closeSidebar() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    sidebar.classList.remove("active");
    overlay.style.display = "none";
}

function showLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'flex';
}
 
function hideLoadingScreen() {
    document.getElementById('loading-screen').style.display = 'none';
}
 
showLoadingScreen(); 
setTimeout(function() { 
    hideLoadingScreen();
}, 1000);

function createBubble(event) {
  const button = event.target;
  const rect = button.getBoundingClientRect();
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  bubble.style.top = `${event.clientY - rect.top}px`;
  bubble.style.left = `${event.clientX - rect.left}px`;
  button.appendChild(bubble);
  setTimeout(() => {
    bubble.remove();
  }, 600);
      }
