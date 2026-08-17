import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Eye, EyeOff } from 'lucide-react';

interface BackgroundVideoProps {
  videoUrl?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoUrl = 'https://res.cloudinary.com/nldi019k/video/upload/v1786973020/add_a_bit_of_cyberpunk_in_the.mp4',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoVisible, setVideoVisible] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#050508]">
      {/* Fallback ambient cyberpunk grid & gradients */}
      <div className="absolute inset-0 bg-radial from-purple-950/20 via-[#07070c] to-[#040407]" />
      <div className="absolute inset-0 cyber-grid opacity-25" />

      {/* Video Element */}
      {videoVisible && !hasError && (
        <div className={`absolute inset-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-65' : 'opacity-0'}`}>
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.18] saturate-[1.25]"
          />
        </div>
      )}

      {/* Cyber overlay gradients to blend perfectly with text */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-[#050508]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/40 to-[#050508]" />

      {/* CRT Scanline overlay */}
      <div className="absolute inset-0 scanlines-overlay opacity-30" />

      {/* Ambient corner cyberpunk glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Video Controls Pill Floating at bottom right */}
      <div className="fixed bottom-4 right-4 z-40 pointer-events-auto flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs text-zinc-400 font-mono-code shadow-2xl">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block mr-1" />
        <span className="text-[10px] tracking-wider text-zinc-300 mr-2 hidden sm:inline">LIVE FEED</span>

        <button
          id="btn-toggle-video-play"
          onClick={togglePlay}
          className="p-1.5 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-purple-400" />}
        </button>

        <button
          id="btn-toggle-video-mute"
          onClick={toggleMute}
          className="p-1.5 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
        </button>

        <button
          id="btn-toggle-video-visibility"
          onClick={() => setVideoVisible(!videoVisible)}
          className="p-1.5 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          title={videoVisible ? 'Hide Background Video' : 'Show Background Video'}
        >
          {videoVisible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5 text-amber-400" />}
        </button>
      </div>
    </div>
  );
};
