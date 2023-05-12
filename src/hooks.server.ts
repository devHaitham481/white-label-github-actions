import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { getEnvironment } from '$lib/server/environment'

const environment: Handle = (async ({ event, resolve }) => {
  //repguide.
  event.locals.env = getEnvironment(event.url.hostname);
  console.log('event', event)

  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%sveltekit.env%', event.locals.env.name),
  })
}) satisfies Handle;

export const handle = sequence(
  environment,
)
