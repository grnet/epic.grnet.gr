---
title: API | List PID
kind: code
slug: list
result: resultlist
---

# API - List PID

This API uses JSON as the primary exchange format. All implementations MUST be able to produce and consume JSON.

## List PID - Description
You can retrieve the list of pids at once, by just supplying the Service Url with the prefix. 

| **Description** | GET a PID |
| **URL**         | The GRNET API Service URL  |
| **HTTP Method** | GET                         |
| **Security**    | You must authenticate before actually getting all PID. |


## Example

In this example we are going to retrieve the information of all PID in the 11239 prefix URL https://epic.grnet.gr/api/v2/handles/11239/


