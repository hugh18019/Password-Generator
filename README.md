# Password Generator

Password generator is a web application that generates password per the requirement of the user. It prompts the user to specify a number of criteria such as the total lenght of the password, and whether or not the password contains certain types of characters such as lowercase, uppercase, numeric, or special characters.

## Installation

To view the website locally, first go into the folder called "Password-Generator" that contains all the related files of the site, and make sure that the index.html file is inside the folder "Develop" at the root, along with the files "style.css", "script.js". After checking that all the files are in place, simply go into the "Develop" folder and open the index.html to view the website.

To view the published site through a browser, simply click on this link "https://hugh18019.github.io/Portfolio/".

## Technology Used

The index.html file of the project uses the Hypertext Markup Language( HTML ) to maintain a logical structure that contains all parts of the site.
The style.css uses css to select tags used by the index.html file to apply styles and manipulations to them to achieve the required look and functionality and interactivity of the website.
The script.js handles the main functionality of the site, such as prompting for information and using that information as a guideline to perform a series of steps and generate the password.

## Main Features

The Generate Password button initializes the process of generating the password. After it is pressed, an alert box appears that prompts the user to specify a length of the password between 8 and 12. It then asks the user to select from 4 criteria as a guideline to generate the password. Afterwards, it generates characters for each criterion up till the numbers of character matches the assigned length for that criterion. After all characters for all selected criteria are generated, it calles the shuffle function to randomly sort the password by making use of the Fisher-Yates algorithm. This shuffle process is repeated two times for greater randomness in terms of the position of each character in the final password.

Here is a few screenshots of the features:

![demo1](1.gif 'demo1')

![demo2](2.gif 'demo2')

![demo3](2.gif 'demo3')

## Links

Link to deployed site: https://hugh18019.github.io/Password-Generator/ \
Link to code repo: https://github.com/hugh18019/Password-Generator

## License & copyright

Licensed under the [MIT License](LICENSE).
