export default function handler(req, res) {
  if (req.method === 'POST') {
    const events = req.body.events;
    console.log('受信イベント:', events);

    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
