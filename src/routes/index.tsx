import { createFileRoute } from "@tanstack/react-router";
import {
  Anchor,
  GraduationCap,
  Lightbulb,
  Ship,
  ShieldCheck,
  HardHat,
  Vest,
  AlertTriangle,
  UserCheck,
  ArrowRight,
  MapPin,
} from "lucide-react";
import heroPort from "@/assets/hero-port.jpg";
import teconSalvador from "@/assets/tecon-salvador.jpg";
import teconRioGrande from "@/assets/tecon-rio-grande.jpg";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdHvEkKnVBEwGyyG87wgXz5fWR4fkQaFjMfOabDObrb1aIZ4g/viewform?usp=header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wilson Sons | Visita Técnica aos Terminais Portuários" },
      {
        name: "description",
        content:
          "Inscreva-se na visita técnica aos terminais Tecon Salvador e Tecon Rio Grande. Conheça de perto a operação portuária que conecta o Brasil ao mundo.",
      },
      { property: "og:title", content: "Wilson Sons | Visita Técnica aos Terminais" },
      {
        property: "og:description",
        content:
          "Inscreva-se na visita técnica aos terminais Wilson Sons e vivencie a logística portuária real.",
      },
      { property: "og:image", content: heroPort },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Experience />
      <Safety />
      <Terminals />
      <FinalCta />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-navy/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <Anchor className="h-6 w-6 text-cyan" strokeWidth={2.2} />
          <span className="font-display font-bold tracking-tight text-lg">Wilson Sons</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#experiencia" className="hover:text-cyan transition-colors">A Experiência</a>
          <a href="#seguranca" className="hover:text-cyan transition-colors">Segurança</a>
          <a href="#terminais" className="hover:text-cyan transition-colors">Terminais</a>
        </nav>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-cyan text-navy px-5 py-2 text-sm font-semibold hover:brightness-110 transition"
        >
          Inscreva-se
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroPort}
        alt="Terminal portuário Wilson Sons ao entardecer"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-navy-deep/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 w-full">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium text-cyan ring-1 ring-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            Inscrições abertas · 2025
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05]">
            Visita Técnica aos Terminais{" "}
            <span className="text-cyan">Wilson Sons</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
            Conheça de perto a operação portuária que conecta o Brasil ao mundo. Uma experiência educacional única em ambiente operacional real.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan text-navy px-8 py-4 text-base font-semibold hover:brightness-110 hover:-translate-y-0.5 transition shadow-elevated"
            >
              Inscreva-se agora
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#experiencia"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 text-white px-8 py-4 text-base font-semibold hover:bg-white/20 transition"
            >
              Saiba mais
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "2", v: "Terminais" },
              { k: "100%", v: "Operação Real" },
              { k: "+150", v: "Anos de Tradição" },
            ].map((s) => (
              <div key={s.v} className="text-white">
                <div className="font-display text-3xl font-bold text-cyan">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const cards = [
    { icon: GraduationCap, title: "Educação", desc: "Aprendizado prático em ambiente real." },
    { icon: Ship, title: "Logística", desc: "Cadeia portuária do navio ao destino." },
    { icon: Lightbulb, title: "Inovação", desc: "Tecnologia aplicada à operação." },
    { icon: Anchor, title: "Operação Portuária", desc: "Bastidores de um terminal global." },
  ];
  return (
    <section id="experiencia" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm font-semibold text-cyan uppercase tracking-widest">A Experiência</span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold text-navy leading-tight">
            Imersão na operação portuária que move o Brasil
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A visita técnica Wilson Sons é uma jornada educacional dentro de um terminal portuário em plena operação. Estudantes e interessados acompanham, com instrutores especializados, cada etapa da movimentação de carga — do atracamento do navio ao despacho dos contêineres.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Objetivo educacional alinhado com cursos de logística, engenharia e administração",
              "Contato direto com tecnologia portuária e processos operacionais",
              "Aberto a estudantes e profissionais interessados em logística, tecnologia e operações",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-foreground">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group rounded-2xl bg-card border border-border p-7 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center text-navy">
                <Icon className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Safety() {
  const items = [
    { icon: HardHat, t: "Uso obrigatório de capacete" },
    { icon: AlertTriangle, t: "Colete refletivo de segurança" },
    { icon: ShieldCheck, t: "Respeito às áreas restritas" },
    { icon: UserCheck, t: "Acompanhamento de instrutores" },
  ];
  return (
    <section id="seguranca" className="py-24 sm:py-32 bg-secondary">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan uppercase tracking-widest">
            <ShieldCheck className="h-4 w-4" /> EPIs Obrigatórios
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold text-navy">
            Segurança em primeiro lugar
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            A visita ocorre em ambiente operacional portuário real. O cumprimento integral das normas de segurança é obrigatório e parte essencial da experiência.
          </p>
        </div>

        <div className="mt-14 rounded-3xl overflow-hidden shadow-elevated bg-navy ring-1 ring-navy/10">
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/JFZny-M0xmw"
              title="Uso correto de EPIs em ambiente portuário"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, t }) => (
            <div
              key={t}
              className="rounded-2xl bg-card border border-border p-6 flex items-start gap-4 shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl bg-navy flex items-center justify-center text-cyan shrink-0">
                <Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <p className="font-medium text-navy leading-snug">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Terminals() {
  const terminals = [
    {
      img: teconSalvador,
      city: "Tecon Salvador (BA)",
      tag: "Nordeste · Hub estratégico",
      desc: "Principal porta de entrada e saída de cargas do Nordeste, conectando a Bahia aos principais mercados internacionais com infraestrutura de classe mundial.",
    },
    {
      img: teconRioGrande,
      city: "Tecon Rio Grande (RS)",
      tag: "Sul · Corredor de exportação",
      desc: "Maior terminal de contêineres do sul do Brasil e principal corredor de exportação do agronegócio e da indústria gaúcha para o mundo.",
    },
  ];
  return (
    <section id="terminais" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold text-cyan uppercase tracking-widest">Terminais Participantes</span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold text-navy">
            Dois terminais. Uma operação de classe global.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {terminals.map((t) => (
            <article
              key={t.city}
              className="group rounded-3xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.city}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-semibold text-navy">
                  <MapPin className="h-3.5 w-3.5 text-cyan" /> {t.tag}
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-navy">{t.city}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{t.desc}</p>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-navy font-semibold hover:text-cyan transition-colors"
                >
                  Inscrever-se para este terminal
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-cta overflow-hidden">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sand/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Anchor className="h-12 w-12 text-cyan mx-auto" strokeWidth={1.8} />
        <h2 className="mt-6 font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Pronto para viver essa experiência?
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
          Garanta sua vaga na visita técnica agora mesmo. As inscrições são limitadas.
        </p>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-cyan text-navy px-10 py-5 text-lg font-bold hover:brightness-110 hover:-translate-y-0.5 transition shadow-elevated"
        >
          Quero me inscrever
          <ArrowRight className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70 py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-white">
          <Anchor className="h-5 w-5 text-cyan" />
          <span className="font-display font-semibold">Wilson Sons</span>
        </div>
        <p className="mt-4 text-sm">
          Projeto desenvolvido para fins educativos na KODIE Academy
        </p>
      </div>
    </footer>
  );
}
