export async function GET() {
  const agents = [
    { id: 'daily-snapshot', name: 'Daily Snapshot', desc: 'Sends a 1-line CEO summary (demo)' },
    { id: 'margin-sentry', name: 'Margin Sentry', desc: 'Checks margins vs targets (demo)' },
    { id: 'grant-ingestor', name: 'Grant Ingestor', desc: 'Pulls grants feed (demo)' }
  ];
  return Response.json(agents);
}

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('run') || 'unknown';
  return Response.json({ ok: true, summary: `Agent ${id} queued (demo)` });
}
