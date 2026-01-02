// Menu móvel
document.getElementById('mobileMenuBtn').addEventListener('click', function () {
    document.getElementById('mobileMenu').classList.toggle('active');
    this.innerHTML = this.innerHTML.includes('fa-bars') ?
        '<i class="fas fa-times"></i>' :
        '<i class="fas fa-bars"></i>';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', function () {
        document.getElementById('mobileMenu').classList.remove('active');
        document.getElementById('mobileMenuBtn').innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Atualizar menu ativo
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Formulário de contato
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simular envio do formulário
    const formData = new FormData(this);
    const name = formData.get('name') || 'Customer';

    alert(`Thank you ${name}! \nYour message has been sent. We will contact you soon.`);
    this.reset();
});

// Atualizar menu ativo ao rolar
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = '#' + section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
});

// Inicializar menu ativo
window.dispatchEvent(new Event('scroll'));

// Adicionar efeito de hover dinâmico nos cards
document.querySelectorAll('.service-card, .project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s ease';
    });
});