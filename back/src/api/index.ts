const express = require('express');
const app = express();

app.get('/', (req: any, res: any) => res.send('Express on Vercel nest'));

app.listen(3000, () => console.log('Server ready on port 3000.'));

module.exports = app;
