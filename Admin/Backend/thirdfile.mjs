let y;
const a = async () => {
  const { ab, default: app } = await import("../app.js");
  y = await ab;
}

const run = async () => {
  // await a();  // Ensure `a()` finishes before calling `b()`
   // Call `b()` after `a()` is done

    return y
};
// let anbdsfa = await run();
 // Run the async workflow
// console.log(y)
export default a;

