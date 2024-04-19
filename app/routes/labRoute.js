const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/api/github/repos', async (req, res) => {
  try {
    const response = await fetch("https://api.github.com/orgs/WebTech-PUC-Minas/repos", {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`
      }
    });
    const data = await response.json();
    const labRepos = data.map(repo => repo.name).filter(name => name.startsWith("lab-")); /* concertar */
    res.json(labRepos);
  } catch (error) {
    console.error("Erro ao obter os repositórios da organização:", error);
    res.status(500).json({ error: "Erro ao obter os repositórios da organização" });
  }
});

app.listen(3001, () => {
  console.log('Servidor backend rodando na porta 3001');
});