# Magic the Gathering App
## Built using React for Code Louisville

The main purpose of this exercise is to pull back data from the unofficial Magic the Gathering API and display it using React.

Currently, the page consists of a drop down list of sets, which will bring back all cards from the selected set.  This will be updated to included pagination At the moment, I am only including the core sets as well as expansions. There are unfortunately a number of sets that are missing needed items (such as pictures), and, until I have a more elegant way to address those issues, I've limited the scope of available cards.

There is also an unfiltered list of cards under the "All Cards" button. This will return all cards available.  Functionally, it's the same as the data returned from the Set option, but is completely unfilterd.   

Once a list of cards has been provided, any card can be clicked on to provide more inforation about the selected card.

### Steps to run:
1 - Download the repo from Github
2 - Open your favorite terminal
3 - Navigate to the folder where you saved the repo
4 - Run "npm install" to download and install depenencies 
5 - Type "npm run" and hit enter to start the project 
6 - The page will load and run from localhost and open in a new window