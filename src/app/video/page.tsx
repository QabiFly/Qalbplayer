"use client";

import Link from "next/link";
import { QalbPlayer } from "qalbplayer";

export default function VideoPage() {
  return (
    <main className="page">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/shorts">Shorts</Link>
        <Link href="/reels">Reels</Link>
        <Link href="/live">Live</Link>
      </nav>

      <section className="hero">
        <p className="eyebrow">video mode</p>
        <h1>Long video test</h1>
        <p className="description">
          Test seeking by clicking and dragging the blue-green timeline, then try fullscreen, PiP,
          settings, volume, keyboard shortcuts, and pause/play.
        </p>
      </section>

      <section className="playerShell">
        <QalbPlayer
          url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          mode="video"
          autoplay={false}
          poster="https://image.mux.com/x36xhzz/thumbnail.jpg"
        />
      </section>
    </main>
  );
}
