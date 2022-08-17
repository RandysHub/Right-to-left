**![Logo](https://i.imgur.com/5LbFg9P.png)
## Right 2 Left
---
A manga store made by a manga reader.

## Getting Started
---
All you need to do is click  [here.](https://left-2-right.herokuapp.com/manga)

## Technologies
---
- HTML5
- CSS3
- Javascript
- Node.js
- Express.js
- MongoDB
- React


---

## Models

![schema](https://i.imgur.com/iGtq7Ak.png)

   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /manga/ | Index of manga |
GET | /manga/:id | Show page for selected manga |
GET | /manga/new | Page to add manga |
GET | /manga/sports | Index sorted using genre a filter |
GET | /manga/action | Index sorted using genre a filter |
GET | /manga/romance | Index sorted using genre a filter |
GET | /manga/sliceoflife | Index sorted using genre a filter |
GET | /manga/comedy | Index sorted using genre a filter |
GET | /manga/sale | Index sorted using price a filter |
GET | /manga/seed | Populates database |
POST | /manga/ | Add a manga |
GET | /manga/:id/edit | Page to edit a manga |
PUT | /manga/:id | Edit/update a manga |
DELETE | /manga/:id | Delete a manga |

---



## Coming Soon
---


- GET | /welcome | Some sort of welcome page that asks if you're new to manga. If you say no it will take you to the manga index. If you say yes it will take you to...
- GET |/beginners | A place that lists several beginner friendly manga
- Search bar functionality
- An admin view and a user view for each page.