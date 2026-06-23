// app.jsx — Eysè blog quiz post. A full editorial article page with the
// interactive "Find Your Shape" quiz embedded inline.

function SiteHeader() {
  return (
    <header style={{
      borderBottom: '1px solid rgba(0,0,0,0.07)',
      background: 'rgba(250,248,244,0.92)',
      backdropFilter: 'blur(8px)',
      position: 'sticky', top: 0, zIndex: 20
    }}>
      <div style={{
        fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
        color: '#9a8e80', textAlign: 'center', padding: '7px 0',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        One Brand, Every Size — Matching Sets & Co-ords
      </div>
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 32px', maxWidth: 1200, margin: '0 auto'
      }}>
        <div style={{ display: 'flex', gap: 26, fontSize: 12, color: '#1a1a1a' }} className="nav-links">
          <span>New In</span><span>Shop All</span><span>Sets</span><span>The Edit</span>
        </div>
        <div style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '0.34em', fontSize: 22, color: '#1a1a1a' }}>EYSÈ</div>
        <div style={{ display: 'flex', gap: 18, fontSize: 13, color: '#1a1a1a' }}>
          <span>Search</span><span>Account</span><span>Bag (0)</span>
        </div>
      </nav>
    </header>);

}

function ArticleHeader() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '64px 24px 0', textAlign: 'center' }}>
      <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', marginBottom: 22, color: "rgb(0, 0, 0)", fontFamily: "Poppins" }}>
        The Eysè Edit · Style Guide
      </div>
      <h1 style={{
        fontWeight: 400,
        fontSize: 'clamp(40px, 6vw, 68px)', lineHeight: 1.0, margin: 0,
        color: '#1a1a1a', letterSpacing: '-0.015em', fontFamily: "serif"
      }}>
        What's your body shape?<br />
        <em style={{ fontStyle: 'italic', fontFamily: "serif", fontSize: "67px" }}>Find your silhouette.</em>
      </h1>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
        marginTop: 24, fontSize: 12, letterSpacing: '0.04em', color: '#9a8e80'
      }}>
        <span style={{ fontFamily: "Poppins" }}>By Eysè</span>
        <span style={{ width: 4, height: 4, borderRadius: 999, background: '#cfc4b4' }} />
        <span style={{ fontFamily: "Poppins" }}>3 min read</span>
        <span style={{ width: 4, height: 4, borderRadius: 999, background: '#cfc4b4' }} />
        <span style={{ fontFamily: "Poppins" }}>A/W 2026</span>
      </div>
    </div>);

}

function ArticleBody() {
  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: '40px 24px 0' }}>
      <p style={{ color: '#3a342c', margin: 0, textWrap: 'pretty', fontFamily: "Poppins", fontSize: "14px", lineHeight: "1.2" }}>
        Dressing well begins with understanding your proportions. Not a size. Not a number. Simply
        the relationship between your shoulders, waist, and hips.
      </p>
      <p style={{ color: '#5a5048', marginTop: 22, marginBottom: 0, textWrap: 'pretty', fontFamily: "Poppins", fontSize: "14px", lineHeight: "1.2" }}>
        Once you recognize your shape, getting dressed becomes easier. Silhouettes feel more
        intentional, and pieces work with your body rather than against it.
      </p>
      <p style={{ color: '#5a5048', marginTop: 22, marginBottom: 0, textWrap: 'pretty', fontFamily: "Poppins", fontSize: "14px", lineHeight: "1.2" }}>
        There are five broad body shapes, and most people fall somewhere between two. That's
        completely normal. Select the silhouette that feels closest to yours below, and we'll guide
        you through its defining characteristics along with styling recommendations designed to
        complement your shape.
      </p>
      <p style={{ color: '#5a5048', marginTop: 22, marginBottom: 0, textWrap: 'pretty', fontFamily: "Poppins", fontSize: "14px", lineHeight: "1.2" }}>
        No measurements required.
      </p>
    </div>);

}

function QuizSection() {
  return (
    <section style={{ maxWidth: 1080, margin: '0 auto', padding: '52px 24px 0' }}>
      <ShapeQuiz />
    </section>);

}

function SiteFooter() {
  return (
    <footer style={{
      marginTop: 80, borderTop: '1px solid rgba(0,0,0,0.08)',
      padding: '40px 24px', textAlign: 'center'
    }}>
      <div style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: '0.34em', fontSize: 18, color: '#1a1a1a' }}>EYSÈ</div>
      <p style={{ fontSize: 12, color: '#9a8e80', marginTop: 12, marginBottom: 0 }}>
        One Brand, Every Size · © 2026 Eysè Studio
      </p>
    </footer>);

}

function BlogPost() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <article>
        <ArticleHeader />
        <ArticleBody />
        <QuizSection />
      </article>
    </div>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<BlogPost />);