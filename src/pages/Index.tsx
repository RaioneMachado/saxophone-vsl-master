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

      {/* Main Content */}
      <div className="relative z-10 pt-16 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
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
              <span className="font-bold">ÚLTIMO DIA DE PROMOÇÃO! COMPRANDO HOJE, VOCÊ RECEBERÁ MAIS 200 PARTITURAS EM VÍDEOS DE BRINDE...</span> {" "}
              <span className="font-bold">qualidade premium!</span>
            </p>
          </section>

          {/* Main Video Section */}
          <section className="mb-16 flex justify-center">
            <div className="w-full max-w-4xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                Veja como funciona!
              </h3>
              <VideoSection
                videoId="qMOaQcg3RRU"
              />
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-2 font-display">
              <span className="text-primary glow-text-blue">Qualidade premium</span> que você{" "}
              <span className="font-bold">não encontra no YouTube</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
              <FeatureCard
                icon={Music}
                title="Mais de 200 temas"
                description="Acervo completo com músicas de diversos estilos."
              />
              <FeatureCard
                icon={TrendingUp}
                title="Plataforma Exclusiva"
                description="Material organizado em pastas. Economize tempo!"
              />
              <FeatureCard
                icon={Download}
                title="Download Ilimitado"
                description="Vídeos em mp4 de alta qualidade. Use sem internet!"
              />
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12 glow-blue">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 font-display">
              Chega de <span className="text-primary glow-text-blue">partituras impressas</span> e playbacks separados!
            </h2>

            <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              <span className="font-bold text-foreground">Todo material na palma da mão</span> - é só dar play e sair tocando!
            </p>
          </section>

          {/* Video Examples Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 font-display">
              Veja alguns <span className="text-primary glow-text-blue">exemplos</span>
            </h2>

            <div className="space-y-16">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                  Menina Veneno - Ritchie
                </h3>
                <VideoSection
                  videoId="ho6kZjBszIU"
                  description="Clássico solo de sax! Temos também pop, rock, MPB, bossa e muito mais!"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                  Vivir Sin Aire - Maná
                </h3>
                <VideoSection
                  videoId="_eBWSJa0Mog"
                  description="Hits latinos! Sucesso da banda Maná, perfeito para emocionar."
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                  Your Love - The Outfield
                </h3>
                <VideoSection
                  videoId="uYG7VA-kxMI"
                  description="Rock clássico! Note a qualidade premium dos playbacks e partituras."
                />
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <section id="depoimentos" className="mb-20 scroll-mt-32">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4 font-display">
              O que nossos <span className="text-primary glow-text-blue">clientes dizem</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              <span className="font-bold text-foreground">Centenas de saxofonistas</span> já transformaram suas apresentações
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

          {/* Guarantee Section */}
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
                <p className="text-red-500 text-lg mb-2 line-through">
                  de R$ 197<span className="text-sm">,00</span>
                </p>
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
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Mais de 200 vídeo partituras premium</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Comprando hoje você receberá mais 200 de brindes em vídeos partituras</p>
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

              <div className="text-center">
                <CTAButton href="https://pay.kirvano.com/bfaf5f55-ad26-4215-a683-53327f20c71b" size="xl">
                  Clique Aqui e Aproveite a Oferta!
                </CTAButton>
              </div>

              <p className="text-sm text-center text-muted-foreground mt-4">
                ✅ ACESSO IMEDIATO APÓS PAGAMENTO CONFIRMADO!
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 font-display">
              Perguntas <span className="text-primary glow-text-blue">Frequentes</span>
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
