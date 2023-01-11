# HTML Guide

 Detailed guide about HTML5 (all basics for HTML) + templates.

 The code examples in the guide can be found in the listed folders.

-----------------------------------------------------------------------------------------------

## Contents
1. Introduction to HTML
    - 1.1. Different types of websites
    - 1.2. Dynamic and static websites
    - 1.3. Programming languages for web development 
    - 1.4. Software for the creation and presentation of web pages
    - 1.5. Create and view a simple web page
2. Structure of a HTML document
    - 2.1. Syntax and structure of HTML documents
    - 2.2. Basic structure of a simple HTML document
3. The header data of an HTML document
    - 3.1. The HTML elements for the header
    - 3.2. The title element
    - 3.3. The base element
    - 3.4. The link element
    - 3.5. The style element
    - 3.6. The script element
    - 3.7. The meta element
4. The visible area of an HTML document
    - 4.1. The HTML elements for page structuring 
    - 4.2. The HTML elements for text structuring
    - 4.3. Semantic HTML
    - 4.4. HTML elements for text markup
    - 4.5. Character entities in HTML
5. Tables and hyperlinks
    - 5.1. Structuring data in a table
    - 5.2. Hyperlinks with \<a>
      - 5.2.1. The HTML attributes for the \<a> element
6. Graphics and multimedia
    - 6.1. Embedding images with \<img>
    - 6.2. Create image maps
    - 6.3. Load suitable images with \<picture>
    - 6.4. Use icons
    - 6.5. Vector graphics (SVG)
    - 6.6. Drawing graphics with \<canvas>
    - 6.7. Play videos with the \<video> HTML element
    - 6.8. Play audio files with the HTML element \<audio>
    - 6.9. Embedding other active content
7. Forms and interactive elements 
    - 7.1. Define an area for forms
    - 7.2. The HTML input fields for forms
    - 7.3. Special types of input fields
    - 7.4. Interactive HTML elements
    - 7.5. Send form data with PHP
8. Useful websites about HTML

--------------------------------------------------------------------------------------------

# 1. Introduction to HTML
## 1.1. Different types of websites
  * **Web presence (Homepage / Corporate Website)**
    - can be a private homepage or a web presence of companies, associations, authorities or business persons
    - for companies, municipalities and non-profit organizations it is often called a corporate website
    - many small companies and private persons use ready-made systems such as *WordPress* (Content-Management-System)

  * **Blog / online magazine / portfolio**
    - a website with usually chronologically sorted entries, which are separated from each other
    - can also be the start page of a website to display the latest articles or current information
    - online magazines can also be structured in this way
    - many companies and private persons often use ready-made systems like e.g. *WordPress* or *Drupal*
    - there are different blog types e.g. *corporate blog* (official company blog), *microblogging* (Twitter)
    - the installation of a blog software (e.g. *WordPress*) is flexible, because the blog can be extended with many templates and modules
    - portfolio websites are well suited for designers, photographers, artists and creatives, often website themes with minimalistic design
    - Knowledge of PHP and MySQL is an advantage but not necessary when using e.g. [Blogger](https://www.blogger.com) or [tumblr](https://www.tumblr.com) 

  * **E-commerce websites**	
    - in practice, one uses ready-made software, since the effort is less to update or maintain production catalog, and more importantly are much more secure especially with payment transactions
    - with ready-made software, an online store can be set up quite quickly, but there is a long list of legal requirements that must be observed (imprint obligation, terms and conditions, cancellation policy, information on delivery times and prices, etc.)
    - depending on the range of functions, an online store can be expensive, from complete solutions offered by hosting providers to professional webshop software to be installed on a server or webspace
    - frequently used software: Shopify, Magento, WooCommerce or Shopware

  * **Landing page / Microsite**
    - usually consists of only one web page, e.g. to start a test phase for a product
    - the goal is to present all the elements of the product to the visitors of the website, so that they become potential customers
    - such pages are highly optimized for search engines

  * **Web platform - social networks**
    - functionality is often provided by a content management system, typical social network platforms are e.g. Facebook, MySpace or so-called Wiki software
    - in the commercial area a better customer oriented support can be achieved
    - basic idea is that the content of registered users is extended with pictures, texts or graphics etc. to offer a collection of information, as the content is created by the users a moderation is necessary to check and manage the content

  * **Web apps**
    - these are Internet applications with many interaction possibilities, such as a common desktop application
    - such applications do not necessarily have to run in a web browser
    - Advantages can be an improved use and also a faster Perfomance


## 1.2. Dynamic and static websites
### **Static websites**
  - the complete content such as texts, image data is stored unchanged in individual files on the web server
  - the content of such a file is created with HTML
  - in case of changes, the files usually have to be changed manually on the local computer and then uploaded to the webserver again
  - worthwhile for smaller web presences, where changes are rarely necessary 

  * Advantages:
    - costs are lower because no special features (databases, scripting languages) are needed
    - page load and load time may be faster, because page can be returned immediately from the web server as an response to the request
    - Development can be easier and cheaper, but it depends on the size of the project and the knowledge of the user

  * Disadvantages:
    - good knowledge of HTML and co. necessary to update website
    - creation of many single files for static website can be very time consuming

 This is a simplified representation of how a static web page is returned. The web browser first sends a request for a web page to the web server that hosts the web page. The web server finds the page and sends it back to the web server as a response. If it is not found, an error message is returned (status code 404).
 ![Preview](Images/staticWebsite.PNG)


### **Dynamic websites**
  - usually a CMS (Content-Management-System) generates the web pages.
  - content like text and images are usually kept separate from the technical elements like layout or scripting
  - a CMS must be installed in a web server environment to be able to use previously installed script languages like PHP or Python and usually databases like MySQL or PostgreSQL

  * Advantages:
    - updating content and adding new content can be done much more quickly via a web-based user interface.
    - design changes can be made in one central place, usually many templates are available for this purpose, the changes affect all existing web pages at the same time
    - can be maintained without HTML and other programming skills
    - can be managed by several people
    - new functionalities can be added at any time with modules/plug-ins

  * Disadvantages:
    - there are higher costs, because special features like script languages and databases are needed, but not as expensive as a few years ago
    - for creating own modules and plug-ins programming skills are necessary

 This is a simplified representation of how a dynamic web page is created. A web browser makes a request for a web page to a web server. The web server finds the page and passes it to the application server. The application server searches the page for commands and completes the web page. Additionally, instructions for database queries may be included. The database driver then returns the requested record to the application server, where the data is inserted into the web page. The web page is then sent as a response to the web browser.
 ![Preview](Images/dynWebsite.PNG)


## 1.3. Programming languages for web development
 This is an overview of the programming language that a web developer must know.

  * **HTML** (Hypertext Markup Language)
    - is a text-based markup language for structuring electronic documents such as text with hyperlinks, images and other content. HTML documents are the basis of the World Wide Web and are displayed by web browsers. In addition to the content displayed by the browser, HTML files can contain additional details in the form of meta information, e.g. about the languages used in the text, the author or the summarized content of the text --> [W3C](https://www.w3.org/)
  
  * **CSS** (Cascading Style Sheets)
    - It is a design and formatting language used to determine the appearance of HTML documents. So it's about design or style, not the content of a web page. In practice, HTML is used only for structuring the web page, and CSS for formatting and styling. It is possible to include CSS directly in HTML. For large or more web pages it is advantageous to save this in a CSS file, then all web pages can be changed with once.

  * **JavaScript**
    - is the most important client-side scripting language, allowing to extend the limited possibilities of HTML with user interactions

  * **Server-side scripting languages and databases**
	  - common languages for dynamic websites are Python, PHP, Ruby etc., and for databases e.g. MySQL or PostgreSQL
	  - Knowledge in PHP and MySQL can be an advantage for e.g. formmails, guestbooks or surveys


## 1.4. Software for the creation and presentation of web pages
 Basically, on every operating system there is a text editor for creating web pages and a browser for displaying the web page.
  - Windows: Notepad
  - Linux: e.g. gEdit
  - Mac: TextEdit 

 Most web developers use special editors, the advantage is on the one hand the syntax highlighting and many other helpful functions for the creation of web pages.
  - Visual Studio Code --> [VSCode](https://code.visualstudio.com/) (my favorite)
  - Adobe Brackets --> [Adobe Brackets](https://brackets.io/) 
  - Atom --> [Atom](https://atom.io/) 
  - Sublime Text --> [Sublime Text](https://www.sublimetext.com/) 
  - Notepad++ --> for beginners 

 For the display of the HTML document you need a web browser. For testing it is best to use several web browsers, because there are small differences. You should also test the web pages on different devices, such as desktop computer, laptop, tablet and smartphone. In the best case, the display of the website adapts to the devices. This adaptability is called responsive web design. This adaptation does not happen automatically.
  - the main web browsers currently are (largest mart share): Google Chrome, Mozilla Firefox, Safari (Apple) and Edge (Microsoft).
  - Other web browsers (smaller market share): Vivaldi, Opera, Brave 

 The HTML renderer (browser engine) converts the source code into a visible web page.    
| Renderer  | Browser                                                     |
| --------- | ----------------------------------------------------------- |
| Quantum   | Firefox                                                     |
| Webkit    | Safari and all web browsers on iOS                          |
| Blink     | Chrome, Edge, Samsung Internet, Vivaldi, Opera, Brave etc.  |


## 1.5. Create and view a simple web page
  1. open an editor (for the beginning a simple editor is enough), and create a new empty document.
  2. enter HTML code into the editor, example --> *1_IntroductionToHTML/Part_1/index.html*
  3. save HTML code, it is recommended to create a new directory for it. When saving the file, make sure that the file is saved with the file extension *.html*. As encoding *UTF-8* is always good, you can also use *ANSI* for the time being.
  4. The HTML file can now be opened with a browser, usually it is enough to double-click the file and the standard browser opens and displays the file.

**Check HTML-Code**
  - Whether the HTML code or the web page is correct, you can check it, with the online tool  at W3C [Validator](http://validator.w3.org) you can validate the code (in many editors such a function is available or can be integrated later)
  - if the code is error free a green bar is displayed (W3C)
  - If the validation is invalid, the error is listed with a message. An error output does not mean that the web page cannot be displayed, because the web browsers are relatively error tolerant, but it can lead to errors.
  - Many large websites have errors, hardly any site is 100% error free.

 * Advantages to validate the HTML code:
   - the correct display in all browsers, the browsers are relatively error-tolerant but there are differences, especially with mobile devices you should pay attention to it
   - Search engines look for texts and keywords, so that it can be found more easily
   - Accessible websites, incorrect text or structure can cause assistive tools such as read aloud software to not work properly.
   - helpful for beginners to recognize errors quickly and prevents writing unclean code --> a clean code shows quality

-----------------------------------------------------------------------------------------------

# 2. Structure of a HTML document
## 2.1. Syntax and structure of HTML documents
 The HTML document is very structured. A complete *HTML element* usually consists of an opening HTML tag (`<html>`), a closing HTML tag (`</html>`) and everything in between. As *HTML- element* is usually called everything that stands between the tags. So the *HTML elements* ("headline") are marked by *HTML tags* (`<h1>` and `</h1>`).
  - everything between `<html>` and `</html>` (root element) is the HTML code for the HTML document
  - between `<head>` and `</head>` the header data of the HTML document is summarized
  - the part visible in the web browser is between `<body>` and `</body>`
  - between `<h1>` and `</h1>` is a 1st order heading
  - between `<h2>` and `</h2>` there is a 2nd order heading
  - between `<p>` and `</p>` there is a normal paragraph
  
  example --> *2_StructureOfaHTMLdocument/Part_1/index.html*

   ```
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
      </head>
      <body>
        <h1>Headline</h1>
        <p>Here is a usual paragraph text.</p>
        <h2>A subheading</h2>
        <p>Another paragraph with text.</p>
      </body>
    </html>
   ```
  ![Preview](2_StructureOfaHTMLdocument/Images/Preview_2_1.PNG)

 The HTML code of an HTML document consists of pure text. A web browser creates a model from this in the form of a tree structure of objects such as HTML elements, attributes, and texts. This is called a **Document Object Model (DOM)**. Each object in it is called a **node** and can be manipulated via a public interface using JavaScript. This DOM tree can be viewed in the browser, using developer tools provided by the browser.

 ![Preview](Images/DOM_Inspector.PNG)


Most HTML elements can be nested and contain other HTML elements, creating a hierarchical structure.
  - Here, within the paragraph, the b element has been nested (b = bold). **b** is the child element of **p** and **p** is the child element of **body**. **html** is the parent element of **body**. In this example, **b** is the child-child-child element of **html**.
  - Complex HTML documents contain a lot of nesting.
  - It is important to avoid incorrect nesting, otherwise the web page can be displayed incorrectly and it becomes very confusing.

  example --> *2_StructureOfaHTMLdocument/Part_2/index.html*

   ```
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
      </head>
      <body>
        <p>Here is an <b>usual</b> paragraph text.</p>
    </body>
  </html>
   ```
  ![Preview](2_StructureOfaHTMLdocument/Images/Preview_2_2.PNG)

 Some HTML elements are standalone tags (void tags) that have no content e.g. `<br>` (which creates a line break), but this should not be abused, to increase the spacing between lines use CSS.

 HTML elements can contain additional attributes (properties). These can be used to specify additional information about an element. Attributes can be used only with start tags.
  - with the attribute `lang="en"` you specify the language that will be used
  - the `<a>...</a>` element defines a hyperlink to another page, at `href` you specify the URL to navigate to 
  - the standalone tag `<img>` can be used to display images, `src` specifies the location of the image, alt specifies the alternative text if the image cannot be displayed

  example --> *2_StructureOfaHTMLdocument/Part_3/index.html*

   ```
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
      </head>
      <body>
        <p lang="en">   <!-- lang = language -->
          Please <a href="https://www.google.com/">click</a> here
        </p>
        <p>
          <img src="GoogleCover.png" alt="Google-Cover" />
        </p>
      </body>
    </html>
   ```
  ![Preview](2_StructureOfaHTMLdocument/Images/Preview_2_3.PNG)

 There is the possibility to leave comments within the HTML document, these are helpful to understand the code later, if you forget something. Comments are not visible on the web page in the browser but in the source code, which everyone can see.
  - this is how a comment is created, everything between the characters is the comment and is not visible on the web page:
   ```
    <!-- comment --> 
   ```

## 2.2. Basic structure of a simple HTML document

   ```
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
      </head>
      <body>
        <!-- Visible area of the web page in the browser -->
    </body>
  </html>
   ```

### **\<!doctype html>**
  - is the first specification in an HTML document, and not an HTML tag but an instruction
  - it is an instruction for the web browser, in which HTML version the web page was created 

### **\<html> ... \</html>**
  - informs the web browser that there is HTML code present
  - it encloses all other elements in the HTML code (except `<!doctype html>`)
  - there you can also specify the language `lang="en "` (very helpful for accessibility)

### **\<head> ... \</head>**
  - here information is given which is evaluated by the web browser and search engines e.g. scripts, stylesheets, meta information with information about the HTML document.  
  - the `<title> ... </title>` specifies only the title of the web page that can be seen in the browser

### **\<body> ... \</body>**
  - the body element is the displayable area of an HTML document
  - everything contained in it, such as texts, images, hyperlinks or tables is displayed in the browser


------------------------------------------------------------------------------------------------

# 3. The header data of an HTML document
## 3.1. The HTML elements for the header
 Between `<head>` and `</head>` different HTML elements can be inserted, with which the contents and the representation can be controlled. Relationships between the web browser and other pages or documents can also be established there. The content in the header (except **title**) is not displayed in the browser. The **head** element must follow directly after the open **html** element. The only specification in the **head** area that should always be made is the **title** element.. 

| HTML element            | Explanation                                                           |
|------------------------ | --------------------------------------------------------------------- |
| `<title>...</title>`    | the **title** of the HTML document (visible in the browser) |
| `<base>`                | sets base URLs / targets for all relative URLs in a web page |
| `<link>`                | sets logical links of the HTML document to other files to be included |
| `<style>...</style>`    | sets the local stylesheet rules for the HTML document |
| `<script>...<script>`   | includes the client-side scripts, may also be used outside the **head** element |
| `<meta>`                | sets the metadata like keywords, descriptions or the character set for the HTML document |

   ```
    <!doctype html>
    <html>
      <head>
        <base href="https://www.website.com/" target="_blank">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
          body {background-color: green;}
        </style>
        <script src="ajax_libs_jquery_3.5.js"></script>
        <meta name="keywords" content="HTML, CSS">
        <meta name="description" content="Free Web tutorials for HTML">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Website title</title>
      </head>
      <body>
        <!-- Visible area of the web page in the browser -->
      </body>
    </html>
   ```
The complete explanations for each tag will be given in the next chapters, these are just examples, at this point you don't need to understand it all.


## 3.2. The title element 
 A title should be used in each HTML document, which is displayed in the browser header. Only one title element can be used per HTML document. The title element can be skipped, but the web page will not be considered valid. The title element serves the user e.g. if the page is saved as a bookmark, then the title is displayed as a name suggestion. And most importantly, the title has a high importance in search engines, because it is what the user sees first in the search engine when the pages are listed. 
 
  example --> *3_TheHeader/Part_1/index.html*

   ```
    <head>
      <meta charset="UTF-8">
      <title>The heading of the HTML page</title>
    </head>
   ```
 ![Preview](Images/BrowserTitle.PNG)


## 3.3. The base element
The base-element specifies a base URL or base target for all relative URLs in an HTML document. By defining such a base URL, a relative or absolute address to the file can be used in the document as if it were located directly on the same host or computer. Can be used only once in the HTML document.

  example --> *3_TheHeader/Part_2/index.html*  (source [w3school](https://www.w3schools.com/tags/tag_base.asp) )

   ```
      <head>
        <base href="https://www.w3schools.com/" target="_blank">
      </head>
   ```

| Attributes | Explanation                                                                            |
| ---------- | -------------------------------------------------------------------------------------- |
| `href`     | The base URL is defined in the process. This URL is used by the web browser as the base address for relative and absolute path specifications in the document and is supplemented with this base URL.   |
| `target`   | This attribute is used to specify the target window in which the link target should be displayed. Possible values and their meaning are:                                                                        |
| `_self`    | opens the link in the current window, is the default setting when `target` is not used             |
| `_blank`   | opens the link in a new window or tab                                                              |
| `_parent`  | opens the reference in the parent window: is the window from which the current window was opened   |
| `_top`     | loads the reference of the file in the highest hierarchy in the window			                        |


## 3.4. The link element
 The link element is a stand-alone tag that may be used multiple times in the HTML document. In practice, it is often used to include an external CSS file, and other files. The relationship between the HTML document and the external document is specified with the HTML attribute `rel`.
 
  example --> *3_TheHeader/Part_3/index.html*

   ```
    <head>
      <title>Logical linking with link</title>
      <link rel="stylesheet" type="text/css" href="style.css">
      <meta charset="UTF-8">
    </head>
   ```

| Attributes  | Explanation                                                                     |
| ----------- | -------------------------------------------------------------------------------- |
| `href`    | Here the URL to the resource to be linked is specified, this attribute must be used. |
| `hreflang`| Defines the language of the resource to be linked |
| `media`   | Here you specify for which medium/device the target resource is optimized in `href`. |
| `size`    | Specifies the size for the resource to be linked, e.g. `rel="icon" size="any "`. |
| `type`    | This specifies the *MIME type* for the document to be linked e.g. `type="text/css "`. |
| `rel`     | This sets the relationship between the current document and the external resource in `href`. Possible values are: |
| `alternate`    | links to an alternative presentation form of the current page |
| `author`       | links to another page with information about the author |
| `mailto`       | link to an e-mail address of the author |
| `archives`     | links to a previous version of certain documents |
| `help`         | links to a help document |
| `icon`         | this assigns a favicon to the web page |
| `license`      | links the current page, with the page of the rights of use for the contents of the page |
| `next`, `pref` | is used to create a link from the current or previous page |
| `prefetch`  | links to an external web page that the user is likely to visit next |
| `pingback`  | the website of a pingback server is specified here |
| `search`    | links the current document to another document where the search is possible through the whole web page |
| `stylesheet `| links an external CSS file to the current HTML document |
| `tag`       | a simple tag as a linked resource that applies to the current document |


## 3.5. The style element
 This element can be used to include style information (CSS) within the HTML document.
 
  example --> *3_TheHeader/Part_4/index.html*

   ```
    <head>
      <style type="text/css">
       p { 
          width: 200px;
          padding: 10px;
          border: 5px solid green;
          background-color :greenyellow;
          text-align: center;
        }
      </style>
      <title>The style element in action</title>
      <meta charset="UTF-8">
    </head>
   ```
 ![Preview](3_TheHeader/Images/Preview_3_4.PNG)

| Attributes  | Explanation                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| `media`   | Here you specify for which medium/device the target resource is optimized in `href`. |
| `type`    | This specifies the *MIME type* for the document to be linked e.g. `type="text/css "`. |


## 3.6. The script element
 This element is used to include scripts in a document. The script can either be included directly in the HTML document between `<script>...</script>`, or an external script with the src attribute.

  example --> *3_TheHeader/Part_5/indexA.html*

   ```
    <head>
      <title>Use the script element</title>
      <script type="text/javascript">
 
         window.onload=alert("JavaScript!")

      </script>
      <meta charset="UTF-8">
    </head>
   ```

  example --> *3_TheHeader/Part_5/indexB.html* --> external script

   ```
    <head>
      <title>Use the script element</title>
      <script type="text/javascript" src="script.js"></script>
      <meta charset="UTF-8">
    </head>
   ```

| Attributes  | Explanation                                                                |
| ----------- | -------------------------------------------------------------------------- |
| `async`       | the script is executed asynchronously with the HTML document, can only be used for external scripts |
| `charset`     | lsets the character encoding for the external script			 				|
| `defer`       | the web page is parsed first and then the script is executed, can only be used for external scripts |
| `src`         | this specifies the URL to the external script								|
| `type`        | this specifies the *MIME type* for the document to be linked e.g. `type="text/javascript"`.   |


## 3.7. The meta element
 This can be used to record additional information or data about the HTML document. This can be instructions for the web browser, the web server or a web crawler. This information is optional but often included. There are many such attributes, and many of these are not uniformly standardized. A meta element usually consists of two attributes (`http-equiv, name/content`).

   ```
    <meta http-equiv="refresh" content="5">
   ```

### **The most used meta tags**
 - The HTML attribute `name` can contain any amount of information in the `content`. But some default metadata for `name` has been defined. The `name/content` combination is not meant for personal information, but about the HTML document. The `keyword` is important for search engines. 

   ```
    <head>
      <meta name="author" content="John Doe">
      <meta name="keywords" content="HTML, meta data">
    </head>
   ```
 
 - The `http-equiv` specification is for the web browser to communicate with, but web servers don't actually parse HTML documents, so it's up to the browser who processes the specification.

  example --> *3_TheHeader/Part_6/indexA.html* 

   ```
    <head>
      <meta http-equiv="refresh" content="5">
    </head>
   ```
     
 - This specification should be used if the web page was not created in English to be able to display special characters.

  example --> *3_TheHeader/Part_6/indexB.html* 

   ```
    <head>
      <meta charset="UTF-8">
    </head>
   ```

### **The viewport**
 - is the area of the browser window in which the webinahlte are displayed. In order for the web page to be displayed properly on a mobile device, we need this specification (responsive web design)
 - `initial-scale=1.0` ensures that the browser displays the page with the normal zoom level.

   ```
    <head>
      <meta name="viewport" content="width-device-width" initial-scale=1.0 >
    </head>
   ```

### **Webcrawler**
 - This allows the search robot to include the web page in the search engine index and follow the hyperlink. However, it can be omitted because that is the usual behavior of a web crawler.

   ```
    <head>
      <meta name="robots" content="index,follow">
    </head>
   ```

 - This specifies the web page should not be included in the search engine index area. 

   ```
    <head>
      <meta name="robots" content="noindex">
    </head>
   ```

### **Helpful metadata for search engines**
 - For search engines `name` values have special meaning `keywords` and `description`. However, `keywords` has not so great importance anymore, in addition much abuse and the search engines the complete side after contents examines. `keywords` should still be specified because if the page is found, the search engine displays this text, if no specification of `keywords` then the search engine looks for any text of the page.

   ```
    <head>
      <meta name="keywords" content="html, meta, tutorial">
    </head>
   ```

### **These meta data should be present in a HTML framework**
 - finally it is up to everyone which are needed, these should at least be included

   ```
    <head>
      <meta charset="UTF-8">
      <meta name="description" content="A description should be as short and precise as possible. 
      It should explain in 2-3 sentences what this page is about.">
      <meta name="viewport" content="width-device-width" initial-scale=1.0 >       
    </head>
   ``` 

 The HTML attributes for the HTML element **\<meta>**
| Attributes   | Explanation                                                                        |
| ------------ | ---------------------------------------------------------------------------------- |
| `content`    | passes the value associated with the attribute of `http-equiv` or `name`					  |
| `charset`    | sets the character encoding for the HTML document				 						              |
| `http-equiv` | is used for the HTTP response header. Some possible values are: `content-language`, `content-type`, `default-style`, `refresh`	|
| `name`       | defines a name for the metadata. Some default values are: `application-name`, `author`, `description`, `generator`, `keywords`	|


------------------------------------------------------------------------------------------

# 4. The visible area of an HTML document
## 4.1. The HTML elements for page structuring
 These elements are needed to divide the web page into meaningful areas. The content model was introduced to combat the rampant use of *div* elements with *class* attributes.

| HTML elements  | Explanation                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `<body>`       | displayable area of the HTML document, visible on the web page 						 |
| `<section>`    | divides the HTML document into different sections				 					         |
| `<article>`    | subdivision of content into a self-contained topic-specific block		       |
| `<aside>`      | used for marginal information of a content like a sidebar or additional information about an article  |
| `<nav>`        | elements used to mark up navigation such as a sitemap or the main navigation of a web page				  |
| `<h1>` - `<h6>`| headings of the 1st - 6th order												                    |
| `<header>`     | header of a content													                              |
| `<footer>`     | footer of a content													                              |	
| `<address>`    | contact information about the author of the content											  |

### **\<body>**
  - everything between `<body> ... </body>`, is called the document body
  - all HTML elements such as text, hyperlinks, images, tables or lists are displayed there to define the structure of the web page
  - all elements in the document body are rendered by the web browser and displayed accordingly

### **\<section>**
  - this element is initially used only to divide the content into semantic sections
  - mainly serve to give meaning to the content, especially helpful for developers, search engines and screen readers
  - the content is divided into topic-related sections, helpful when creating individual chapters or subchapters
  
  example --> *4_TheBody/Part_1/index.html*

   ```
      <body>
        <section>
        <h1>Chapter 1</h1>
        <p>The first chapter</p>
        </section>
        <section>
          <h1>Chapter 2</h1>
          <p>The second chapter</p>
          <section>
            <h2>Chapter 2.1</h2>
            <p>A subchapter of chapter 2</p>
          </section>
        </section>
      </body>
   ```
  ![Preview](4_TheBody/Images/Preview_4_1.PNG)

### **\<article>**
  - should be used to summarize content in a self-contained topic-specific block
  - is relatively similar to `<section>`, however `<article>` should be used for self-contained sections, such as news item

  example --> *4_TheBody/Part_2/index.html*

   ```
      <body>
      <h1>My blog</h1>
      <p>Latest HTML reports</p>
      <article>
        <header>
          <h2>HTML5.3</h2>
        </header>
        <p>Published on <time>2018-05-05</time></p>
        <footer>
          <a href="comments.html">Show comments...</a>
        </footer>
      </article>
      </body>
   ```
  ![Preview](4_TheBody/Images/Preview_4_2.PNG)

### **\<aside>**
  - can usually supplement or extend content with additional information
  - can be used either for a sidebar or additional information (e.g. citation) within an `<article>` element

  example --> *4_TheBody/Part_3/indexB.html*
  ![Preview](4_TheBody/Images/Preview_4_3B.PNG)

  example --> *4_TheBody/Part_3/indexA.html*

   ```
      <body>
      <h1>My blog</h1>
      <p>Latest HTML reports</p>
      <article>
        <header>
          <h2>HTML5.3</h2>
        </header>
        <p>Published on <time>2018-05-05</time></p>
        <p>As already suspected ...</p>
        <footer>
          <a href="comments.html">Show comments...</a>
        </footer>
      </article>
      <aside>
      <h3>Partner websites</h3>
        <ul>
          <li><a href="#">Blog XY</a></li>
          <li><a href="#">Magazin X</a></li>
         <li><a href="#">Website Z</a></li>
        </ul>
      </aside>
      </body>
   ```
  ![Preview](4_TheBody/Images/Preview_4_3A.PNG)

### **\<nav>**
  - this can be used to split navigation elements into blocks e.g. for the main navigation or a list of links for a sitemap
  - should be used when whole blocks of links are needed

  example --> *4_TheBody/Part_4/index.html*

   ```
      <body>
      <nav>
        <a href="#">Blog</a> |
        <a href="#">Links</a> |
        <a href="#">About me</a> |
        <a href="#">Legal Notice</a>
      </nav>
      <h1>My blog</h1>
      <p>Latest HTML reports</p>
      <article>
        <header>
          <h2>HTML5.3</h2>
        </header>
        <p>Published on <time>2018-05-05</time></p>
        <p>As already suspected ...</p>
        <aside>
        <h3>Related articles</h3>
          <nav>
          <ul>
            <li><a href="#">HTML5.4 will not exist</a></li>
            <li><a href="#">W3C and WHATWG disagree</a></li>
            <li><a href="#">What comes after HTML5?</a></li>
          </ul>
          </nav>
        </aside>
        <footer>
          <a href="comments.html">Show comments...</a>
        </footer>
      </article>
      <aside>
      <h3>Sitemap</h3>
        <nav>
        <ul>
          <li><a href="#">Blog</a>
          <ul>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
          </li>
          <li><a href="#">Links</a></li>
          <li><a href="#">About me</a>
          <ul>
            <li><a href="#">Vita</a></li>
            <li><a href="#">Portfolio</a></li>
          </ul>
          </li>
          <li><a href="#">Legal Notic</a></li>
        </ul>
        </nav>
      </aside>
      </body>
   ```
  ![Preview](4_TheBody/Images/Preview_4_4.PNG)

### **\<h1> - \<h6>**
  - is used for headings, this element is used to define the content structure of a document

  example --> *4_TheBody/Part_5/indexA.html*

   ```
      <body>
      <h1>My blog</h1>
      <p>A simple blog...</p>
        <h2>HTML News</h2>
          <h3>A preview of HTML5.3</h3>
          <p>It looks like it ...</p>
        <h2>CSS News</h2>
          <h3>New styles</h3>
          <p>After a long period of development ...</p>
      </body>
   ```
  ![Preview](4_TheBody/Images/Preview_4_5A.PNG)

  - Outline: is the name for the structure of the document
	 - [HTML5 Outliner](https://h5o.github.io) 
	 - [Validation check](https://validator.w3.org/nu/#textarea)
  example --> *4_TheBody/Part_5/indexB.html*

  ![Preview](4_TheBody/Images/Preview_4_5B.PNG)

### **\<header> and \<footer>**
 - is responsible for the header and footer of an HTML document
 - in the `<header>` can be other elements, but to nest another `<header>` in it is not optimal, but can be used several times in the document, the `<header>` does not have to be the first element 
 - `<footer>` does not have to be the last element in the document, it usually contains legal information, legal notice, contact information, no other element can be used inside the `<footer>`

  example --> *4_TheBody/Part_6/index.html*

   ```
      <body>
      <header>
        <hr />
        <small>Blog version 1.0</small>
        <h1>My blog</h1>
        <p>A simple blog...</p>
        <hr />
      </header>
      <h2>HTML News</h2>
      <article>
        <h3>New HTML elements</h3>
        <p>It looks like ...</p>
      </article>
      <footer>
        <hr />
        <a href="#">Information</a> |
        <a href="#">Legal Notice</a> |
        <a href="#">Contact</a> |
        <a href="#">About me</a>    <hr/>
      </footer>
      </body>
   ```
  ![Preview](4_TheBody/Images/Preview_4_6.PNG)

### **\<address>** 
  - should be used exclusively for contact information about the author, it is best to use it in the `<footer>` element

  example --> *4_TheBody/Part_7/index.html*

   ```
      <body>
      <header>
        <hr />
        <small>Blog version 1.0</small>
        <h1>My blog</h1>
        <p>A simple blog...</p>
        <hr />
      </header>
      <h2>HTML News</h2>
      <article>
        <h3>New HTML elements</h3>
        <p>It looks like ...</p>
	      <footer>
          <address>The article was created by:<br>
            Rick Sample<br>
            Samplestreet 1234<br>
            12345 Sampletown<br>
		        www.website.com
          </address>
        </footer>
      </article>
      <footer>
        <hr />
        <a href="#">Information</a> |
        <a href="#">Legal Notice</a> |
        <a href="#">Contact</a> |
        <a href="#">About me</a>    <hr />
      </footer>
      </body>
   ```
  ![Preview](4_TheBody/Images/Preview_4_7.PNG)

## 4.2. The HTML elements for text structuring 
 These elements are used to structure plain text content. 

| HTML elements | Explanation                                             |
| ------------- | ------------------------------------------------------- |
| `<p>`          | Text paragraph 								                        |
| `<br>`         | Line break 								                            |
| `<wbr>`        | optional line break within a word 			                |
| `<hr>`         | thematic separation at the paragraph level 				    |
| `<blockquote>` | Quote in the form of a text paragraph 					        |
| `<div>`        | Define a general area 					                        |
| `<main>`       | should be used for a main content area of a web page   |
| `<figure>`     | group or combine content for separate description      |
| `<figcaption>` | labeling content grouped with the `figure` element     |
| `<ul>`         | unordered bulleted list 						                    |
| `<ol>`         | ordered list (usually numbered) 					              |
| `<li>`         | a list element in an `ul` or `ol` list 				        |
| `<dl>`         | a description list with `dt` and `dd` elements 			  |
| `<dt>`        | the expression to describe before the `dd` element 			|
| `<dd>`         | the description that follows after the `dt` element 	  |


### **\<p>**
  - is used with text paragraphs, everything written between `<p> ... </p>` is treated as a text paragraph
  - images, videoss or audios or other text markup can also be used within them
  - cannot be used within the *p elements* other group elements, headings or section elements

  example --> *4_TheBody/Part_8/index.html*

   ```
      <h2>HTML News</h2>
      <article>
          <h3>New HTML elements</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget 
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p>
          <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus 
          elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat 
          a, tellus. </p>
      </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_8.PNG)

### **\<br>**
  - is needed to force a line break

  example --> *4_TheBody/Part_9/index.html*

   ```
      <address>
      Rick Sample<br>
      Sampletown<br>
      www.address.com    
      </address>
   ```
  ![Preview](4_TheBody/Images/Preview_4_9.PNG)

### **\<wbr>**
  - is needed to force an optional line break e.g. for an optimal display in the web browser
   ```
      <p>To learn AJAX, you must be familiar with the XML<wbr>Http<wbr>Request Object.</p>
   ``` 

 A commonly used entity in HTML is the non-breaking space: \&nbsp;. A non-breaking space is a space that will not break into a new line. Two words separated by a non-breaking space will stick together (not break into a new line). This is handy when breaking the words might be disruptive.

   ```
       <p>word1&nbsp;&nbsp;&nbsp;word2</p>
   ```

### **\<hr>**
  - this creates a thematic separation, e.g. to separate a content more clearly from each other

  example --> *4_TheBody/Part_10/index.html*

   ```
      <article>
        <h3>New HTML elements</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget 
        dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretiumquis, sem. Nulla 
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, 
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p>
        <hr />
      </article>
      <article>
        <h3>Finally implemented</h3>
        <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus 
        elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, 
        consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,viverra quis, feugiat 
        a, tellus. </p>
        <hr />
      </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_10.PNG)

### **\<blockquote>**
  - here usually a text is quoted from another source.
  - the `<blockquote>` contains a `cite` attribute, this indicates the source of the quote, but unfortunately it is not yet visible in the web browser and therefore the source should be added to the web page additionally

  example --> *4_TheBody/Part_11/index.html*

   ```
      <article>
          <h3>New HTML elements</h3>
          <p>Lorem ipsum dolor sit amet, <q>consectetuer adipiscing</q> elit. Aenean commodo ligula 
          eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
              eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla 
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
              venenatis vitae, justo. </p>
          <blockquote cite="https://www.blindtextgenerator.com/">
              Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, 
              vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
              <small> - https://www.blindtextgenerator.com/ - </small>
          </blockquote>
      </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_11.PNG)

### **\<div>**
  - here a general area is defined, this causes first only a new line
  - it has real meaning only with CSS to define layout areas
  - the div element should only be used if there is no suitable HTML element, it is better to use semantic HTML e.g. header, nav, section, article, footer
  - can be used several times in the document

  example --> *4_TheBody/Part_12/indexB.html*
  ![Preview](4_TheBody/Images/Preview_4_12B.PNG)

  example --> *4_TheBody/Part_12/indexA.html*

   ```
      <body>
          <div class="header">
              <hr />
              <h1>My blog</h1>
              <p>A simple blog...</p>
              <hr />
          </div>
          <h2>HTML News</h2>
          <div class="article">
              <h3>New HTML elements</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
               dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet 
                  nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, 
                  justo. </p>
          </div>
          <div class="footer">
              <hr />
              <a href="#">Information</a> |
              <a href="#">Legal Notice</a> |
              <a href="#">Contact</a> |
              <a href="#">About me</a>
              <hr />
          </div>
      </body>
   ```
  ![Preview](4_TheBody/Images/Preview_4_12A.PNG)

### **\<main>**
  - is used in practice for the main content of a web page, should not be used within section, article elements etc.
  - usually behaves like a div element, but should be used only once in the document
  - is not a section element (`<section>`) but a pure grouping element
  
  example --> *4_TheBody/Part_13/index.html*

   ```
      <body>
      <header>
        <h1>My blog</h1>
        <p>A simple blog...</p>
      </header>
      <main>
        <h2>HTML News</h2>
        <article>
          <h3>HTML5.3</h3>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget 
          dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p>
        </article>
      </main>
      <footer>
        <a href="#">Information</a> |
        <a href="#">Legal Notice</a> |
        <a href="#">Contact</a> |
        <a href="#">About me</a>
      </footer>
      </body>
   ```
  ![Preview](4_TheBody/Images/Preview_4_13.PNG)

### **\<figure> and \<figcaption>**
  - the `figure` element is used when content such as images, text, lists, tables or other HTML elements should stand out from the usual continuous text
  - for an additional optional caption `figcaption` is used

  example --> *4_TheBody/Part_14/index.html*

   ```
      <article>
          <h3>figure and figcaption in use</h3>
          <p>The text before figure...</p>
          <figure>
              <img src="nature5.jpg" alt="nature" />
              <figcaption>Figure 1: Once upon a time ...</figcaption>
          </figure>
          <p>The text according to figure</p>
      </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_14.PNG)

### **\<ul> and \<li>**
  - an unordered list in which all entries are marked with a bullet point
  - Web browsers usually display these bullets with bullet points 
  - lists can be nested

  example --> *4_TheBody/Part_15/index.html*

   ```
      <article>
          <h2>Unordered bulleted list with ul</h2>
          <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Donec quam felis ultricies</li>
              <li>Nulla consequat massa quis </li>
              <li>Etiam ultricies nisi vel</li>
              <li>Donec vitae sapien ut libero</li>
          </ul>
      </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_15_1.PNG)

### **\<ol> and \<li>**
  - `<ol>` is needed for ordered lists
  - they are numbered lists, in which the individual `<li>` elements are automaitsch numbered
  - lists can be nested

  example --> *4_TheBody/Part_15/index.html*

   ```
    <article>
        <h2>Numbered enumeration list with ol</h2>
        <ol>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Donec quam felis ultricies</li>
          <li>Nulla consequat massa quis </li>
          <li>Etiam ultricies nisi vel</li>
          <li>Donec vitae sapien ut libero</li>
        </ol>
    </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_15_2.PNG)

* It is possible to reverse the numbering with HTML attribute `reversed`, then the numbering will be displayed in descending order.

  example --> *4_TheBody/Part_15/index.html* 

   ```
    <article>
      <h2>Invert numbered enumeration list</h2>
      <ol reversed="reversed">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Donec quam felis ultricies</li>
        <li>Nulla consequat massa quis </li>
        <li>Etiam ultricies nisi vel</li>
        <li>Donec vitae sapien ut libero</li>
      </ol>
    </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_15_3.PNG)

* with the HTML attribute `start` the start value of the first `<li>` element, the following numberings are increased by 1
* within the `<li>` element it is also possible with the HTML attribute `value`

  example --> *4_TheBody/Part_15/index.html*

   ```
      <article>
        <h2>Change enumeration list numbering</h2>
        <ol start="20">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Donec quam felis ultricies</li>
            <li>Nulla consequat massa quis </li>
            <li value="101">Etiam ultricies nisi vel</li>
            <li>Donec vitae sapien ut libero</li>
        </ol>
      </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_15_4.PNG)

### **\<dl>, \<dt>, \<dd>**
  - with this, description lists are created
  - often used for glossaries, listing of special metadata and values

  example --> *4_TheBody/Part_15/index.html*

   ```
    <article>
        <h2>Description lists with dl, dt and dd</h2>
        <h3>List of abbreviations</h3>
          <dl>
            <dt>4U</dt>
            <dd>For you</dd>
            <dt>ACK</dt>
            <dd>Acknowledgment</dd>
            <dt>ASAP</dt>
            <dd>As soon as possible</dd>
            <dt>FYI</dt>
            <dd>For your information</dd>
          </dl>
    </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_15_5.PNG)

## 4.3. Semantic HTML
  - semantic web pages help search engines (Google prefers semantic web pages)
  - with `<div>` it is possible to create semantic web pages, but it is not standardtized structuring (due to different IDs and class names)
  - the div - element can still be used but only if no semantic element (header, nav, section etc.) fits
  - e.g. the screenreader does not recognize by the ID whether it is a navigation bar on the web page with `<div id="nav">` but only so `<nav>` 

### HTML document without precise structure
  - example --> *4_TheBody/Part_16/index.html*

   ```
      <body>
      <h1>My blog</h1>
      <p>A blog about web development ...</p>
      <p>Navigation: 
        <a href="#">Blog</a> |
        <a href="#">Information</a> |
        <a href="#">Contact</a> |
        <a href="#">About me</a>
      </p>
      <h2>Old posts</h2>
      <ul>
        <li><a href="#">Last Week</a></li>
        <li><a href="#">Archive</a></li>
      </ul>
      <h2>How to structure web pages?</h2>
      <p>HTML documents are structured ...</p>
      <h3>Similar topics</h3>
      <ul>
        <li><a href="#">Styling web pages with CSS</a></li>
        <li><a href="#">Functionality with JavaScript</a></li>
      </ul>
      <p> 
        <a href="#">Information</a> |
        <a href="#">Legal Notice</a> |
        <a href="#">Contact</a> |
        <a href="#">About me</a>
      </p>
      </body>
   ```
  ![Preview](4_TheBody/Images/Preview_4_16.PNG)

### Generic structuring with \<div>
  - example --> *4_TheBody/Part_17/indexB.html* 

   ```
      <body>
        <div id="header">
          <h1>My blog</h1>
          <p>A blog about web development ...</p>
        </div>
        <div id="navigation">
          <p>Navigation: 
            <a href="#">Blog</a> |
            <a href="#">Information</a> |
            <a href="#">Contact</a> |
            <a href="#">About me</a>
          </p>
        </div>
        <div id="sidebar">
          <h2>Old posts</h2>
          <ul>
            <li><a href="#">Last Week</a></li>
            <li><a href="#">Archive</a></li>
          </ul>
        </div>
        <div id="content">
          <h2>How to structure web pages?</h2>
          <p>HTML documents are structured ...</p>
          <h3>Similar topics</h3>
          <ul>
            <li><a href="#">Styling web pages with CSS</a></li>
            <li><a href="#">Functionality with JavaScript</a></li>
          </ul>
        </div>
        <div id="footer">
          <p> 
            <a href="#">Information</a> |
            <a href="#">Legal Notice</a> |
            <a href="#">Contact</a> |
            <a href="#">About me</a>
          </p>
        </div>
      </body>
   ```
![Preview](4_TheBody/Images/Preview_4_17B.PNG)

  - example --> *4_TheBody/Part_17/indexA.html* 

   ```
      <body>
      <div>
      <h1>My blog</h1>
      <p>A blog about web development ...</p>
      </div>
      <div>
      <p>Navigation: 
        <a href="#">Blog</a> |
        <a href="#">Information</a> |
        <a href="#">Contact</a> |
        <a href="#">About me</a>
      </p>
      </div>
      <div>
      <h2>Old posts</h2>
      <ul>
        <li><a href="#">Last Week</a></li>
        <li><a href="#">Archive</a></li>
      </ul>
      </div>
      <div>
      <h2>How to structure web pages?</h2>
      <p>HTML documents are structured ...</p>
      <h3>Similar topics</h3>
      <ul>
        <li><a href="#">Styling web pages with CSS</a></li>
        <li><a href="#">Functionality with JavaScript</a></li>
      </ul>
      </div>
      <div>
      <p> 
        <a href="#">Information</a> |
        <a href="#">Legal Notice</a> |
        <a href="#">Contact</a> |
        <a href="#">About me</a>
      </p>
      </div>
      </body>
   ```
![Preview](4_TheBody/Images/Preview_4_17A.PNG)

### semantically structured web pages
  - example --> *4_TheBody/Part_18/index.html* 

   ```
      <body>
          <header>
              <h1>My blog</h1>
              <p>A blog about web development ...</p>
          </header>
          <nav>
              <p>Navigation:
                  <a href="#">Blog</a> |
                  <a href="#">Information</a> |
                  <a href="#">Contact</a> |
                  <a href="#">About me</a>
              </p>
          </nav>
          <aside>
              <h2>Old posts</h2>
              <ul>
                  <li><a href="#">Last Week</a></li>
                  <li><a href="#">Archive</a></li>
              </ul>
          </aside>
          <main>
              <article>
                  <h2>How to structure web pages?</h2>
                  <p>HTML documents are structured ...</p>
                  <h3>Similar topics</h3>
                  <ul>
                      <li><a href="#">Styling web pages with CSS</a></li>
                      <li><a href="#">Functionality with JavaScript</a></li>
                  </ul>
              </article>
          </main>
          <footer>
              <p>
                  <a href="#">Information</a> |
                  <a href="#">Legal Notice</a> |
                  <a href="#">Contact</a> |
                  <a href="#">About me</a>
              </p>
          </footer>
      </body>
   ```
![Preview](4_TheBody/Images/Preview_4_18.PNG)

## 4.4. HTML elements for text markup
 These are elements that are used within a plain text for single letters, words or parts of sentences to change them slightly visually. Even though text formatting with these elements is possible via HTML, CSS is responsible for the actual text formatting.

| HTML elements           | Explanation                                                              |
| ----------------------- | ------------------------------------------------------------------------ |
| `<abbr>`                | Mark abbreviations or acronyms                                           |
| `<cite>`                | Mark text as source text of a working title                              |
| `<code>`                | Mark up computer code within a paragraph of text                         |
| `<pre>`                 | Mark up preformatted text. All spaces and line breaks are displayed as specified in the text |
| `<kbd>`                 | Mark up text as keyboard input                                           |
| `<samp>`                | Mark up text as screen output of a program                               |
| `<dfn>`                 | define a term                                                            |
| `<var>`                 | Mark up text as a variable                                               |
| `<bdo>`        	        | Change text direction for bidirectional text                             |
| `<bdi>`         	      | Define area for bidirectional text                                       |
| `<em>`         	        | Highlight text that would emphasize when speaking                        |
| `<strong>`              | Highlight words or passages that are particularly important in terms of content |
| `<i>`         		      | to mark words or passages with technical terms, thoughts, foreign words  |
| `<b>`         		      | for marking meaningful names or keywords                                 |
| `<mark>`         	      | Highlight text with a marker                                             |
| `<q>`         		      | Mark words or passages as quotation or spoken text                       |
| `<u>`         		      | Mark up text as proper noun underlining or incorrect words or passages   |
| `<s>`         		      | Mark text as no longer valid or obsolete                                 |
| `<ins>`         	      | Mark text as newly added in the revised sense                            |
| `<del>`         	      | Mark text as deleted in revised sense                                    |
| `<sub>`          	      | subscript                                                                |
| `<sup>`         	      | superscript                                                              |
| `<time>`          	    | Date and time markup                                                     |
| `<small>`          	    | Text is displayed in small print e.g. copyright information              |
| `<ruby>`, `<rp>`, `<rt>`| Ruby character                                                           |
| `<span>`          	    | mark up a general area within a paragraph of text                        |


### **\<abbr>**
  - with `<abbr>` abbreviations or acronyms can be displayed 
  - it is also useful to use the HTML attribute `title`, this helps e.g. translation systems or screen readers and also search engines, it shows the full meaning of the abbreviation as soon as you scroll over it

  example --> *4_TheBody/Part_19/index.html*

   ```
      <article>
          <h2>Abbreviations with abbr</h2>
          <p>The <abbr title="World Wide Web">WWW</abbr> is full of abbreviations.</p>
      </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_1.PNG)

### **\<cite>**
  - if the title of a book, movie, painting, song, etc. is to be displayed, `cite` can be used

  example --> *4_TheBody/Part_19/index.html* 

   ```
    <article>
        <h2>Working title with cite</h2>
        <p>According to the book <cite>HTML - For beginner</cite> it says:</p>
        <blockquote>In HTML 4.01 this element was also used for short quotes. In new HTML the 
          semantic meaning has been converted and should now only be used for 
          working titles.</blockquote>
    </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_2.PNG)

### **\<code> and \<pre>**
  - if a code is to be marked in a continuous text, `code` is used
  - if several lines of computer code are to be formatted, `code` should be used between `pre`.
  - for `<` in code `&lt;` is used and `&gt;` for `>`, this is so that the HTML document can distinguish between code and code-text

  example --> *4_TheBody/Part_19/index.html*

   ```
      <article>
      <h2>Computer code with <code>code</code></h2>
      <p>The <code>code</code> element does not contain any attributes.</p>
        </article>
        <article>
          <h2>A preformatted text me pre.</h2>
          <p>Here is a source code snippet of a C program:</p>
          <figure>
              <pre><code>#include &lt;stdio.h&gt;
 
      int main(void)
      {
          puts("Hello World!");
          return 0;
      }</code></pre>
              <figcaption>Listing 1: Hello World in C</figcaption>
          </figure>
      </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_3.PNG)

### **\<kbd> and \<samp>**
  - the kbd element (keyboard) is used to mark continuous text as keyboard input
  - `samp` is used for the screen output of programs

  example --> *4_TheBody/Part_19/index.html*

   ```
    <article>
        <h2>Keyboard input with kdb and program output with samp</h2>
        <p><kbd>Ctrl</kbd> + <kbd>A</kbd> select the complete text.</p>
        <pre>term#1&gt; <kbd>gcc -o Wall hello hello.c</kbd>
    term#1&gt; <kbd>./hello</kbd>
    <samp>Hello World!</samp>
    term#1&gt;</pre>
    </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_4.PNG)

### **\<dfn>**
  - this marks a definition

  example --> *4_TheBody/Part_19/index.html*

   ```
    <article>
        <h2>Definition/Term with dfn</h2>
        <p>A <dfn>smartphone</dfn> has more computer functionality and connectivity than a 
        cell phone.</p>
    </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_5.PNG)

### **\<var>**
  - with the var element the text can be marked as a variable
  - this variable can be part of an application, a mathematical expression or identifier of a variable in a programming language

  example --> *4_TheBody/Part_19/index.html*

   ```
      <article>
          <h2>Variables with var</h2>
          <p>The radius <var>r</var> is equal to half the diameter <var>d</var>.</p>
      </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_6.PNG)

### **\<bdo> and \<bdi>**
  - with the **bdo** element (bidirectional override) the text direction can be changed
  - to change the direction the HTML attribute `dir` must be used, with `rtl` the text runs from right to left and with `ltr` from left to right
  - with the `bdi` -element (bi-directional isolation) the borders of the text direction change can be marked more exactly with a unicode-capable web browser

  example --> *4_TheBody/Part_19/index.html*

   ```
      <article>
          <h2>Change text direction with bdo and bdi</h2>
          <p>Hello World <bdo dir="rtl">Hello World</bdo></p>
          <p>שלום</p>
          <p><bdi>السلام عليكم</bdi>: 1 (as-salaam alaykum)</p>
          <p><bdi>שלום</bdi>: 2 (shalom)</p>
          <p>Howdy: 3 (a greeting in the US southern states)</p>
      </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_7.PNG)

### **\<em>, \<strong>, \<i> and \<b>**  
  - to emphasize a text in italics `<em>` (emphasis) or to make a text bold `<strong>` is used
  - with `<i>` the text is also displayed in italics, it should be used for special technical terms, a thought, scientific names or foreign words
  - with `<b>` the text is also displayed in bold, should be used for meaningful names or keywords

  example --> *4_TheBody/Part_19/index.html*

   ```
    <article>
        <h2>Emphasize text (em, strong, b and i)</h2>
        <p><em>Bear!</em> Who the hell is this <em>bear!</em></p>
        <p><strong>Attention!</strong> <em>Bear</em> could be behind you!</p>
        <p><strong>Deadline in <strong><em>Summer 2022</em></strong></strong>
        </p>
    </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_8.PNG)

### **\<mark>**
  - can be used to mark a text so that it is visually highlighted, like with a Highlighter
  - works only if the content is created dynamically
  - this is only for highlighting, to change the background color it is better to use `<span>` and then style with CSS

  example --> *4_TheBody/Part_19/index.html*

   ```
      <article>
          <h2>mark text with mark</h2>
          <p>In 2021, profits have increased by <mark>100 percent</mark>.</p>
          <p>Here is a source code snippet of a C program:</p>
          <pre><code>#include &lt;stdio.h&gt;
 
      int main(void)
      {
          <mark>puts("Hello World!");</mark>
          return 0;
      }</code></pre>
      </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_9.PNG)

### **\<q>**
  - the `<q>` element is used when something is to be quoted in the middle of the text or when a spoken text is to be marked

  example --> *4_TheBody/Part_19/index.html*

   ```
    <article>
        <h2>Quoting continuous text with q</h2>
        <p><q cite="https://en.wikiquote.org/wiki/Albert_Einstein">A happy man is too satisfied with 
            the present to dwell too much on the future.</q></p>
    </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_10.PNG)

### **\<u> and \<s>**
  - the `<u>` element (u = underline) is used for proper noun underlining, as it is e.g. in the Chinese script, or to indicate words that may be erroneous
  - the web browser usually presents the `<u>` element with an underline
  - the `<s>` element (s = strike-through) is used to indicate that a text is outdated or incorrect, the browser will display the text as crossed out

  example --> *4_TheBody/Part_19/index.html*

   ```
    <article>
        <h2>Underline or strike through text with s and u</h2>
        <p>You can put a text in the center with <s><code>&lt;center&gt;</code> or</s> the CSS 
        property <code>text-align</code> and the value <var>center</var>.</p>
        <p>我来自<u>德国</u>。= I come from Germany.</p>
        <p>Also <u class="spell-checker">correct spelling</u> can be marked with it.</p>
    </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_11.PNG)

### **\<ins> and \<del>**
  - the `<del>` element (del = delete) is used when a content edit of a text is marked as deleted or revised 
  - the `<ins>` element (ins = insert) is the counterpart to the `<del>` element, and is used when something new is added to a document 

  example --> *4_TheBody/Part_19/index.html*

   ```
    <article>
        <h2>mark changes with del and ins</h2>
        <del><p>The singer will perform in the concert hall on 01.01.2021!</p></del>
        <ins><p>The concert will not take place because the singer is ill!</p></ins>
    </article>
   ``` 
  ![Preview](4_TheBody/Images/Preview_4_19_12.PNG) 

### **\<sup> and \<sub>**
  - these elements are mainly used for simple mathematical and chemical formulas
  - the `<sub>` element (sub = subscript) is used to make the text deeper
  - the `<sup>` element (sub = superscript) is used to superscript the text

  example --> *4_TheBody/Part_19/index.html*

   ```
    <article>
      <h2>High or low points with sub and sup</h2>
      <p><sup>[1]</sup> Reaction diagram: 2 H<sub>2</sub>O &RightArrow; 2 H<sub>2</sub> + 
        O<sub>2</sub></p>
      <p><sup>[2]</sup> Calculate circle area: A = &pi; * r<sup>2</sup></p>
      <p><sub>[1] = https://en.wikipedia.org/wiki/Water</sub><br>
        <sub>[2] = https://en.wikipedia.org/wiki/Circle</sub></p>
    </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_13.PNG) 

### **\<time>**
  - the `<time>` element was introduced to mark up dates and times.
  - the purpose of this element is that the time can be uniquely encoded for machines and represented in a readable form for the user, for this the `datetime` attribute is used
  - it is e.g. easier for a script in blog articles to extract the date from the element
  - it is also advantageous when searching in search engines for articles of a certain time period

  example --> *4_TheBody/Part_19/index.html*

   ```
    <header>
        <h2>Date and time with time</h2>
        <time datetime="2021-08-01">August 1, 2021</time>
    </header>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_14.PNG) 

### **\<small>**
  - the `<small>` element is used to display words or text passages in lowercase.
  - e.g. for copyrights, license information, legal notices

  example --> *4_TheBody/Part_19/index.html*

   ```
    <article>
      <header>
          <h2>Small print with small</h2>
          <small>&copy; Rick Sample; <time datetime="2021-01-01">January 1, 2021</time></small>
      </header>
        <p>The shipment can be delivered <time datetime="P2D">2 days</time>. <small>(Due to strong demand, it may take longer (+1 day)).</small></p>
    </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_15.PNG)

### **\<ruby>, \<rp> and \<rt>**
  - is an annotation system in which the text with annotations appears in one line

  example --> *4_TheBody/Part_19/index.html*

   ```
    <article>
      <h2>The elements ruby, rt und rp</h2>
      <p style="font-size:20pt;">
        <ruby>
          LOL<rp> (</rp><rt>Laugh Out Loud</rt><rp>)</rp>
        </ruby></p>
      <p><small>more infos: <a href="https://en.wikipedia.org/wiki/Ruby_character">
        https://en.wikipedia.org/wiki/Ruby_character</a></small></p>
    </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_16.PNG)

### **\<span>**
  - the `<span>` element can mark up single text passages in the middle of the text with CSS
  - also quite helpful is this element for JavaScript

  example --> *4_TheBody/Part_19/index.html*

   ```
    <article>
        <h2>The span element</h2>
        <p>Current temperature <span id="temp">18</span> °C</p>
        <p>A formatting with <span style="text-decoration:overline; color:grey;">CSS</span> and 
          the span element.</p>
    </article>
   ```
  ![Preview](4_TheBody/Images/Preview_4_19_17.PNG)

## 4.5. Character entities in HTML
 The importance of character entities has decreased with the spread of Unicode (UTF-8), but it is still worth mentioning them briefly.
 - e.g.:

   ```
    <p><bdi>שלום</bdi> = shalom</p>
   ```
 Without the Unicode specification, the browser may not be able to display these special characters. Therefore, the specification of the Unicode is always advantageous, with special characters and characters.

   ```
    <meta charset="UTF-8">
   ``` 
 Another question, of course, is how to display these special characters when none of them are present on the keyboard. With the help of character entities:
  * Numeric entities: 
	  - With the help of &#xxx; (xxx = encoding of the character), this is used when no input is possible from the keyboard.

   ```
    <p><bdo>&#1501;&#1503;&#1500;&#1513;</bdo> = shalom</p>
   ```
  * Banished entities:
    - e.g. the < is represented with `&lt;` and the > character with `&gt;`

   ```
    <p>5 > 4 < 6</p>
   ```
 Special characters that belong to HTML syntax (e.g. < and >) should be displayed to the corresponding entities. Otherwise, display errors may occur on the web page.

   ```
    <p>5 &gt; 4 &lt; 6</p>
   ```

 An overview of the numeric and named entities can be found here: [Unicode/Charts](https://www.unicode.org/charts/)
 More information about Unicode can be found at: [GitHub](http://r12a.github.io/scripts/tutorial/) and [Unicode](https://www.unicode.org)

### The HTML elements are used only for text markup, CSS is responsible for formatting.

---------------------------------------------------------------------------------------

# 5. Tables and hyperlinks
## 5.1. Structuring data in a table
 Tables are useful to display related data e.g. stock quotes, financial data, travel plans or sports results in a grid of rows and columns

| HTML elements   | Explanation              |
| --------------- | ------------------------ |
| `<table>`       | table                    |
| `<tr>`          | table row                |
| `<td>`          | table cell               |
| `<th>`          | table header cell        |
| `<thead>`       | table header area        |
| `<tbody>`       | table body               |
| `<tfoot>`       | table footer area        |
| `<colgroup>`    | group of table columns   | 
| `<col>`         | table column             |
| `<caption>`     | table heading/legend     |

  - Tables are created between the element `<table> ... </table>` is created
  - the content of the table is specified row by row with `<tr> ... </tr>` (tr = table row)
  - within the table row the individual columns are noted with `<td> ... </td>` (td = table data)
  - the table headings are displayed between `<th> ... </th>` (th = table heading), can be used like `<td>`, but the text is displayed bold
  - the web browser displays the table without formatting, height and width usually adapts to the content

  example --> *5_Tables_Hyperlinks/Part_1/index.html*

   ```
    <h1>Browser statistics November 2021 - 2022</h1>
    <table>
        <tr>
          <th>Browser</th>
          <th>Accesses</th>
          <th>Percent</th>
        </tr>
        <tr>
          <td>Chrome</td>
          <td>144780</td>
          <td>65,86%</td>
        </tr>
        <tr>
          <td>Firefox</td>
          <td>34099</td>
          <td>3.04%</td>
        </tr>
        <tr>
          <td>Safari</td>
          <td>16019</td>
          <td>18.67%</td>
        </tr>
    </table>
   ```
![Preview](5_Tables_Hyperlinks/Images/Preview_5_1.PNG)

  - in a cell between `<td> ... </td>` can also be other elements, theoretically even additional tables.
  - if an empty cell is to be displayed, an empty `<td> ... </td>` or `<th> ... </th>` must be created anyway
  - with old web browsers it could come to problems with blanks then simply use the HTML entity `&nbsp;` to force a blank space

  a simple table structure with \<table>, \<tr>, \<td>, \<th>  
  ![Preview](Images/Table_Image.PNG)

### **colspan** and **rowspan**
  - table entries can be summarized over several rows with the HTML attribute `colspan` and `rowspan`
  - the numeric value specifies the number of cells to be merged
  - the `scope` attribute specifies whether the table heading should apply to a column (scope="col") or a row (scope="row")

  - summarize columns - example --> *5_Tables_Hyperlinks/Part_2/indexA.html* 

   ```
      <h1>Daily planning</h1>
      <table>
        <tr>
          <th></th>
          <th scope="col">Morning</th>
          <th scope="col">Noon</th>
          <th scope="col">Afternoon</th>
        </tr>
        <tr>
          <th scope="row">Monday</th>
          <td colspan="2">Fotoshooting (Outdoor)</td>
          <td>Image editing workshop</td>
        </tr>
        <tr>
          <th scope="row">Tuesday</th>
          <td>Street photography (city)</td>
          <td colspan="2">Photo shooting (portrait)</td>
        </tr>
        <tr>
          <th scope="row">Wednesday</th>
          <td>Nude photography</td>
          <td>Image editing workshop</td>
          <td>Graduation</td>
        </tr>
      </table>
   ```
![Preview](5_Tables_Hyperlinks/Images/Preview_5_2A.PNG)

  - summarize lines - example --> *5_Tables_Hyperlinks/Part_2/indexB.html*

   ```
      <table>
      ...
        <tr>
          <th scope="row">Tuesday</th>
          <td rowspan="2">Street photography (city)</td>
          <td colspan="2">Photo shooting (portrait)</td>
        </tr>
      ...
      </table>
   ```
![Preview](5_Tables_Hyperlinks/Images/Preview_5_2B.PNG)

### **HTML attributes for the table elements** 
  - the table element supports only the `border` attribute to display a frame, the value may be `"1"` or `" "`

   ```
    <table border="1">
      ...
    </table>
   ```

  - but this variant is not used, instead you use CSS to style the table

   ```
    <head>
      <style>
        table, td, th { border: 1px solid gray }
      </style>
    </head>
   ```

### **Structure tables with \<thead>, \<tbody> and \<tfoot>**
  - the table header is displayed between `<thead> ... </thead>` (thead = table head)

  example --> *5_Tables_Hyperlinks/Part_3/index.html*

   ```
    <thead>
        <tr>
            <th>Month</th>
            <th>Visitors</th>
            <th>Bytes</th>
        </tr>
    </thead>
   ```

  - the actual data is marked between `<tbody> ... </tbody>` (tbody = table body)

   ```
    <tbody>
        <tr>
            <td>January</td>
            <td>3234</td>
            <td>133 MB</td>
        </tr>
        <tr>
            <td>February</td>
            <td>3500</td>
            <td>236 MB</td>
        </tr>
            ...
    </tbody>
   ```

 - the table foot is displayed between `<tfoot> ... </tfoot>` (tfoot = table foot)

   ```
      <tfoot>
          <tr>
              <th>Total</th>
              <th>23435</th>
              <th>3.246 MB</th>
          </tr>
      </tfoot>
   ```
  ![Preview](5_Tables_Hyperlinks/Images/Preview_5_3.PNG)


### **Group columns of a table with \<colgroup> and \<col>**
  - the elements `<colgroup>` (colgroup = column group) and `<col>` are used to divide single columns into semantic and logical areas
  - to combine several elements in one `col` element, the attribute `span` is used with specification of a value for the number of columns

  example --> *5_Tables_Hyperlinks/Part_4/index.html*

   ```
      <table>
        <colgroup>
            <col span="2" style="background-color: lightgrey" />
            <col style="background-color: WhiteSmoke" />
        </colgroup>
        ...
      </table>
   ```
  ![Preview](5_Tables_Hyperlinks/Images/Preview_5_4.PNG)

### **Label tables with \<caption> or \<figcaption>**
  - to label a table `<caption>` is used, or the new variants `<figure>` and `<figcaption>`

  - **\<caption>**

  example --> *5_Tables_Hyperlinks/Part_5/indexA.html*

   ```
      <h1>Browser statistics 2021 - 2022</h1>
      <table>
          <caption>
              Browser statistics 2021/2022
          </caption>
          <tr>
              <th>Browser</th>
              <th>Accesses</th>
              <th>Percent</th>
          </tr>
        ...
      </table>
   ```
  ![Preview](5_Tables_Hyperlinks/Images/Preview_5_5A.PNG)

  - further labels can be added with the HTML elements `details` and `summary`

  example --> *5_Tables_Hyperlinks/Part_5/indexA.html*

   ```
      <h1>Browser statistics 2021 - 2022</h1>
      <table>
          <caption>
              <details>
                  <summary>2021/2022</summary>
                  <p>
                    Here you can find the browser statistics of the domain.com website listed from 2021 - 2022
                  </p>
              </details>
          </caption>
          <tr>
              <th>Browser</th>
              <th>Accesses</th>
              <th>Percent</th>
          </tr>
        ...
      </table>
   ```
  ![Preview](5_Tables_Hyperlinks/Images/Preview_5_5B_1.PNG)
  ![Preview](5_Tables_Hyperlinks/Images/Preview_5_5B_2.PNG)

  - **\<figcaption>**

  example --> *5_Tables_Hyperlinks/Part_5/indexC.html*

   ```
      <figure>
          <table>
              <tr>
                  <th>Browser</th>
                  <th>Accesses</th>
                  <th>Percent</th>
              </tr>
              <tr>
                  <td>Chrome</td>
                  <td>144780</td>
                  <td>65,86%</td>
              </tr>
              ...
          </table>
          <figcaption>Table 1: Browser statistics 2021/2022</figcaption>
      </figure>
   ```
  ![Preview](5_Tables_Hyperlinks/Images/Preview_5_5C.PNG)


## 5.2. Hyperlinks with \<a>
 Hyperlinks are important elements of HTML because they allow you to move from one web page to another. They are needed to structure and link projects. Starting from the main web page, links are often used to go to other sub-pages and back to the main page. Only with the linking of several files a web page becomes a meaningfully operable web page.
  - Hyperlinks are represented with the `<a>` element (a = anchor)
  - the text between `<a> ... </a>` is called link text and is activated by the `href` attribute
  - between the `a` element other elements can be used, not only pure text, e.g. a graphic as hyperlink (should not be too much, could overwhelm users)
  - the hyperlink is usually underlined in blue by the browser, if it has already been visited it is usually displayed in purple (depending on the browser), but this can be changed with CSS
  - the most important attribute is href, this attribute first activates the hyperlink

   ```
               {      Hyperlink      }  {      Text       }
      <a href="https://www.google.com/">Google: click here</a>
   ```

### **Folder structure**

  ![Preview](5_Tables_Hyperlinks/Images/folder_structure.png)

  example --> *5_Tables_Hyperlinks/Part_6/index.html*

   ```
      <nav>
        Blog |
        <a href="sites/links.html">Links</a> |
        <a href="sites/about.html">About Me</a> |
        <a href="sites/legal_notice.html">Legal Notice</a>
      </nav>
   ```
  ![Preview](5_Tables_Hyperlinks/Images/Preview_5_6.PNG)

  example --> *5_Tables_Hyperlinks/Part_6/sites/links.html*

   ```
      <nav>
        <a href="../index.html">Blog</a> |
        Links |
        <a href="about.html">About Me</a> |
        <a href="legal_notice.html">Legal Notice</a>
      </nav>
   ```
  ![Preview](5_Tables_Hyperlinks/Images/Preview_5_6_links.PNG)

### **Links to other external websites** 
  example --> *5_Tables_Hyperlinks/Part_7/index.html*

   ```
      <h3>Related links</h3>
      <nav>
          <ul>
              <li>
                  <a href="https://www.w3.org/TR/html53/">HTML Recommendation</a>
              </li>
              <li><a href="http://www.w3.org/">W3C</a></li>
              <li><a href="http://www.whatwg.org/">WHATWG</a></li>
          </ul>
      </nav>
   ```
  ![Preview](5_Tables_Hyperlinks/Images/Preview_5_7.PNG)

## 5.2.1. The HTML attributes for the \<a> element

| attribute          | Explanation                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| `rel`              | this determines the type of link, there are also certain attribute values for `rel`: bookmark, external, nofollow, noreferrer |
| `rel="bookmark"`   | here it is specified that the link target is a parent section of the current document |
| `rel="external"`   | this indicates that the hyperlink belongs to an external web offer |
| `rel="nofollow"`   | signals the search engines not to follow this link |
| `rel="noreferrer"` | this instructs the visitor's web browser not to use a referrer address when clicking on the link, thus avoiding that the web server of the destination address receives information from where the visitor came from |

   ```
      <a rel="nofollow" href="https://www.w3schools.com/tags/att_a_rel.asp">HTML <a> rel Attribute</a>
   ```

| attributes      | Explanation                                                              |
| --------------- | ------------------------------------------------------------------------ |
| `download`      | this offers the link target for download |
| `href`          | this specifies the URL of the page to which the hyperlink will lead when activated |
| `hreflang`      | here the language of the linked document can be specified, specifications are allowed in abbreviations e.g. **de** for Germany |
| `media`         | this can be used to specify media for which the link target has been optimized, media types can be enumerated separated by commas or specify `all` for all media types |
| `type`          | this can be used to tell the browser the MIME type (file format) the linked file belongs to |

* **href=mailto:...**
  - there is the possibility to open an email address with a specific email application when clicking on the link
  - this is browser dependent and may require the user to set up a specific application, the functionality of a mailto link is not reliable
  - The specification of an email address is often obligatory, but this also means that unsolicited commercial emails can be expected, as web crawlers scan the web pages for email addresses. There is a way around this: 1. display the email address as a graphic, but this has the disadvantage that screen readers cannot read the email. 2. obfuscate the email with JavaScript [for more info: click here](http://alistapart.com/article/gracefulemailobfuscation). 3. the [reCAPTCHA](http://google.com/recaptcha/intro/index.html) module of Google
  - When specifying the email address on the website, it is important to observe the legal requirements.

  example --> *5_Tables_Hyperlinks/Part_8/index.html*

   ```
      <footer>
        <a href="mailto:example@email.com">Send Email</a>
      </footer>
   ```
![Preview](5_Tables_Hyperlinks/Images/Preview_5_8.PNG)

* **links to other content types**
	- if links are set to other types of documents not used on the web (e.g. Word, Excel, PDF), it depends on the web browser how it is displayed
  - it is also important to always inform the user what is behind a link

  example --> *5_Tables_Hyperlinks/Part_9/index.html*

   ```
      <body>
        <h1>Reference to other content types</h1>
        <p>Open a PDF document: <a href="docs/document.pdf">PDF</a></p>
        <p>Open a movie: <a href="docs/movie.mp4">Movie</a></p>
        <p>Open a Word document: <a href="docs/worddocument.doc" type="application/msword">DOC</a></p>
      </body>
   ```
![Preview](5_Tables_Hyperlinks/Images/Preview_5_9.PNG)

* **download**
  - with the attribute download the browser is instructed to offer the file for download, importantly the user must be informed about what is being downloaded 
  - old web browsers do not support the download attribute

  example --> *5_Tables_Hyperlinks/Part_10/index.html*

   ```
      <body body>
        <h1>Reference to other content types</h1>
        <p>
            Download a PDF document:
            <a href="docs/document.pdf" download>PDF</a>
        </p>
        <p>
            Download a MP4 movie:
            <a href="docs/movie.mp4" download="movie.mp4">MP4</a>
        </p>
        <p>
            Download a Word document:
            <a href="docs/worddokument.doc" download="worddokument.doc">DOC</a>
        </p>
        <p>
            Download an HTML document:
            <a href="docs/website.html" download="docs/website.html">HTML</a>
        </p>
      </body>
   ```
![Preview](5_Tables_Hyperlinks/Images/Preview_5_10.PNG)

| attribute          | Explanation                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| `target`           | here you specify where the reference target is to be opened |
| `target="_blank"`  | this will create a new tab when the link is clicked on  |
| `target="_parent"` | is the parent window |
| `target="_self"`   | indicates the current window |
| `target="_top"`    | Specifies the top window level |

* **target**
	- with `target` a link target is opened in a new window or tab, if it gets the attribute value `_blank`
	- The goal is that the visitor does not get lost on the main page, and returns there when the newly opened page has been read
	- `_blank` is the most used attribute value of `target` further are `_self`, `_parent`, `_top`

   ```
      <p>
        As already reported, the
        <a target="_blank" href="http://www.w3.org/">World Wide Web Consortium</a>
        submitted a new recommendation for HTML, ...
      </p>
   ``` 

* **links to specific parts of a web page**
	- to get to a certain paragraph can be annoying on large web pages if you have to scroll too much
	- therefore you can set anchors, with an `id` and with `#` you can call the section then 

  example --> *5_Tables_Hyperlinks/Part_11/index.html*

   ```
      <body>
        <h1 id="top">Contents</h1>
        <ul>
          <li><a href="#intro">Introduction to HTML</a></li>
          <li><a href="#syntax">The syntax of HTML</a></li>
          <li><a href="#versions">Versions of HTML</a></li>
          <li><a href="#technics">Techniques around HTML</a></li>
          <li><a href="#practice">To the table of contents</a></li>
        </ul>
        <h1 id="intro">Introduction to HTML</h1>
        <p>...</p>
        <p><a href="#top">To the table of contents</a></p>
        <h2 id="syntax">The syntax of HTML</h2>
        <p>...</p>
        <p><a href="#top">To the table of contents</a></p>
        <h2 id="versions">Versions of HTML</h2>
        <p>...</p>
        <p><a href="#top">To the table of contents</a></p>
        <h2 id="technics">Techniques around HTML</h2>
        <p>...</p>
        <p><a href="#top">To the table of contents</a></p>
        <h2 id="practice">Getting started in practice</h2>
        <p>...</p>
        <p><a href="#top">To the table of contents</a></p>
      </body>
   ```
![Preview](5_Tables_Hyperlinks/Images/Preview_5_11.PNG)


-----------------------------------------------------------------------------------------

# 6. Graphics and multimedia

| HTML elements          | Explanation         								                  |
| ---------------------- | ---------------------------------------------------- |
| `<img>`                | embed a graphic file in an HTML document             |
| `<map>`, `<area>`      | creates a reference sensitive graphic                |
| `<picture>`, `<source>`| loads the adequate image from several image sources  |
| `<svg>`       		     | integrates a scalable vector graphic into a web page |
| `<math>`       		     | embed a formula written with MathML                  |
| `<canvas>`       	     | represents a drawing area for drawing graphics       |
| `<video>`       	     | Play video files without plug-ins                    |
| `<audio>`       	     | Play audio files without plug-ins                    |
| `<embed>`, `<object>`, `<iframe>` | embed active elements such as PDF documents, Flash animations, Java applets, Word documents and many others |

## 6.1. Embedding images with \<img>
 Images can be included on a web page using the `<img>` element (img = image), after which there is no line break if `<img>` is used in the text. The attributes `src` and `alt` should be present at least. The `src` attribute indicates where the web browser will find the image file. The `alt` attribute gives an alternative description of the image file, this should be short (75-125 characters) describing what is in the image. This is useful if the image file cannot be loaded or for screen readers and also search engines. When creating web pages, the images should be placed in an extra directory (usually named "Images"). The `title` attribute can be used to display additional information when the user touches the image with the mouse.

  example --> *6_Graphics_Multimedia/Part_1/index.html*

   ```
      <h1>Beautiful world</h1>
      <p>
        <a href="Images/flower_1920.jpg" target="_blank"><img src="Images/flower_480.jpg" alt="Purple flower" title="Opens this image in a larger version in a new window or tab."></a>
        <img src="Images/chicks_480.jpg" alt="Chicks in the grass" title="Hot chicks on grass">
      </p>
      <p>
      A whale in the clouds. <img src="Images/whale_480.jpg" alt="a whale in the clouds"> He is on his way to Ocean.
      </p>
   ```
![Preview](6_Graphics_Multimedia/Images/Preview_6_1.PNG)

### **width and height**
  - to scale the display size of images, `width` and `height` can be used, if the image is a bit too large
  - scaling with `width` and `height` is possible, but if possible the image should be adjusted to the correct size with an image editing program, on the one hand the data volume is reduced and the risk that the images are displayed distorted is eliminated

  example --> *6_Graphics_Multimedia/Part_2/index.html*

   ```
     <img src="Images/flower_1920.jpg" alt="Purple flower" width="480" height="360">
   ``` 

### **\<figure> and \<figcaption>**
  - with `<figure>` and `<figcaption>` it is possible to create separate captions

  example --> *6_Graphics_Multimedia/Part_2/index.html*

   ```
      <h1>Purple flower</h1>
      <figure>
        <img src="Images/flower_1920.jpg" alt="Purple flower" width="480" height="360"><br>
        <figcaption>The Cape daisy (Osteospermum ecklonis) originates from South Africa and is very popular in Europe.</figcaption>
      </figure>
   ```

![Preview](6_Graphics_Multimedia/Images/Preview_6_2.PNG)

| attribute   | Explanation         								              |
| ----------- | ------------------------------------------------- |
| `alt`       | this will display an alternative text if graphics cannot be displayed |
| `height`    | specifies the vertical extent (height) of the image in pixels         |
| `ismap` 	  | is a boolean value that can be used if the images are a server-side image map (rarely used) | 
| `src` 		  | this specifies the link destination to the image file                 |
| `usemap` 	  | specifies the name of an image map that should be linked to the image |
| `width` 	  | specifies the horizontal extent (width) of the image in pixels        |

## 6.2. Create image maps
 Reference-sensitive graphics (image maps) are links that are embedded within a graphic. An image map defined in HTML consists of three parts:
  - the actual image added to the HTML document with the img element, additionally within the `<img>` -tag the attribute `usemap` must be specified with an anchor to a `map` element

   ```
    <img src="Images/picture.jpg" alt="alternative text" usemap="#mapname">
   ``` 

  - the `map` element with the anchor name previously specified in the img element with the usemap attribute, it is recommended to place the `map` element at the beginning or at the end of the document
  - between `<map>` and `</map>` an area element is used for each area, there the coordinates with the actual reference sensitive area for the graphic are needed. Within the `<area>` tag, you can define a square area, a circular area, or a polygon. Each area element defines a clickable area in the image.

| HTML elements | Explanation          								                |
| ------------- | --------------------------------------------------- |
| `<img>`       | Inserting a graphic with an anchor on a map element |
| `<map>`    		| Area for the reference sensitive graphic            |
| `<area>`    	| This defines a clickable area in the image          |

  example --> *6_Graphics_Multimedia/Part_3/index.html*

 In this example, in a rectangular graphic with 200 x 200 pixels, four rectangular reference-sensitive areas with 100 x 100 pixels have been defined. First the graphic popart.jpg is inserted into the HTML document. The value `#mood` is used as the anchor name in the `usemap` attribute. The reference sensitive area is introduced with the `map` element and the name of the image map (name="mood"). Between `<map>` and `</map>` the coordinates for the references are specified with the `area` element.

   ```
      <h1>What mood are you in?</h1>
      <p>Select a color according to your mood:</p>
      <p>
          <img src="Images/popart.jpg" alt="Reference sensitive pop art graphic" width="200" height="200" usemap="#mood">
      </p>
      <map name="mood">
        <area shape="rect" coords="0,0,100,100" href="Colors/cyan.html" alt="Cyan" title="Cyan">
        <area shape="rect" coords="0,100,100,200" href="Colors/green.html" alt="Green" title="Green">
        <area shape="rect" coords="100,100,200,200" href="Colors/yellow.html" alt="Yello" title="Yellow">
        <area shape="rect" coords="100,0,200,100" href="Colors/red.html" alt="Red" title="Red">
      </map>
   ``` 

![Preview](6_Graphics_Multimedia/Images/Preview_6_3_1.PNG)
![Preview](6_Graphics_Multimedia/Images/Preview_6_3_2.PNG)


### **HTML attributes for the HTML element \<area>**
  - The shape attribute specifies the `shape` of an area. The `shape` attribute is used together with the `coords` attribute to specify the size, shape, and placement of an area.
  - Three forms are available for this:
    - `rect` (= rectangle)
    - `circle`
    - `poly` (= polygon)
  - The `coords` attribute specifies the coordinates of an area in an image map. The `coords` attribute is used together with the shape attribute to specify the size, shape, and placement of an area.
  - The coordinates of the top-left corner of an area are `0,0`.

   ```
    <area shape="rect" coords="0,0,100,100" ...>
   ```

  - If circle is used with shape, the coordinates are x,y,r (`chords="x,y,r"`).

   ```
    <area shape="circle" coords="100,100,50" ...>
   ```

  - If poly is used with shape, any number of coordinates with **x1,y1,x2,y2...xn,yn** can be used in coords. 

   ```
    <area shape="poly" coords="129,0,260,95,129,138">
   ```

Pixel coordinates with a graphics program [Online Image Map Editor](http://maschek.hu/imagemap/imgmap/)

![Preview](Images/ImageMapXYAxis.PNG)


| attribute     | Explanation         								              |
| ------------- | ------------------------------------------------- |
| `alt`         | Allows you to specify an alternative text that will be displayed when the if the link-sensitive graphic is not displayed. For valid valid HTML, this attribute must also be used with any area element when the href attribute is used |
| `coords`   	  | Here you specify the coordinates for the reference sensitive area. These are absolute values that you must separate with commas. |
| `download`    | You use this to specify a URL or pathname to a file that can be can be downloaded when the user clicks the link. |
| `href`    	  | Here you specify the link for the reference target of the link-sensitive area that will be called when the user clicks on it. If attribute is not used, this area element is not a hyperlink. |
| `hreflang`    | This specifies the language of the reference target of the reference-sensitive area. |
| `media`    	  | This allows you to specify the media type of the link or a resource specify |
| `type`   	    | Sets the MIME type of the destination address. |

| `rel`    	    | This specifies the type of relationship between the current document and the link. Possible values are: |
| ----------------- | ----------------------------------------------------- |
| `rel="alternate"` | Link to an alternative version of the document        |
| `rel="author"`    | Link to the author of the document                    |
| `rel="bookmark"`  | permanent URL to create a bookmark                    |
| `rel="help"`      | Links to a help document                              |
| `rel="license"`   | Links to copyright information for the document       |
| `rel="next"`      | the next document in a selection of documents         |
| `rel="nofollow":` | Links that search engines should not follow (e.g. commercial advertising page) |
| `rel="noreferrer"`| The web browser should not send an HTTP ReferrerHeader when the user follows the link.                                                                       |
| `rel="prefetch"`  | Specifies that the target resource should be cached.  |
| `rel="prev"`      | The previous document in a selection of documents     |
| `rel="search"`    | The target document should be preloaded in the cache of the cache. |
| `rel="tag"`       | a keyword for the current document                    |

| `shape`    	      | This determines the type of area for the reference-sensitive area of a reference-sensitive graphic. The possible values for this are:                               |
| ----------------- | ---------------------------------------------------------------------- |
| `shape="circle"`  | a circle with the coordinates x (center from left), y (center from top) and r (radius) for the coord attribute                            |
| `shape="rect"`    | a rectangle with the coordinates x1, y1 (upper left corner) and x2, y2 corner) and x2, y2 (lower right corner) for the coord attribute                              |
| `shape="poly"`    | a polygon with the coordinates x1, y1, x2, y2, ..., xn, yn(from the upper left corner) for the coord attribute                                         |

| `target`  | This sets the target window for the content to be called. Possible values for this are: |
| --------- | ---------------------------------------------------------------------- |
| `_self`   | (default value) output in the same window                              |
| `_blank`  | output in a new window or tab                                          |
| `_top`    | Output in the body of the window                                       |
| `_parent` | output in the calling window                                           |


## 6.3. Load suitable images with \<picture>
 The picture element allows to provide a suitable picture for all display sizes. Each source element in the `<picture>` element contains a query (media query) with the HTML attribute `media`, specifications such as viewport width, viewport height and alignment are queried. The sources of `<source>` are read from top to bottom. If the viewport is at least 1024 pixels (`min-width:1024px`), the image is loaded with 1024 pixels. If the viewport is at least 640 pixels, the image is loaded with 640 pixels.

  example --> *6_Graphics_Multimedia/Part_4/index.html*

   ```
      <picture> 
        <source media="(min-width: 1024px)" srcset="Images/Image_1024.jpg">
        <source media="(min-width: 640px)" srcset="Images/Image_640.jpg">
        <source media="(min-width: 480px)" srcset="Images/Image_480.jpg">
        <!-- Fallback for old browser -->
        <img src="Images/Image_480.jpg" alt="Hong Kong Island">
      </picture>
   ```
small display

![Preview](6_Graphics_Multimedia/Images/Preview_6_4_1.PNG)

large display

![Preview](6_Graphics_Multimedia/Images/Preview_6_4_2.PNG)

| attribute | Explanation         								              |
| --------- | ------------------------------------------------- |
| `srcset`  | This allows media queries to create breakpoints for the images to be loaded |
| `media`   | This specifies a comma-separated list of image sources. For each specified image source you can specify the width and pixel density (default value: 1x) can be specified |
| `src`     | With this you specify the URL to an image source |
| `type`  	| This sets the MIME type for the image resource   |
| `sizes`   | a comma-separated list with a media characteristic and the size specification |


## 6.4. Use icons
 These icons are called favicons, these are good for recognition on the website. Favicons can be created with any image editing software. But also on the web there are online tools with which icons can be created e.g. [favicon.io](https://favicon.io/) . Favicons should be saved in `.ico` format. If another file format is used, the MIME type should be specified (e.g. PNG format: `type="image.png"`). The size of a favicon is usually `16x16` or `32x32` pixels. Additionally icons can be used for mobile devices e.g. IPhone or IPad the value `apple-icon-touch` is specified at `rel`.

  example --> *6_Graphics_Multimedia/Part_5/index.html*

   ```
      <head>
        <title>Add icon for the website</title>
        <meta charset="UTF-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="Images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="Images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="Images/favicon-16x16.png" />
        <link rel="manifest" href="Images/site.webmanifest" />
      </head>
      <body>
        <h1>Demonstrates the favicon</h1>
        <p>Add the HTML document to your favorites</p>
      </body>
   ```
![Preview](6_Graphics_Multimedia/Images/Preview_6_5.PNG)


## 6.5. Vector graphics (SVG)
 If vector graphics are to be used, there is the XML format SVG (Scalable Vector Graphics) for this purpose. The advantage of SVG is that a graphic never loses quality when zooming in or out. SVG can be created and edited with a simple text editor. 
 The SVG is in XML syntax and therefore platform independent, so it can be created in PHP, dynamically modified with JavaScript or formatted with CSS. SVGs are used for e.g. cartographies, illustrations like logos, icons, scientific diagrams, program flow charts, technical drawings or visualization of graphs.
 The quality of the SVG graphic always remains the same even if the `width` and `height` attributes are used to scale the size of the display.

  example --> *6_Graphics_Multimedia/Part_6/index.html*

   ```
      <h1>SVG as graphic reference</h1>
      <p>
        <img src="svg/logo.svg" width="100" height="50" alt="50%"><br>
        <img src="svg/logo.svg" alt="100%"><br>
        <img src="svg/logo.svg" width="400" height="200" alt="200%">	
      </p>
   ```
![Preview](6_Graphics_Multimedia/Images/Preview_6_6.PNG)

Editors for SVG graphics editing:
- [SVG-edit](https://github.com/SVG-Edit/svgedit)
- [Inkscape](www.inkscape.org)
- any simple text editor

### **Integrate SVG directly into the web page with \<svg>**
 It is possible to embed the SVG directly into the HTML document. The SVG syntax with the SVG element is noted between `<svg> ... </svg>` is noted. SVG itself offers different tags e.g. for circles, ellipses, rectangles, polygons, lines, elements for paths, texts and animations.

  example --> *6_Graphics_Multimedia/Part_7/index.html*

   ```
      <h1>Embed SVG graphics directly</h1>
      <p>
      <svg width="300" height="100">
        <ellipse ry="45" rx="140" cy="50" cx="150" fill="green" stroke-width="10" stroke="black"/>
        <text text-anchor="middle" font-size="60" y="67" x="150" fill="white">SVG</text>
      </svg>
      <br>
      <svg height="300" width="100">
        <ellipse cx="50" cy="150" rx="45" ry="140" style="fill:red;stroke:black;stroke-width:3" />
      </svg>
      <br>
      <svg width="410" height="200">
        <rect x="5" y="5" width="390" height="150" style="fill:blueviolet;stroke-width:3;stroke:black" />
      </svg>
      <br>
      <svg width="210" height="200">
        <polygon points="100,5 125,85 80,105" style="fill:blue;stroke:black;stroke-width:5" />
      </svg>
      <br>
      <svg width="210" height="200">
        <polyline points="100,5 125,85 80,105" style="fill:blue;stroke:black;stroke-width:5" />
      </svg>
      <br>
      <svg height="200" width="200">
        <circle cx="100" cy="100" r="90" stroke="black" stroke-width="3" fill="yellow" />
      </svg>
      <br>
      <svg height="100" width="250">
        <line x1="0" y1="0" x2="250" y2="100" style="stroke:purple;stroke-width:3" />
      </svg>
      <br>
      <svg height="100" width="500">
        <text x="5" y="80" fill="red" font-size="60">A text with SVG</text>
      </svg>
      </p>
   ```
![Preview](6_Graphics_Multimedia/Images/Preview_6_7.png)

 Inside `<svg> ... </svg>`, the rules of XML documents must be followed and be case sensitive. Unlike HTML, SVG syntax is very precise and an error will usually result in incorrect or no display.

### **Mathematical formulas with MathML**
Mathematical formulas can be integrated directly into a web page using MathML (Mathematical Markup Language). The MathML tags are noted between `<math> ... </math>`. Unfortunately not yet supported by all browsers, but the problem can be solved with the help of [MathJax](http://www.mathjax.org).

  example --> *6_Graphics_Multimedia/Part_8/index.html*

   ```
      <head>
        <meta charset="UTF-8">
        <title>Mathematical formulas</title>
        <script src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
        </script>
      </head>
      <body>
      <h1>MathML for mathematical formulas</h1>
      <p>
        A simple mathematical formula: 
          <math>
            <mrow>
              <msup><mi>a</mi><mn>2</mn></msup>
              <mo>+</mo>
              <msup><mi>b</mi><mn>2</mn></msup>
              <mo>=</mo>
              <msup><mi>c</mi><mn>2</mn></msup>
            </mrow>
          </math>
      </p>
      </body>
   ```
![Preview](6_Graphics_Multimedia/Images/Preview_6_8.PNG)

More on the topic at [W3C](https://www.w3.org/TR/MathML3/).


## 6.6 Drawing graphics with \<canvas>
Is nothing more than a white area on which something can be drawn with the help of JavaScript.
  - In the introductory `<canvas>` tag, the `id` is specified with , `width` and `height` determine the size of the drawing area. The `id` is particularly important in order to be able to access the `<canvas>` element later with JavaScript.

  example --> *6_Graphics_Multimedia/Part_9/index.html*

   ```
      <head>
        <meta charset="UTF-8">
        <title>Create a canvas object</title>
        <style>
          canvas {border:1px solid #000000;}
        </style>
      </head>
      <body>
      <h1>Create drawing area with canvas</h1>
      <canvas id="myCanvas" width="400" height="200">
        Your browser does not support the canvas element.
      </canvas>
      </body>
   ```
![Preview](6_Graphics_Multimedia/Images/Preview_6_9.PNG)

On the website www.effect-games.com/demos/canvascycle/ [EffectGames](http://www.effectgames.com/demos/canvascycle/) you can see well what is possible with `<canvas>`.

On my GitHub account you can also find a few examples about canvas:
  - [Motocross Rally](https://github.com/BellaMrx/Motocross_Rally) - game only in HTML, CSS, JavaScript
  - [Breakout](https://github.com/Projects-Games-HTML-CSS-JS/Breakout) - game only in HTML, CSS, JavaScript
  - [Ping Pong](https://github.com/Projects-Games-HTML-CSS-JS/Ping-Pong) -  game only in HTML, CSS, JavaScript 


## 6.7. Play videos with the <video> HTML element
With the `<video>` element it is possible to play a video in the web browser without a special extension. All modern browsers support this element.
Currently 3 video formats are supported: *MP4*, *WebM*, *OGG*. However, not every browser supports all 3 formats. The most widely used is *MP4*.

  example --> *6_Graphics_Multimedia/Part_10/index.html*

   ```
      <body>
        <h1>Play videos</h1>
        <video width="640" src="Video/ClickMe.mp4" controls autoplay>
          Your web browser does not support the video tag.
        </video>
      </body>
   ```
![Preview](6_Graphics_Multimedia/Images/Preview_6_10.PNG)

If you want to be sure that the browser plays the video. Can you also offer all 3 formats, then other types can be specified.

  example --> *6_Graphics_Multimedia/Part_11/index.html*

   ```
      <body>
        <h1>Play videos</h1>
        <video width="640" src="Video/ClickMe.mp4" controls autoplay>
          Your web browser does not support the video tag.
        </video>
      </body>
   ```

HTML attributes for the \<video> element 
| attribute   | Explanation         								              |
| ----------- | ------------------------------------------------- |
| `autoplay`  | The video file will be played automatically when the web page has finished loading. has been loaded |
| `controls`  | Displays a bar with control functions such as Play, Pause, etc, with which the user can control the video file |
| `height`    | With this you specify the height of the video to be displayed |
| `loop`      | If the video file has finished playing, it will be played again with this attribute |
| `muted`     | The sound of the video file is muted with this attribute. |
| `poster`    | This allows you to specify a URL to an image that will be displayed, as long as or when the video is not present (for example, if it has not yet has not been loaded) |
| `src`       | This specifies the location (URL) of the video file. |
| `width`     | With this you set the width of the video to be displayed |
| `type`      | specification of the video format |

| `preload`   | This allows you to specify how the video file should be preloaded when the web page is loaded. The following values are possible: |
| -------------- | ------------------------------------------------- |
|`preload="auto"`| (default) The web browser should load the complete video file when the page is loaded. |
|`preload="metadata"`| Only the metadata should be loaded when the page is loaded. |
|`preload="none"`| The web browser should not load the video file at all the video file at all when the page is loaded. |


It is also possible to play a video via YouTube. Works only on live server.

  example --> *6_Graphics_Multimedia/Part_12/index.html*

   ```
      <body>
          <figure>
              <iframe width="400" height="225" src="https://www.youtube.com/watch?v=MDLn5-zSQQI" allowfullscreen></iframe>
              <figcaption>iframe</figcaption>
          </figure>
          <figure>
              <object width="400" height="225" data="https://www.youtube.com/watch?v=MDLn5-zSQQI"></object>
              <figcaption>object</figcaption>
          </figure>
          <figure>
              <embed width="400" height="225" src="https://www.youtube.com/watch?v=MDLn5-zSQQI" />
              <figcaption>embed</figcaption>
          </figure>
      </body>
   ```

## 6.8. Play audio files with the HTML element \<audio>
In principle the `<audio>` element works, also here there are 3 formats: *MP3*, *OGG* and *WAV* which can be played without any additional software. All web browsers can handle the *MP3* format.

  example --> *6_Graphics_Multimedia/Part_13/index.html*

   ```
      <body>
        <h1>Play audio</h1>
        <audio controls>
          <source src="Sound/EinsteinWAV.wav" type="audio/wav" />
          <source src="Sound/EinsteinOGG.ogg" type="audio/ogg" />
          <source src="Sound/EinsteinMP3.mp3" type="audio/mpeg" />
            Your web browser does not support the video tag.
        </audio>
        <p>
          Albert Einstein interview
        </p>
      </body>
   ```
![Preview](6_Graphics_Multimedia/Images/Preview_6_13.PNG)

HTML attributes for the \<audio> element 
| attribute   | Explanation         								              |
| ----------- | ------------------------------------------------- |
| `autoplay`  | The audio file is played automatically when the web page has finished loading. |
| `controls`  | Displays a bar with control functions such as play, pause, etc., with which the user can control the audio file. |
| `loop`      | When the audio file has finished playing, it will be played again with this attribute. |
| `muted`     | The sound of the audio file is muted with this attribute. |
| `type`      | specification of the audio format |
| `src`       | This specifies the location (URL) of the audio file. |

| `preload`   | The audio file is played automatically when the web page has finished loading. |
| ----------- | ------------------------------------------------- |
|`preload="auto"`| (Default setting) The web browser should load the load the complete audio file when the page is loaded. |
|`preload="metadata"`| Only the metadata should be loaded, when the page is loaded. |
|`preload="none"`| The web browser should not load the audio file at all not load at all when the page is loaded. |


## 6.9. Embedding other active content
It is possible to include videos, audio files and images in an HTML document without additional software. But for many other content there is no extra HTML element, e.g. Excel files, AutoCAD or special movie formats, which cannot be used directly by the web browser, but via plug-ins. To include active content in an HTML document that is supported via extensions, there is the **object** element and the **embed** element. However, most modern web browsers have removed or disabled direct support for browser plug-ins, so it is no longer advisable to use them.

- More information about [object](https://www.w3schools.com/tags/tag_object.asp).
- More information about [embed](https://www.w3schools.com/tags/tag_embed.asp).

### The \<iframe> element
With this element it is possible to embed something in an HTML document. In practice it often happens that this element is used to embed other HTML document.

  example --> *6_Graphics_Multimedia/Part_14/index.html*

   ```
      <body>
        <h1>use iframe</h1>
        <img src="Images/sourcecode.png" alt="sourcecode" width="50%">
        <iframe height="140" width="680" src="indexMathML.html"> 
          Your web browser is from the stone age and can not iframe!<br>
        </iframe> 
      </body>
   ```
 ![Preview](6_Graphics_Multimedia/Images/Preview_6_14.png)

 When embedding an external HTML document, it may be necessary to restrict certain things for security reasons. Such a restriction is available with the sandbox attribute. When the sandbox attribute is used in the `<iframe>`, it prevents the execution of scripts, links going out of the frame, plug-ins, accessing cookies and submitting forms.

- More information about [sandbox](https://www.w3schools.com/tags/att_iframe_sandbox.asp).


----------------------------------------------------------------------------------------------------

# 7. Forms and interactive elements 
HTML forms are mostly used for e.g. contact forms, surveys, registrations on a website or newsletter, guestbooks, order forms, search functions, adding and uploading data and more. HTML offers many different input fields such as text input fields, dropdown lists and simple buttons.


| HTML elements | Explanation          								                |
| ------------- | --------------------------------------------------- |
| `<form>`      | Use this element to define the HTML forms in the HTML document. |
| `<fieldset>`  | You can use the fieldset element to combine multiple form elements, such as input fields, into a logical group. Many web browsers additionally frame this area visually. You can also use the *legend* element to define a heading for this group. |
| `<legend>`    | Use the *legend* element to specify a heading for a *fieldset* group. |
| `<label>`     | Marks a text as a simple text label in the form. Using the *for* attribute, you can associate the text label with an *input* element and thus have a label set for an input field. |
| `<datalist>`  | This defines a predefined list of options for a single-line text field for an *input* element. The *datalist* element uses autocompletion, where the user sees a kind of dropdown list of predefined values. Using the *list* attribute in the input element associates the element with a *datalist* element. You define the individual options of the list using the *option* element and *value* attribute. |
| `<input>`     | With this you define an input field in which the user can enter different types of data. What kind of data this is and how the *input* element is represented depends on the *type* attribute used. The *input* element is also a stand-alone element without a closing tag. |
| `<button>`    | With this you define a button similar to `<input type="submit">`, but you can also include graphics and use other HTML elements. |
| `<select>`    | With this you define a selection list with fixed entries in a form, from which the user can select an entry. An entry in the list, on the other hand, is defined within the *select* element with the *option* element. |
| `<optgroup>`  | This allows you to define suboptions grouped in an extensive *select* list. |
| `<option>`    | Here you define the individual entries of a *select* -selection list from which the user can choose.  |
| `<textarea>`  | Use this element to create a multiline text input field. |
| `<output>`    | The *output* element defines an output area for the result of calculations. |
| `<progress>`  | This allows you to visualize a progress bar or a history for a task, such as a questionnaire or download. |
| `<meter>`     | This element visualizes a certain size of scalar values with a state indicator and using various HTML attributes. |

## 7.1. Define an area for forms
 An area in the HTML form is marked between `<form> ... </form>`, everything in between belongs to the form. There can be used different HTML input fields like text input fields, selection lists and labels.
 Two typical attributes that are commonly used are `action` and `method`.
 - `action`: Here the URL is specified, which is called when submitting the form and to which the entered data is to be transferred. This is often a PHP script that processes the transmitted data.
 - `method`: This specifies the HTTP request method, how the data should be sent to the server for processing. The default setting is `method="get"`, with which the browser appends the data as a parameter to the end of the URL. For large amounts of data, however, `method="post"` is used, which means that the data is not sent via the URL, but transferred to the body of the HTTP request.

 The two attributes `action` and `method` do not necessarily have to be used in the `<form>` tag. The attributes are unnecessary, for example, if the data entered in the form is only processed with JavaScript, e.g. to perform simple calculations. For such purposes, you do not need a URL to be called or an HTTP request method.

 Other attributes are:
 - `enctype`: The default value is the MIME type `"application/x-www-form-urlencoded"`, which masks characters that have a special meaning in a URL with URL encoding. For example, a space character is transmitted as the string `%20`. If files are uploaded, the value `"multipart/form-data"` should be used.
 - `accept-charset`: Here you specify with which character encoding the data should be sent to the web server e.g. `"UFT-8"`.
 - `target`: This specifies the target window in which the web server should output its response. The values are `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.


## 7.2. The HTML input fields for forms

### **A single-line text input field with \<input type="text">**
 The input element usually represents a single text field where the user can enter data. Since the element can be used for many other field types as well, the `type="text"` attribute should be specified.

 The HTML attribute `name` should be used for an identifier for each input field, because this is needed by the script (JavaScript, PHP) when processing the data in order to access the entered data. The `size` -attribute specifies the display length in characters and `maxlength` the actual allowed character length.

  example --> *7_Forms/Part_1/index.html*

   ```
    <h1>Single line text field</h1>
    <form>
        Enter name: <input type="text" name="aName" size="30" maxlength="40">
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_1.PNG)


### **A password input field with \<input type="password">**
 To create a one-line text field for passwords you need `type="password"`, this will display the entered characters as stars or dots.
 A password field is not encrypted and serves only as a protection against screen tampering. The entered password is transmitted over the Internet in clear text via HTTP protocol without encryption. For encrypted communication between the web browser and the web server, the HTTPS protocol must be used, and the web server must support this protocol.

  example --> *7_Forms/Part_2/index.html*

   ```
    <h1>Text field for password</h1>
    <form>
      Enter password:
      <input name="pw" type="password" size="10" maxlength="10">
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_2.PNG)


### **A multiline text input field with \<textarea>**
 If a text field with multiple lines is needed for messages, comments, feedback or similar, `<textarea> ... </textarea>` is used. The number of displayed lines is specified with the `rows` attribute and the number of characters per line with `cols`. By default, the text is automatically wrapped at the end in the next line. The wrap happens only visually and is not sent when the data is sent. This can be changed with the `wrap` attribute. If the default setting `wrap="soft"` is changed to `wrap="hard"`, the text is no longer wrapped automatically.

  example --> *7_Forms/Part_3/index.html*

   ```
    <h1>Multiline input field</h1>
    <form>
      Your message:<br />
        <textarea name="txt" rows="8" cols="50" maxlength="2500">
   Enter your message here ...
        </textarea>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_3.PNG)


### **A selection list or dropdown list with \<select>**
 A selection list or dropdown list is displayed with `<select> ... </select>`. The individual selection options are indicated with `<option> ... </option>`.

  example --> *7_Forms/Part_4/index.html*

   ```
    <h1>Dropdown and selection lists</h1>
    <form>
        <p>
        Example 1:<br />
        <select name="thema1">
          <option value="val1">HTML</option>
          <option value="val2" selected>CSS</option>
          <option value="val3">JavaScript</option>
          <option value="val4">React</option>
        </select>
        </p>
        <p>
        Example 2:<br />
        <select multiple name="thema2" size="4">
          <option value="val5">HTML</option>
          <option value="val6" selected>CSS</option>
          <option value="val7">JavaScript</option>
          <option value="val8">React</option>
        </select>
        </p>
        <p>
        Example 3:<br />
        <select multiple name="thema3" size="6">
          <optgroup label="Gruppe 1">
            <option value="val9">HTML</option>
            <option value="val10">CSS</option>
          </optgroup>
          <optgroup label="Gruppe 2">
            <option value="val11">JavaScript</option>
            <option value="val12">React</option>
          </optgroup>
        </select>
        </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_4.PNG)


### **Create a group of radio buttons with \<input type="radio">**
 Radio buttons are also provided with the input element. For this purpose `<input type="radio">` is specified. Each radio button should be provided with the `name` attribute. Radio buttons with the same name belong to the same group from which the user can select a value. The value is specified with `value`.

  example --> *7_Forms/Part_5/index.html*

   ```
    <h1>Radio buttons</h1>
    <form>
    <p>Please select room:</p>
    <p>
      <input type="radio" name="room" value="budget">Budget<br>
      <input type="radio" name="room" value="standard" checked>Standard<br>
      <input type="radio" name="room" value="deluxe">Deluxe
    </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_5.PNG)


### **Add a text label with \<label>**
 Between \<label> ... \</label> a simple text label without special formatting can be used. The label element can be used to simplify the operation of other elements, e.g. radio buttons or checkboxes. The `for` attribute makes it easier for the user to make a selection when clicking, since the word is also clickable.
 
  example --> *7_Forms/Part_6/index.html*

   ```
    <h1>Radio buttons with label</h1>
    <form>
      <p>Please select room:</p>
      <p>
        <input type="radio" name="room" id="r1" value="budget">
          <label for="r1">Budget</label><br>
        <input type="radio" name="room" id="r2" value="standard">
          <label for="r2">Standard</label><br>
        <input type="radio" name="room" id="r3" value="deluxe">
          <label for="r3">Deluxe</label>
      </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_6.PNG)


### **Use checkboxes with \<input type="checkbox">**
 Checkboxes are also displayed with the input element if `type="checkbox"` is used. Here, too, a `name` should always be specified and the `value` is used to specify the value that is transferred to the web server when the form is submitted.
  
  example --> *7_Forms/Part_7/index.html*

   ```
    <h1>Checkboxesn</h1>
    <form>
      <p>Please select extras:</p>
      <p>
        <input type="checkbox" name="extra" id="c1" value="breakf">
          <label for="c1">Breakfast</label><br>
        <input type="checkbox" name="extra" id="c2" value="lunch">
          <label for="c2">Lunch</label><br>
        <input type="checkbox" name="extra" id="c3" value="dinner">
          <label for="c3">Dinner</label>
      </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_7.PNG) 


### **Use fields for file upload with \<input type="file">**
 If a field is required for a file upload, the input element is specified with the attribute `type="file"`. The web browser usually generates a button. 
 If not only the filename of the selected file is to be determined, but the entire file or the contents of the file, `method="post"` and `enctype="multipart/formdata"` must be used with the form element.
 With the `accept` attribute it is possible to upload only certain file types.
  
  example --> *7_Forms/Part_8/index.html*

   ```
    <h1>File upload</h1>
    <form method="post" enctype="multipart/form-data">
      <p>Select file:
        <input type="file" name="picture" accept="image/*">
      </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_8.PNG)


### **Different buttons**
 Buttons can be displayed with the button element (\<button> ... \</button>). Or with the input element and `type="reset"` or `type="submit"`. With `reset` the contents of the form fields within the form are reset to the initial value. The `submit` button submits the form and sends the entered data to the URL specified with the `action` attribute in the form element.
  
  example --> *7_Forms/Part_9/index.html*

   ```
    <h1>Buttons</h1>
    <form>
      Your message:<br />
        <textarea name="txt" rows="8" cols="36" maxlength="2500">
    Enter your message here ...
        </textarea>
        <br />
      <input type="submit" value="Send" style="width: 80px" />
      <input type="reset" value="Cancel" style="width: 80px" />
      <button type="button">Clickable button</button>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_9.PNG)


### **Form fields outside the form element**
  
  example --> *7_Forms/Part_10/index.html*

   ```
    <h1>Use form elements outside form</h1>
    <form id="formular1" method="post" action="">
      <p>Subject: <input type="text" name="subject"><br>
        Your message:<br>
        <textarea  name="txt" rows="8" cols="50" maxlength="2500">
    Enter your message here ...
        </textarea><br>
    </form>
    <h2>Lorem ispsum</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
    <p>
      <input type="submit" value="Send" style="width: 80px;" form="formular1">
      <input type="reset" value="Cancel" style="width: 80px;" form="formular1">
    </p>
   ```
 ![Preview](7_Forms/Images/Preview_7_10.PNG)


### **Multiple submit buttons to different URLs**
 It is possible to set up multiple submit buttons for a form in order to submit the form with different URLs. For this purpose, two new attributes for input fields of type `submit` and `image` have been added with `formaction` and `formmethod`, which override the attributes `action` and `method` in the opening form element if they have been noted there.
 The `formaction` specifies the URL that will be called when the submit button is pressed and to which the form data should be submitted. `formmethod` is the HTTP request method that should be used to send the data to the server for processing, i.e. either GET or POST.
  
  example --> *7_Forms/Part_11/index.html*

   ```
    <h1>Multiple submit buttons</h1>
    <form>
        <label>Receive messages: </label>
        <input type="email" name="mail" required>
        <input type="submit" value="to HTML" formaction="/scripts/subscribe-html.php" formmethod="post">
        <input type="submit" value="to CSS" formaction="/scripts/subscribe-css.php" formmethod="post">
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_11.PNG)


## 7.3. Special types of input fields
 In HTML there are several field types for better input control by the web browser, e.g. to specify certain types of data or ranges of values. All new input fields are annotated with the `<input>` tag and the corresponding `type` attribute.


 Types of `<input>` elements for the HTML attribute `type`
| HTML notation          | Explanation          				 |
| ---------------------- | ----------------------------- |
| `type="color"`         | Color selection               |
| `type="date"`          | Date selection                |
| `type="datetime"`      | date and time selection       |
| `type="datetime-local"`| local date and time selection |
| `type="email"`         | e-mail address                |
| `type="month"`         | month selection               |
| `type="number"`        | Number field                  |
| `type="range"`         | slider                        |
| `type="search"`        | Search input field            |
| `type="tel"`           | phone number                  |
| `type="time"`          | Time selection                |
| `type="url"`           | URL input field               |
| `type="week"`          | Week selection                |

### **\<input type="color">**
 With `<input type="color">` the user can select a color value via a color selection dialog. If the value is to be preset then the attribute `value` must be used.
  
  example --> *7_Forms/Part_12/index.html*

   ```
    <h1>New input types (HTML5)</h1>
    <form>
        <p>
            Select color (type="color")
            <input type="color" name="favcolor" value="#FF0000" /><br /><br />
        </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_12_1.PNG)


### **\<input type="date">**
 Here it is possible to select a date.
  
  example --> *7_Forms/Part_12/index.html*

   ```
    <h1>New input types (HTML5)</h1>
    <form>
        <p>
            Enter date (type="date")
            <input type="date" name="mydate" value="2021-11-12" min="2021-01-01" max="2022-12-30" /><br /><br /> 
        </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_12_2.PNG)


### **\<input type="time">**
 This can be used to specify a time in 24 hour format. If the field is to be preset then the value value is used.
  
  example --> *7_Forms/Part_12/index.html*

   ```
    <h1>New input types (HTML5)</h1>
    <form>
        <p>
            Enter time (type="time")
            <input type="time" name="mytime" value="15:15" min="08:00" max="17:00" /><br /><br /> 
        </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_12_3.PNG)


### **\<input type="month"> and \<input type="week">**
 This creates an input field for specifying the month and week.

  example --> *7_Forms/Part_12/index.html*

   ```
    <h1>New input types (HTML5)</h1>
    <form>
        <p>
            Enter month and week (type="month", type="week")
            <input type="month" name="mymonth" value="2018-01" />
            <input type="week" name="myweek" value="2018-01" /><br /><br />
        </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_12_4.PNG)


### **\<input type="search">**
 This can be used to create an input field for a search.

  example --> *7_Forms/Part_12/index.html*

   ```
    <h1>New input types (HTML5)</h1>
    <form>
        <p>
            Enter search (type="search")
            <input type="search" name="mysearch" value="Search Keyword" /><br /><br />
        </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_12_5.PNG)


### **\<input type="email">**
 This defines an input field for email addresses. The web browser checks if the email address has a valid format. The `required` attribute should also be specified, otherwise an empty field may be sent to the web server. With the attribute `multiple` it is possible to specify more than one email address. The individual email addresses are separated by commas.

  example --> *7_Forms/Part_12/index.html*

   ```
    <h1>New input types (HTML5)</h1>
    <form>
        <p>
            Enter e-mail address (type="email")
            <input type="email" name="myemail" multiple requried /><br /><br /> 
        </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_12_6.PNG)


### **\<input type="url">**
 This creates an input field for web addresses.

  example --> *7_Forms/Part_12/index.html*

   ```
    <h1>New input types (HTML5)</h1>
    <form>
        <p>
            Enter URL (type="url")
            <input type="url" name="myurl" /><br /><br />
        </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_12_7.PNG)


### **\<input type="tel">**
 This creates an input field for a phone number.

  example --> *7_Forms/Part_12/index.html*

   ```
    <h1>New input types (HTML5)</h1>
    <form>
        <p>
            Enter phone number (type="tel")
            <input type="tel" name="mytel" pattern="\+\+[0-9\-]" /><br /><br /> 
        </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_12_8.PNG)

 More information about [HTML5-pattern](https://html5pattern.com).


### **\<input type="number">**
 
  example --> *7_Forms/Part_12/index.html*

   ```
    <h1>New input types (HTML5)</h1>
    <form>
        <p>
            Enter number (type="number")
            <input type="number" name="mynum" min="0" max="100" value="50" /><br /><br />
        </p>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_12_9.PNG)


### **\<input type="range">**
 Used to create a slider. The HTML element `<output>` can be used for the output of values or the result of a calculation and is therefore the opposite of `<input>`. Without JavaScript, updating the output element is not possible.

  example --> *7_Forms/Part_12/index.html*

   ```
    <h1>New input types (HTML5)</h1>
    Adjust slider:
    <input type="range" id="ival" value="50" />
    <output id="oval" for="ival">50</output>



    <script>
        document.addEventListener("DOMContentLoaded", function() {
            function synchOutput(ev) {
                document.getElementById("oval").value = ev.target.value;
            }
            document.getElementById("ival").addEventListener("input", synchOutput);
        });
    </script>
   ```
 ![Preview](7_Forms/Images/Preview_7_12_10.PNG)


 More HTML attributes for input fields
| attribute     | Explanation         								              |
| ------------- | ------------------------------------------------- |
| `autofocus`   | Once the web page is loaded, the input field gets the focus and data can be entered. The attribute is a stand-alone attribute. Correctly, only one element in a form should contain this attribute. |
| `autocomplete`| This allows you to enable autocompletion with the value on (= default value) and disable it with the value off. |
| `list`        | As value you pass the id attribute of a datalist element with predefined options for autocompletion. |
| `max`, `min`  | This allows you to set the minimum or maximum value for an input field. |
| `multiple`    | With the Boolean attribute you can allow the user to enter more than one value. This attribute works with `type="file"` and `type="email"`. |
| `pattern`     | This allows you to define a regular expression as a search pattern, which must match the contents of the input field. |
| `placeholder` | This allows you to define a simple text as a placeholder that will be displayed as long as the input field is empty. It makes sense that this is a hint or help with regard to what the user should enter here (e.g. your email address in the case of a text input field for an email).|
| `required`    | With this standalone attribute you specify that this input field has to be must be filled in before it can be submitted. |
| `step`        | This is used to specify the value of the step size (interval) with which the control field can be changed. |
| `disabled`    | This stand-alone attribute allows you to disable an input field so that it cannot be selected and is grayed out. |
| `readonly`    | If you use this standalone attribute, it is not possible to change the input element. The input field is read-only. |


### **`autofocus`**
  example --> *7_Forms/Part_13/index.html*

   ```
    <h1>autofocus</h1>
    <form>
      Text 1 <input type="text" autofocus><br>
      Text 2 <input type="text"><br>
      Text 3 <input type="text">
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_13.PNG)


### **`list`**
  example --> *7_Forms/Part_14/index.html*

   ```
    <h1>list and datalist</h1>
    <form>
      Title <input list="mylist" name="titel"><br>
      <datalist id="mylist">
        <option value="Mr.">
        <option value="Mrs.">
        <option value="Professor">
      </datalist>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_14.PNG)


### **`placeholder`**
  example --> *7_Forms/Part_15/index.html*

   ```
    <h1>placeholder</h1>
    <form>
      User <input type="text" placeholder="Username"><br>
      Password <input type="password" placeholder="Password"><br>
    </form>
   ```
 ![Preview](7_Forms/Images/Preview_7_15.PNG)


## 7.4. Interactive HTML elements
 Interactive elements can be changed and adjusted by visitors, or interacted with in other ways.

### **\<details> and \<summary>**
 The details element can be used to expand and collapse page content. This can be helpful to avoid overwhelming the visitor with too much details and information right away. The visitor can click on a summary element to expand or collapse the information. The `open` attribute specifies that the content is already expanded when the web page is loaded, by default the details are collapsed. 

  example --> *7_Forms/Part_16/index.html*

   ```
    <h1>details and summary</h1>
	  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
      <details>
	  <summary>More informationen</summary>
	  <blockquote>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</blockquote>
	  </details>
	  <details open>
	  <summary>Further information</summary>
	    <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
       </ul>
	  </details>
   ```
 ![Preview](7_Forms/Images/Preview_7_16_1.PNG)
 ![Preview](7_Forms/Images/Preview_7_16_2.PNG)


### **\<dialog>**
 Dialog boxes were and are usually displayed using div elements. This is also possible with \<dialog>. The dialog element only becomes useful when used with JavaScript (`onclick="document.getElementById('dialog1').close()"`).

  example --> *7_Forms/Part_17/index.html*

   ```
    <dialog id="dialog1" open>
      <p>End dialog?<br>
      <input type="button" value="Close" onclick="document.getElementById('dialog1').close()">
      </p>
    </dialog>
   ```
 ![Preview](7_Forms/Images/Preview_7_17.PNG)


## 7.5. Send form data with PHP
 This is just an example of how data from an HTML form, entered in a web browser, gets to the ad server and is processed there. I will not go into detail about PHP here. To do this, you use a simple form mailer in PHP.

### Transferring the data from the web browser for further processing
 When a user fills out the input fields of a form and then submits it, the data is transferred to an application on the web server for further processing. Which application this is is specified with the `action` attribute in the `<form>` element. In practice, this is a script (usually in PHP) that is able to process the form data transferred by the web browser.

 The data in this HTML form is sent to a PHP script named `form-mail.php`. The web browser composes an HTTP request from the input in the form (`GET http://address.com/script.php HTTP/1.1`). There are several HTTP request methods, of which **GET** and **POST** are the most important.

  example --> *7_Forms/Part_18*

 ![Preview](7_Forms/Images/Preview_7_18.PNG)


 **GET**
 * With this HTTP request method, the web browser appends the form data to the address specified with the HTML action attribute with a ? -character at the end as a query string.
 The GET method is used in practice more for small amounts of data, such as a search query. If the amount of data is more extensive or the GET parameters should not be visible in readable form in the URL, the POST method should be used.


 **POST**
 * The post method (method="post") is usually used for larger amounts of text. When requesting content, the data is transferred from the form in a data block of name-value pairs. An advantage is that the length of the data is usually unlimited. Uploading files is only possible with the POST method.


----------------------------------------------------------------------------------------------

# 8. Useful websites about HTML
 * [Google](https://www.google.com/)
 * [HTML Dog](https://www.htmldog.com/) - HTML Tutorials
 * [W3school](https://www.w3schools.com/) - W3Schools is optimized for learning, testing, and training
 * [Mmdn](https://developer.mozilla.org/en-US/docs/Web/HTML) - All About HTML
 * [HTML.com](https://html.com/) - HTML For Beginners
 * [HTML5up](https://html5up.net/) - Templates
 * [FreeHTMLt.co](https://freehtml5.co/) - Templates
 * [GitHub](https://github.com/) 


------------------------------------------------------------------------------------------

### Thanks for reading. I hope you enjoyed it or at least learned something. 
 * On my Twitter account [@bella_mrx](https://twitter.com/bella_mrx) you can find more useful stuff about HTML and web development. 
 * Or check out my [GitHub](https://github.com/BellaMrx) profile.