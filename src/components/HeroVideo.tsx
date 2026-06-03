import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface HeroVideoProps {
  videoId: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const HeroVideo = ({ videoId }: HeroVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const init = () => {
      if (!containerRef.current || !window.YT?.Player) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          playsinline: 1,
          loop: 1,
          playlist: videoId,
        },
        events: {
          onReady: (e: any) => {
            e.target.mute();
            e.target.playVideo();
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      init();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = init;
    }

    return () => {
      try {
        playerRef.current?.destroy?.();
      } catch {}
    };
  }, [videoId]);

  const toggleMute = () => {
    const p = playerRef.current;
    if (!p) return;
    if (muted) {
      p.unMute();
      p.setVolume(100);
      p.playVideo();
      setMuted(false);
    } else {
      p.mute();
      setMuted(true);
    }
  };

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-primary/30 bg-black">
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      {/* Click overlay covers entire video to toggle audio and block YT clicks */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Ativar som" : "Desativar som"}
        className="absolute inset-0 w-full h-full flex items-end justify-center bg-transparent group cursor-pointer"
      >
        {muted && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="flex items-center gap-3 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-full shadow-2xl glow-green animate-pulse">
              <VolumeX className="w-6 h-6" />
              <span>Clique para ativar o som</span>
            </div>
          </div>
        )}
        {!muted && (
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Volume2 className="w-5 h-5 text-white" />
          </div>
        )}
      </button>
    </div>
  );
};