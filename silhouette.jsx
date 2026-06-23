// silhouette.jsx — figure rendering + proportion visualisation for the
// body-shape blog quiz.
//
// BodyPhoto: the uploaded transparent silhouette already carries the shape
// glyph (hourglass / rectangle / apple / pear / triangle), so we just place
// it cleanly on the card tone — no filters, no dashed overlay needed.
//
// ProportionBars: three stacked bars (shoulders / waist / hips) that read the
// relative width at a glance. No numeric labels — purely visual.

function BodyPhoto({ shape, height = 280 }) {
  return (
    <img
      src={shape.photo}
      alt={`${shape.name} body shape`}
      draggable={false}
      style={{
        height,
        width: 'auto',
        maxWidth: '100%',
        objectFit: 'contain',
        display: 'block',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    />
  );
}

function ProportionBars({ shape, color = '#1a1a1a' }) {
  const rows = [
    ['Shoulders', shape.proportions.shoulders],
    ['Waist', shape.proportions.waist],
    ['Hips', shape.proportions.hips],
  ];
  const max = Math.max(...rows.map(r => r[1]));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
      {rows.map(([label, val]) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 86, flex: '0 0 auto',
            fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#8a7e70',
          }}>{label}</div>
          <div style={{ flex: 1, height: 8, background: 'rgba(0,0,0,0.06)', borderRadius: 999, overflow: 'hidden' }}>
            <div style={{
              width: `${(val / max) * 100}%`, height: '100%',
              background: color, borderRadius: 999,
              transition: 'width .7s cubic-bezier(.2,.7,.3,1)',
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { BodyPhoto, ProportionBars });
