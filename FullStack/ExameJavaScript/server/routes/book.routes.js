
const BookControllers = require("../controllers/book.controller")

module.exports = (app) => {
    app.get("/api/test", BookControllers.test)
    app.get("/api/book",BookControllers.findAllBooks)
    app.post("/api/book",BookControllers.createNewBook)
}