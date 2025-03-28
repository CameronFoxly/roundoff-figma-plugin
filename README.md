# Round Off - Figma Plugin
<img width="1920" alt="NewIMage" src="https://github.com/user-attachments/assets/b386cdc3-8d48-4e03-ac60-a79473a28d3a" />

## Overview
If you have any decimal values in the position value of a frame, Figma rounds up that pixel on export to PNG, and you get a white line along the edge of the exported asset. To avoid this, you need to round off all the decimal values manually, which is a pain. This plugin does it for you!

The Plugin is designed to round off decimal values in the `x` and `y` position properties of all top-level frames on the current page, or only those selected. Never see that little white edge line bug again!  

## Features
![Screenshot 2025-03-28 at 11 25 44 AM](https://github.com/user-attachments/assets/5ff0e0b1-cc62-46db-b681-2e101a0594ad)
- **Round off positions**: Adjusts the `x` and `y` position values of top-level frames to the nearest integer.
- **Two modes**:
  - Apply to all top-level frames.
  - Apply only to selected top-level frames.
- **User-friendly UI**: Includes a toggle to switch between modes and a button to trigger the functionality.

## How to Use
1. Open the plugin in Figma.
2. Use the toggle to select the mode:
   - **Unchecked**: Applies to all top-level frames.
   - **Checked**: Applies only to selected top-level frames.
3. Click the **"Round off"** button to adjust the positions.
4. Close the plugin using the **"Close Plugin"** button.

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/roundoff-figma-plugin.git
   ```
2. Open Figma and go to **Plugins > Development > Import Plugin from Manifest...**.
3. Select the `manifest.json` file from the cloned repository.

## Development
To modify or enhance the plugin:
1. Edit the `main.js` file for plugin logic.
2. Edit the `ui.html` file for the user interface.
3. Update the `manifest.json` file for metadata changes.

## License
This project is licensed under the MIT License.
