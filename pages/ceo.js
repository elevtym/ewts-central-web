import { useEffect, useState } from 'react';

export default function CEO() {
  const [agents, setAgents] = useState([]);
  const [running, setRunning] = useState(null);

  useEffect(() => {
    fetch('/api').then(r=>r.json()).then(setAgents).catch(()=>setAgents([]));
  }, []);

  async function run(id){
    setRunning(id);
    await fetch('/api?run='+encodeURIComponent(id), { method:'POST' });
    setRunning(null);
    alert('Agent queued (demo).');
  }

  return (
    <main style={{padding:20,fontFamily:'sans-serif'}}>
      <h1>CEO Dashboard</h1>
      <p>Agents (demo):</p>
      <div style={{display:'grid', gap:12, gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
        {agents.map(a => (
          <div key={a.id} style={{border:'1px solid #ddd',borderRadius:12,padding:12,background:'#fff'}}>
            <div style={{fontWeight:600}}>{a.name}</div>
            <div style={{fontSize:12,opacity:.7}}>{a.id}</div>
            <p style={{fontSize:14}}>{a.desc}</p>
            <button disabled={running===a.id} onClick={()=>run(a.id)}>
              {running===a.id?'Running…':'Run'}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
