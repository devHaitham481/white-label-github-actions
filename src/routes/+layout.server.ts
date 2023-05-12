export const config = {
  runtime: 'edge'
}

export async function load({ locals }) {


  return { environment: locals.env }
}
