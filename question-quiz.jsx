// question-quiz.jsx — guided, one-question-at-a-time body-shape diagnostic.
// Four questions about shoulders, waist, hips and legs. Each answer awards
// points to one or more shapes; the highest total is the reader's result.
// Tuned so every archetype has a clean winning path (see notes below).

const QUIZ_QUESTIONS = [
{
  key: 'frame',
  q: 'Stand relaxed in a mirror. Where does your frame look widest?',
  options: [
  { label: 'My shoulders or bust. The top half leads.', score: { inverted: 3 } },
  { label: 'Top and bottom look evenly balanced', score: { hourglass: 2, rectangle: 2 } },
  { label: 'My hips and thighs. The bottom half leads.', score: { pear: 3 } },
  { label: 'Through my middle, where my tummy is the fullest', score: { apple: 3 } }]

},
{
  key: 'waist',
  q: 'How does your waist read?',
  options: [
  { label: 'Clearly nipped in, a real curve', score: { hourglass: 3, pear: 1 } },
  { label: 'Softly there, just a gentle taper', score: { rectangle: 3 } },
  { label: "It's the fullest part of me", score: { apple: 3 } },
  { label: 'Defined, and my hips flare out below it', score: { pear: 3 } }]

},
{
  key: 'shoulders',
  q: 'Compare your shoulders to your hips.',
  options: [
  { label: 'Shoulders are clearly broader', score: { inverted: 3 } },
  { label: "They're about the same width", score: { hourglass: 2, rectangle: 2, apple: 1 } },
  { label: 'My hips are clearly wider', score: { pear: 3 } }]

},
{
  key: 'legs',
  q: 'And your hips and legs?',
  options: [
  { label: 'Shapely hips, curvy legs', score: { hourglass: 2, pear: 2 } },
  { label: 'Slim, lean legs. My weight sits up top or in the centre.', score: { apple: 2, inverted: 1 } },
  { label: 'A straight line, hip to thigh', score: { rectangle: 2 } }]

}];


// Tie-break order if two shapes land on the same score.
const TIE_ORDER = ['hourglass', 'pear', 'inverted', 'apple', 'rectangle'];

function scoreToShape(answers) {
  const totals = {};
  for (const a of answers) {
    if (!a) continue;
    for (const [id, pts] of Object.entries(a.score)) {
      totals[id] = (totals[id] || 0) + pts;
    }
  }
  let best = null,bestScore = -1;
  for (const id of TIE_ORDER) {
    const v = totals[id] || 0;
    if (v > bestScore) {bestScore = v;best = id;}
  }
  return window.SHAPES.find((s) => s.id === best);
}

function QuestionQuiz({ onResult }) {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const total = QUIZ_QUESTIONS.length;
  const question = QUIZ_QUESTIONS[step];

  const answer = (opt) => {
    const next = answers.slice(0, step);
    next[step] = opt;
    if (step + 1 >= total) {
      onResult(scoreToShape(next));
    } else {
      setAnswers(next);
      setStep(step + 1);
    }
  };

  const back = () => {if (step > 0) setStep(step - 1);};

  return (
    <div style={{
      border: '1px solid rgba(0,0,0,0.09)',
      borderRadius: 12,
      background: '#fff',
      padding: '36px clamp(24px, 5vw, 52px) 40px',
      maxWidth: 760,
      margin: '0 auto'
    }}>
      {/* Progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
        <span style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', flex: '0 0 auto', fontFamily: "Poppins", color: "rgb(0, 0, 0)" }}>
          Question {step + 1} <span style={{ color: '#cfc4b4' }}>/ {total}</span>
        </span>
        <div style={{ flex: 1, height: 3, background: 'rgba(0,0,0,0.07)', borderRadius: 999, overflow: 'hidden' }}>
          <div style={{
            width: `${step / total * 100}%`, height: '100%',
            background: '#1a1a1a', borderRadius: 999, transition: 'width .4s cubic-bezier(.2,.7,.3,1)'
          }} />
        </div>
      </div>

      {/* Question */}
      <h3 key={step} style={{
        fontWeight: 400,
        fontSize: 'clamp(26px, 3.4vw, 34px)', lineHeight: 1.12, margin: '0 0 26px',
        color: '#1a1a1a', letterSpacing: '-0.01em',
        animation: 'qIn .4s cubic-bezier(.2,.7,.3,1)', fontFamily: "serif"
      }}>
        {question.q}
      </h3>

      {/* Options */}
      <div key={'opts' + step} style={{ display: 'flex', flexDirection: 'column', gap: 10, animation: 'qIn .4s cubic-bezier(.2,.7,.3,1) .04s' }}>
        {question.options.map((opt, i) =>
        <button
          key={i}
          onClick={() => answer(opt)}
          className="quiz-option"
          style={{
            display: 'flex', alignItems: 'center', gap: 16,
            textAlign: 'left',
            padding: '16px 20px',
            borderRadius: 8,

            background: '#fdfcfa',
            cursor: 'pointer',
            fontSize: 15, color: '#2a241c', lineHeight: 1.4,
            transition: 'border-color .15s, background .15s, transform .15s', border: "1px solid rgb(0, 0, 0)"
          }}>
            <span style={{
            flex: '0 0 auto',
            width: 26, height: 26, borderRadius: 999,
            border: '1px solid rgba(0,0,0,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, color: '#8a7e70', fontWeight: 600
          }}>{String.fromCharCode(65 + i)}</span>
            <span style={{ flex: 1, fontFamily: "Poppins" }}>{opt.label}</span>
          </button>
        )}
      </div>

      {/* Footer: back */}
      <div style={{ marginTop: 24, minHeight: 18 }}>
        {step > 0 &&
        <button onClick={back} style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9a8e80'
        }}>← Previous question</button>
        }
      </div>
    </div>);

}

window.QuestionQuiz = QuestionQuiz;