// Warm a route before the reader navigates to it. Fetching the route's HTML
// pre-compiles it in `next dev` (where Link prefetch is a no-op) and caches it
// in a production static export; parsing the response for <img> tags also warms
// the image cache, so the page-curl transition reveals an already-loaded page.
// Any network or parse failure is non-fatal — prefetch is best-effort.
export function prefetchRoute(href: string) {
  fetch(href, { credentials: "same-origin" })
    .then((response) =>
      response.ok ? response.text() : Promise.reject(new Error(`prefetch ${href} failed`)),
    )
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      doc.querySelectorAll("img[src]").forEach((img) => {
        const src = img.getAttribute("src");
        if (src?.startsWith("/")) {
          new Image().src = src;
        }
      });
    })
    .catch(() => {});
}
