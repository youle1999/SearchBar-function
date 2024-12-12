const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const THREADS_FILE = path.join(__dirname, "data", "threads.json");

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// API Endpoints
app.get("/api/threads", (req, res) => {
  const threads = JSON.parse(fs.readFileSync(THREADS_FILE, "utf8"));
  res.json(threads);
});

app.post("/api/threads", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const threads = JSON.parse(fs.readFileSync(THREADS_FILE, "utf8"));
  const newThread = { id: Date.now(), title, messages: [] };
  threads.push(newThread);

  fs.writeFileSync(THREADS_FILE, JSON.stringify(threads, null, 2));
  res.status(201).json(newThread);
});

app.get("/api/threads/:id", (req, res) => {
  const threadId = parseInt(req.params.id, 10);
  const threads = JSON.parse(fs.readFileSync(THREADS_FILE, "utf8"));
  const thread = threads.find((t) => t.id === threadId);
  if (!thread) return res.status(404).json({ error: "Thread not found" });

  res.json(thread);
});

app.post("/api/threads/:id/messages", (req, res) => {
  const threadId = parseInt(req.params.id, 10);
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Message text is required" });

  const threads = JSON.parse(fs.readFileSync(THREADS_FILE, "utf8"));
  const thread = threads.find((t) => t.id === threadId);
  if (!thread) return res.status(404).json({ error: "Thread not found" });

  const newMessage = { id: Date.now(), text };
  thread.messages.push(newMessage);

  fs.writeFileSync(THREADS_FILE, JSON.stringify(threads, null, 2));
  res.status(201).json(newMessage);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
