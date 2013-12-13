---
title: API | Get a PID
---

# API - GET a PID

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## GET a PID - Description
Once you have the PID url, then you can retrieve the information at once for this PID, by just supplying its URL. 

| **Description** | GET a PID |
| **URL**         | The GRNET API Service URL with the suffix |
| **HTTP Method** | GET                         |
| **Security**    | You must authenticate before actually getting PID information. |

The data you must send in order to get the PID are described in the following table 

Type | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
url to authenticate | a url to authenticate. We use the service PID service URL | Yes | None |  https://epic.grnet.gr/api/v2/handles/ |
username | your username | Yes |None| |
password | your password | Yes |None| |

## Example

In this example we are going to retrieve the information of a PID with the following URL https://epic.grnet.gr/api/v2/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5
### The request in curl

<pre><code>
    curl -D- -u "YOURUSERNAME:YOURPASSWORD" -X GET -H "Content-Type: application/json" https://epic.grnet.gr/api/v2/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5

</code></pre>

### The request in python

<pre><code class="language-python">
import urllib2

PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX"
PIDSERVICE_USER="YOURUSERNAME"
PIDSERVICE_PASSWD="YOURPASSWORD"
URL_TO_OPEN="THE_SERVICE_URL_WITH_PREFIX/05C3DB56-5692-11E3-AF8F-1C6F65A666B5"
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
$GETPIDURL ="THE_SERVICE_URL_WITH_PREFIX/05C3DB56-5692-11E3-AF8F-1C6F65A666B5";

// Get cURL resource
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt($curl,CURLOPT_URL,$GETPIDURL);
// Set the authentication options
curl_setopt($curl, CURLOPT_USERPWD, $PIDSERVICE_USER.":".$PIDSERVICE_PASSWD);
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

// Include header in result? (0 = yes, 1 = no)
curl_setopt($curl, CURLOPT_HEADER, 0);
// Should cURL return or print out the data? (true = return, false = print)
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Download the given URL, and return output
$output = curl_exec($curl);
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

After a successful request, the response consists of an array of the PID and an array of all the information that apply to it. The response provides the idx, the type, and all the data described in the data model. 

<pre><code>
Get all data:  [
{
"idx":1,
"type":"URL",
"parsed_data":"http://www.grnet.gr/",
"data":"aHR0cDovL3d3dy5ncm5ldC5nci8=",
"timestamp":"2013-11-26T11:58:14Z",
"ttl_type":0,
"ttl":86400,
"refs":[],
"privs":"rwr-"
},
{
"idx":2,
"type":"URL",
"parsed_data":"https://www.grnet.gr/en/node/64",
"data":"aHR0cHM6Ly93d3cuZ3JuZXQuZ3IvZW4vbm9kZS82NA==",
"timestamp":"2013-11-26T11:58:14Z",
"ttl_type":0,
"ttl":86400,
"refs":[],
"privs":"rwr-"
},
{
"idx":3,
"type":"INST",
"parsed_data":"CLARIN-EL",
"data":"Q0xBUklOLUVM",
"timestamp":"2013-11-26T11:58:14Z",
"ttl_type":0,
"ttl":86400,
"refs":[],
"privs":"rwr-"
},

{
"idx":100,
"type":"HS_ADMIN",
"parsed_data":{
"adminId":"0.NA/11239",
"adminIdIndex":300,
"perms":{
"add_handle":true,
"delete_handle":true,
"add_naming_auth":false,
"delete_naming_auth":false,
"modify_value":true,
"remove_value":true,
"add_value":true,
"read_value":true,
"modify_admin":true,
"remove_admin":true,
"add_admin":true,
"list_handles":false
}
},
"data":"B/MAAAAKMC5OQS8xMTIzOQAAASw=",
"timestamp":"2013-11-15T14:25:58Z",
"ttl_type":0,
"ttl":86400,
"refs":[],
"privs":"rwr-"
}
]
</code></pre>



