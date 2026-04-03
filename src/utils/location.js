export const getBreadcrumbStack = (currentId, items) => {
    const stack = [];
    let current = items.find(item => item.id === currentId);

    while (current) {
        stack.unshift(current);
        current = items.find(item => item.id === current.parentId);
    }

    return stack;
}