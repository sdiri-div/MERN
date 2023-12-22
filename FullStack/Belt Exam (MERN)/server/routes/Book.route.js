
const StoreControllers =  require("../controllers/book.controller")


module.exports = (app) => {
    app.get("/api/store", StoreControllers.findAllStore)
    app.get("/api/store/:d_id", StoreControllers.getOneStore)
    app.post("/api/store", StoreControllers.createNewStore)
    app.put("/api/store/:d_id", StoreControllers.UpdateStore)
    app.delete("/api/store/:d_id", StoreControllers.DeleteOneStore)
}