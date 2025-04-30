export default async function handler(req, res) {
  const message = req.query.msg || 'これはテスト通知です！';

  await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer VBEW6dMjWIUrWxBXIi/3V4JXYzZ8RD/5Q7SvvNWR875esT2mPEs39f1UTQcfFbSwAVcRPANUcFdUPia0FEzzWgCVNZg+NhQdDzMybM0vc6s8SIh7g6oEKW4jJqBbvbiqOPi2jNpWAB+EzmrI+5LOhAdB04t89/1O/w1cDnyilFU='
    },
    body: JSON.stringify({
      to: 'Uf783157850ea9d9e24d4a9accdxxxxxxxx',
      messages: [
        {
          type: 'text',
          text: message
        }
      ]
    })
  });

  res.status(200).send('通知を送信しました！');
}
