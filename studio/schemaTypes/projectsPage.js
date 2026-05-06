export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Project Name' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'language', type: 'string', initialValue: 'markdown' },
    { name: 'image', type: 'image', title: 'Project Cover Image' },
    { name: 'demoLink', type: 'url', title: 'Demo URL' },
    { name: 'sourceLink', type: 'url', title: 'Source Code URL' },
    { name: 'description', type: 'text', title: 'Description' },
    
    // Tech Stack: Array of Objects (area + tech list)
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'area', type: 'string', title: 'Area (e.g. Frontend)' },
          { name: 'tech', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }
        ]
      }]
    },

    // Features: Array of Objects (point + detail)
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'point', type: 'string', title: 'Feature Point' },
          { name: 'detail', type: 'string', title: 'Feature Detail' }
        ]
      }]
    }
  ],
    preview: {
    prepare() {
      return {
        title: 'Main Projects Content',
        subtitle: 'Projects content'
      }
    }
  }
}