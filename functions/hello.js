console.log("global context: sunshine on the server");

export function onRequest({env}) {
  console.info(JSON.stringify(env))
  console.log("request context: sunshine on the server");
  return new Response("Hello, world!")
}
