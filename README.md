## Angular Assignment - News Level 1
	
### Objective:
	
The Objective of this assignment is to understand the fundamentals of Angular.	
	
### Expected Outcome:	
	
By the end of the assignment you should be able to understand	
	
1.  Modules  
2.  Components	
3.  Angular Material  
4.  Data Binding	
5.  Dependency Injection	
6.  Services  

##### Estimated Duration : 3-4 Hours

### Prerequisites

1. Fork this boilerplate repository  
2. Clone the boilerplate repository and cd into it  
3. Install dependencies `npm install`  
4. Run the backend `npm run serve`  which shall run on port:3000  
5. Run the frontend `npm run start` which shall run on port:4200  

### About 3-Party NewsAPI
	
1. The NEWS API should be used as data source
- To get trending news use the following endpoint. [Top Headlines endpoint]
(https://newsapi.org/v2/top-headlines?country=in&apikey=<<api_key>>&page=1)
2. To register for an API key, follow these steps:
- You need to signup to [NEWSAPI] (https://newsapi.org/register).
- After registration, API key is generated for you.

### Assignment:	

The primary objective of this assignment is to read news using 3rd Party newsapi and allow viewers to bookmark news item to read later.

1. The UI design should use Bootstrap for responsiveness
2. App should be able to get the news from newsapi.org.
3. App should be able to load the title and image of all current news in the form of card.
4. Every card should have `Read Later` button.
5. As soon as a user clicks on `Read Later` button the full description as well as link of that news should get stored into db.json

### Instructions

1. Fork and clone the boilerplate

2. Install all the dependencies using `npm install` command

3. The news entity should be modelled using the News class defined in the models folder. This class should contain below listed properties :
- id (number)
- author (string)
- title (string)
- content (string)
- description (string) 
- publishedAt (string)
- url (string)
- urlToImage (string)

4. The boilerplate code contains code files for 5 Components
	- app
	- header
	- dashboard
	- card
    - footer

5. The `app` component should be the bootstrap component and load the header, dashboard and footer components

6. The `header` component contains the design for App header with below mentioned details :

	6.a Bootstrap navbar component should be used for responsive header design
	
	6.b Bootstrap's navbar component contains anchor-tag with class name `navbar-brand` within which brand logo image should be placed
	
	6.c This anchor-tag should also contain div element for title with text `StackRoute Times`
	
	6.d The navbar component list items should be replaced with mat-icon for home, favorite and search options

7. The `dashboard` component is responsible for fetching the trending news details from news api and load the details through the `card` component

	7.a Should contain `newsList` property which stores the array of type News fetched for trending news through `getTrendingNews()` method of NewsService

	7.b Should contain `errorMessage` string property which stores the error message `Unable to access news server to fetch news` for resource Not Found (404) error
	
	7.c For each element in `newsList`, dashboard component loads card component with the news item details passed to `newsItem` property of card component

8. The `card` component should display each news item assigned to it's input property `newsItem`

	8.a Card Component uses angular material card component to display newsItem.

	8.b Card contains image element for displaying news item image

	8.c Card will display title inside it's mat-card-content section.

	8.d The mat-card-actions section should contain button with `Read Later` text

	8.e When the `Read Later` button is clicked for a specific news item, `addNews()` method of NewsService should be called and the value of `newsItem` property should get saved to the db.json file located in server running at port 3000.

	8.f Card component should contain `confirmationMessage` string property to display the message `This News Article is Bookmarked` when the news item is stored successfully to db.json file

	8.g Card component should contain `errorMessage` string to display the error messages as mentioned below:
	- `Unable to access news server to add this news item` in event of error with status code 404
	- `Internal Server Error, Please Try Again Later` in event of any other error

9. The boilerplate code also contains code files for NewsService
10. The NewsService should manage the operations for news data through methods as listed below:
	10.a getTrendingNews() : fetches trending news using newsapi

	10.b addNews(news:News) : accepts News type data and adds it to the db.json file

11. The dashboard and card components should implement DI for NewsService for retrieval and addition of newsItem respectively

12. The footer component should display the copyright information and social media link icons (not functional) 

13. Ensure following commands succeed in your local machine before submitting your code for Preliminary automated review as described below:

```
npm install
npm run build
npm run lint
npm run test
npm run e2e
```

### Submitting your solution for preliminary automated review  
1. Open `https://hobbes-ust.stackroute.in/#/` and login into the platform  
2. Under `Assignment repository` select `news-level-1-assignment`, and branch `master`
3. Under `Your solution repository` select your own repository and branch
4. Press `Submit`
5. Press `click here` for the feedback
6. Evaluation will take around 5-10 mins to complete after which you need to refresh your browser and get the updated status
7. Watch out for your total score and detailed status on each test and eslint errors in the coloured blocks on the screen  
8. Fix failing test cases as well as eslint errors and re-submit your solution (you may skip any eslint errors reported in the provided spec files)  

### References:
	
1. [Angular Architecture](https://angular.io/guide/architecture)
2. [Angular CLI](https://cli.angular.io/)	
3. [Angular Templates](https://angular.io/guide/architecture#templates)	
4. [Angular Data Binding](https://angular.io/guide/architecture#data-binding)
5. [Angular Material](https://material.angular.io)