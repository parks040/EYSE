// blog-quiz.jsx — the interactive quiz block embedded in the blog post.
// 5 silhouette cards → pick one → an inline result panel expands below with
// the shape's proportions, characteristics, styling note and CTAs.
// State persists to localStorage so a refresh keeps the reader's result.

const LS_KEY = 'eyse-shape-pick';

function ShapeCard({ shape, idx, active, onHover, onLeave, onPick }) {
  return (
    <button
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onPick}
      style={{
        background: '#fff',
        border: '1px solid #1a1a1a',
        borderRadius: 6,
        padding: 0,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform .3s cubic-bezier(.2,.7,.3,1), box-shadow .3s',
        transform: active ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: active ? '0 18px 40px rgba(0,0,0,0.12)' : '0 1px 0 rgba(0,0,0,0.03)'
      }}>
      <div style={{
        position: 'absolute', top: 12, left: 12, right: 12,
        display: 'flex', justifyContent: 'space-between',
        fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'rgba(40,36,28,0.4)'
      }}>
        <span>0{idx + 1}</span>
        <span>Shape</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', height: 230, padding: '30px 8px 0' }}>
        <BodyPhoto shape={shape} height={196} />
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        padding: '0 16px 16px'
      }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 19, color: '#1a1a1a' }}>
          {shape.name}
        </span>
        <span style={{
          fontSize: 18, color: active ? '#1a1a1a' : 'rgba(40,36,28,0.28)',
          transition: 'color .2s, transform .2s',
          transform: active ? 'translateX(2px)' : 'none'
        }}>→</span>
      </div>
    </button>);

}

function InlineResult({ shape, onRetake }) {
  const [shared, setShared] = React.useState(false);
  const article = shape.name === 'Apple' || shape.name === 'Hourglass' || shape.name === 'Inv. Triangle' ? 'an' : 'a';

  const handleShare = () => {
    const text = `I'm ${article} ${shape.altName || shape.name}. What's your shape?`;
    if (navigator.share) {
      navigator.share({ title: 'Find your shape at Eysè', text, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(text + ' ' + window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 1800);
    }
  };

  return (
    <div style={{
      marginTop: 28,
      border: '1px solid rgba(0,0,0,0.08)',
      borderRadius: 10,
      overflow: 'hidden',
      background: '#fff',
      animation: 'resultIn .5s cubic-bezier(.2,.7,.3,1)'
    }}>
      <div className="result-cols" style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr' }}>
        {/* Figure panel */}
        <div style={{ ...{
            background: '#fff',
            position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '36px 20px',
            minHeight: 360
          }, background: "rgb(255, 255, 255)" }}>
          <div style={{
            position: 'absolute', top: 18, left: 22, right: 22,
            display: 'flex', justifyContent: 'space-between',
            fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(40,36,28,0.5)'
          }}>
            <span>Your result</span>
            <span>Eysè</span>
          </div>
          <BodyPhoto shape={shape} height={320} />
          <div style={{
            position: 'absolute', bottom: 18, left: 22, right: 22, textAlign: 'center',
            fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
            fontSize: 15, color: 'rgba(40,36,28,0.7)'
          }}>
            "{shape.tagline}"
          </div>
        </div>

        {/* Detail panel */}
        <div style={{ padding: '40px 44px 56px' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 8, color: "rgb(0, 0, 0)" }}>
            You're {article}
          </div>
          <h3 style={{
            fontFamily: "'Instrument Serif', serif", fontWeight: 400,
            fontSize: 46, lineHeight: 1, margin: 0, color: '#1a1a1a', letterSpacing: '-0.01em'
          }}>
            {shape.altName || shape.name}<span style={{ color: '#1a1a1a' }}></span>
          </h3>

          <div style={{ marginTop: 24, marginBottom: 22 }}>
            <ProportionBars shape={shape} color="#1a1a1a" />
          </div>

          <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 16 }}>
            {shape.characteristics.map(([k, v]) =>
            <div key={k} style={{ display: 'flex', gap: 14, padding: '5px 0', fontSize: 13, lineHeight: 1.5 }}>
                <span style={{ width: 78, flex: '0 0 auto', color: '#9a8e80' }}>{k}</span>
                <span style={{ color: '#2a241c' }}>{v}</span>
              </div>
            )}
          </div>

          <p style={{ fontSize: 14, color: '#5a5048', lineHeight: 1.55, marginTop: 18, marginBottom: 0 }}>
            <strong style={{ color: '#1a1a1a', fontWeight: 600 }}>Style it: </strong>{shape.stylingFor}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 26 }}>
            <a href={shape.shopUrl} target="_blank" rel="noopener" style={{
              flex: '1 1 200px',
              background: '#0a0a0a', color: '#fff', border: 'none', textDecoration: 'none',
              borderRadius: 999, padding: '15px 24px', textAlign: 'center',
              fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase',
              cursor: 'pointer', fontWeight: 500
            }}>
              Shop the {shape.name} edit →
            </a>
            <button onClick={handleShare} style={{
              background: 'none', border: '1px solid rgba(0,0,0,0.14)',
              borderRadius: 999, padding: '14px 20px',
              fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#1a1a1a', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" /><line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
              </svg>
              {shared ? 'Copied!' : 'Share'}
            </button>
          </div>

          <button onClick={onRetake} style={{
            marginTop: 18, background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#9a8e80', padding: 0
          }}>↺ Retake the quiz</button>
        </div>
      </div>
    </div>);

}

function ShapeQuiz() {
  const [picked, setPicked] = React.useState(() => {
    try {
      const id = localStorage.getItem(LS_KEY);
      return id ? window.SHAPES.find((s) => s.id === id) || null : null;
    } catch (e) {return null;}
  });
  const [hover, setHover] = React.useState(null);
  const [showGrid, setShowGrid] = React.useState(false);
  const resultRef = React.useRef(null);

  const pick = (shape) => {
    setPicked(shape);
    try {localStorage.setItem(LS_KEY, shape.id);} catch (e) {}
    // Bring the result into view without scrollIntoView.
    requestAnimationFrame(() => {
      if (resultRef.current) {
        const top = resultRef.current.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  };

  const retake = () => {
    setPicked(null);
    setShowGrid(false);
    try {localStorage.removeItem(LS_KEY);} catch (e) {}
  };

  // Once a result exists, the quiz collapses to just the result + retake.
  if (picked) {
    return (
      <div ref={resultRef}>
        <InlineResult shape={picked} onRetake={retake} />
      </div>);

  }

  return (
    <div>
      {/* Primary flow: one question at a time */}
      <QuestionQuiz onResult={pick} />

      {/* Shortcut: skip the questions and choose visually */}
      <div style={{ textAlign: 'center', marginTop: 26, marginBottom: 64 }}>
        <button onClick={() => setShowGrid((v) => !v)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: 13, color: '#9a8e80', padding: 6,
          textDecoration: 'underline', textUnderlineOffset: 3
        }}>
          {showGrid ? 'Hide the shapes' : 'Already know it? Pick your silhouette →'}
        </button>
      </div>

      {showGrid &&
      <div className="shape-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14, marginTop: 18 }}>
          {window.SHAPES.map((shape, idx) =>
        <ShapeCard
          key={shape.id}
          shape={shape}
          idx={idx}
          active={hover === shape.id}
          onHover={() => setHover(shape.id)}
          onLeave={() => setHover(null)}
          onPick={() => pick(shape)} />

        )}
        </div>
      }
    </div>);

}

window.ShapeQuiz = ShapeQuiz;