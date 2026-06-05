import urllib.request
import re
import ssl

ssl_context = ssl._create_unverified_context()

# We can query google search for "Rishikesh Greens Cafe" images
query = "Rishikesh Greens Cafe"
url = f"https://www.google.com/search?q={urllib.parse.quote(query)}&tbm=isch"
req = urllib.request.Request(
    url, 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
)

try:
    with urllib.request.urlopen(req, context=ssl_context) as response:
        html = response.read().decode('utf-8', errors='ignore')
        
        # Look for images in the search results
        # In Google Images search page, images are usually loaded as src="https://encrypted-tbn0.gstatic.com/images?q=tbn:..."
        images = re.findall(r'https://encrypted\-tbn\d+\.gstatic\.com/images\?q\=tbn:[a-zA-Z0-9_\-]+', html)
        print(f"Found {len(images)} gstatic thumbnails:")
        for img in list(set(images))[:10]:
            print(img)
            
        # Also let's search Justdial review photos for Rishikesh Greens Cafe
        # Let's search general google page (not image tab) to see if we find any direct links
        url_web = f"https://www.google.com/search?q={urllib.parse.quote('Rishikesh Greens Cafe Shyampur images')}"
        req_web = urllib.request.Request(
            url_web,
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
        )
        with urllib.request.urlopen(req_web, context=ssl_context) as resp_web:
            html_web = resp_web.read().decode('utf-8', errors='ignore')
            urls = re.findall(r'https?://[a-zA-Z0-9_\-\./]+\.(?:jpg|png|jpeg)', html_web)
            print(f"\nFound {len(urls)} general images:")
            for u in list(set(urls))[:15]:
                print(u)
except Exception as e:
    print(f"Error: {e}")
