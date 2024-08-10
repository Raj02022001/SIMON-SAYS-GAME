About The SIMON SAYS GAME Project


HTML (index.html):
-Document Structure: The HTML file sets up the basic structure of the web page, including headings, a container for the game buttons, and links to the CSS and JavaScript files.
-Semantic Elements: Uses <div>, <h1>, and <h2> tags to organize the game interface.

CSS (style.css):
-Styling and Layout: The CSS file defines the visual appearance of the game, including button sizes, colors, and the layout.
-Responsive Design: Uses Flexbox (display: flex) to center and arrange the buttons within the container, making the layout adaptable to different screen sizes.
-State-Based Styling: Provides styles for different button states (e.g., flash for game flash, userflash for user interaction) to enhance visual feedback.

JavaScript (app.js):
1. Game Initialization and Event Handling:
Feature: The game starts when the user presses any key, ensuring that the game only starts once per session.

How It Works:

-The game listens for a keypress event using the addEventListener method.
-A conditional check (if (!started)) ensures the game only initiates once per keypress, preventing multiple instances from running simultaneously.
-Upon starting, the game invokes the levelup() function to generate the first sequence and set the initial level.

2. Level Progression and Sequence Generation:
Feature: As the player progresses, the game generates increasingly complex sequences of colors that the player must mimic.

How It Works:

-The levelup() function is called whenever the player completes a sequence. It increments the level, resets the player's sequence, and appends a new random color to the game's sequence.
-A random index is generated using Math.random() and Math.floor(), which corresponds to one of the four colors. This color is then flashed to the user as part of the sequence.

3. Visual Feedback and Button Flashing:
Feature: The game provides visual cues by flashing buttons in specific colors, both during sequence generation and in response to user input.

How It Works:

-Two functions, gameflash() and userflash(), are used to create a temporary visual change (flash) on the buttons. The classList.add() and classList.remove() methods are employed to add and remove CSS classes (flash or userflash), which change the button's appearance.
-setTimeout is used to control the duration of the flash, ensuring it appears momentarily.

4. User Input Handling:
Feature: The game tracks and responds to user input, allowing players to interact with the game by clicking on buttons.

How It Works:

-When a button is clicked, the btnpress() function is triggered. This function flashes the clicked button, captures the button’s color (using getAttribute("id")), and appends this color to the userSeq array.
-After capturing the input, the game checks whether the player's input matches the game’s sequence using checkAns().

5. Sequence Matching and Game Logic:
Feature: The game continuously checks if the user's input sequence matches the game’s generated sequence. If the sequences match, the game progresses; if not, the game ends.

How It Works:

-The checkAns() function compares the user's sequence with the game’s sequence index by index. If the sequences match and the user has completed the sequence, the game progresses to the n-ext level.
-If the sequences do not match, the game triggers a "Game Over" state, displays the final score, and resets the game for a new session.

6. Reset Mechanism:
Feature: When the game ends, it resets all relevant variables and prepares for a new session, allowing the player to restart the game from level 1.

How It Works:

-The reset() function is called whenever the game ends. It clears the sequences, resets the level to 0, and sets the started flag back to false, enabling the game to start fresh.

