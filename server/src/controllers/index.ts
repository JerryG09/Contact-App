import express from 'express'


function homePage(_req: express.Request, res: express.Response) {
  res.status(200).json({
    message: "Welcome to home page..."
  })
}

export { homePage }
