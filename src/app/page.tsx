"use client";

import { QalbPlayer } from "qalbplayer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#fff", padding: "24px" }}>
      <h1>QalbPlayer Test</h1>
      <QalbPlayer
        url="https://youtube.com/shorts/2SokaJ-4YjU?si=2WnRSOnQsQIsFUKE"
        mode="video"
        autoplay={false}
      />
    </main>
  );
}
