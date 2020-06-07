![Daiquiri Digital](https://github.com/p-tul/daiquiri-digital/blob/master/src/images/dd-logo-main-md.png "Daiquiri Digital Logo")

# Daiquiri Digital
A digital design & development agency focused on the hospitality industry. View website [here](https://www.daiquiridigital.com.au).

---

## Installation & Development

## Dependancies
Gatsby CLI is required to get things up and running on your local dev environmnet. If you do not have the Gatsby CLI, run:
```
npm install -g gatsby-cli
``` 

### Install
Clone the repository into a new, empty directory.
```
git clone https://github.com/p-tul/daiquiri-digital.git
```

### Run a development server

```
gatsby develop
```

### Delete your public folder and cache
This is sometimes neccesary if changes you are making aren't taking effect. It will not permanently remove any files.
```
gatsby clean
```

### Production Build
```
gatsby build
```

### Serve Production Build
To test that your production build works as expected, run:

*note: this will only work after running `gatsby build`.*
```
gatsby serve
```

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
