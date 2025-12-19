import Pusher from "pusher";


console.log("App ID:", process.env.PUSHER_APP_ID);
console.log("Key:", process.env.PUSHER_KEY);
console.log("Secret:", process.env.PUSHER_SECRET);
console.log("Cluster:", process.env.PUSHER_CLUSTER);

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});

export async function POST(req) {
  const { message } = await req.json();

  await pusher.trigger("notifications", "new-message", { message });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
