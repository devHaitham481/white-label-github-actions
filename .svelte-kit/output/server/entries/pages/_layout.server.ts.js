const config = {
  runtime: "edge"
};
async function load({ locals }) {
  return { environment: locals.env };
}
export {
  config,
  load
};
