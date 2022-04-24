const tr = require('googletrans2')

const translate = async (req, res) => {
  const { text, from, to, tld } = req.query

  if (!text)
    res.status(400).send({
      error: 'text cannot be empty.'
    })

  const result = await tr.translate(text, { from, to, tld });

  res.send(result);
}

module.exports = {
  translate
}
