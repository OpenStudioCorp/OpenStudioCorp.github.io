import requests
import json

url = 'https://example.com/data.json'
data = {'name': 'John', 'age': 30}
headers = {'Content-type': 'application/json'}
response = requests.post(url, data=json.dumps(data), headers=headers)
print(response.status_code)