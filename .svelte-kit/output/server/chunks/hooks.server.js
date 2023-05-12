function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const getEnvironment = (hostname) => {
  switch (hostname) {
    case "whitelabel-hooks.pages.dev":
      return {
        name: "cloudflare",
        components: []
      };
    case "localhost":
      return {
        name: "repguide",
        components: [
          // NOTE: old way of importing components
          "superdupersecret"
        ]
      };
    case "whitelabel-hooks7.vercel.app":
      return {
        name: "agravis",
        components: [
          "agravisComponent"
        ]
      };
    default:
      return {
        name: "whitelabel",
        components: []
      };
  }
};
const environment = async ({ event, resolve }) => {
  event.locals.env = getEnvironment(event.url.hostname);
  console.log("event", event);
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace("%sveltekit.env%", event.locals.env.name)
  });
};
const handle = sequence(
  environment
);
export {
  handle
};
