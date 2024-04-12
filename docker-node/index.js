const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.json({message : "Hey from the Docker "});
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})