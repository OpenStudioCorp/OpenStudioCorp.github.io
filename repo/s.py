import requests
import json

url = 'https://openstudiocorp.github.io/opennbs-vr.github.io/repo.json'
response = requests.get(url)
data = json.loads(response.content)
print(data)