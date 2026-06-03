import { VideoSection } from "@/components/VideoSection";
import { FeatureCard } from "@/components/FeatureCard";
import { CTAButton } from "@/components/CTAButton";
import { FAQItem } from "@/components/FAQItem";
import { Accordion } from "@/components/ui/accordion";
import {
  Music,
  Download,
  Shield,
  CheckCircle,
  TrendingUp,
  X,
  Smartphone,
  Headphones,
  Award,
  Zap,
  Gift,
  PlayCircle,
  FileX,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects (dark sections) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      {/* DARK - Hero */}
      <div className="relative z-10 pt-16 pb-12">
        <div className="container mx-auto px-4">
          <section className="text-center mb-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-foreground font-semibold">
                🟢 97 músicos estão sendo redirecionados!
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight font-display">
              O <span className="text-primary glow-text-blue">maior material</span> de{" "}
              <span className="text-primary glow-text-blue">VÍDEO PARTITURAS</span> para saxofone!
            </h1>

            <p className="text-lg md:text-xl text-accent mb-4 max-w-3xl mx-auto">
              <span className="font-bold">
                ÚLTIMO DIA DE PROMOÇÃO! COMPRANDO HOJE VOCÊ GANHA +200 VÍDEO PARTITURAS DE BRINDE
              </span>{" "}
              <span className="font-bold">— qualidade premium!</span>
            </p>
          </section>

          <section className="mb-10 flex justify-center">
            <div className="w-full max-w-4xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                Veja como funciona!
              </h3>
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-primary/30">
                <iframe
                  src="https://www.youtube.com/embed/qMOaQcg3RRU?rel=0&modestbranding=1"
                  className="w-full h-full"
                  title="Vídeo Partituras Premium"
                  allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <div className="text-center">
            <CTAButton href="#preco" size="xl">Quero Ter Acesso Agora!</CTAButton>
          </div>
        </div>
      </div>

      {/* LIGHT - Comparação Impressas vs Vídeo */}
      <section className="section-light relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-3 font-display">
            <span className="text-primary">Vídeo partituras</span> vs <span className="line-through opacity-50">impressas</span>
          </h2>
          <p className="text-center text-dark-muted text-lg max-w-2xl mx-auto mb-12">
            Compare e veja a diferença que vai transformar seus estudos.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/70 border-2 border-red-200 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 p-3 rounded-full">
                  <FileX className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold font-display">Partituras Impressas</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Difíceis de ler sem prática",
                  "Sem playback — você toca sozinho",
                  "Folhas amassam, rasgam e somem",
                  "Você não sabe se está no tempo certo",
                  "Estudo lento e cansativo",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-dark-muted">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-accent rounded-2xl p-8 shadow-2xl relative">
              <div className="absolute -top-3 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                RECOMENDADO
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-accent/20 p-3 rounded-full">
                  <PlayCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold font-display">Vídeo Partituras Premium</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Notas destacadas em tempo real",
                  "Playback profissional incluso",
                  "Tudo no celular, tablet ou PC",
                  "Você toca junto, no tempo certo",
                  "Aprendizado 3x mais rápido",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 font-medium">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DARK - Features */}
      <div className="relative z-10 bg-background py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-10 font-display">
            <span className="text-primary glow-text-blue">Qualidade premium</span> que você{" "}
            <span className="font-bold">não encontra no YouTube</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FeatureCard icon={Music} title="Mais de 200 temas" description="Acervo completo com músicas de diversos estilos." />
            <FeatureCard icon={TrendingUp} title="Plataforma Exclusiva" description="Material organizado em pastas. Economize tempo!" />
            <FeatureCard icon={Download} title="Download Ilimitado" description="Vídeos em mp4 de alta qualidade. Use offline!" />
            <FeatureCard icon={Smartphone} title="Em qualquer dispositivo" description="Estude no celular, tablet ou PC, onde estiver." />
          </div>
        </div>
      </div>

      {/* LIGHT - Para quem é */}
      <section className="section-light relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 font-display">
            Feito para <span className="text-primary">você</span> que…
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Music, title: "Está começando agora", desc: "Aprenda do zero acompanhando as notas no vídeo." },
              { icon: TrendingUp, title: "Quer evoluir mais rápido", desc: "Estude com playbacks profissionais e ganhe musicalidade." },
              { icon: Award, title: "Toca em eventos e cultos", desc: "Repertório pronto para apresentações memoráveis." },
            ].map((item) => (
              <div key={item.title} className="bg-white/80 border border-primary/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">{item.title}</h3>
                <p className="text-dark-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK - Video Examples */}
      <div className="relative z-10 bg-background py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 font-display">
            Veja alguns <span className="text-primary glow-text-blue">exemplos</span>
          </h2>

          <div className="space-y-16">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                Menina Veneno - Ritchie
              </h3>
              <VideoSection videoId="ho6kZjBszIU" description="Clássico solo de sax! Temos também pop, rock, MPB, bossa e muito mais!" />
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                Vivir Sin Aire - Maná
              </h3>
              <VideoSection videoId="_eBWSJa0Mog" description="Hits latinos! Sucesso da banda Maná, perfeito para emocionar." />
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                Your Love - The Outfield
              </h3>
              <VideoSection videoId="uYG7VA-kxMI" description="Rock clássico! Note a qualidade premium dos playbacks e partituras." />
            </div>
          </div>
        </div>
      </div>

      {/* LIGHT - Antes x Depois */}
      <section className="section-light relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 font-display">
            A sua <span className="text-primary">transformação</span> começa hoje
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/70 border-2 border-red-200 rounded-2xl p-8">
              <p className="text-sm font-bold text-red-500 uppercase tracking-wider mb-4">Antes</p>
              <ul className="space-y-3 text-dark-muted">
                {[
                  "Travado na hora de tocar músicas novas",
                  "Sem repertório para apresentações",
                  "Horas perdidas procurando partituras",
                  "Frustração de não saber se está tocando certo",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-accent/15 to-primary/10 border-2 border-accent rounded-2xl p-8 shadow-xl">
              <p className="text-sm font-bold text-accent uppercase tracking-wider mb-4">Depois</p>
              <ul className="space-y-3 font-medium">
                {[
                  "Tocando suas músicas favoritas com confiança",
                  "Repertório completo na palma da mão",
                  "Tudo organizado e pronto para usar",
                  "Evolução real ouvida por você e por todos",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DARK - Depoimentos */}
      <div className="relative z-10 bg-background py-24 md:py-32">
        <div className="container mx-auto px-4">
          <section id="depoimentos" className="scroll-mt-32">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4 font-display">
              O que nossos <span className="text-primary glow-text-blue">clientes dizem</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              <span className="font-bold text-foreground">Centenas de saxofonistas</span> já transformaram suas apresentações
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 glow-blue">
                <img src="https://videopartituras.com/wp-content/uploads/2025/01/IMG_5024-768x1017.jpg" alt="Depoimento" className="w-full rounded-lg" />
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 glow-blue">
                <img src="https://videopartituras.com/wp-content/uploads/2025/01/IMG_5026-768x977.jpg" alt="Depoimento" className="w-full rounded-lg" />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* LIGHT - Bônus */}
      <section className="section-light relative z-10 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent rounded-full px-4 py-2 mb-4">
              <Gift className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent">BÔNUS EXCLUSIVOS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display">
              Comprando hoje você <span className="text-primary">ainda leva</span>:
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Music, title: "+200 vídeo partituras de brinde", value: "R$ 197" },
              { icon: Headphones, title: "Playbacks profissionais inclusos", value: "R$ 97" },
              { icon: Zap, title: "Atualizações vitalícias do acervo", value: "R$ 147" },
            ].map((b) => (
              <div key={b.title} className="bg-white/90 border-2 border-accent/40 rounded-2xl p-6 shadow-lg relative">
                <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full rotate-6">
                  GRÁTIS
                </div>
                <b.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2 font-display">{b.title}</h3>
                <p className="text-dark-muted">
                  De <span className="line-through">{b.value}</span>{" "}
                  <span className="font-bold text-accent">por R$ 0,00</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK - Garantia + Pricing + FAQ */}
      <div className="relative z-10 bg-background py-24 md:py-32">
        <div className="container mx-auto px-4">
          <section className="mb-20 bg-card/50 backdrop-blur-sm border border-accent/30 rounded-3xl p-8 md:p-12 glow-green">
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/20 p-6 rounded-full mb-6">
                <Shield className="w-16 h-16 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                <span className="text-accent">100% Seguro</span> com 7 Dias de Garantia!
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                <span className="font-bold text-foreground">Somos uma equipe de músicos</span> trabalhando com seriedade!{" "}
                <span className="font-bold text-foreground">7 dias de garantia:</span> não gostou? Devolvemos seu dinheiro!
              </p>
            </div>
          </section>

          <section id="preco" className="mb-20 scroll-mt-24 md:scroll-mt-32">
            <div className="text-center mb-8 animate-pulse">
              <div className="inline-block bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-4 mb-4 glow-green shadow-2xl">
                <p className="text-2xl md:text-3xl text-accent-foreground font-black mb-0 tracking-tight">
                  ⚡ SOMENTE HOJE VOCÊ TERÁ ACESSO AO DESCONTO! ⚡
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto bg-gradient-to-br from-accent/20 via-primary/20 to-accent/10 backdrop-blur-sm border-4 border-accent/50 rounded-3xl p-8 md:p-12 glow-green shadow-2xl animate-scale-in">
              <div className="text-center mb-8">
                <p className="text-red-500 text-lg mb-2 line-through">de R$ 197,00</p>
                <div className="relative inline-block">
                  <p className="text-7xl md:text-8xl font-black text-accent glow-text-green mb-4 font-display animate-pulse">
                    R$ 67<span className="text-4xl md:text-5xl">,00</span>
                  </p>
                  <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full rotate-12 animate-bounce">
                    60% OFF
                  </div>
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Pagamento único • Acesso vitalício
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Mais de 200 vídeo partituras premium",
                  "+200 vídeo partituras extras de brinde",
                  "Download ilimitado em alta qualidade",
                  "Acesso vitalício ao material",
                  "Garantia de 7 dias",
                  "Suporte via WhatsApp",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-foreground">{t}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <CTAButton href="https://pay.cakto.com.br/pe7or9r" size="xl">
                  Clique Aqui e Aproveite a Oferta!
                </CTAButton>
              </div>

              <p className="text-sm text-center text-muted-foreground mt-4">
                ✅ ACESSO IMEDIATO APÓS PAGAMENTO CONFIRMADO!
              </p>
            </div>
          </section>

          <section className="mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 font-display">
              Perguntas <span className="text-primary glow-text-blue">Frequentes</span>
            </h2>

            <div className="max-w-3xl mx-auto bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                <FAQItem value="item-1" question="1) Como vou receber as vídeo partituras?" answer="Você vai receber o acesso à plataforma no e-mail inserido no ato da compra." />
                <FAQItem value="item-2" question="2) Posso baixar as vídeo partituras?" answer="Sim. Você pode baixar todas no celular, computador ou tablet. Usa sem internet." />
                <FAQItem value="item-3" question="3) Em quanto tempo recebo o acesso?" answer="Após confirmado o pagamento, o acesso é imediato." />
                <FAQItem value="item-4" question="4) O pagamento é seguro?" answer="Sim, a plataforma de pagamento é 100% SEGURA e criptografada!" />
                <FAQItem value="item-5" question="5) Onde ficam as vídeo partituras?" answer="No Google Drive, com pastas organizadas pelo nome de cada música." />
              </Accordion>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/20 py-8 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Vídeo Partituras Premium. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;