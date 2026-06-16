"use client";

import { QalbPlayer } from "qalbplayer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#fff", padding: "24px" }}>
      <h1>QalbPlayer Test</h1>
      <QalbPlayer
        url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        mode="video"
        autoplay={false}
      />
    </main>
  );
}
