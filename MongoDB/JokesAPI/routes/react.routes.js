const ReactController = require('../controllers/react.controller')

module.exports = (app) => {
  app.get('/api/react', ReactController.findAllReact)
  app.post('/api/react/new', ReactController.CreateReact)
  app.get('/api/react/:id', ReactController.findReact)
  app.put('/api/react/:id', ReactController.updateReact)
  app.delete('/api/react/:id', ReactController.deleteReact)
}