export default function FlowMindTechSite() {
  const serviceCards = [
    {
      title: 'Criação de Sites',
      desc: 'Desenvolvimento de sites\nmodernos e responsivos',
      icon: '🖥️',
      glow: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Automação\nde Processos',
      desc: 'Soluções para automatizar\ntarefas e fluxos de trabalho',
      icon: '🔗',
      glow: 'from-violet-400 to-fuchsia-500',
    },
    {
      title: 'Dashboards\ne Dados',
      desc: 'Painéis de controle para\nanálise de dados e métricas',
      icon: '📊',
      glow: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Sistemas\nPersonalizados',
      desc: 'Desenvolvimento sistemas\nsob medida para empresas',
      icon: '⚙️',
      glow: 'from-violet-400 to-fuchsia-500',
    },
  ];

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
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05081b] text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_15%,rgba(68,92,255,0.16),transparent_18%),radial-gradient(circle_at_78%_10%,rgba(160,75,255,0.22),transparent_22%),radial-gradient(circle_at_65%_55%,rgba(124,58,237,0.14),transparent_20%),linear-gradient(180deg,#040714_0%,#060a1f_45%,#030511_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-50 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.22)_1px,transparent_1.2px)] [background-size:42px_42px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#040714]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <img src="/mnt/data/FullLogo.png" alt="FlowMind Tech" className="h-10 w-10 object-contain" />
            <span className="text-[18px] font-semibold tracking-wide">FLOWMIND TECH</span>
          </a>

          <nav className="hidden items-center gap-10 text-[15px] text-white/85 md:flex">
            <a href="#inicio" className="hover:text-white">Início</a>
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#portfolio" className="hover:text-white">Portfólio</a>
            <a href="#sobre" className="hover:text-white">Sobre</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>

          <a
            href="#diagnostico"
            className="rounded-2xl bg-gradient-to-r from-[#4c63ff] to-[#9852ff] px-6 py-4 text-[15px] font-semibold shadow-[0_12px_28px_rgba(124,58,237,0.35)]"
          >
            Análise Gratuita
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative mx-auto max-w-[1200px] px-6 pb-12 pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="max-w-[470px] pt-8">
              <h1 className="text-[58px] font-semibold leading-[1.03] tracking-[-0.04em] md:text-[72px]">
                Tecnologia e automação para empresas
              </h1>
              <p className="mt-8 text-[20px] leading-[1.55] text-white/75 md:text-[22px]">
                Criamos sites, sistemas e automações para transformar processos em eficiência.
              </p>
              <a
                href="#diagnostico"
                className="mt-10 inline-flex rounded-2xl bg-gradient-to-r from-[#4c63ff] to-[#9852ff] px-9 py-5 text-[18px] font-semibold shadow-[0_14px_32px_rgba(124,58,237,0.38)]"
              >
                Solicitar Análise Gratuita
              </a>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-16 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.35),transparent_60%)] blur-3xl" />
              <img
                src="/mnt/data/cc0dc4b0-a709-4bed-8ebf-5fed548f4a0d.png"
                alt="Dashboard FlowMind"
                className="relative z-10 w-full max-w-[720px] rounded-[28px] shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </section>

        <section id="servicos" className="mx-auto max-w-[1200px] px-6 py-14 text-center">
          <h2 className="text-[56px] font-semibold tracking-[-0.04em] md:text-[72px]">Nossos Serviços</h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[22px] text-white/65">
            Veja alguns dos projetos que criamos para nossos clientes.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card) => (
              <div key={card.title} className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,21,52,0.85),rgba(10,13,34,0.96))] px-6 pb-8 pt-7 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${card.glow}`} />
                <div className="mx-auto flex h-[74px] w-[74px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[34px] shadow-[0_0_30px_rgba(124,58,237,0.12)]">
                  {card.icon}
                </div>
                <h3 className="mt-7 whitespace-pre-line text-[24px] font-semibold leading-[1.12] tracking-[-0.03em]">{card.title}</h3>
                <p className="mt-5 whitespace-pre-line text-[18px] leading-[1.45] text-white/62">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-[1200px] px-6 py-14 text-center">
          <h2 className="text-[56px] font-semibold tracking-[-0.04em] md:text-[72px]">Nosso Portfólio</h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[22px] text-white/65">
            Veja alguns dos projetos que criamos para nossos clientes.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-3 text-[20px] text-white/75">Sites Criados</button>
            <button className="rounded-2xl bg-gradient-to-r from-[#4c63ff] to-[#9852ff] px-8 py-3 text-[20px] font-medium shadow-[0_10px_24px_rgba(124,58,237,0.34)]">Automação</button>
            <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-3 text-[20px] text-white/75">Dashboards</button>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {portfolioCards.map((card) => (
              <div key={card.title}>
                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,19,48,0.92),rgba(10,13,30,0.98))] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <div className="h-[220px] overflow-hidden">
                    <img src={card.img} alt={card.title} className="h-full w-full object-cover" />
                  </div>
                </div>
                <h3 className="mt-5 text-[24px] font-medium">{card.title}</h3>
              </div>
            ))}
          </div>

          <a
            href="#diagnostico"
            className="mt-12 inline-flex rounded-2xl border border-white/10 bg-white/5 px-10 py-4 text-[22px] font-medium text-white shadow-[0_12px_28px_rgba(0,0,0,0.25)] backdrop-blur"
          >
            Ver Portfólio Completo
          </a>
        </section>
      </main>
    </div>
  );
}
