import requests

url = "http://127.0.0.1:5000/execute"
code = "print('Hello, World!')"

response = requests.post(url, json={"code": code})
print(response.json())