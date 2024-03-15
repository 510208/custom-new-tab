import socketserver
import argparse
import http.server

# 設定參數
parser = argparse.ArgumentParser(description="This is a simple HTTP server")
parser.add_argument("-p", "--port", type=int, default=8000, help="Port number")
parser.add_argument("-d", "--directory", type=str, default="", help="Directory")
args = parser.parse_args()

# 設定伺服器
Handler = http.server.SimpleHTTPRequestHandler
Handler.directory = args.directory
httpd = socketserver.TCPServer(("", args.port), Handler)

# 啟動伺服器
print("serving at port", args.port)

httpd.serve_forever()