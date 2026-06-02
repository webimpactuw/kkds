"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

interface ClassLevelVideoProps {
  src: string;
  poster: string;
  title: string;
  mimeType?: string;
  className?: string;
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/**
 * Branded class-level video player — no native browser chrome.
 * Poster + play overlay when idle; minimal custom controls while playing.
 */
export function ClassLevelVideo({
  src,
  poster,
  title,
  mimeType = "video/mp4",
  className,
}: ClassLevelVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const scheduleHideControls = useCallback(() => {
    clearHideTimer();
    if (!isPlaying) return;
    hideTimerRef.current = setTimeout(() => setShowControls(false), 2500);
  }, [clearHideTimer, isPlaying]);

  useEffect(() => () => clearHideTimer(), [clearHideTimer]);

  const togglePlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      setHasStarted(true);
      await video.play();
      setIsPlaying(true);
      scheduleHideControls();
    } else {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
      clearHideTimer();
    }
  }, [clearHideTimer, scheduleHideControls]);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  const handleSeek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const video = videoRef.current;
      if (!video || !duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      video.currentTime = ratio * duration;
      setCurrentTime(video.currentTime);
    },
    [duration],
  );

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={cn("group relative size-full overflow-hidden bg-cream", className)}
      onMouseEnter={() => {
        setShowControls(true);
        clearHideTimer();
      }}
      onMouseMove={() => {
        if (isPlaying) scheduleHideControls();
      }}
      onMouseLeave={() => {
        if (isPlaying) scheduleHideControls();
      }}
    >
      <video
        ref={videoRef}
        className="size-full object-cover"
        playsInline
        preload="metadata"
        poster={hasStarted ? undefined : poster}
        aria-label={title}
        onClick={togglePlay}
        onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime ?? 0)}
        onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setShowControls(true);
          clearHideTimer();
        }}
      >
        <source src={src} type={mimeType} />
      </video>

      {/* Idle poster overlay (before first play) */}
      <AnimatePresence>
        {!hasStarted && (
          <motion.button
            type="button"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={togglePlay}
            className="absolute inset-0 flex cursor-pointer items-center justify-center border-0 p-0"
            aria-label={`Play ${title} video`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster}
              alt=""
              className="absolute inset-0 size-full object-cover"
              aria-hidden
            />
            <span className="absolute inset-0 bg-maroon/25 transition-colors group-hover:bg-maroon/35" />
            <span className="relative flex size-[72px] items-center justify-center rounded-full bg-maroon/90 text-white shadow-[0_8px_32px_rgba(131,0,51,0.45)] ring-4 ring-gold/40 transition-transform group-hover:scale-105 md:size-[84px]">
              <PlayIcon />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Custom controls while playing */}
      <AnimatePresence>
        {hasStarted && showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-4 pb-3 pt-10"
          >
            <div className="pointer-events-auto flex items-center gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  void togglePlay();
                }}
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon small />}
              </button>

              <div
                role="slider"
                aria-label="Seek"
                aria-valuemin={0}
                aria-valuemax={duration}
                aria-valuenow={currentTime}
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSeek(e);
                }}
                onKeyDown={(e) => {
                  const video = videoRef.current;
                  if (!video) return;
                  if (e.key === "ArrowRight") video.currentTime = Math.min(duration, currentTime + 5);
                  if (e.key === "ArrowLeft") video.currentTime = Math.max(0, currentTime - 5);
                }}
                className="relative h-1.5 flex-1 cursor-pointer rounded-full bg-white/25"
              >
                <span
                  className="absolute inset-y-0 left-0 rounded-full bg-gold"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <span className="font-rambla shrink-0 text-[12px] tabular-nums text-white/90">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <MutedIcon /> : <VolumeIcon />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center play hint when paused mid-playback */}
      {hasStarted && !isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center border-0 bg-black/20 p-0"
          aria-label={`Play ${title} video`}
        >
          <span className="flex size-[64px] items-center justify-center rounded-full bg-maroon/90 text-white shadow-lg ring-2 ring-gold/50">
            <PlayIcon />
          </span>
        </button>
      )}
    </div>
  );
}

function PlayIcon({ small }: { small?: boolean }) {
  const size = small ? 14 : 28;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03z" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 10v4h4l5 5V5L7 10H3zm11.59 2l2.7 2.7-1.41 1.41L13.17 13.4l-2.7 2.7-1.41-1.41 2.7-2.7-2.7-2.7 1.41-1.41 2.7 2.7 2.71-2.71 1.41 1.41-2.71 2.71z" />
    </svg>
  );
}
