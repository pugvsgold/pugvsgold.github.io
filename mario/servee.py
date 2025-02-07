from http.server import HTTPServer, SimpleHTTPRequestHandler

class MyHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add required headers for Cross-Origin Isolation
        self.send_header("Cross-Origin-Embedder-Policy", "require-corp")
        self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        super().end_headers()

# Start the server on port 8080
httpd = HTTPServer(('localhost', 8080), MyHandler)
print("Serving on http://localhost:8080")
httpd.serve_forever()

