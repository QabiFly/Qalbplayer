"use client";

import Link from "next/link";
import { QalbPlayer } from "qalbplayer";

const reels = [
  {
    title: "Reel 1",
    text: "Vertical feed test. Scroll down for next reel.",
    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
  {
    title: "Reel 2",
    text: "Second player instance. Check autoplay/manual behavior.",
    url: "https://test-streams.mux.dev/test_001/stream.m3u8",
  },
  {
    title: "Reel 3",
    text: "Third reel. This tests repeated player mounting.",
    url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
];

export default function ReelsPage() {
  return (
    <main className="verticalStage">
      <nav className="nav" style={{ position: "fixed", top: 14, left: 14, right: 14, zIndex: 20, margin: 0 }}>
        <Link href="/">Home</Link>
        <Link href="/video">Video</Link>
        <Link href="/shorts">Shorts</Link>
        <Link href="/live">Live</Link>
      </nav>

      <section className="reelsFeed">
        {reels.map((reel) => (
          <article className="reelItem" key={reel.title}>
            <QalbPlayer
              url={reel.url}
              mode="shorts"
              autoplay={false}
            />
            <div className="reelOverlay">
              <strong>@qalbconverfy • {reel.title}</strong>
              <span>{reel.text}</span>
            </div>
            <div className="reelActions">
              <span>♥</span>
              <span>💬</span>
              <span>↗</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
