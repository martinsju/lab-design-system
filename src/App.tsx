import './styles/global.css'

export function App() {
	return (
		<div className='w-screen h-screen bg-gray-900'>
			<h1 className='font-bold text-2xl text-gray-400'>Hello World</h1>
			<button className='bg-cyan-500 text-sm font-bold px-4 py-2 rounded text-black hover:bg-cyan-300'>
				Enviar
			</button>
		</div>
	)
}
