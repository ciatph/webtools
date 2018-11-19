## webtools

A collection of lightweight, static nodejs modules for web front UI end development.

### FILES 

The following NodeJS modules will be installed on run of `npm install`. `webdevtools_static_20181119.7z` from this [external link](https://www.dropbox.com/sh/0hrs30slq8wymmn/AABrIej8xY9RsVY9sCqfjn2Da?dl=0) contains static copies of:

1. browser-sync 2.26.3
2. gulp 3.9.1
3. http-server ^0.11.1


### INSTALLATION

1. Clone this repository, or

2. Alternatively, you can download and extract `webdevtools_static_20181119.7z` which contains all current nodejs modules as of this writing from this [external link](https://www.dropbox.com/sh/0hrs30slq8wymmn/AABrIej8xY9RsVY9sCqfjn2Da?dl=0).

3. Navigate to a (static) web development project directory using the command line.

4. Run `npm install`. 

### USAGE

1. **gulp and browser sync**
	- Update `gulpfile.js` to watch for custom files. 
	- Run `gulp dev` to use `browser-sync`'s live reload
	- NOTE: `gulp` will listen for changes or edits made on the files in its watch list (`gulpfile.js`), and reload the web browser.

2. **http-server**
	- Run `http-server` to load web files from server
	- NOTE: `http-server` serves only static files 

<BR>

@ciatph <br>
**Date created:** 20181118 <br>
**Date modified:** 20181119
