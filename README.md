# HTML_Tutorial

 detailed tutorial about HTML + templates (all basics for HTML)

---------------------------------------------------------------------------------------------------------------

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

---------------------------------------------------------------------------------------------------------------

## 1. Introduction to HTML

### 1.1. Different types of websites
  * **Web presence (Homepage / Corporate Website)**
    - can be a private homepage or a web presence of companies, associations, authorities or business persons
    - for companies, municipalities and non-profit organizations it is often called a corporate website
    - many small companies and private persons use ready-made systems such as *WordPress* (Content-Management-System)

  * **Blog / online magazine / portfolio**
    - a website with usually chronologically sorted entries, which are separated from each other
    - can also be the start page of a website to display the latest articles or current information
    - online magazines can also be structured in this way
    - many companies and private persons often use ready-made systems like e.g., *WordPress* or *Drupal*
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


### 1.2. Dynamic and static websites
  * **Static websites**
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


 ![Preview](Images/staticWebsite.PNG)

 This is a simplified representation of how a static web page is returned. The web browser first sends a request for a web page to the web server that hosts the web page. The web server finds the page and sends it back to the web server as a response. If it is not found, an error message is returned (status code 404).


  * **Dynamic websites**
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


 ![Preview](Images/dynWebsite.PNG)

 This is a simplified representation of how a dynamic web page is created. A web browser makes a request for a web page to a web server. The web server finds the page and passes it to the application server. The application server searches the page for commands and completes the web page. Additionally, instructions for database queries may be included. The database driver then returns the requested record to the application server, where the data is inserted into the web page. The web page is then sent as a response to the web browser.


### 1.3. Programming languages for web development
  * This is an overview of the programming language that a web developer must know.

  * **HTML** (Hypertext Markup Language)
    - is a text-based markup language for structuring electronic documents such as text with hyperlinks, images and other content. HTML documents are the basis of the World Wide Web and are displayed by web browsers. In addition to the content displayed by the browser, HTML files can contain additional details in the form of meta information, e.g. about the languages used in the text, the author or the summarized content of the text --> [W3C](https://www.w3.org/)

  
  * **CSS** (Cascading Style Sheets)
    - It is a design and formatting language used to determine the appearance of HTML documents. So it's about design or style, not the content of a web page. In practice, HTML is used only for structuring the web page, and CSS for formatting and styling. It is possible to include CSS directly in HTML. For large or more web pages it is advantageous to save this in a CSS file, then all web pages can be changed with once.

  * **JavaScript**
    - is the most important client-side scripting language, allowing to extend the limited possibilities of HTML with user interactions

  * **Server-side scripting languages and databases**
	  - common languages for dynamic websites are Python, PHP, Ruby etc., and for databases e.g. MySQL or PostgreSQL
	  - Knowledge in PHP and MySQL can be an advantage for e.g. formmails, guestbooks or surveys


### 1.4. Software for the creation and presentation of web pages
  * Basically, on every operating system there is a text editor for creating web pages and a browser for displaying the web page.
	  - Windows: Notepad
	  - Linux: e.g. gEdit
	  - Mac: TextEdit 

  * Most web developers use special editors, the advantage is on the one hand the syntax highlighting and many other helpful functions for the creation of web pages.
    - Visual Studio Code --> [VSCode](https://code.visualstudio.com/) (my favorite)
    - Adobe Brackets --> [Adobe Brackets](https://brackets.io/) 
    - Atom --> [Atom](https://atom.io/) 
    - Sublime Text --> [Sublime Text](https://www.sublimetext.com/) 
    - Notepad++ --> for beginners 

  * For the display of the HTML document you need a web browser. For testing it is best to use several web browsers, because there are small differences. You should also test the web pages on different devices, such as desktop computer, laptop, tablet and smartphone. In the best case, the display of the website adapts to the devices. This adaptability is called responsive web design. This adaptation does not happen automatically.
	  - the main web browsers currently are (largest mart share): Google Chrome, Mozilla Firefox, Safari (Apple) and Edge (Microsoft).
	  - Other web browsers (smaller market share): Vivaldi, Opera, Brave 

  * The HTML renderer (browser engine) converts the source code into a visible web page.
    
    | Renderer  | Browser                                                     |
    | --------- | ----------------------------------------------------------- |
    | Quantum   | Firefox                                                     |
    | Webkit    | Safari and all web browsers on iOS                          |
    | Blink     | Chrome, Edge, Samsung Internet, Vivaldi, Opera, Brave etc.  |


### 1.5. Create and view a simple web page
  1. open an editor (for the beginning a simple editor is enough), and create a new empty document.
  2. enter HTML code into the editor, see folder --> *1_IntroductionToHTML/Part_1/index.html*
  3. save HTML code, it is recommended to create a new directory for it. When saving the file, make sure that the file is saved with the file extension *.html*. As encoding *UTF-8* is always good, you can also use *ANSI* for the time being.
  4. The HTML file can now be opened with a browser, usually it is enough to double-click the file and the standard browser opens and displays the file.

 * **Check HTML-Code**.
   - Whether the HTML code or the web page is correct, you can check it, with the online tool  at W3C [Validator](http://validator.w3.org) you can validate the code (in many editors such a function is available or can be integrated later)
   - if the code is error free a green bar is displayed (W3C)
   - If the validation is invalid, the error is listed with a message. An error output does not mean that the web page cannot be displayed, because the web browsers are relatively error tolerant, but it can lead to errors.
   - Many large websites have errors, hardly any site is 100% error free.

 * Advantages to validate the HTML code:
   - the correct display in all browsers, the browsers are relatively error-tolerant but there are differences, especially with mobile devices you should pay attention to it
   - Search engines look for texts and keywords, so that it can be found more easily
   - Accessible websites, incorrect text or structure can cause assistive tools such as read aloud software to not work properly.
   - helpful for beginners to recognize errors quickly and prevents writing unclean code --> a clean code shows quality

-----------------------------------------------------------------------------------------------------------------

## 2. Structure of a HTML document

### 2.1. Syntax and structure of HTML documents
* The HTML document is very structured. A complete *HTML element* usually consists of an opening HTML tag (**\<html>**), a closing HTML tag (**\</html>**) and everything in between. As *HTML- element* is usually called everything that stands between the tags. So the *HTML elements* ("headline") are marked by *HTML tags* (**\<h1>** and **\</h1>**).

* see example folders --> *2_StructureOfaHTMLdocument/Part_1/index.html*
  - everything between **\<html>** and **\</html>** (root element) is the HTML code for the HTML document
  - between **\<head>** and **\</head>** the header data of the HTML document is summarized
  - the part visible in the web browser is between **\<body>** and **\</body>**
  - between **\<h1>** and **\</h1>** is a 1st order heading
  - between **\<h2>** and **\</h2>** there is a 2nd order heading
  - between **\<p>** and **\</p>** there is a normal paragraph

* The HTML code of an HTML document consists of pure text. A web browser creates a model from this in the form of a tree structure of objects such as HTML elements, attributes, and texts. This is called a **Document Object Model (DOM)**. Each object in it is called a **node** and can be manipulated via a public interface using JavaScript. This DOM tree can be viewed in the browser, using developer tools provided by the browser.


![Preview](Images/DOM_Inspector.PNG)



* Most HTML elements can be nested and contain other HTML elements, creating a hierarchical structure.
* see example folders --> *2_StructureOfaHTMLdocument/Part_2/index.html*
  - Here, within the paragraph, the b element has been nested (b = bold). **b** is the child element of **p** and **p** is the child element of **body**. **html** is the parent element of **body**. In this example, **b** is the child-child-child element of **html**.
  - Complex HTML documents contain a lot of nesting.
  - It is important to avoid incorrect nesting, otherwise the web page can be displayed incorrectly and it becomes very confusing.

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


* Some HTML elements are standalone tags (void tags) that have no content e.g. **\<br>** (which creates a line break), but this should not be abused, to increase the spacing between lines use CSS.

* HTML elements can contain additional attributes (properties). These can be used to specify additional information about an element. Attributes can be used only with start tags.
  - see example folders --> *2_StructureOfaHTMLdocument/Part_3/index.html*
  - with the attribute **lang="en"** you specify the language that will be used
  - the **\<a></a>** element defines a hyperlink to another page, at **href** you specify the URL to navigate to 
  - the standalone tag **\<img>** can be used to display images, **src** specifies the location of the image, alt specifies the alternative text if the image cannot be displayed

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


* There is the possibility to leave comments within the HTML document, these are helpful to understand the code later, if you forget something. Comments are not visible on the web page in the browser but in the source code, which everyone can see.
  - this is how a comment is created, everything between the characters is the comment and is not visible on the web page:
   ```
    <!-- comment --> 
   ```


### 2.2. Basic structure of a simple HTML document

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


* \<!doctype html>
  - is the first specification in an HTML document, and not an HTML tag but an instruction
  - it is an instruction for the web browser, in which HTML version the web page was created 

* \<html> \</html>
  - informs the web browser that there is HTML code present
  - it encloses all other elements in the HTML code (except \<!doctype html>)
  - there you can also specify the language **lang="en "** (very helpful for accessibility)

* \<head> \</head>
  - here information is given which is evaluated by the web browser and search engines e.g. scripts, stylesheets, meta information with information about the HTML document.  
  - the **\<title> \</title>** specifies only the title of the web page that can be seen in the browser

* \<body> \</body>
  - the body element is the displayable area of an HTML document
  - everything contained in it, such as texts, images, hyperlinks or tables is displayed in the browser


-----------------------------------------------------------------------------------------------------------------


## 3. The header data of an HTML document
### 3.1. The HTML elements for the header
* Between \<head> and \</head> different HTML elements can be inserted, with which the contents and the representation can be controlled. Relationships between the web browser and other pages or documents can also be established there. The content in the header (except **title**) is not displayed in the browser. The **head** element must follow directly after the open **html** element. The only specification in the **head** area that should always be made is the **title** element.. 


| HTML element           | Explanation                                                                     |
|----------------------- | ------------------------------------------------------------------------------- |
| \<title>...</title>    | the title of the HTML document (visible in the browser)                         |
| \<base>                | sets base URLs / targets for all relative URLs in a web page                    |
| \<link>                | sets logical links of the HTML document to other files to be included           |
| \<style>...\</style>   | sets the local stylesheet rules for the HTML document                           |
| \<script>...\<script>  | includes the client-side scripts, may also be used outside the **head** element |
| \<meta>                | sets the metadata like keywords, descriptions or the character set for the HTML document     |


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


### 3.2. The title element 
 * A title should be used in each HTML document, which is displayed in the browser header. Only one title element can be used per HTML document. The title element can be skipped, but the web page will not be considered valid. The title element serves the user e.g. if the page is saved as a bookmark, then the title is displayed as a name suggestion. And most importantly, the title has a high importance in search engines, because it is what the user sees first in the search engine when the pages are listed. 

   ```
    <head>
      <meta charset="UTF-8">
      <title>The heading of the HTML page</title>
    </head>
   ```
- see example folders --> *3_TheHeader/Part_1/index.html*

![Preview](Images/BrowserTitle.PNG)


### 3.3. The base element
 * The base-element specifies a base URL or base target for all relative URLs in an HTML document. By defining such a base URL, a relative or absolute address to the file can be used in the document as if it were located directly on the same host or computer. Can be used only once in the HTML document.
   - see example folders --> *3_TheHeader/Part_2/index.html*

    ```
     <head>
       <base href="https://www.w3schools.com/" target="_blank">
     </head>
    ```
   source [w3school](https://www.w3schools.com/tags/tag_base.asp)

| Attributes | Explanation                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------- |
| **href**   | The base URL is defined in the process. This URL is used by the web browser as the base address for relative and absolute path specifications in the document and is supplemented with this base URL.         |
| **target** | This attribute is used to specify the target window in which the link target should be displayed. Possible values and their meaning are:                                                                        |
| _self  | opens the link in the current window, is the default setting when *target* is not used             |
| _blank | opens the link in a new window or tab                                                              |
| _parent| opens the reference in the parent window: is the window from which the current window was opened   |
| _top   | loads the reference of the file in the highest hierarchy in the window			                        |


### 3.4. The link element
* The link element is a stand-alone tag that may be used multiple times in the HTML document. In practice, it is often used to include an external CSS file, and other files. The relationship between the HTML document and the external document is specified with the HTML attribute *rel*.
   - see example folders --> *3_TheHeader/Part_3/index.html*

   ```
    <head>
      <title>Logical linking with link</title>
      <link rel="stylesheet" type="text/css" href="style.css">
      <meta charset="UTF-8">
    </head>
   ```

| Attributes | Explanation                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------- |
| href       | Here the URL to the resource to be linked is specified, this attribute must be used.     	   	 |
| hreflang   | Defines the language of the resource to be linked                                               |
| media      | Here you specify for which medium/device the target resource is optimized in *href*.            |
| size       | Specifies the size for the resource to be linked, e.g. *rel="icon" size="any "*.                |
| type       | This specifies the *MIME type* for the document to be linked e.g. *type="text/css "*.    	     |
| rel        | This sets the relationship between the current document and the external resource in *href*. Possible values are: |
| alternate | links to an alternative presentation form of the current page 		       				       |
| author    | links to another page with information about the author    		      				           |
| mailto    | link to an e-mail address of the author                               	 	       			 |
| archives  | links to a previous version of certain documents           		       				           |
| help      | links to a help document                                      		       				       |
| icon      | this assigns a favicon to the web page                                                 |
| license   | links the current page, with the page of the rights of use for the contents of the page|
| next,pref | is used to create a link from the current or previous page      	                     |
| prefetch  | links to an external web page that the user is likely to visit next       				     |
| pingback  | the website of a pingback server is specified here							                       |
| search    | links the current document to another document where the search is possible through the whole web page 	|
| stylesheet| links an external CSS file to the current HTML document							                   |
| tag       | a simple tag as a linked resource that applies to the current document					       |
