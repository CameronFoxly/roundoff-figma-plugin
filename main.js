figma.showUI(__html__, { width: 300, height: 200 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'round-off') {
    const applyToSelected = msg.applyToSelected;
    const frames = applyToSelected
      ? figma.currentPage.selection.filter(node => node.type === 'FRAME' && node.parent === figma.currentPage)
      : figma.currentPage.children.filter(node => node.type === 'FRAME');

    frames.forEach(frame => {
      if (frame.type === 'FRAME') {
        frame.x = Math.round(frame.x);
        frame.y = Math.round(frame.y);
      }
    });

    figma.notify(`${frames.length} frame(s) adjusted.`);
  }

  if (msg.type === 'close-plugin') {
    figma.closePlugin();
  }
};