export async function GET() {
  const baseUrl = "https://oofdi.vercel.app"; // Your live site URL
  const lastmod = new Date().toISOString(); // Auto-generated last modified timestamp

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}/</loc>
      <lastmod>${lastmod}</lastmod>
    </url>
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
