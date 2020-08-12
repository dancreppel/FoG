# <img src="https://github.com/dancreppel/FoG/blob/master/app/assets/images/FoG-logo.png" alt="Fog Logo" width="25" height="25"/> FoG
[Fans of Gaming](https://fans-of-gaming.herokuapp.com/) is a clone of [Steam](https://store.steampowered.com/).  An online store for purchasing and reviewing digital games.

<img src="https://github.com/dancreppel/FoG/blob/master/app/assets/images/readme/front_page.png" alt="Front Page">

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
#### Slider:
  ![slider](https://github.com/dancreppel/FoG/blob/master/app/assets/images/readme/games_show_slider.png "Slider")
  * Built a slider from scratch:
    * Translate the slider dependending on which photo is selected.
      * Challenge: Interpolate the distance for the slider to be translated based on the index of a photo selected.
      * Solution: Use the default position as a point of reference. Implementation can either use a delta in pixels or percentages for translation.
    * Implementing a scrollbar
      * Challenge: Correctly interpolate position of scrollbar dependent on the position of the slider.  First iterations produced very buggy results
      * Failed Solution: The first iteration involved using a point of reference (where a user clicked on the scrollbar) and translate based on the delta +/- away from the point of reference.  This solution produced very buggy results and was very difficult to controll the position of the scrollbar.
      * Alternate Solution: Use a tabsbar to represent the selected photo.  There is one tab per photo on the slider.  The selected tab represents the selected photo.  Selecting a new tab not only selects another photo, but also translates the slider to its appropriate position.  Not only is this implementation much easier, but it is also smoother than the scrollbar solution.
  * Implementation:
    * Arrow buttons:
      ``` js
        goLeft () {
          // for slider
          let { index, delta } = this.state;
          let length = this.sources.length;

          if (index > 0) index -= 1;
          else index = this.sources.length - 1;

          // move slide right by an image length in percentage relative to container width
          if (index === length - 1) delta = 100 - this.conLen;
          else if (delta !== 0) delta += 20;

          this.setState({ index, delta });
        }
      ```
      Adjust index and delta after clicking the left arrow.  If the index is 0, set the index to correspond with the last image. Otherwise, decrement the index.  This logic also applies to settting the delta, which is used by CSS to adjust the visible images.
    * Translating the slider along the X-axis:
      ``` js
        <div
          className="slider"
          onClick={this.handleClick}
          style={{ transform: `translate(${delta}%)` }}
        >
          {items}
        </div>
      ```
      Because the collage of images is constrainted to its container with the overflow: hidden property, the slider has to be shifted along the X-axis to keep the selected photo within the frame of reference. Using the delta saved in the component state, the CSS transform: translate property allows the slider to shift along the X-axis.
#### Carousel: 
  ![carousel](https://github.com/dancreppel/FoG/blob/master/app/assets/images/readme/main_carousel.png "Carousel")
  * Build a carousel from scratch:
    * Showing a selected game:
      * Challenge: Determining which game to show without having to use translations on the horizontal axis like a slider behaves.
      * Solution: Make a carousel that only displays one component at a time.  Using an index value to determine a selected game, pass in the selected game into the component to render the game related info.
  * Implementation:
    * Arrow buttons:
      ``` js
        goRight () {
          let index = this.state.index;
          if (index === this.props.games.length - 1) index = 0;
          else index += 1;
          this.setState({ index });
        }
      ```
      Navigating the list of games is very similar to how the slider operates.  However, the state only needs to manage the index because only one game needs to be displayed at a time.
    * Tabs:
      ``` js
        handleClick (e) {
          let index = Number(e.target.dataset.index);
          this.setState({ index });
        }
      ```
      Another form of navigation is using interactible tabs.  The implementation is as simple as setting the state to the selected index, which corresponds to the game entity within an array of games.  The component then renders the selected game.
#### TODO Features: 
  * Add reviews for games
  * Add a user profile page
  * Add a cart, wishlist, and library for each user
  * Add search games by genre or name
