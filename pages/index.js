export default function Login() {
  function go() { window.location.href = '/ceo'; }
  return (
    <main style={{padding:20,fontFamily:'sans-serif'}}>
      <h1>EWTS Central Login (Demo)</h1>
      <p>Tap continue to enter the CEO dashboard.</p>
      <button onClick={go} style={{padding:10,borderRadius:8,border:'1px solid #ddd'}}>Continue</button>
    </main>
  );
}
