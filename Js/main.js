const currentPage = window.location.pathname.split("/").pop() || "index.html";

if (currentPage === "index.html") {
  alert("Welcome to UMSI Career Hub!");
}

if (currentPage === "resume.html") {
  alert("Welcome to UMSI Resume Support!");
}

if (currentPage === "Networking.html") {
  alert("Welcome to UMSI Networking and Connections Hub!");
}

if (currentPage === "career-exploration.html") {
  alert("Welcome to UMSI Career Exploration Hub!");
}