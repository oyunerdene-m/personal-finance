export default function Button({ name, type, onClick }) {
	return (
		<button
			className='text-sm mt-5 bg-light-blue hover:bg-dark-blue text-light-gray font-bold py-1.5 px-3.5 rounded focus:outline-none focus:shadow-outline'
			onClick={onClick}
			type={type}
		>
			{name}
		</button>
	);
}
