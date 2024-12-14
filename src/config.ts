export const apiCodes = {
  placeholder: {
    residentialProxies: ``,
    datacenterProxies: ``,
    ispProxies: ``,
    ipv6Proxies: ``,
    mobileProxies: ``,
  },
  curl: {
    residentialProxies: `curl -x http://your-username:your-password@resi-us.lightningproxies.net:9999 https://ip-check.lightningproxies.net`,
    datacenterProxies: `curl -x http://your-username:your-password@datacenter-us-pr.lightningproxies.net:9090 https://ip-check.lightningproxies.net`,
    ispProxies: `curl -x http://your-username:your-password@your-ip:50100 https://ip-check.lightningproxies.net`,
    ipv6Proxies: `curl -x http://your-username:your-password@ipv6.lightningproxies.net:1001 https://ip-check.lightningproxies.net`,
    mobileProxies: `curl -x http://your-username:your-password@mobile-us.lightningproxies.net:8000 https://ip-check.lightningproxies.net`,
  },
  python: {
    residentialProxies: `import requests

username = "your-username"
password = "your-password"
proxy = "resi-us.lightningproxies.net:9999"

proxies = {
    'http': f'http://{username}:{password}@{proxy}',
    'https': f'http://{username}:{password}@{proxy}'
}

url = "https://ip-check.lightningproxies.net"

try:
    response = requests.get(url, proxies=proxies)
    print(f"Response Status Code: {response.status_code}")
    print(f"Response Content: {response.text}")
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")`,
    datacenterProxies: `import requests

username = "your-username"
password = "your-password"
proxy = "datacenter-us-pr.lightningproxies.net:9090"

proxies = {
    'http': f'http://{username}:{password}@{proxy}',
    'https': f'http://{username}:{password}@{proxy}'
}

url = "https://ip-check.lightningproxies.net"

try:
    response = requests.get(url, proxies=proxies)
    print(f"Response Status Code: {response.status_code}")
    print(f"Response Content: {response.text}")
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")`,
    ispProxies: `import requests

username = "your-username"
password = "your-password"
proxy = "your-ip:50100"

proxies = {
    'http': f'http://{username}:{password}@{proxy}',
    'https': f'http://{username}:{password}@{proxy}'
}

url = "https://ip-check.lightningproxies.net"

try:
    response = requests.get(url, proxies=proxies)
    print(f"Response Status Code: {response.status_code}")
    print(f"Response Content: {response.text}")
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")`,
    ipv6Proxies: `import requests

username = "your-username"
password = "your-password"
proxy = "ipv6.lightningproxies.net:1001"

proxies = {
    'http': f'http://{username}:{password}@{proxy}',
    'https': f'http://{username}:{password}@{proxy}'
}

url = "https://ip-check.lightningproxies.net"

try:
    response = requests.get(url, proxies=proxies)
    print(f"Response Status Code: {response.status_code}")
    print(f"Response Content: {response.text}")
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")`,
    mobileProxies: `import requests

username = "your-username"
password = "your-password"
proxy = "mobile-us.lightningproxies.net:8000"

proxies = {
    'http': f'http://{username}:{password}@{proxy}',
    'https': f'http://{username}:{password}@{proxy}'
}

url = "https://ip-check.lightningproxies.net"

try:
    response = requests.get(url, proxies=proxies)
    print(f"Response Status Code: {response.status_code}")
    print(f"Response Content: {response.text}")
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")`,
  },
  nodejs: {
    residentialProxies: `const https = require('https');
const HttpsProxyAgent = require('https-proxy-agent');

const username = 'your-username';
const password = 'your-password';
const proxy = 'http://your-username:your-password@resi-us.lightningproxies.net:9999';

const agent = new HttpsProxyAgent(proxy);

https.get('https://ip-check.lightningproxies.net', { agent }, (res) => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
}).on('error', err => {
  console.error('Error:', err);
});`,
    datacenterProxies: `const https = require('https');
const HttpsProxyAgent = require('https-proxy-agent');

const username = 'your-username';
const password = 'your-password';
const proxy = 'http://your-username:your-password@datacenter-us-pr.lightningproxies.net:9090';

const agent = new HttpsProxyAgent(proxy);

https.get('https://ip-check.lightningproxies.net', { agent }, (res) => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
}).on('error', err => {
  console.error('Error:', err);
});`,
    ispProxies: `const https = require('https');
const HttpsProxyAgent = require('https-proxy-agent');

const username = 'your-username';
const password = 'your-password';
const proxy = 'http://your-username:your-password@your-ip:50100';

const agent = new HttpsProxyAgent(proxy);

https.get('https://ip-check.lightningproxies.net', { agent }, (res) => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
}).on('error', err => {
  console.error('Error:', err);
});`,
    ipv6Proxies: `const https = require('https');
const HttpsProxyAgent = require('https-proxy-agent');

const username = 'your-username';
const password = 'your-password';
const proxy = 'http://your-username:your-password@ipv6.lightningproxies.net:1001';

const agent = new HttpsProxyAgent(proxy);

https.get('https://ip-check.lightningproxies.net', { agent }, (res) => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
}).on('error', err => {
  console.error('Error:', err);
});`,
    mobileProxies: `const https = require('https');
const HttpsProxyAgent = require('https-proxy-agent');

const username = 'your-username';
const password = 'your-password';
const proxy = 'http://your-username:your-password@mobile-us.lightningproxies.net:8000';

const agent = new HttpsProxyAgent(proxy);

https.get('https://ip-check.lightningproxies.net', { agent }, (res) => {
  let data = '';

  res.on('data', chunk => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
}).on('error', err => {
  console.error('Error:', err);
});`,
  },
  php: {
    residentialProxies: `<?php

$hostname = "resi-us.lightningproxies.net:9999";
$username = "your-username";
$password = "your-password";

$proxy = "tcp://$username:$password@$hostname";

$opts = array(
  'http' => array(
    'proxy' => $proxy,
    'request_fulluri' => true,
  ),
);

$context = stream_context_create($opts);

$url = "https://ip-check.lightningproxies.net";

$response = file_get_contents($url, false, $context);

if ($response === FALSE) {
    echo "Error fetching data.";
} else {
    echo "Response: " . $response;
}

?>`,
    datacenterProxies: `<?php

$hostname = "datacenter-us-pr.lightningproxies.net:9090";
$username = "your-username";
$password = "your-password";

$proxy = "tcp://$username:$password@$hostname";

$opts = array(
  'http' => array(
    'proxy' => $proxy,
    'request_fulluri' => true,
  ),
);

$context = stream_context_create($opts);

$url = "https://ip-check.lightningproxies.net";

$response = file_get_contents($url, false, $context);

if ($response === FALSE) {
    echo "Error fetching data.";
} else {
    echo "Response: " . $response;
}

?>`,
    ispProxies: `<?php

$hostname = "your-ip:50100";
$username = "your-username";
$password = "your-password";

$proxy = "tcp://$username:$password@$hostname";

$opts = array(
  'http' => array(
    'proxy' => $proxy,
    'request_fulluri' => true,
  ),
);

$context = stream_context_create($opts);

$url = "https://ip-check.lightningproxies.net";

$response = file_get_contents($url, false, $context);

if ($response === FALSE) {
    echo "Error fetching data.";
} else {
    echo "Response: " . $response;
}

?>`,
    ipv6Proxies: `<?php

$hostname = "ipv6.lightningproxies.net:1001";
$username = "your-username";
$password = "your-password";

$proxy = "tcp://$username:$password@$hostname";

$opts = array(
  'http' => array(
    'proxy' => $proxy,
    'request_fulluri' => true,
  ),
);

$context = stream_context_create($opts);

$url = "https://ip-check.lightningproxies.net";

$response = file_get_contents($url, false, $context);

if ($response === FALSE) {
    echo "Error fetching data.";
} else {
    echo "Response: " . $response;
}
    
?>`,
    mobileProxies: `<?php

$hostname = "mobile-us.lightningproxies.net:8000";
$username = "your-username";
$password = "your-password";

$proxy = "tcp://$username:$password@$hostname";

$opts = array(
  'http' => array(
    'proxy' => $proxy,
    'request_fulluri' => true,
  ),
);

$context = stream_context_create($opts);

$url = "https://ip-check.lightningproxies.net";

$response = file_get_contents($url, false, $context);

if ($response === FALSE) {
    echo "Error fetching data.";
} else {
    echo "Response: " . $response;
}
    
?>`,
  },
  go: {
    residentialProxies: `package main

import (
  "fmt"
  "io/ioutil"
  "net/http"
  "net/url"
)

func main() {

  proxyURL, _ := url.Parse("http://your-username:your-password@resi-us.lightningproxies.net:9999")

  client := &http.Client{
    Transport: &http.Transport{
      Proxy: http.ProxyURL(proxyURL),
    },
  }

  resp, err := client.Get("https://ip-check.lightningproxies.net")
  if err != nil {
    fmt.Println("Error:", err)
    return
  }
  defer resp.Body.Close()

  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println("Response:", string(body))
}`,
    datacenterProxies: `package main

import (
  "fmt"
  "io/ioutil"
  "net/http"
  "net/url"
)

func main() {

  proxyURL, _ := url.Parse("http://your-username:your-password@datacenter-us-pr.lightningproxies.net:9090")

  client := &http.Client{
    Transport: &http.Transport{
      Proxy: http.ProxyURL(proxyURL),
    },
  }

  resp, err := client.Get("https://ip-check.lightningproxies.net")
  if err != nil {
    fmt.Println("Error:", err)
    return
  }
  defer resp.Body.Close()

  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println("Response:", string(body))
}`,
    ispProxies: `package main

import (
  "fmt"
  "io/ioutil"
  "net/http"
  "net/url"
)

func main() {

  proxyURL, _ := url.Parse("http://your-username:your-password@your-ip:50100")

  client := &http.Client{
    Transport: &http.Transport{
      Proxy: http.ProxyURL(proxyURL),
    },
  }

  resp, err := client.Get("https://ip-check.lightningproxies.net")
  if err != nil {
    fmt.Println("Error:", err)
    return
  }
  defer resp.Body.Close()

  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println("Response:", string(body))
}`,
    ipv6Proxies: `package main

import (
  "fmt"
  "io/ioutil"
  "net/http"
  "net/url"
)

func main() {

  proxyURL, _ := url.Parse("http://your-username:your-password@ipv6.lightningproxies.net:1001")

  client := &http.Client{
    Transport: &http.Transport{
      Proxy: http.ProxyURL(proxyURL),
    },
  }

  resp, err := client.Get("https://ip-check.lightningproxies.net")
  if err != nil {
    fmt.Println("Error:", err)
    return
  }
  defer resp.Body.Close()

  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println("Response:", string(body))
}`,
    mobileProxies: `package main

import (
  "fmt"
  "io/ioutil"
  "net/http"
  "net/url"
)

func main() {

  proxyURL, _ := url.Parse("http://your-username:your-password@mobile-us.lightningproxies.net:8000")

  client := &http.Client{
    Transport: &http.Transport{
      Proxy: http.ProxyURL(proxyURL),
    },
  }

  resp, err := client.Get("https://ip-check.lightningproxies.net")
  if err != nil {
    fmt.Println("Error:", err)
    return
  }
  defer resp.Body.Close()

  body, _ := ioutil.ReadAll(resp.Body)
  fmt.Println("Response:", string(body))
}`,
  },
  java: {
    residentialProxies: `import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.URL;
import java.util.Base64;

public class ResidentialProxyExample {
    public static void main(String[] args) {
        String hostname = "resi-us.lightningproxies.net:9999";
        String username = "your-username";
        String password = "your-password";

        try {
            Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(hostname.split(":")[0], Integer.parseInt(hostname.split(":")[1])));
            URL url = new URL("https://ip-check.lightningproxies.net");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection(proxy);
            connection.setRequestMethod("GET");

            String encoded = Base64.getEncoder().encodeToString((username + ":" + password).getBytes("UTF-8"));
            connection.setRequestProperty("Proxy-Authorization", "Basic " + encoded);

            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder content = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }

            in.close();
            connection.disconnect();

            System.out.println("Response: " + content.toString());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,
    datacenterProxies: `import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.URL;
import java.util.Base64;

public class ResidentialProxyExample {
    public static void main(String[] args) {
        String hostname = "datacenter-us-pr.lightningproxies.net:9090";
        String username = "your-username";
        String password = "your-password";

        try {
            Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(hostname.split(":")[0], Integer.parseInt(hostname.split(":")[1])));
            URL url = new URL("https://ip-check.lightningproxies.net");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection(proxy);
            connection.setRequestMethod("GET");

            String encoded = Base64.getEncoder().encodeToString((username + ":" + password).getBytes("UTF-8"));
            connection.setRequestProperty("Proxy-Authorization", "Basic " + encoded);

            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder content = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }

            in.close();
            connection.disconnect();

            System.out.println("Response: " + content.toString());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,
    ispProxies: `import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.URL;
import java.util.Base64;

public class ResidentialProxyExample {
    public static void main(String[] args) {
        String hostname = "your-ip:50100";
        String username = "your-username";
        String password = "your-password";

        try {
            Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(hostname.split(":")[0], Integer.parseInt(hostname.split(":")[1])));
            URL url = new URL("https://ip-check.lightningproxies.net");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection(proxy);
            connection.setRequestMethod("GET");

            String encoded = Base64.getEncoder().encodeToString((username + ":" + password).getBytes("UTF-8"));
            connection.setRequestProperty("Proxy-Authorization", "Basic " + encoded);

            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder content = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }

            in.close();
            connection.disconnect();

            System.out.println("Response: " + content.toString());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,
    ipv6Proxies: `import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.URL;
import java.util.Base64;

public class ResidentialProxyExample {
    public static void main(String[] args) {
        String hostname = "ipv6.lightningproxies.net:1001";
        String username = "your-username";
        String password = "your-password";

        try {
            Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(hostname.split(":")[0], Integer.parseInt(hostname.split(":")[1])));
            URL url = new URL("https://ip-check.lightningproxies.net");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection(proxy);
            connection.setRequestMethod("GET");

            String encoded = Base64.getEncoder().encodeToString((username + ":" + password).getBytes("UTF-8"));
            connection.setRequestProperty("Proxy-Authorization", "Basic " + encoded);

            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder content = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }

            in.close();
            connection.disconnect();

            System.out.println("Response: " + content.toString());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,
    mobileProxies: `import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.InetSocketAddress;
import java.net.Proxy;
import java.net.URL;
import java.util.Base64;

public class ResidentialProxyExample {
    public static void main(String[] args) {
        String hostname = "mobile-us.lightningproxies.net:8000";
        String username = "your-username";
        String password = "your-password";

        try {
            Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress(hostname.split(":")[0], Integer.parseInt(hostname.split(":")[1])));
            URL url = new URL("https://ip-check.lightningproxies.net");
            HttpURLConnection connection = (HttpURLConnection) url.openConnection(proxy);
            connection.setRequestMethod("GET");

            String encoded = Base64.getEncoder().encodeToString((username + ":" + password).getBytes("UTF-8"));
            connection.setRequestProperty("Proxy-Authorization", "Basic " + encoded);

            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder content = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }

            in.close();
            connection.disconnect();

            System.out.println("Response: " + content.toString());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,
  },
  csharp: {
    residentialProxies: `using System;
using System.Net;

class Program
{
    static void Main()
    {
        string hostname = "resi-us.lightningproxies.net:9999";
        string username = "your-username";
        string password = "your-password";

        WebProxy proxy = new WebProxy(hostname)
        {
            Credentials = new NetworkCredential(username, password)
        };

        HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://ip-check.lightningproxies.net");
        request.Proxy = proxy;

        try
        {
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            using (var reader = new System.IO.StreamReader(response.GetResponseStream()))
            {
                string content = reader.ReadToEnd();
                Console.WriteLine("Response: " + content);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("Error: " + e.Message);
        }
    }
}`,
    datacenterProxies: `using System;
using System.Net;

class Program
{
    static void Main()
    {
        string hostname = "datacenter-us-pr.lightningproxies.net:9090";
        string username = "your-username";
        string password = "your-password";

        WebProxy proxy = new WebProxy(hostname)
        {
            Credentials = new NetworkCredential(username, password)
        };

        HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://ip-check.lightningproxies.net");
        request.Proxy = proxy;

        try
        {
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            using (var reader = new System.IO.StreamReader(response.GetResponseStream()))
            {
                string content = reader.ReadToEnd();
                Console.WriteLine("Response: " + content);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("Error: " + e.Message);
        }
    }
}`,
    ispProxies: `using System;
using System.Net;

class Program
{
    static void Main()
    {
        string hostname = "your-ip:50100";
        string username = "your-username";
        string password = "your-password";

        WebProxy proxy = new WebProxy(hostname)
        {
            Credentials = new NetworkCredential(username, password)
        };

        HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://ip-check.lightningproxies.net");
        request.Proxy = proxy;

        try
        {
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            using (var reader = new System.IO.StreamReader(response.GetResponseStream()))
            {
                string content = reader.ReadToEnd();
                Console.WriteLine("Response: " + content);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("Error: " + e.Message);
        }
    }
}`,
    ipv6Proxies: `using System;
using System.Net;

class Program
{
    static void Main()
    {
        string hostname = "ipv6.lightningproxies.net:1001";
        string username = "your-username";
        string password = "your-password";

        WebProxy proxy = new WebProxy(hostname)
        {
            Credentials = new NetworkCredential(username, password)
        };

        HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://ip-check.lightningproxies.net");
        request.Proxy = proxy;

        try
        {
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            using (var reader = new System.IO.StreamReader(response.GetResponseStream()))
            {
                string content = reader.ReadToEnd();
                Console.WriteLine("Response: " + content);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("Error: " + e.Message);
        }
    }
}`,
    mobileProxies: `using System;
using System.Net;

class Program
{
    static void Main()
    {
        string hostname = "mobile-us.lightningproxies.net:8000";
        string username = "your-username";
        string password = "your-password";

        WebProxy proxy = new WebProxy(hostname)
        {
            Credentials = new NetworkCredential(username, password)
        };

        HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://ip-check.lightningproxies.net");
        request.Proxy = proxy;

        try
        {
            using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
            using (var reader = new System.IO.StreamReader(response.GetResponseStream()))
            {
                string content = reader.ReadToEnd();
                Console.WriteLine("Response: " + content);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine("Error: " + e.Message);
        }
    }
}`,
  },
};
