/**
 *  Server.js - Servidor Node.js para executar a build de produção
 *  pode ser iniciado após a execução so script de build
 * 
 *  @author: Marc Reinan Gomes
 */

const express = require("express");
// eslint-disable-next-line no-unused-vars
const path    = require("path");
const app     = express();
const port    = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));

app.listen(port, () => console.log(`Server listening on port ${port}`));