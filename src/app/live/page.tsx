"use client";

import Link from "next/link";
import { QalbPlayer } from "qalbplayer";

export default function LivePage() {
  return (
    <main className="page">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/video">Video</Link>
        <Link href="/shorts">Shorts</Link>
        <Link href="/reels">Reels</Link>
      </nav>

      <section className="hero">
        <p className="eyebrow">live mode</p>
        <h1>Live stream test</h1>
        <p className="description">
          Timeline seeking should be disabled in live mode. Test live badge, HLS loading,
          mute, fullscreen, and offline/reconnect behavior if stream fails.
        </p>
      </section>

      <section className="playerShell">
        <QalbPlayer
          url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
          mode="live"
          autoplay={false}
          poster="https://image.mux.com/x36xhzz/thumbnail.jpg"
        />
      </section>

      <section className="liveInfo">
        If this HLS test stream behaves like VOD, the player should still lock live-style scrubbing
        because the mode is explicitly set to live.
      </section>
    </main>
  );
}
