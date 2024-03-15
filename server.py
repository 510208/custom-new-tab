import socketserver
import argparse
import http.server
import ctypes

# 設定參數
parser = argparse.ArgumentParser(description="一款非常簡單的本機伺服器啟動腳本，提供給 510208 的 custom-new-tab 進行使用")
parser.add_argument("-p", "--port", type=int, default=8000, help="本機伺服器端口號")
parser.add_argument("-d", "--directory", type=str, default="", help="根路徑，不建議修改")
parser.add_argument("-h", "--hide-cmd", type=bol, default=False, help="是否顯示終端視窗")
args = parser.parse_args()

# 隱藏視窗
if hide-cmd:
    whnd = ctypes.windll.kernel32.GetConsoleWindow()    
    if whnd != 0:    
        ctypes.windll.user32.ShowWindow(whnd, 0)    
        ctypes.windll.kernel32.CloseHandle(whnd)

# 設定伺服器
Handler = http.server.SimpleHTTPRequestHandler
Handler.directory = args.directory
httpd = socketserver.TCPServer(("", args.port), Handler)

# 啟動伺服器
print("伺服器啟動在： http://localhost:", args.port)

httpd.serve_forever()
