export const getEnvironment = (hostname: string) => {
  // TODO: import from edge config or something
  switch (hostname) {
    case 'whitelabel-hooks.pages.dev':
      return {
        name: 'cloudflare',
        components: []
      }
    case 'localhost':
      return {
        name: 'repguide',
        components: [
          // NOTE: old way of importing components
          'superdupersecret'
        ]
      };
    case 'whitelabel-hooks7.vercel.app':
      return {
        name: 'agravis',
        components: [
          'agravisComponent'
        ]
      };
    default:
      return {
        name: 'whitelabel',
        components: []
      };
  }
}
