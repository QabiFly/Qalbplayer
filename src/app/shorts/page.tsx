"use client";

import Link from "next/link";
import { QalbPlayer } from "qalbplayer";

export default function ShortsPage() {
  return (
    <main className="verticalStage">
      <nav className="nav" style={{ position: "fixed", top: 14, left: 14, right: 14, zIndex: 20, margin: 0 }}>
        <Link href="/">Home</Link>
        <Link href="/video">Video</Link>
        <Link href="/reels">Reels</Link>
        <Link href="/live">Live</Link>
      </nav>

      <section className="phoneFrame">
        <QalbPlayer
          url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          mode="shorts"
          autoplay={false}
          poster="https://image.mux.com/x36xhzz/thumbnail.jpg"
        />
        <div className="reelOverlay">
          <strong>@qalbconverfy</strong>
          <span>Shorts mode test. Tap video to mute/unmute. Bottom progress should keep moving.</span>
        </div>
        <div className="reelActions">
          <span>♥</span>
          <span>💬</span>
          <span>↗</span>
        </div>
      </section>
    </main>
  );
}
