---
title: API | Create a PID
---

# API - Create a new PID

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## Create a new PID - Description

You want to create a new PID. The creation and the update functions are both using the PUT method. So if you want to be sure that you are going to create a new one you must first check if it exists. If you don't check the existence of a PID based on the suffix it is possible that you will update the data of an existing one. 

| **Description** | Create a new PID |
| **URL**         | The GRNET API Service URL  |
| **HTTP Method** | PUT                        |
| **Security**    | Requires ownership of the PID. So you must authenticate before actually creating the PID|

The data you must send in order to create are described in the following table 


Type | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
suffix | The local name of the handle in the system | Yes | None |  use a UUID generator |

The data you must send as json representation are described in the following table 

Type | Description | Required | Default value | Example value |
------|-------------|----------|---------------|---------------|
type |Each handle has a set of values assigned to it.  These handle values use a common data structure for its data. The data type defines the syntax and semantics of the data in its data field.  | Yes | None | URL |
parsed_data|A set of data that describes the resource identified by the handle. The syntax and semantics of parsed data are identified by the <type> field.|Yes|None|http://www.grnet.gr
timestamp|The timestamp records the last time this Handle Value was updated at the server. The field contains elapsed time since 00:00:00 UTC, January 1970 in milliseconds.|NO|timestamp|2013-11-26T11:58:14Z
ttl_type|the TTL type indicates whether the TTL value is absolute or relative.  The absolute TTL value defines the time to live in terms of seconds since 00:00:00 UTC, January 1st 1970.  A relative TTL specifies the time to live in terms of the number of seconds elapsed since the value was obtained by the client from any handle server.|NO|integer 0=relative, 1=absolute by default 0|0|
ttl|a number that specifies the Time-To- Live of the value record. A positive value defines the time to live in terms of seconds since 00:00:00 UTC, January 1st 1970. A negative value specifies the time to live in terms of the number of seconds elapsed since the value was obtained. (if ttl_type is absolute, then this indicates the date/time of expiration in seconds since Jan 1 0:00:00 1970.) |NO|integer seconds |86400|


## Example

In this example we are going to create a new handle in the following url https://epic.grnet.gr/handles/11239/UUIDGENERATE

### The request in curl

<pre><code>
#!/bin/bash    

SUFFIX=`uuidgen`
curl -v -u "YOURUSERNAME:YOURPASSWORD" -H "Accept:application/json" -H "Content-Type:application/json" -X PUT --data '[{"type":"URL","parsed_data":"http://www.grnet.gr/"}]' https://epic.grnet.gr/api/v2/handles/11239/$SUFFIX	

</code></pre>

### The request in python

<pre><code class="language-python">
import urllib2
import uuid
import json

PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX"
PIDSERVICE_USER="YOURUSERNAME"
PIDSERVICE_PASSWD="YOURPASSWORD"
SUFFIX =str(uuid.uuid1());
URL_TO_OPEN=PIDSERVICE_URL+SUFFIX
DATAURL=''

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

#create the json data
JSONDATA = [{'type':'URL','parsed_data':'http://www.grnet.gr'}]
JSONDATATOSEND = json.dumps(JSONDATA);

REQUESTDATA = urllib2.Request(URL_TO_OPEN, data=JSONDATATOSEND)

#create the headers
REQUESTDATA.add_header('Content-Type','application/json')
REQUESTDATA.add_header('Content-Length',len(JSONDATATOSEND))

# creates the PUT method
REQUESTDATA.get_method = lambda: 'PUT'

try:
    DATAURL = urllib2.urlopen(REQUESTDATA)
    
except urllib2.URLError, e:
    print e
    if e.code == 404:
        print "404-Not found"
    if e.code == 401:
        print "401-Authentication failed"    
        #get http code of the request
 
if DATAURL:
    # Getting the code
    print "This gets the code: ", DATAURL.code
 
</code></pre>

### The request in php 

<pre><code class="language-php5">
$PIDSERVICE_URL="THE_SERVICE_URL_WITH_PREFIX";
$PIDSERVICE_USER="YOURUSERNAME";
$PIDSERVICE_PASSWD="YOURPASSWORD";
$UUID = gen_uuid(); //a function to generate a uuid
$URL_TO_OPEN = $PIDSERVICE_URL.$UUID;
$data = array(array('type' => 'URL','parsed_data'=>'http://www.grnet.gr/'));
$update_json=json_encode($data);

// Get cURL resource
$ch = curl_init();

//Set the headers to complete the request
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($update_json)));

//set the PUT Action
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

//SET the postfield data
curl_setopt($ch, CURLOPT_POSTFIELDS,$update_json);

// Should cURL return or print out the data? (true = return, false = print)
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

//Set the url with the new name of the PID 
curl_setopt($ch, CURLOPT_URL, $URL_TO_OPEN);

// Set the authentication options
curl_setopt($ch, CURLOPT_USERPWD, $PIDSERVICE_USER.":".$PIDSERVICE_PASSWD);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

$output = curl_exec($ch);
$info = curl_getinfo($ch);

// Download the given URL, and return output 

if( $info['http_code']==200) echo "HANDLE EXISTS<br/>";
if( $info['http_code']==201) echo "PID CREATED<br/>";
if( $info['http_code']==204) echo "PID UPDATED<br/>";
if( $info['http_code']==404) echo "HANDLE DOESNT EXIST<br/>";

curl_close($ch);
fclose($putData);


function gen_uuid() {
    return sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            // 32 bits for "time_low"
            mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),

            // 16 bits for "time_mid"
            mt_rand( 0, 0xffff ),

            // 16 bits for "time_hi_and_version",
            // four most significant bits holds version number 4
            mt_rand( 0, 0x0fff ) | 0x4000,

            // 16 bits, 8 bits for "clk_seq_hi_res",
            // 8 bits for "clk_seq_low",
            // two most significant bits holds zero and one for variant DCE1.1
            mt_rand( 0, 0x3fff ) | 0x8000,

            // 48 bits for "node"
            mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )
    );
}
</code></pre>

### The response:

- HTTP/1.1 201 Created: (Success) 
- HTTP/1.1 204 No-Content: The local name already exists , and instead of creating a new one you’ve just updated the values of an existing one.  
- HTTP/1.1 401 Unauthorized: Your username or your password is wrong
- HTTP/1.1 405 Method Not Allowed: 
	a) You are trying to create a new handle in the main url of the server either (https://epic.grnet.gr/handles/11239/) or (https://epic.grnet.gr/handles). You have not specified a unique name for your handle. 
	or b)You are using POST instead of PUT. POST is not allowed
- HTTP/1.1 415 Unsupported Media Type: You haven't specify the correct headers for your request. The service supports Json representation so you must define the content-type of the request.


<pre><code>
HTTP/1.1 201 Created
Date: Mon, 25 Nov 2013 10:18:18 GMT
Content-Length: 2211
Location: https://epic.grnet.gr/api/v2/handles/11239/05C3DB56-5692-11E3-AF8F-1C6F65A666B5
ETag: "1B2M2Y8AsgTpgAmY7PhCfg"
Last-Modified: Thu, 01 Jan 1970 00:00:00 GMT
</code></pre>
