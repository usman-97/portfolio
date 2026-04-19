export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'editorContent',
      title: 'Home.jsx Editor Content',
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
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Main Home Content',
        subtitle: 'Editor content and Terminal logs'
      }
    }
  }
}