# NewsService
News service is a platform that provides last 24-hours news according to user’s preferences. Users can register at the platform, search news with keywords or just open recommendations and read the news that propose our service.
Structure:
 Pages
  Homepage. Page with recommended or “hot” news and the ability to search news using keywords. It also contains user’s statistics at the right column
  Page with article. Articles, links to related articles and estimation ability will be placed here. Users can estimate the article if it fits them or not.
  Authorization page
  Databases
    We will have at least 2 databases: User’s database with their information for authentication and their preferences (keywords for our recommendation system) and article database that updates every day.
 Algorithms
     We are going to use content-based filtering algorithm. This User-based algorithm counts indexes according to users preferences, gives all users coordinates and according to these coordinates proposes articles for each user.
 API
     News API is the best case for this project, because requests already contain keywords and it has a huge spectrum of usage.


Stack
 Frontend:
  Angular
  Node.js
 Backend:
  Node.js
  MySQL(PostgreSQL)
 

