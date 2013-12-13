---
title: API | Delete a PID
---

# API - Delete a PID

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## DELETE a PID - Description

You may want to delete a defined PID. Once you have the PID url, then you can delete the PID, by just supplying it. 

**At the moment a nodelete profile is enforced. So the deletion of handles is deactivated.**


| **Description** | Delete a PID |
| **URL**         | The GRNET API Service URL with the PID   |
| **HTTP Method** | DELETE                        |
| **Security**    | Requires ownership of the PID. So you must authenticate before actually deleting the file        |

The data you must send in order to delete are described in the following table 


Type | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
suffix | The local name of the handle in the system | Yes | None |  05C3DB56-5692-11E3-AF8F-1C6F65A666B5 |

## Example

In this example we are going to delete of a selected PID https://epic.grnet.gr/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5

### The request in curl

    curl -v -u "YOURUSERNAME:YOURPASSWORD" -H "Accept:application/json" -H "Content-Type:application/json" -X DELETE https://epic.grnet.gr/api/v2/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5
	
### The request in python

<pre><code class="language-python">
import urllib2

PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX"
PIDSERVICE_USER="YOURUSERNAME"
PIDSERVICE_PASSWD="YOURPASSWORD"
HANDLENAME="05C3DB56-5692-11E3-AF8F-1C6F65A666B5"
URL_TO_OPEN=PIDSERVICE_URL+HANDLENAME;
DATAURL="";

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
</code></pre>

### The request in php 

<pre><code class="language-php5">
$PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX";
$PIDSERVICE_USER="YOURUSERNAME";
$PIDSERVICE_PASSWD="YOURPASSWORD";
$HANDLENAME="05C3DB56-5692-11E3-AF8F-1C6F65A666B5";
$PIDTODELETE= $PIDSERVICE_URL.$HANDLENAME;
// Get cURL resource
$curl = curl_init();

// Set the url to authenticate
curl_setopt($curl,CURLOPT_URL,$PIDSERVICE_URL);
// Set the authentication options
curl_setopt($curl, CURLOPT_USERPWD, $PIDSERVICE_USER.":".$PIDSERVICE_PASSWD);
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

//set the DELETE action 
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");

// Include header in result? (0 = yes, 1 = no)
curl_setopt($curl, CURLOPT_HEADER, 0);
// Should cURL return or print out the data? (true = return, false = print)
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Download the given URL, and return output
$output = curl_exec($curl);

$info = curl_getinfo($curl);
if( $info['http_code']==204) echo "The PID was successfully deleted<br/>";
if( $info['http_code']==401) echo "Authorization failed: Either your login or your password is wrong.<br/>";
// Close the cURL resource, and free system resources
curl_close($ch);
</code></pre>

### The response:

- HTTP/1.1 204 No Content: (Success) 
- HTTP/1.1 401 Unauthorized: Your username or your password is wrong
- HTTP/1.1 404 Not found: The resource doesn't exist

<pre><code>
> DELETE /handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5 HTTP/1.1
> Authorization: Basic Y2xhcmluLWVsOjUxMjdkZWIxZTJjNg==
> User-Agent: curl/7.22.0 (i686-pc-linux-gnu) libcurl/7.22.0 OpenSSL/1.0.1 zlib/1.2.3.4 libidn/1.23 librtmp/2.3
> Host: epic.grnet.gr
> Accept:application/json
> Content-Type:application/json
>
< HTTP/1.1 204 No Content
< Date: Fri, 22 Nov 2013 13:05:14 GMT
< Content-Length: 0
</code></pre>