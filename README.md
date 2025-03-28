# Round Off - Figma Plugin

## Overview
The Round Off Figma Plugin is designed to help you clean up your designs by rounding off decimal values in the `x` and `y` position properties of top-level frames on the current page. It ensures your designs are pixel-perfect and organized.

## Features
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