const { Router } = require('express');
const router = Router();

router.use('/hello', (req, res) => {
  res.end('Hello world!');
})

module.exports = router;
