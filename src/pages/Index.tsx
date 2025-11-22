import { CountdownTimer } from "@/components/CountdownTimer";
import { VideoSection } from "@/components/VideoSection";
import { FeatureCard } from "@/components/FeatureCard";
import { CTAButton } from "@/components/CTAButton";
import { FAQItem } from "@/components/FAQItem";
import { Accordion } from "@/components/ui/accordion";
import {
  Music,
  Download,
  Clock,
  Shield,
  Star,
  CheckCircle,
  TrendingUp,
  Users,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Main Content */}
      <div className="relative z-10 pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-foreground font-semibold">
                🟢 97 músicos estão sendo redirecionados!
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight font-display">
              Tenha acesso agora mesmo à{" "}
              <span className="text-primary glow-text-blue">maior plataforma</span> de
              <br />
              <span className="text-primary glow-text-blue">VÍDEO PARTITURAS</span> para saxofone da internet!
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Vídeo partituras com produções próprias e de qualidade premium!
            </p>
          </section>

          {/* Main Video Section */}
          <section className="mb-12">
            <VideoSection
              videoId="qMOaQcg3RRU"
              title="Assista ao vídeo e descubra como revolucionar sua forma de tocar!"
              description="Veja como nossas vídeo partituras premium vão transformar suas apresentações musicais."
            />
          </section>

          {/* CTA to Testimonials */}
          <section className="text-center mb-20">
            <CTAButton href="#depoimentos" size="xl">
              Ver Depoimentos dos Clientes
            </CTAButton>
          </section>

          {/* Social Proof */}
          <section id="depoimentos" className="mb-20 scroll-mt-32">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4 font-display">
              Veja o que nossos clientes estão dizendo sobre
              <br />
              <span className="text-primary glow-text-blue">nossas vídeo partituras premium!</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Centenas de saxofonistas já transformaram suas apresentações
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 glow-blue">
                <img
                  src="https://videopartituras.com/wp-content/uploads/2025/01/IMG_5024-768x1017.jpg"
                  alt="Depoimento de cliente"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 glow-blue">
                <img
                  src="https://videopartituras.com/wp-content/uploads/2025/01/IMG_5026-768x977.jpg"
                  alt="Depoimento de cliente"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4 font-display">
              Produções próprias com{" "}
              <span className="text-primary glow-text-blue">qualidade premium</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Você não encontra este material no YouTube!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <FeatureCard
                icon={Music}
                title="Mais de 200 temas"
                description="Um acervo completo com mais de 200 músicas de diversos estilos para você tocar."
              />
              <FeatureCard
                icon={TrendingUp}
                title="Plataforma Exclusiva"
                description="Material organizado em pastas separadas com nome de cada música. Economize seu tempo!"
              />
              <FeatureCard
                icon={Download}
                title="Download Ilimitado"
                description="Vídeos no formato mp4 de alta qualidade no Google Drive. Baixe tudo e use sem internet!"
              />
              <FeatureCard
                icon={Clock}
                title="Acesso Imediato"
                description="Receba o acesso instantaneamente após a confirmação do pagamento."
              />
              <FeatureCard
                icon={Shield}
                title="7 Dias de Garantia"
                description="Garantia incondicional. Se não gostar, devolvemos seu dinheiro em até 7 dias."
              />
              <FeatureCard
                icon={Star}
                title="Qualidade Premium"
                description="Produções profissionais com playbacks de alta qualidade e partituras impecáveis."
              />
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12 glow-blue">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 font-display">
              Imagine você tocando sem precisar usar partituras impressas e playbacks mp3
            </h2>
            <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Todo material na palma da sua mão, é dar play e sair tocando, este é melhor formato que existe,
              é o que há de melhor em praticidade e facilidade!
            </p>
            
            <CTAButton href="#preco" size="lg">
              Quero Ter Acesso Agora!
            </CTAButton>
          </section>

          {/* Video Examples Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 font-display">
              Olha só alguns <span className="text-primary glow-text-blue">exemplos</span> que você vai receber!
            </h2>

            <div className="space-y-16">
              <VideoSection
                videoId="ho6kZjBszIU"
                title="Menina Veneno - Ritchie"
                description="Que tal começar com o clássico Menina Veneno? O solo de sax icônico dessa música vai fazer você reviver um dos maiores hits da música brasileira. Temos também, Uma Brasileira, dos Paralamas do Sucesso, traz aquela vibe contagiante que é impossível não amar. E esses são só alguns dos vários temas nacionais que você encontrará: pop, rock, MPB, bossa e muito mais!"
              />

              <VideoSection
                videoId="_eBWSJa0Mog"
                title="Vivir Sin Aire - Maná"
                description="Internacionais? Claro que sim! Se você é fã de hits latinos, vai adorar Vivir Sin Aire, um sucesso absoluto da banda Maná – perfeito para tocar e emocionar."
              />

              <VideoSection
                videoId="uYG7VA-kxMI"
                title="Your Love - The Outfield"
                description="E para os apaixonados por rock, confira o clássico Your Love! Preste atenção na qualidade impecável dos playbacks e das partituras que compõem nossas vídeo partituras, tudo em qualidade premium, para elevar sua performance!"
              />
            </div>

            <div className="text-center mt-16">
              <p className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-display">
                E isso é só o começo! Com mais de 200 temas em diversos estilos, nossas{" "}
                <span className="text-primary glow-text-blue">Vídeo Partituras Premium</span> oferecem tudo o que você
                precisa para suas apresentações, sem perder tempo e com a qualidade que você merece.
              </p>
            </div>
          </section>

          {/* Guarantee Section */}
          <section className="mb-20 bg-card/50 backdrop-blur-sm border border-accent/30 rounded-3xl p-8 md:p-12 glow-green">
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/20 p-6 rounded-full mb-6">
                <Shield className="w-16 h-16 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                Compra 100% Segura e 7 Dias de Garantia!
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                Cuidado com golpes na internet, aqui nosso trabalho é sério! Somos uma equipe de músicos trabalhando
                para que você tenha as melhores vídeo partituras para usar em suas apresentações! É por isso que temos
                uma garantia de 7 dias. Se nosso material não atender as suas expectativas, você pode solicitar o
                reembolso. Nosso compromisso é que você fique satisfeito com o que está sendo entregue!
              </p>
            </div>
          </section>

          {/* Pricing Section */}
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
                <p className="text-muted-foreground text-lg mb-2 line-through">de R$ 169</p>
                <div className="relative inline-block">
                  <p className="text-7xl md:text-8xl font-black text-accent glow-text-green mb-4 font-display animate-pulse">
                    R$ 67
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
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Mais de 200 vídeo partituras premium</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Download ilimitado em alta qualidade</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Acesso vitalício ao material</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Garantia de 7 dias</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Suporte via WhatsApp</p>
                </div>
              </div>

              <CTAButton href="https://pay.cakto.com.br/pe7or9r" size="xl">
                Quero Aproveitar Esta Oferta!
              </CTAButton>
              <p className="text-sm text-center text-muted-foreground mt-4">
                ✅ ACESSO IMEDIATO APÓS PAGAMENTO CONFIRMADO!
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 font-display">
              Dúvidas <span className="text-primary glow-text-blue">Frequentes</span>
            </h2>

            <div className="max-w-3xl mx-auto bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                <FAQItem
                  value="item-1"
                  question="1) Como vou receber as vídeo partituras?"
                  answer="Você vai receber o acesso à plataforma no e-mail inserido no ato da compra."
                />
                <FAQItem
                  value="item-2"
                  question="2) Posso baixar as vídeo partituras?"
                  answer="Sim. Você pode baixar todas as vídeo partituras no seu celular, computador ou tablet. Podendo usar sem acesso à internet."
                />
                <FAQItem
                  value="item-3"
                  question="3) Após a compra, em quanto tempo recebo o acesso ao material?"
                  answer="Após confirmado o pagamento o acesso é imediato."
                />
                <FAQItem
                  value="item-4"
                  question="4) Posso inserir meus dados sem nenhum problema?"
                  answer="Sim, a plataforma de pagamento é 100% SEGURA e criptografada!"
                />
                <FAQItem
                  value="item-5"
                  question="5) Em qual local ficam localizadas as vídeo partituras?"
                  answer="No Google Drive, com pastas organizadas pelo nome de cada música, onde você poderá baixá-las."
                />
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
