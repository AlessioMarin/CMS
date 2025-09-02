const express = require("express")
const { createProxyMiddleware } = require("http-proxy-middleware")

const app = express()
const PORT = 5173

// Create proxy middleware
const proxy = createProxyMiddleware({
  target: "http://0.0.0.0:3000",
  changeOrigin: true,
  ws: true, // Enable WebSocket proxying
  logLevel: "info",
})

// Use the proxy for all routes
app.use("/", proxy)

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Reverse proxy server running on http://0.0.0.0:${PORT}`)
  console.log(`All traffic will be forwarded to http://0.0.0.0:3000`)
})
