const EventEmitter = require("node:events")

const myEmitter = new EventEmitter();

myEmitter.on("hello", () => {
    console.log("hi")
} )

myEmitter.on("where", () => {
    console.log("punjab")
} )

myEmitter.on("buy", (productId) => {
    console.log("Product successfully added to the cart", productId);
} )

myEmitter.emit("buy","123")
// about readLine