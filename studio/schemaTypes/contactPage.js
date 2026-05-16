export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    {
      name: 'editorContent',
      title: 'contact.css Editor Content',
      type: 'text',
      description: 'The raw code string for the editor.'
    },
    {
      name: 'language',
      title: 'Syntax Language',
      type: 'string',
      description: 'This is the language of the code in the editor',
      options: { list: ['javascript', 'css', 'markdown'] }
    },
    {
      name: 'showTerminal',
      title: 'Show terminal',
      type: 'boolean',
      options: { layout: 'checkbox' }
    },
    {
      name: 'terminalLogs',
      title: 'Terminal Logs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'type', 
              type: 'string', 
              options: { list: ['COMMAND', 'PROCESS', 'BODY'] } 
            },
            { name: 'text', type: 'string', title: 'Log Text', hidden: ({parent}) => parent?.type === 'BODY' },
            { name: 'tag', type: 'string', title: 'Tag (e.g. [PROCESS])', hidden: ({parent}) => parent?.type !== 'PROCESS' },
            { name: 'status', type: 'string', title: 'Status (e.g. [SUCCESS])', hidden: ({parent}) => parent?.type !== 'PROCESS' },
            { 
              name: 'componentKey', 
              type: 'string', 
              title: 'Component Key', 
              description: 'Enter "HomeBody"',
              hidden: ({parent}) => parent?.type !== 'BODY' 
            },
            { name: 'active', type: 'boolean', title: 'Is Active Input?', hidden: ({parent}) => parent?.type !== 'COMMAND' }
          ]
        }
      ]
    },
    {
      name: 'showGitView',
      title: 'Show Git View',
      type: 'boolean',
      options: { layout: 'checkbox' }
    },
    {
      name: 'contactLinks',
      title: 'Social & External Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform Name (e.g. GitHub)' },
            { name: 'url', type: 'string', title: 'URL' },
          ]
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Main Contact Content',
        subtitle: 'Editor content and other content'
      }
    }
  }
}