const slides = [
    {
        name: 'Portada',
        chapter: 'INTRODUCCIÓN',
        html: `
            <span class="eyebrow">DISERTACIÓN ACADÉMICA · BOLIVIA</span>
            <h1 class="title">Bolivia ¿esta enfrentando una amenza <em>silensiosa?</em></h1>
            <p style="font-size: 16px; color: #48566b; margin-bottom: 15px;">Economías ilícitas, zonas sin ley e impunidad institucional.</p>
            <div class="slide-grid">
                <div class="slide-content-list">
                    <div class="bullet-card">
                        <h4>Propósito de la disertación</h4>
                        <p>Exponer con rigor y fuentes el trasfondo real de las problemáticas de seguridad que afectan al país.</p>
                    </div>
                </div>
                <div class="image-slot-container">
                    <div class="img-box">🖼️ Imagen 1<span>(Colocar imagen o mapa)</span></div>
                    <div class="img-box">🖼️ Imagen 2<span>(Colocar icono o contexto)</span></div>
                </div>
            </div>
        `
    },
    {
        name: 'Contexto Social',
        chapter: 'ANÁLISIS SOCIAL',
        html: `
            <span class="eyebrow">01 · LO QUE SE OCULTA</span>
            <h2 class="title">Lo que se oculta y lo que se <em>justifica</em></h2>
            <div class="slide-grid">
                <div class="slide-content-list">
                    <div class="bullet-card">
                        <h4>Silencio educativo</h4>
                        <p>Pérdida de soberanía ausente en las escuelas.</p>
                    </div>
                    <div class="bullet-card">
                        <h4>Disfrazar el delito</h4>
                        <p>Llamar "trabajo" o "supervivencia" al comercio ilegal.</p>
                    </div>
                    <div class="bullet-card">
                        <h4>Normalizar lo ilegal</h4>
                        <p>Acostumbrarse a que la ley no mande en el país.</p>
                    </div>
                </div>
                <div class="image-slot-container">
                    <div class="img-box">🖼️ Imagen 1<span>(Educación / Escuelas)</span></div>
                    <div class="img-box">🖼️ Imagen 2<span>(Comercio informal / Delito)</span></div>
                </div>
            </div>
        `
    },
    {
        name: 'México Chico',
        chapter: 'ZONAS CRÍTICAS',
        html: `
            <span class="eyebrow">02 · TERRITORIOS LIBERADOS</span>
            <h2 class="title">El enclave de <em>"México Chico"</em></h2>
            <div class="slide-grid">
                <div class="slide-content-list">
                    <div class="bullet-card">
                        <h4>Ubicación</h4>
                        <p>Límite entre el sur de Oruro (Challapata) y norte de Potosí.</p>
                    </div>
                    <div class="bullet-card">
                        <h4>¿Qué pasa ahí?</h4>
                        <p>Zona liberada de contrabando masivo, autos "chutos" y narcotráfico.</p>
                    </div>
                    <div class="bullet-card">
                        <h4>¿Desde cuándo?</h4>
                        <p>Décadas de impunidad fuera del control policial y aduanero.</p>
                    </div>
                </div>
                <div class="image-slot-container">
                    <div class="img-box">🖼️ Imagen 1<span>(Zona altiplánica)</span></div>
                    <div class="img-box">🖼️ Imagen 2<span>(Rutas de contrabando)</span></div>
                </div>
            </div>
        `
    },
    {
        name: 'Llallagua 2025',
        chapter: 'CONFLICTOS Y RUTAS',
        html: `
            <span class="eyebrow">03 · CRISIS REGIONAL</span>
            <h2 class="title">De las fronteras a las rutas: <em>Llallagua 2025</em></h2>
            <div class="slide-grid">
                <div class="slide-content-list">
                    <div class="bullet-card">
                        <h4>La fachada</h4>
                        <p>Protestas políticas exigiendo la candidatura de Evo Morales.</p>
                    </div>
                    <div class="bullet-card">
                        <h4>Denuncia comunaria</h4>
                        <p>Bloqueadores externos y armados llegados desde "México Chico".</p>
                    </div>
                    <div class="bullet-card">
                        <h4>Peligro real</h4>
                        <p>Emboscadas con armas de fuego y muerte de policías.</p>
                    </div>
                </div>
                <div class="image-slot-container">
                    <div class="img-box">🖼️ Imagen 1<span>(Bloqueos en carreteras)</span></div>
                    <div class="img-box">🖼️ Imagen 2<span>(Norte de Potosí)</span></div>
                </div>
            </div>
        `
    },
    {
        name: 'Antecedente Histórico',
        chapter: 'HISTORIA Y PRECEDENTES',
        html: `
            <span class="eyebrow">04 · IMPUNIDAD PASADA</span>
            <h2 class="title">Esposos Andrade: <em>La crueldad como precedente</em></h2>
            <div class="slide-grid">
                <div class="slide-content-list">
                    <div class="bullet-card">
                        <h4>Octubre de 2000 (Chapare)</h4>
                        <p>Secuestro y tortura brutal del Tte. David Andrade y Graciela Alfaro.</p>
                    </div>
                    <div class="bullet-card">
                        <h4>Contexto</h4>
                        <p>Bloqueos cocaleros bajo el mando e influencia sindical de Evo Morales.</p>
                    </div>
                    <div class="bullet-card">
                        <h4>Impunidad</h4>
                        <p>Un crimen despiadado que marcó el ataque sin castigo a la autoridad.</p>
                    </div>
                </div>
                <div class="image-slot-container">
                    <div class="img-box">🖼️ Imagen 1<span>(Archivo histórico)</span></div>
                    <div class="img-box">🖼️ Imagen 2<span>(Chapare / Trópico)</span></div>
                </div>
            </div>
        `
    },
    {
        name: 'Caso Rafael Alcón',
        chapter: 'JUSTICIA Y CORRUPCIÓN',
        html: `
            <span class="eyebrow">05 · CRISIS JUDICIAL</span>
            <h2 class="title">El frente interno: <em>Caso Rafael Alcón</em></h2>
            <div class="slide-grid">
                <div class="slide-content-list">
                    <div class="bullet-card">
                        <h4>El fallo corrupto</h4>
                        <p>El exjuez Rafael Alcón libera al asesino serial Richard Choque (condenado a 30 años sin indulto).</p>
                    </div>
                    <div class="bullet-card">
                        <h4>La maniobra</h4>
                        <p>Detención domiciliaria otorgada con certificados médicos falsos.</p>
                    </div>
                    <div class="bullet-card">
                        <h4>Consecuencia</h4>
                        <p>Libre, volvió to extorsionar, violar y asesinar a dos adolescentes.</p>
                    </div>
                </div>
                <div class="image-slot-container">
                    <div class="img-box">🖼️ Imagen 1<span>(Tribunales / Justicia)</span></div>
                    <div class="img-box">🖼️ Imagen 2<span>(Prensa y casos)</span></div>
                </div>
            </div>
        `
    },
    {
        name: 'Cierre y Reflexión',
        chapter: 'CONCLUSIONES',
        html: `
            <span class="eyebrow">06 · DESAFÍO NACIONAL</span>
            <h2 class="title">Una realidad que ya no es <em>silenciosa</em></h2>
            <div class="slide-grid">
                <div class="slide-content-list">
                    <div class="bullet-card">
                        <h4>Territorio</h4>
                        <p>Mafias armadas controlando rutas y fronteras.</p>
                    </div>
                    <div class="bullet-card">
                        <h4>Tribunales</h4>
                        <p>Corrupción judicial que deja libre al criminal.</p>
                    </div>
                    <div class="bullet-card">
                        <h4>Desafío</h4>
                        <p>Dejar de justificar el delito y recuperar el imperio de la ley.</p>
                    </div>
                </div>
                <div class="image-slot-container">
                    <div class="img-box">🖼️ Imagen 1<span>(Reflexión final)</span></div>
                    <div class="img-box">🖼️ Imagen 2<span>(Bolivia / Ley)</span></div>
                </div>
            </div>
        `
    }
];

const $ = id => document.getElementById(id);
let current = 0;

function showSlide(index) {
    current = Math.max(0, Math.min(index, slides.length - 1));
    const slide = slides[current];
    
    $('slide').innerHTML = slide.html;
    $('chapter').textContent = slide.chapter;
    $('counter').textContent = `${current + 1} / ${slides.length}`;
    $('progress').textContent = `Diapositiva ${current + 1} de ${slides.length}`;
    
    $('prev').disabled = current === 0;
    $('next').disabled = current === slides.length - 1;
    
    $('slide').scrollTop = 0;
}

$('prev').addEventListener('click', () => showSlide(current - 1));
$('next').addEventListener('click', () => showSlide(current + 1));

// Inicializar la primera diapositiva
showSlide(0);