import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Movies from './Movies.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/peliculitas',
		element: <Movies />,
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
)
