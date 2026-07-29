document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.social-link-btn');

    buttons.forEach((button, index) => {
        const label = button.querySelector('.btn-text');
        if (!label) return;

        const text = label.textContent.trim();
        label.textContent = '';

        let charIndex = 0;

        function typeText() {
            if (charIndex <= text.length) {
                label.innerHTML = `${text.slice(0, charIndex)}<span class="cursor">|</span>`;
                charIndex++;
                setTimeout(typeText, 55 + index * 12);
            }
        }

        setTimeout(typeText, 220 * (index + 1));
    });
});
