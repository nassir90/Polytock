const BASE = '/games/polytock';

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
    return env.ASSETS.fetch(new Request(url.toString(), request));
  },
};
