import requests

username = "your-username"
password = "your-password"
proxy = "resi-us.lightningproxies.net:9999"

proxies = {
   'http': f'http://{username}:{password}@{proxy}',
   'https': f'http://{username}:{password}@{proxy}',
}

url = "https://ip-check.lightningproxies.net"

try:
   response = requests.get(url, proxies=proxies)
   print(f"Response Status Code: {response.status_code}")
   print(f"Response Content: {response.text}")
except requests.exceptions.RequestException as e:
   print(f"An error occurred: {e}")