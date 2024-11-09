const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/data', (req, res) => {
    const data = {
      text: "Example text",
      link: "http://example.com",
      image: "https://elmah.io/tools/base64-image-encoder/", 
    };
    res.json(data);
  });
  