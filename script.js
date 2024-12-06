document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const para = document.createElement('p');
    para.textContent = "Hola desde JavaScript";
    app.appendChild(para);
});
