export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('ユーザーID:', req.body.events[0]?.source?.userId);

    const events = req.body.events;

    const replies = events.map(async (event) => {
      const replyToken = event.replyToken;
      const userMessage = event.message?.text;

      if (replyToken && userMessage) {
        await fetch('https://api.line.me/v2/bot/message/reply', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer VBEW6dMjWIUrWxBXIi/3V4JXYzZ8RD/5Q7SvvNWR875esT2mPEs39f1UTQcfFbSwAVcRPANUcFdUPia0FEzzWgCVNZg+NhQdDzMybM0vc6s8SIh7g6oEKW4jJqBbvbiqOPi2jNpWAB+EzmrI+5LOhAdB04t89/1O/w1cDnyilFU=',
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
