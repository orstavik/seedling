export async function onRequest(context){
  console.log(context.env.TEST);
  const value = await context.env.TEST.get("hello");
  // console.log("one");
  // await new Promise(r => setTimeout(r, 2000));
  // console.log("two");
  return new Response("ice " + JSON.stringify(value));
}