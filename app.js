const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const app = express()

// db init
require('./database')

// config, middleware, & etc
const { errorHandler, notFound } = require('./middlewares')
const { NODE_ENV, PORT } = require('./config')

// Routes
const kurirRoutes = require('./routes/Kurir')
const pengirimanRoutes = require('./routes/Pengiriman')
const pelangganRoutes = require('./routes/Pelanggan')
const barangRoutes = require('./routes/Barang')

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger(NODE_ENV === 'production' ? 'combined' : 'dev'))

// Endpoint
app.use('/kurir', kurirRoutes)
app.use('/pengiriman', pengirimanRoutes)
app.use('/pelanggan', pelangganRoutes)
app.use('/barang', barangRoutes)

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Halo Dunia"
  })
})

// Error Handler
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log('Server is running on PORT', PORT))