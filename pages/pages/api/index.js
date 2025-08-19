export default function handler(req, res) {
  // GET -> list agents. POST with ?run=id -> simulate running the agent.
  const agents = [
    { id: 'daily-snapshot', name: 'Daily Snapshot', desc: 'Sends a 1-line CEO summary (demo)' },
    { id: 'margin-sentry', name: 'Margin Sentry', desc: 'Checks margins vs targets (demo)' },
    { id: 'grant-ingestor', name: 'Grant Ingestor', desc: 'Pulls grants feed (demo)' }
  ];

  if (req.method === 'GET') {
    return res.status(200).json(agents);
  }

  if (req.method === 'POST') {
    const id = req.query.run || 'unknown';
    return res.status(200).json({ ok: true, summary: `Agent ${id} queued (demo)` });
  }

  res.status(405).json({ ok:false, error: 'Method not allowed' });
}
