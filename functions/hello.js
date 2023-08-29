console.log("global context: sunshine on the server");

export function onRequest(context) {
  console.info(JSON.stringify(Object.keys(context)))
  console.log("request context: sunshine on the server");
  return new Response("Hello, world!")
}
