export default async function handler(req, res) {
  if (req.method === 'POST') {
    const events = req.body.events;

    // イベントごとに処理（複数イベントに対応）
    const replies = events.map(async (event) => {
      const replyToken = event.replyToken;
      const userMessage = event.message?.text;

      if (replyToken && userMessage) {
        await fetch('https://api.line.me/v2/bot/message/reply', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer <アクセストークンをここに入れる>`, // 次のステップで説明！
          },
          body: JSON.stringify({
            replyToken: replyToken,
            messages: [
              {
                type: 'text',
                text: `「${userMessage}」と受け取りました！`,
              },
            ],
          }),
        });
      }
    });

    await Promise.all(replies);
    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
