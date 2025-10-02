import type { APIRoute } from "astro";

/**
 * Example API endpoint
 * Returns HTML for HTMX to swap into the page
 */
export const GET: APIRoute = async () => {
  const timestamp = new Date().toLocaleTimeString();

  return new Response(
    `<p style="color: #059669; font-weight: 500;">✅ It works! Server time: ${timestamp}</p>`,
    {
      headers: { "Content-Type": "text/html" }
    }
  );
};
