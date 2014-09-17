---
title: API | List PID
kind: code
slug: listdetails
result: resultlistdetails
---

# API - List PID with their data

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## List PID with data - Description
You can retrieve the data of a list of pids at once, by just supplying the Service Url with the prefix and a HTTPS Depth parameter. Each PID is show completely with all fields. 

| **Description** | GET all PID with details |
| **URL**         | The GRNET API Service URL  |
| **HTTP Method** | GET                         |
| **Security**    | You must authenticate before actually getting all PID. |

Because collections can get very lange, they are rendered page by page.
By default, you'll only see the first page with at maximum 1000 results.
To modify this behaviour, use the following query parameters:

Parameter |Value| Description | Example value |
------|--------|-------------|----------|---------------|---------------|
Depth | 0,1, infinity | This header MUST have value 0, 1 or infinity. With Depth: 0, only links to child resources are shown. With Depth: 1, the child resources themselves are returned as well, as if they were requested with Depth: 0. With Depth: infinity, child resources and their child resources are returned, ad infinitum.  | Depth:0 
Accept | |  Apart from the formats supported by all resources, collections can also be represented as plain text, by supplying the Accept: text/plain request header. The plain text representation doesn't support recursion using the Depth: header.| application/xml 
limit | int: the limit of results | the maximum number of items to return. The default is 1000. As a special case, if you specify <code>limit=0</code>, <em>all</em> items will be returned, without limit.  |	https://epic.grnet.gr/api/v2/handles/11239/?limit=10
page | int: the page of results  | When using limit parameter the returned data are displayed on multiple pages. the number of the page to return. I.e., if you specify <code>limit=100&amp;page=3</code>, items 201 through 300 will be returned |https://epic.grnet.gr/api/v2/handles/11239/?limit=10&page=2


## Example

In this example we are going to retrieve the information of all PID with their data in the 11239 prefix URL https://epic.grnet.gr/api/v2/handles/11239/

