const currentPage = window.location.pathname.split("/").pop() || "index.html";

if (currentPage === "index.html") {
  alert("Welcome to UMSI Career Hub!");
}
