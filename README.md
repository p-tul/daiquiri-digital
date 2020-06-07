#Daiquiri Digital
A digital design & development agency focused on the hospitality industry. View Website [Here](https://www.daiquiridigital.com.au).

---

## File Structure

daiquir-digital
|-- src
|   |-- components
|   |-- images
|   |-- pages
|   |   |-- articles
|   |   |   |-- article-1
|   |   |   |-- article-2
|   |   |   |-- article-...
|   |   |-- wip
|   |-- styles
|   |-- templates
|   |-- utils
|
|-- public
|-- node_modules
|-- .cache

---

## Blog Posts
Markdown files contained within **src/pages/articles/...**

Create a new folder for each post and store markdown files, images and any other assets within.

Frontmatter must contain the following:

```
---
title: ''
date: 'yyyy-mm-dd'
updated: 'yyyy-mm-dd'
author: 
published: boolean
path: '/'
featuredImage: './'
---
```

---