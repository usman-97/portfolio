export const getBreadcrumbStack = (currentRoute, items) => {
    const stack = [];
    let current = items.find(item => item.route && item.route === currentRoute);

    while (current) {
        stack.unshift(current);
        current = items.find(item => item.name === current.parentId);
    }

    return stack;
}