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
                🟢 97 musicians are being redirected right now!
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight font-display">
              The <span className="text-primary glow-text-blue">largest collection</span> of{" "}
              <span className="text-primary glow-text-blue">VIDEO SHEET MUSIC</span> for saxophone!
            </h1>

            <p className="text-lg md:text-xl text-accent mb-4 max-w-3xl mx-auto">
              <span className="font-bold">LAST DAY OF THE PROMOTION! BUYING TODAY, YOU'LL RECEIVE AN EXTRA 200 VIDEO SHEET MUSIC AS A BONUS...</span>{" "}
              <span className="font-bold">premium quality!</span>
            </p>
          </section>

          {/* Main Video Section */}
          <section className="mb-16 flex justify-center">
            <div className="w-full max-w-4xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                See how it works!
              </h3>
              {/* Player Panda Video */}
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-primary/30">
                <iframe
                  src="https://player-vz-03224ce4-c55.tv.pandavideo.com.br/embed/?v=82ec4241-94ee-4555-85e3-221f43346f2b"
                  className="w-full h-full"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-2 font-display">
              <span className="text-primary glow-text-blue">Premium quality</span> that you{" "}
              <span className="font-bold">won't find on YouTube</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
              <FeatureCard
                icon={Music}
                title="Over 200 songs"
                description="Complete library with music from various styles."
              />
              <FeatureCard
                icon={TrendingUp}
                title="Exclusive Platform"
                description="Material organized in folders. Save time!"
              />
              <FeatureCard
                icon={Download}
                title="Unlimited Download"
                description="High-quality mp4 videos. Use without internet!"
              />
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12 glow-blue">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 font-display">
              No more <span className="text-primary glow-text-blue">printed sheet music</span> and separate backing tracks!
            </h2>

            <p className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              <span className="font-bold text-foreground">All the material in the palm of your hand</span> - just press play and start playing!
            </p>
          </section>

          {/* Video Examples Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 font-display">
              See some <span className="text-primary glow-text-blue">examples</span>
            </h2>

            <div className="space-y-16">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                  Menina Veneno - Ritchie
                </h3>
                <VideoSection
                  videoId="ho6kZjBszIU"
                  description="Classic sax solo! We also have pop, rock, MPB, bossa and much more!"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                  Vivir Sin Aire - Maná
                </h3>
                <VideoSection
                  videoId="_eBWSJa0Mog"
                  description="Latin hits! Hit song by the band Maná, perfect for emotional performances."
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                  Your Love - The Outfield
                </h3>
                <VideoSection
                  videoId="uYG7VA-kxMI"
                  description="Classic rock! Notice the premium quality of the backing tracks and sheet music."
                />
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <section id="testimonials" className="mb-20 scroll-mt-32">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4 font-display">
              What our <span className="text-primary glow-text-blue">customers say</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              <span className="font-bold text-foreground">Hundreds of saxophonists</span> have already transformed their performances
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 glow-blue">
                <img
                  src="https://videopartituras.com/wp-content/uploads/2025/01/IMG_5024-768x1017.jpg"
                  alt="Customer testimonial"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 glow-blue">
                <img
                  src="https://videopartituras.com/wp-content/uploads/2025/01/IMG_5026-768x977.jpg"
                  alt="Customer testimonial"
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
                <span className="text-accent">100% Secure</span> with a 7-Day Guarantee!
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                <span className="font-bold text-foreground">We are a team of musicians</span> working with seriousness!{" "}
                <span className="font-bold text-foreground">7-day guarantee:</span> not satisfied? We refund your money!
              </p>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="price" className="mb-20 scroll-mt-24 md:scroll-mt-32">
            <div className="text-center mb-8 animate-pulse">
              <div className="inline-block bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-4 mb-4 glow-green shadow-2xl">
                <p className="text-2xl md:text-3xl text-accent-foreground font-black mb-0 tracking-tight">
                  ⚡ ONLY TODAY YOU'LL HAVE ACCESS TO THE DISCOUNT! ⚡
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto bg-gradient-to-br from-accent/20 via-primary/20 to-accent/10 backdrop-blur-sm border-4 border-accent/50 rounded-3xl p-8 md:p-12 glow-green shadow-2xl animate-scale-in">
              <div className="text-center mb-8">
                <p className="text-red-500 text-lg mb-2 line-through">
                  from $197<span className="text-sm">.00</span>
                </p>
                <div className="relative inline-block">
                  <p className="text-7xl md:text-8xl font-black text-accent glow-text-green mb-4 font-display animate-pulse">
                    $67<span className="text-4xl md:text-5xl">.00</span>
                  </p>
                  <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full rotate-12 animate-bounce">
                    60% OFF
                  </div>
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  One-time payment • Lifetime access
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Over 200 premium video sheet music</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Buying today you'll receive an extra 200 video sheet music as bonuses</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Unlimited download in high quality</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Lifetime access to the material</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">7-day guarantee</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Support via WhatsApp</p>
                </div>
              </div>

              <div className="text-center">
                <CTAButton href="https://pay.kirvano.com/768375cd-bfba-4d2d-b59d-c89dc97af553" size="xl">
                  Click Here and Take Advantage of the Offer!
                </CTAButton>
              </div>

              <p className="text-sm text-center text-muted-foreground mt-4">
                ✅ IMMEDIATE ACCESS AFTER PAYMENT CONFIRMATION!
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 font-display">
              Frequently <span className="text-primary glow-text-blue">Asked Questions</span>
            </h2>

            <div className="max-w-3xl mx-auto bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                <FAQItem
                  value="item-1"
                  question="1) How will I receive the video sheet music?"
                  answer="You will receive access to the platform at the email provided during purchase."
                />
                <FAQItem
                  value="item-2"
                  question="2) Can I download the video sheet music?"
                  answer="Yes. You can download all video sheet music to your phone, computer, or tablet. You can use it without internet access."
                />
                <FAQItem
                  value="item-3"
                  question="3) After purchase, how long until I get access to the material?"
                  answer="Access is immediate after payment is confirmed."
                />
                <FAQItem
                  value="item-4"
                  question="4) Is it safe to enter my information?"
                  answer="Yes, the payment platform is 100% SECURE and encrypted!"
                />
                <FAQItem
                  value="item-5"
                  question="5) Where are the video sheet music located?"
                  answer="On Google Drive, with folders organized by each song's name, where you can download them."
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
            © 2025 Premium Video Sheet Music. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;