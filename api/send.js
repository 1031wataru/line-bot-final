export default async function handler(req, res) {
  const message = req.query.msg || 'これはテスト通知です！';

  await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ROYhGkDT0MIR9G2hmkZRwN1pE/...'
    },
    body: JSON.stringify({
      to: 'Uf783157850ea9d9e24d4a9accd9c6f2a',
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
