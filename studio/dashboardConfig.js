export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60a6d1f8c6102f21282dab64',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hobcskjo',
                  apiId: 'a09a907e-fa26-45c9-a87b-a975f075b570'
                },
                {
                  buildHookId: '60a6d1f813d63f2875f3e38c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ii5osbqe',
                  apiId: 'bf5ffa46-56da-4b45-8f73-3b34f15f4f74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fullermotion/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ii5osbqe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
