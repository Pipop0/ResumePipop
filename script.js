// Highlight active link on scroll
// JavaScript to highlight active link
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
document.getElementById("theme-toggle").addEventListener("click", () => {
    const body = document.body;
    const themeText = document.getElementById("theme-text");
    const themeIcon = document.getElementById("theme-icon");

    // Toggle Dark Mode
    body.classList.toggle("dark-mode");

    // เปลี่ยนข้อความและไอคอนในปุ่ม
    if (body.classList.contains("dark-mode")) {
        themeText.textContent = "Switch to Light Mode";
        themeIcon.className = "fas fa-sun";
    } else {
        themeText.textContent = "Switch to Dark Mode";
        themeIcon.className = "fas fa-moon";
    }
});

// ฟังก์ชันสลับโหมด
themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i> Switch to Dark Mode';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i> Switch to Light Mode';
        localStorage.setItem('theme', 'dark');
    }
});




