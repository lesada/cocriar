type TInputProps = {
	name: string;
	label: string;
	placeholder: string;
	type?: string;
};

function Input({ name, label, placeholder, type = "text" }: TInputProps) {
	return (
		<div className="flex flex-col gap-1 w-full">
			<label htmlFor={name} className="font-inter text-white text-sm">
				{label}
			</label>

			<input
				id={name}
				type={type}
				placeholder={placeholder}
				className="bg-white/95 p-3 md:p-4 rounded-lg outline-1 outline-cyan-200 w-full text-neutral-400 placeholder:text-neutral-200 text-sm placeholder:text-sm"
			/>
		</div>
	);
}

export default Input;
