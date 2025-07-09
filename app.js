// Contenido de las secciones
const sectionsContent = {
    inicio: `
        <section id="home" class="section active">
            <div class="hero">
                <h1>Tailored Solutions for Businesses: From Management Software to Stunning 3D Visuals</h1>
                <div class="hero-buttons">
                    <a href="#contacto" class="btn">Explore Our Services</a>
                    <a href="#contacto" class="btn secondary">Request a Meeting</a>
                </div>
            </div>

            <div class="services-highlight">
                <div class="service-card">
                    <h2>Custom Software for Businesses</h2>
                    <a href="#software" class="btn small">Read More</a>
                </div>
                <div class="service-card">
                    <h2>Graphics & Professional 3D Animation</h2>
                    <a href="#graficos" class="btn small">Read More</a>
                </div>
            </div>

            <div class="about-preview">
                <h2>Services</h2>
                <p>We offer a comprehensive range of services, from developing tailored ERP and CRM systems to creating immersive 3D animations and visualizations.</p>
                
                <h2>Projects</h2>
                <p>See how we've helped businesses with our software solutions and 3D visual projects.</p>
                
                <h2>About JOCARSA</h2>
                <p>Our team combines technical expertise with creativity to deliver innovative solutions for our clients.</p>
                
                <a href="#contacto" class="btn">Contact</a>
            </div>
        </section>
    `,
    
    "software": `
        <section id="software-section" class="section">
            <div class="page-header">
                <h1>Soluciones de Software Empresarial</h1>
                <p>Desarrollamos sistemas a medida que se adaptan perfectamente a tus procesos de negocio.</p>
            </div>

            <div class="content-section">
                <h2>Nuestras Soluciones de Software</h2>
                
                <div class="service-details">
                    <div class="detail-card">
                        <h3>Sistemas ERP Personalizados</h3>
                        <p>Gestión integral de recursos empresariales adaptados a tus necesidades específicas.</p>
                    </div>
                    
                    <div class="detail-card">
                        <h3>CRM a Medida</h3>
                        <p>Sistemas de gestión de relaciones con clientes diseñados para tu modelo de negocio.</p>
                    </div>
                    
                    <div class="detail-card">
                        <h3>Aplicaciones Web y Móviles</h3>
                        <p>Desarrollo de aplicaciones multiplataforma para acceder a tus sistemas desde cualquier lugar.</p>
                    </div>
                    
                    <div class="detail-card">
                        <h3>Integración de Sistemas</h3>
                        <p>Conectamos tus diferentes sistemas para un flujo de información perfecto.</p>
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <a href="#contacto?type=software" class="btn">Solicitar Presupuesto de Software</a>
                </div>
            </div>
        </section>
    `,
    
    graficos: `
        <section id="graficos-section" class="section">
            <div class="page-header">
                <h1>Gráficos Profesionales y Animación 3D</h1>
                <p>Creación de visualizaciones impactantes para comunicar tus ideas de manera efectiva.</p>
            </div>

            <div class="content-section">
                <h2>Nuestros Servicios de Gráficos</h2>
                
                <div class="service-details">
                    <div class="detail-card">
                        <h3>Modelado 3D</h3>
                        <p>Creación de modelos tridimensionales detallados para diversos usos industriales y comerciales.</p>
                    </div>
                    
                    <div class="detail-card">
                        <h3>Animaciones Profesionales</h3>
                        <p>Producción de animaciones de alta calidad para presentaciones, marketing y capacitación.</p>
                    </div>
                    
                    <div class="detail-card">
                        <h3>Visualizaciones Arquitectónicas</h3>
                        <p>Representaciones realistas de proyectos arquitectónicos antes de su construcción.</p>
                    </div>
                    
                    <div class="detail-card">
                        <h3>Realidad Virtual y Aumentada</h3>
                        <p>Experiencias inmersivas para mostrar tus productos o servicios de manera innovadora.</p>
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <a href="#contacto?type=graficos" class="btn">Solicitar Presupuesto de Animación</a>
                </div>
            </div>
        </section>
    `,
    
    proyectos: `
        <section id="proyectos-section" class="section">
            <div class="page-header">
                <h1>Nuestros Proyectos y Casos de Éxito</h1>
                <p>Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos.</p>
            </div>

            <div class="content-section">
                <div class="filter-buttons">
                    <button class="filter-btn active" data-filter="all">Todos</button>
                    <button class="filter-btn" data-filter="software">Software</button>
                    <button class="filter-btn" data-filter="graficos">Gráficos 3D</button>
                </div>
                
                <div class="projects-grid">
                    <div class="project-card" data-category="software">
                        <div class="project-image"></div>
                        <div class="project-info">
                            <h3>Sistema ERP para Manufactura</h3>
                            <h4>Cliente: Industrias ABC</h4>
                            <p><strong>Reto:</strong> Necesitaban integrar sus procesos de producción, inventario y ventas.</p>
                            <p><strong>Solución:</strong> ERP personalizado con módulos específicos para su industria.</p>
                            <p><strong>Tecnología:</strong> .NET Core, SQL Server, React</p>
                            <p><strong>Resultado:</strong> 30% aumento en eficiencia operativa.</p>
                        </div>
                    </div>
                    
                    <div class="project-card" data-category="graficos">
                        <div class="project-image"></div>
                        <div class="project-info">
                            <h3>Animación de Producto</h3>
                            <h4>Cliente: TechCorp</h4>
                            <p><strong>Reto:</strong> Mostrar las características internas de un producto complejo.</p>
                            <p><strong>Solución:</strong> Animación 3D con corte transversal interactivo.</p>
                            <p><strong>Tecnología:</strong> Blender, Maya, Unity</p>
                            <p><strong>Resultado:</strong> Aumento del 40% en comprensión del producto por clientes.</p>
                        </div>
                    </div>
                    
                    <div class="project-card" data-category="software">
                        <div class="project-image"></div>
                        <div class="project-info">
                            <h3>CRM para Sector Salud</h3>
                            <h4>Cliente: Clínica XYZ</h4>
                            <p><strong>Reto:</strong> Gestión de pacientes y citas en múltiples sucursales.</p>
                            <p><strong>Solución:</strong> CRM con integración de calendario y historial médico.</p>
                            <p><strong>Tecnología:</strong> Node.js, MongoDB, Vue.js</p>
                            <p><strong>Resultado:</strong> Reducción del 25% en tiempos de espera.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    sobre: `
        <section id="sobre-section" class="section">
            <div class="page-header">
                <h1>Sobre JOCARSA</h1>
                <p>Combinando tecnología y creatividad para ofrecer soluciones innovadoras.</p>
            </div>

            <div class="content-section">
                <h2>Nuestra Historia</h2>
                <p>Fundada en 2010, JOCARSA comenzó como un pequeño estudio de desarrollo de software y ha crecido hasta convertirse en un referente en soluciones tecnológicas integrales, combinando desarrollo de software empresarial con creación de gráficos 3D de alta calidad.</p>
                
                <h2>Nuestro Equipo</h2>
                <div class="team-grid">
                    <div class="team-member">
                        <div class="member-photo"></div>
                        <h3>Juan Pérez</h3>
                        <p>CEO & Fundador</p>
                    </div>
                    <div class="team-member">
                        <div class="member-photo"></div>
                        <h3>María Gómez</h3>
                        <p>Directora de Desarrollo</p>
                    </div>
                    <div class="team-member">
                        <div class="member-photo"></div>
                        <h3>Carlos Ruiz</h3>
                        <p>Líder de Diseño 3D</p>
                    </div>
                </div>
                
                <h2>Nuestra Filosofía</h2>
                <p>Creemos en la combinación perfecta entre enfoque técnico y creatividad. Cada proyecto es una oportunidad para innovar y superar expectativas, manteniendo siempre altos estándares de calidad.</p>
                
                <h2>Tecnologías que Utilizamos</h2>
                <div class="tech-grid">
                    <div class="tech-card">
                        <h3>Desarrollo de Software</h3>
                        <ul>
                            <li>.NET Core</li>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>SQL Server / MongoDB</li>
                            <li>React / Vue.js</li>
                        </ul>
                    </div>
                    <div class="tech-card">
                        <h3>Gráficos 3D</h3>
                        <ul>
                            <li>Blender</li>
                            <li>Maya</li>
                            <li>3ds Max</li>
                            <li>Unity</li>
                            <li>Unreal Engine</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    contacto: `
        <section id="contacto-section" class="section">
            <div class="page-header">
                <h1>Contacto</h1>
                <p>Estamos listos para ayudarte con tu próximo proyecto.</p>
            </div>

            <div class="content-section">
                <form id="contactForm" class="contact-form">
                    <div class="form-group">
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="service-type">Tipo de servicio:</label>
                        <select id="service-type" name="service-type">
                            <option value="software">Software</option>
                            <option value="graficos">Gráficos 3D</option>
                            <option value="ambos">Ambos</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Mensaje:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    
                    <div class="contact-buttons">
                        <button type="submit" class="btn">Enviar Mensaje</button>
                        <button type="reset" class="btn secondary">Limpiar</button>
                    </div>
                </form>
                
                <div class="contact-info">
                    <h3>También puedes contactarnos directamente:</h3>
                    <p>Email: info@jocarsa.com</p>
                    <p>Teléfono: +34 123 456 789</p>
                    
                    <div class="contact-buttons" style="margin-top: 1.5rem;">
                        <a href="#contacto?type=software" class="btn">Solicitar Presupuesto de Software</a>
                        <a href="#contacto?type=graficos" class="btn secondary">Solicitar Presupuesto de Animación</a>
                    </div>
                </div>
            </div>
        </section>
    `
};

// Función para cargar la sección correspondiente
function loadSection(sectionId) {
    const app = document.getElementById('app');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Hide all sections first
    const allSections = app.querySelectorAll('.section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    
    const baseSectionId = sectionId.split('?')[0];
    
    // Update navigation
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').replace('#', '') === baseSectionId);
    });
    
    // Load content
    if (sectionsContent[baseSectionId]) {
        app.innerHTML = sectionsContent[baseSectionId];
        
        // Show current section
        const currentSection = app.querySelector('.section');
        if (currentSection) {
            currentSection.classList.add('active');
        }
        
        // Setup section-specific functionality
        if (baseSectionId === 'proyectos') {
            setupProjectFilter();
        } else if (baseSectionId === 'contacto') {
            setupContactForm();
            
            const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
            const serviceType = urlParams.get('type');
            if (serviceType) {
                const select = document.getElementById('service-type');
                if (select) select.value = serviceType;
            }
        }
    } else {
        window.location.hash = 'inicio';
    }
}

// Configurar filtrado de proyectos
function setupProjectFilter() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            document.querySelectorAll('.project-card').forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Configurar formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }
}

// Manejar cambios en la URL
function handleHashChange() {
    const hash = window.location.hash.substring(1) || 'inicio';
    loadSection(hash);
}

// Configurar navegación
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            window.location.hash = sectionId;
        });
    });
}

// Inicializar la aplicación
function init() {
    setupNavigation();
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
