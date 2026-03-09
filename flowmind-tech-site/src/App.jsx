const serviceCards = [
  {
    title: 'Criação de Sites',
    desc: 'Desenvolvimento de sites\nmodernos e responsivos',
    icon: '🖥️',
  },
  {
    title: 'Automação\nde Processos',
    desc: 'Soluções para automatizar\ntarefas e fluxos de trabalho',
    icon: '🔗',
  },
  {
    title: 'Dashboards\ne Dados',
    desc: 'Painéis de controle para\nanálise de dados e métricas',
    icon: '📊',
  },
  {
    title: 'Sistemas\nPersonalizados',
    desc: 'Desenvolvimento sistemas\nsob medida para empresas',
    icon: '⚙️',
  },
]

const portfolioCards = [
  {
    title: 'Sites Criados',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Automação',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Dashboards',
    img: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container nav">
          <a href="#" className="brand">
            <img src="/FullLogo.png" alt="FlowMind Tech" />
            <span>FLOWMIND TECH</span>
          </a>

          <nav className="menu">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <a href="#contato" className="btn-primary">Análise Gratuita</a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Tecnologia e automação para empresas</h1>
              <p>
                Criamos sites, sistemas e automações para transformar processos em eficiência.
              </p>
              <a href="#contato" className="btn-primary">
                Solicitar Análise Gratuita
              </a>
            </div>

            <div className="hero-visual">
              <div className="hero-glow" />
              <img src="/hero-dashboard.png" alt="Dashboard profissional" />
            </div>
          </div>
        </section>

        <section id="servicos" className="section">
          <div className="container">
            <h2>Nossos Serviços</h2>
            <p className="lead">Veja alguns dos projetos que criamos para nossos clientes.</p>

            <div className="cards">
              {serviceCards.map((card) => (
                <div key={card.title} className="card">
                  <div className="icon-box">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="container">
            <h2>Nosso Portfólio</h2>
            <p className="lead">Veja alguns dos projetos que criamos para nossos clientes.</p>

            <div className="tabs">
              <div className="tab">Sites Criados</div>
              <div className="tab active">Automação</div>
              <div className="tab">Dashboards</div>
            </div>

            <div className="portfolio-grid">
              {portfolioCards.map((card) => (
                <div key={card.title} className="portfolio-card">
                  <img src={card.img} alt={card.title} />
                  <h3>{card.title}</h3>
                </div>
              ))}
            </div>

            <a href="#contato" className="btn-secondary">Ver Portfólio Completo</a>
          </div>
        </section>

        <section id="sobre" className="footer">
          <div className="container">
            <div className="footer-box">
              <h3>Soluções adaptáveis ao cliente e à demanda</h3>
              <p>
                Na FlowMind Tech, cada projeto é pensado para a necessidade real do negócio.
                Desenvolvemos sites, dashboards, sistemas de organização e automações personalizadas
                para estruturar empresas com mais clareza, controle e eficiência.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}