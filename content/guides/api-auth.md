---
title: API | Basic Authentication
---

# API - Basic Authentication

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## Basic Authentication - Description
The API allows REST clients to authenticate themselves with a user name and password using basic authentication.

If you don’t have an account please contact hdl@grnet.gr

| **Description** | Authenticate to API Service |
| **URL**         | The GRNET API Service URL   |
| **HTTP Method** | GET                         |
| **Security**    | Basic Authentication        |

The data you must send in order to authenticate are described in the following table 


Type | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
url to authenticate | a url to authenticate. We use the service PID service URL | Yes | None |  https://epic.grnet.gr/api/v2/handles/ |
username | your username | Yes |None| |
password | your password | Yes |None| |

## Example

In this example we are going to authenticate by using the main PID service URL.

### The request in curl

<pre><code>
    curl -D- -u "YOURUSERNAME:YOURPASSWORD" -X GET -H "Content-Type: application/json" https://epic.grnet.gr/api/v2/handles/

</code></pre>

### The request in python

<pre><code class="language-python">
import urllib2

PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX"
PIDSERVICE_USER="YOURUSERNAME"
PIDSERVICE_PASSWD="YOURPASSWORD"
DATAURL=''
URL_TO_OPEN=PIDSERVICE_URL
    
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
// Get cURL resource
$curl = curl_init();
    
// Set the url to authenticate
curl_setopt($curl,CURLOPT_URL,$PIDSERVICE_URL);
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
if( $info['http_code']==200) echo "Authorization ok<br/>";
if( $info['http_code']==401) echo "Authorization failed: Either your login or your password is wrong.<br/>";

// Close the cURL resource, and free system resources
curl_close($curl);

</code></pre>

### The response:

- HTTP/1.1 200 OK: (Success) 
- HTTP/1.1 401 Unauthorized: Your username or your password is wrong

