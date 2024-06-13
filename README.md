# Academic-CV
Multi-language template for academic personal websites supports both RTL and LTR directions.

This template supports academic content: ***Publications***, ***Research***, ***Jobs***, ***Contact***, and a ***Dynamically generated CV***.

Fork [this repository](https://github.com/reza-azimifar/Academic-CV/), modify the configuration and files, and have your site for free by publishing this code on [github pages](https://pages.github.com/) or any other domain.


## Demo 
Here you can check the [Demo](https://rezaexplains.000webhostapp.com/) online:

![Demo Image](./src/images/demo.jpg)


## Getting started
+ Register a `GitHub` account
+ Fork this repository by clicking the `fork` button in the top right
+ Go to the repository’s settings and rename the repository `[Your GitHub Username].github.io`, which will also be your website’s URL
+ Add all dependencies to the project by executing the `npm install` in the command line
+ Set site-wide configuration as see below description


## Pages setup and main configuration
The main configuration file for the site is in `global.js` file in `src/js` directory, which defines the content in the sidebar and other site-wide features in `globalData` object.

You will need to replace the default variables with ones about yourself and your site’s github repository.

Also in `navbarLinks` object the pages of the site are defined, to disable any of the pages that you don't want in your page, change the value of that page to `false`.

## Files
You can upload and replace your profile image and PDF resume as the below template in the `src/images` and `src/files` directories.

+ Your image: `profile.jpg`
+ Your resume: `resume.pdf`

## Pages configuration
In the `src/js` directory there are two files named `en.js` and `fa.js`. You can change data in these files based on your information for ***home***, ***publications***, ***research*** and ***jobs*** pages and ***navbar titles*** as provided template.

Remember to change both `fa.js` and `en.js` files.

## Authors
Reza Azimifar

<a href="https://rezaexplains.com/">![Static Badge](https://img.shields.io/badge/website%20-%20%23282828?style=for-the-badge&logo=esri&logoColor=%23CCFF00&color=%23282828)</a>
<a href="mailto:azimifar.reza@gmail.com@gmail.com">![Static Badge](https://img.shields.io/badge/Gmail%20-%20%23282828?style=for-the-badge&logo=gmail&color=%23282828)</a>
<a href="https://www.linkedin.com/in/reza-azimifar/">![Static Badge](https://img.shields.io/badge/linkedin%20-%20%23282828?style=for-the-badge&logo=linkedin&logoColor=%230A66C2&color=%23282828)</a>
<a href="https://www.instagram.com/reza.explains/">![Static Badge](https://img.shields.io/badge/instagram%20-%20%23282828?style=for-the-badge&logo=instagram&color=%23282828)</a>