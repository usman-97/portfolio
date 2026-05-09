export const getActiveFileFromPath = (path, navItems) => {
  const activeItem = navItems.find((item) => item.route === path);
  if (!activeItem) return "Home.jsx";

  let fileName = activeItem.name;
  if (activeItem.type === "file" && activeItem.parentId !== 'src') {
    const parentItem = navItems.find((i) => i.name === activeItem.parentId);
    if (parentItem) fileName = parentItem.name;
  }
  return fileName;
};