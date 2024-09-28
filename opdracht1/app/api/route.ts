// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#static-route-handlers

import { headers } from 'next/headers'
 
export async function GET() {
  const headersList = headers();
  const referer = headersList.get("referer") || "";

  return new Response(
    JSON.stringify({
      message1: "Hello world!",
      message2: "test api!",
    }),
    {
      status: 200,
      headers: { referer: referer },
    }
  );
}