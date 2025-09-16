document.addEventListener("DOMContentLoaded", function() {
  const dashboardContainer = document.getElementById("dashboard-container");

  if (dashboardContainer) {
    dashboardContainer.innerHTML = `
      <h2>Welcome to your Dashboard!</h2>
      <p>This is where you will see your uploaded files and manage them.</p>
      <button id="logoutBtn">Logout</button>
    `;

    document.getElementById("logoutBtn").addEventListener("click", function() {
      alert("Logging out...");
      window.location.href = "login.html";
    });
  }
});
