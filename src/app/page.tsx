const checklist = [
  "Upload a few screenshots of the original site, or share the source files/repo.",
  "If the preview link works on your machine, send exported HTML/CSS/assets or a screen recording.",
  "Once I can see the real UI, I can replace this scaffold with a full Next.js clone for Vercel."
];

export default function Home() {
  return (
    <main className="shell">
      <section className="panel">
        <span className="eyebrow">Project initialized</span>
        <h1>Artistry Reel Next.js workspace is ready.</h1>
        <p className="lead">
          I could not access the actual site content from this environment because the
          provided domain is intercepted here and returns a security block page instead
          of the original website.
        </p>

        <div className="notice">
          <strong>What I was able to confirm</strong>
          <p>
            The requested project folder has been created at
            {" "}
            <code>F:\REGULAR STUFF\Yash\artistry-reel-next</code>
            {" "}
            with a deployable Next.js App Router structure for Vercel.
          </p>
        </div>

        <div className="todo">
          <h2>What I need to finish the full clone</h2>
          <ul>
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
