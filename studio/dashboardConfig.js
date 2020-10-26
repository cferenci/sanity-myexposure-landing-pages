export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f972139b7ad4400882246b7',
                  title: 'Sanity Studio',
                  name: 'sanity-myexposure-landing-pages-studio',
                  apiId: '096f575f-0560-434d-8aba-d22cc1953f67'
                },
                {
                  buildHookId: '5f97213925297800ef1a4f09',
                  title: 'Landing pages Website',
                  name: 'sanity-myexposure-landing-pages',
                  apiId: '11cb8b9b-297d-4716-b7de-a957d550ec54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cferenci/sanity-myexposure-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-myexposure-landing-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
