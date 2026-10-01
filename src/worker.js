const BASE = '/games/polytock';

async function withRanges(request, response) {
  const range = request.headers.get('Range');
  if (!range || response.status !== 200) {
    const headers = new Headers(response.headers);
    headers.set('Accept-Ranges', 'bytes');
    return new Response(response.body, { status: response.status, headers });
  }
  const body = await response.arrayBuffer();
  const size = body.byteLength;
  const unsatisfiable = () => new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
  const match = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
  if (!match || (match[1] === '' && match[2] === '')) return unsatisfiable();
  let start, end;
  if (match[1] === '') {
    start = Math.max(size - Number(match[2]), 0);
    end = size - 1;
  } else {
    start = Number(match[1]);
    end = match[2] === '' ? size - 1 : Math.min(Number(match[2]), size - 1);
  }
  if (start > end || start >= size) return unsatisfiable();
  const headers = new Headers(response.headers);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  headers.set('Content-Length', String(end - start + 1));
  return new Response(body.slice(start, end + 1), { status: 206, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === BASE) {
      url.pathname = BASE + '/';
      return Response.redirect(url.toString(), 301);
    }
    if (!url.pathname.startsWith(BASE + '/')) {
      return new Response('Not found', { status: 404 });
    }
    url.pathname = url.pathname.slice(BASE.length) || '/';
    const response = await env.ASSETS.fetch(new Request(url.toString(), request));
    return url.pathname.startsWith('/videos/') ? withRanges(request, response) : response;
  },
};
