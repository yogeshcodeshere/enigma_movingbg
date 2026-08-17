'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Eye, EyeOff } from 'lucide-react';

interface BackgroundVideoProps {
  videoUrl?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoUrl = 'https://res.cloudinary.com/nldi019k/video/upload/v1786978680/add_a_bit_of_cyberpunk_in_the_1.mp4',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoVisible, setVideoVisible] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setVideoLoaded(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    }
  }, [videoUrl]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#050508]">
      {/* Primary Cyberpunk Background Video Layer */}
      {videoVisible && !hasError && (
        <div className={`absolute inset-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-85' : 'opacity-0'}`}>
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.12] saturate-[1.15]"
          />
        </div>
      )}

      {/* Minimalist Glass Contrast Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06060a] via-transparent to-[#06060a]/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06060a]/60 via-transparent to-[#06060a]/60" />

      {/* Floating Glassmorphic Live Feed Control Pill */}
      <div className="fixed bottom-4 right-4 z-40 pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-modal text-xs text-zinc-400 font-mono-code shadow-2xl border border-white/10">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block mr-1" />
        <span className="text-[10px] tracking-wider text-zinc-300 mr-2 hidden sm:inline">LIVE FEED</span>

        <button
          id="btn-toggle-video-play"
          onClick={togglePlay}
          className="p-1.5 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          title={isPlaying ? 'Pause Background Video' : 'Play Background Video'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-zinc-300" />}
        </button>

        <button
          id="btn-toggle-video-mute"
          onClick={toggleMute}
          className="p-1.5 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-zinc-300" />}
        </button>

        <button
          id="btn-toggle-video-visibility"
          onClick={() => setVideoVisible(!videoVisible)}
          className="p-1.5 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          title={videoVisible ? 'Hide Background Video' : 'Show Background Video'}
        >
          {videoVisible ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5 text-zinc-300" />}
        </button>
      </div>
    </div>
  );
};
