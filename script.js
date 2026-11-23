
const menuButton = document.querySelector(".menu-btn");


const menuPanel = document.querySelector(".menu-panel");

const menuIcon = document.querySelector(".menu-icon");

menuButton.addEventListener("click", () => {
    menuPanel.classList.toggle("open");




    
    const isOpen = menuPanel.classList.contains("open");

    
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );

    menuIcon.textContent = isOpen ? "✕" : "☰";
});
