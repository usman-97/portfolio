export const getActiveFileFromPath = (path, navItems) => {
  const activeItem = navItems.find((item) => item.route === path);
  if (!activeItem) return "Home.jsx";

  let fileName = activeItem.name;
  if (activeItem.type === "file" && activeItem.parentId !== 2) {
    const parentItem = navItems.find((i) => i.id === activeItem.parentId);
    if (parentItem) fileName = parentItem.name;
  }
  return fileName;
};