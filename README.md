# Fans of Gaming (add logo here FoG)

[Fans of Gaming](https://fans-of-gaming.herokuapp.com/) is a clone of [Steam](https://store.steampowered.com/).  An online store for purchasing and reviewing digital games.
#### Features Include:
  * User creation and customization
  * Browse games
  * Read reviews on specific games
  * Purchase or wishlist games
  * Create reviews on owned games
#### Technologies Used:
  * React & Redux for the frontend
  * Ruby on Rails for the backend
  * Heroku for hosting the website
  * AWS S3 for storing media content
#### Game Show Page:
  * Built a slider from scratch:
    * Translating the slider dependent on the selected photo
      * Challenge: Interpolate the distance for the slider to be translated based on the index of a photo selected.
      * Solution: Use the default position as a point of reference. Implementation can either use a delta in pixels or percentages for translation.
    * Implementing a scrollbar
      * Challenge: Correctly interpolate position of scrollbar dependent on the position of the slider.  First iterations produced very buggy results
      * Failed Solution: The first iteration involved using a point of reference (where a user clicked on the scrollbar) and translate based on the delta +/- away from the point of reference.  This solution produced very buggy results and was very difficult to controll the position of the scrollbar.
      * Alternate Solution: Use a tabsbar to represent the selected photo.  There is one tab per photo on the slider.  The selected tab represents the selected photo.  Selecting a new tab not only selects another photo, but also translates the slider to its appropriate position.  Not only is this implementation much easier, it is also more smooth than the scrollbar solution.
#### Main Page: 
  * Build a carousel from scratch:
    * Showing a selected game:
      * Challenge: Determining which game to show without having to use translations on the horizontal axis like a slider behaves.
      * Solution: Make a carousel that only displays one component at a time.  Using an index value to determine a selected game, pass in the selected game into the component to render the game related info.
#### TODO Features: 
  * Add reviews for games
  * Add a user profile page
  * Add a cart, wishlist, and library for each user
  * Add search games by genre or name
