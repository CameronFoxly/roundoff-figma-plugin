figma.showUI(__html__, { width: 300, height: 250 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'round-off') {
    const applyToSelected = msg.applyToSelected;
    const frames = applyToSelected
      ? figma.currentPage.selection.filter(node => node.type === 'FRAME' && node.parent === figma.currentPage)
      : figma.currentPage.children.filter(node => node.type === 'FRAME');

    const adjustedFrames = frames.filter(frame => {
      const originalX = frame.x;
      const originalY = frame.y;
      frame.x = Math.round(frame.x);
      frame.y = Math.round(frame.y);
      return frame.x !== originalX || frame.y !== originalY;
    });
    figma.notify(`${adjustedFrames.length} frame(s) adjusted.`);
  }

  if (msg.type === 'close-plugin') {
    figma.closePlugin();
  }
};