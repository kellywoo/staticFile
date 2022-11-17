import React from 'react'
import '@src/index.css'
import ReactDOM from 'react-dom/client'
import App from '@src/App'
import { Clipboard } from '@app/Clipboard'
const App1 = () => {
	return (
		<div>
			<div>
				<Clipboard text={'App1'} />
			</div>
			<App />
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<App1 />
	</React.StrictMode>
)