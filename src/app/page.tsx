import Link from "next/link";

export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <Link href="/video">Video</Link>
        <Link href="/shorts">Shorts</Link>
        <Link href="/reels">Reels</Link>
        <Link href="/live">Live</Link>
      </nav>

      <section className="hero">
        <p className="eyebrow">qalbplayer@1.0.2 full test</p>
        <h1>YouTube + Instagram combo test lab</h1>
        <p className="description">
          Use these pages to test long video, Shorts/Reels vertical mode, live mode,
          HLS playback, progress bar seeking, SVG controls, fullscreen, PiP, volume,
          keyboard shortcuts, and mobile layout.
        </p>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Long Video</h2>
          <p>16:9 YouTube-style player with blue-green seek bar and full custom controls.</p>
          <Link className="cardLink" href="/video">Open video test</Link>
        </article>

        <article className="card">
          <h2>Shorts</h2>
          <p>Single vertical 9:16 player for YouTube Shorts-style playback.</p>
          <Link className="cardLink" href="/shorts">Open shorts test</Link>
        </article>

        <article className="card">
          <h2>Reels Feed</h2>
          <p>Instagram-like vertical scroll feed with multiple QalbPlayer instances.</p>
          <Link className="cardLink" href="/reels">Open reels test</Link>
        </article>

        <article className="card">
          <h2>Live</h2>
          <p>Live streaming mode with live UI behavior and disabled seeking.</p>
          <Link className="cardLink" href="/live">Open live test</Link>
        </article>
      </section>
    </main>
  );
}
