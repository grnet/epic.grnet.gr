---
title: API | Search a PID
---

# API - Search a PID

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## Search a PID - Description
You can search for a PID by using a term. 

| **Description** | Search a PID |
| **URL**         | The GRNET EPIC API Url+?URL=*term*  |
| **HTTP Method** | GET                         |
| **Security**    | You must authenticate before actually getting this information.|


## Example

In this example we are going to use the term GRNET to retrieve the list of PIDs with the following URL https://epic.grnet.gr/api/v2/handles/11239/?URL=*GRNET*
### The request in curl

<pre><code>
curl -D- -u "YOURUSERNAME:YOURPASSWORD" -X GET -H "Content-Type: application/json" https://epic.grnet.gr/api/v2/handles/11239/?URL=*grnet*
</code></pre>

### The request in python

<pre><code class="language-python">
import urllib2

PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX"
PIDSERVICE_USER="YOURUSERNAME"
PIDSERVICE_PASSWD="YOURPASSWORD"
URL_TO_OPEN="THE_SERVICE_URL_WITH_PREFIX?URL=*grnet*"
DATAURL='';
    

#The idea is to create a password manager, and then tell urllib about it.
# create a password manager
password_mgr = urllib2.HTTPPasswordMgrWithDefaultRealm()

# Add the username and password.
password_mgr.add_password(None, PIDSERVICE_URL, PIDSERVICE_USER, PIDSERVICE_PASSWD)

handler = urllib2.HTTPBasicAuthHandler(password_mgr)

# create "opener" (OpenerDirector instance)
opener = urllib2.build_opener(handler)

# use the opener to fetch a URL
opener.open(PIDSERVICE_URL)

# Install the opener.
# Now all calls to urllib2.urlopen use the created opener.
urllib2.install_opener(opener)

REQUESTDATA = urllib2.Request(URL_TO_OPEN)    
try:
    DATAURL = urllib2.urlopen(REQUESTDATA)
except urllib2.URLError, e:
    if e.code == 404:
        print "404-Not found"
    if e.code == 401:
        print "401-Authentication failed"    

if DATAURL:
    # Getting the code
    print "This gets the code: ", DATAURL.code
 
</code></pre>

### The request in php 

<pre><code class="language-php5">
$PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX";
$PIDSERVICE_USER="YOURUSERNAME";
$PIDSERVICE_PASSWD="YOURPASSWORD";
$SEARCHTERM = "grnet";
$GETPIDURL ="THE_SERVICE_URL_WITH_PREFIX?URL=*".$SEARCHTERM."*";

// Get cURL resource
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt($curl,CURLOPT_URL,$SEARCHURL);
// Set the authentication options
curl_setopt($curl, CURLOPT_USERPWD, $PIDSERVICE_USER.":".$PIDSERVICE_PASSWD);
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

// Include header in result? (0 = yes, 1 = no)
curl_setopt($curl, CURLOPT_HEADER, 0);
// Should cURL return or print out the data? (true = return, false = print)
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Download the given URL, and return output
$output = curl_exec($curl);
$finalData = json_decode($output);

$info = curl_getinfo($curl);
if( $info['http_code']==200) echo "PID DATA<br/>";
if( $info['http_code']==404) echo "HANDLE DOESNT EXIST<br/>";

// Close the cURL resource, and free system resources
curl_close($ch);
</code></pre>

### The response:
- HTTP/1.1 200 OK: (Success) 
- HTTP/1.1 401 Unauthorized: Your username or your password is wrong
- HTTP/1.1 404 NOT found: The url doesn't exist

After a successful request, the response consists of a list of PIDs containing this term.

<pre><code>
GRNET
66742AB2-5685-11E3-A413-1C6F65A666B5
305F66A9-3994-42D6-A9F6-8E629126DE14
B4CF7AEA-55BB-4DB5-9D85-EB2DAD821B07
0CEEA495-71FA-460B-97A4-81E7E597B636
</code></pre>



