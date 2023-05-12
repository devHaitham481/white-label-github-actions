import { normalizeComponentName } from "$lib/helper";

export const getCustomComponents = async (componentList: string[]) => {
  return new Promise(async (resolve) => {
    const promises = componentList.map(async componentName => {
      return import(`../custom/${componentName}.svelte`).then(component => {
        return { [componentName]: component.default }
      })
    });
    Promise.all(promises).then(components => {
      const test = components.reduce((acc, component) => {
        return { ...acc, ...component }
      }, {})
      resolve(test)
    });
  })
}

// NOTE: the below solution is great but won't be of much benefit
//       eager loading will bundle everything into the project
//       lazy loading would generate chunks for each component
//       unused chunks will be removed by tree shaking
const loadComponentsByEnv = (env: string) => {
  // NOTE: These imports need to be verbose.
  //       import.meta.glob() does not support dynamic paths.
  //       won't work: import.meta.glob(`$lib/custom/${env}/*.svelte`)
  //       even the options need to be object literals
  switch (env) {
    case 'cloudflare':
      return import.meta.glob('$lib/custom/cloudflare/*.svelte', { /* eager: true, */ import: "default" })
    case 'repguide':
      return import.meta.glob('$lib/custom/repguide/*.svelte', { /* eager: true, */ import: "default" })
    case 'development':
      return {
        ...import.meta.glob('$lib/custom/repguide/*.svelte', { /* eager: true, */ import: "default" }),
        ...import.meta.glob('$lib/custom/cloudflare/*.svelte', { /* eager: true, */ import: "default" })
      }
    default:
      return {}
  }
}

export const getCustomComponentsByEnv = async (env: string) => {
  let components = loadComponentsByEnv(env)

  // // NOTE: only if lazy loading is used
  for (const path in components) {
    // @ts-ignore
    components[path] = await components[path]().then((module) => module)
  }

  return Object.keys(components).reduce((acc, key) => {
    if (!key) return acc
    return { ...acc, [normalizeComponentName(key)]: components[key] }
  }, {})
}
