document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const currentSlideSpan = document.getElementById('current-slide');
    const totalSlidesSpan = document.getElementById('total-slides');

    let currentSlideIndex = 0;

    // Inicializar el contador
    totalSlidesSpan.textContent = slides.length;

    // Función para actualizar la vista de la diapositiva
    function updateSlide() {
        // Remover la clase active de todas las diapositivas
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Agregar la clase active a la diapositiva actual
        slides[currentSlideIndex].classList.add('active');

        // Actualizar contador
        currentSlideSpan.textContent = currentSlideIndex + 1;

        // Deshabilitar/Habilitar botones
        prevBtn.disabled = currentSlideIndex === 0;
        nextBtn.disabled = currentSlideIndex === slides.length - 1;
    }

    // Funciones de navegación
    function nextSlide() {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
            updateSlide();
        }
    }

    function prevSlide() {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateSlide();
        }
    }

    // Función de Pantalla Completa
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error al intentar entrar en pantalla completa: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    // Event Listeners para los botones
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    fullscreenBtn.addEventListener('click', toggleFullScreen);

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Space') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'f' || e.key === 'F') {
            toggleFullScreen();
        }
    });

    // Inicialización inicial
    updateSlide();
});
