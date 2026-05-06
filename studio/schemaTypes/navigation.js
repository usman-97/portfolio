export default {
  name: 'navigation',
  title: 'Navigation Settings',
  type: 'document',
  fields: [
    {
      name: 'navItems',
      title: 'Global Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Display Name' },
            { 
              name: 'type', 
              type: 'string', 
              options: { list: ['root', 'folder', 'file'] } 
            },
            { name: 'icon', type: 'string', title: 'Icon Key (e.g., react, css, projects)' },
            { name: 'route', type: 'string', title: 'Route (if file)' },
            { name: 'parentId', type: 'string', title: 'Parent ID/Name' },
            { name: 'level', type: 'number', title: 'Nesting Level' },
            { name: 'order', type: 'number', title: 'Position Order' }
          ]
        }
      ]
    }
  ],
    preview: {
    prepare() {
      return {
        title: 'Navigation',
        subtitle: 'Navigation paths'
      }
    }
  }
}