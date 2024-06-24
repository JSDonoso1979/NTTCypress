Title: QA automation of the page https://www.demoblaze.com/

Versions of the technology to use:
    "Windows": "^10.0.19042"
    "Node.js": "^18.18.2"
    "cypress": "^13.12.0"
    "cypress-plugin-tab": "^1.0.5"
    

Goals:

• Add two products to cart
• View the cart
• Complete the purchase form
• Complete the purchase

Steps:

01. Create a folder 
02. Open the folder in your IDE
03. Install Cypress in the folder using: npm install cypress --save-dev in the terminal
04. In the terminal write npm init, press enter and configure the package.json
05. Run cyperes writing in the terminal: npx cypress open and press enter
06. When you have opened cypress in your browser select E2E testing
07. In the configuration window click continue. This will create the cypress configuration folders
08. Choose the browser you want to work with
09. Choose the option create a new spec
10. Type the name of the test and press create spec. Then press OK run the spec
11. In your IDE go to the e2e folder and then click on the file you created
12. Delete the default template and then write on the first line: /// <reference types="Cypress" />
13. Create the test by entering the describe as follows: describe("",()=>{})
14. Inside the {} press enter twice to start writing inside them
15. Create our first test automation step by typing the following: it("",()=>{});
16. Inside the {} press enter twice to start writing inside them
17. Inside the {} of it write the following: cy.visit("https://www.demoblaze.com/");
    This will help Cypress navigate to the page we want to test.
18. On the line below we write: cy.title().should("eq", "STORE");
    This will help us confirm that we are on the page we requested by comparing 
    the title of the page in cypress with the page on the web
19. Bellow we write the following: cy.screenshot(). 
    Inside the () we can put the name that we think is relevant for the screenshot

End of the firts Step

20. For the next step we must install the cypress tab plugin. 
    We close Cypress and in our terminal we write: npm install -D cypress-plugin-tab
21. Then we go to cypress/support/index.js and at the top we write: require('cypress-plugin-tab'). 
    This will serve to activate the plugin that we are going to use in the next part

Beginning of the second Step

23. Create our second test automation step by typing the following: it("",()=>{});
24. Inside the {} press enter twice to start writing inside them
25. Inside the {} of it write the following: cy.visit("https://www.demoblaze.com/");
26. Open cypress using npx cypress open in the terminal this will make Cypress go to the 
    page we are testing
27. In the upper left part of the browser where the page link is located 
    click on the icon and then select the first object we want to buy
28. After selecting our object, below the link a code will appear, 
    Copy it and paste it in the second test in our IDE
29. At the end of the code and on the right side of ) we write.click() 
this will do the command for Cypress to click on the object we chose
30. then we write immediately after click().then(()=>{}) 
    and press enter twice to write inside the braces
31. After selecting our first object, we click on the selector icon and go to where it says product store, 
    click there and copy the code. Then we put the code that we copied inside the {} of then and write
    .click() immediately after.
32. Below we write cy.wait(1000). 
    This will mean that there will be a time period of 1000 milliseconds. 
    between one action and the next.
33. Bellow we write the following: cy.screenshot(). 
    Inside the () we can put the name that we think is relevant for the screenshot
34. Repeat step 27 for the second item
35. Paste the copied code bellow the first screenshot of the second test.
36. Repeat steps 29-33
37. Repeat step 32
38. Go to Cypress browser and click in the selector icon and go to the menu and click in cart
    copy the code and pase bellow the last cy.wait(1000)
39. Type cy.wait(2500). This will give enough time for the two items to appear and the full screenshot to be taken.
40. Repetat step 33
41. In the Cypress browser go to the bottom place order and with the selector tool click over
    and copy the code, then paste bellow the last screenshot.
42. Type .click() beside the ) of the code.
43. Type cy.wait(500) is enought time to look the typing on the video.
44. With the selector tool place the mouse in the name box and click. Copy the code
45. Paste the code and type .type() inside the parentheses put your name in quotes
46. Immediately after the type parentheses put .tab(). 
    This will make cypress go to the next text box
47. Repeat step 43
48. With the selector tool place the mouse in the country box and click. Copy the code
49. Repeat step 45 and type your country in quotes
50. Repeat step 46
51. Repeat step 43
52. With the selector tool place the mouse in the Credit card box and click. Copy the code
53. Repeat step 45 and type a invented cretit card numbers in quotes
54. Repeat step 46
55. Repeat step 43
56. With the selector tool place the mouse in the Month box and click. Copy the code
57. Repeat step 45 and type a month in quotes
58. Repeat step 46
59. Repeat step 43
60. With the selector tool place the mouse in the Year box and click. Copy the code
61. Repeat step 45 and type a year in quotes
62. Repeat step 46
63. Type cy.wait(6000) is enought time to look the interaction on the video.
64. Repeat step 33
65. With the selector tool place the mouse in the purchase bottom and click. Copy the code
65. Paste the code bellow the last cy.wait(500) and type .click() beside the code
66. Repeat step 43
67. With the selector tool place the mouse in the Ok bottom and click. Copy the code
68. Repeat step 65
69. Type cy.wait(1500). Type cy.wait(1500). It's enough time for the video to capture the entire interaction


video

70. In the archive cypress.config.js, bellow module.exports type: video: true, .
    This command create a video folder and place inside a complete video for the test







