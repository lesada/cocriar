import clsx from "clsx";
import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type TInputProps = {
	name: string;
	label: string;
	placeholder: string;
	type?: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	control: any;
	error?: string;
};

function Input({
	control,
	error,
	name,
	label,
	placeholder,
	type = "text",
}: TInputProps) {
	return (
		<div className="flex flex-col gap-1 w-full">
			<label htmlFor={name} className="font-inter text-white text-sm">
				{label}
			</label>

			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<>
						{type === "textarea" ? (
							<textarea
								{...field}
								id={name}
								placeholder={placeholder}
								value={field.value}
								className={twMerge(
									clsx(
										"bg-white/95 p-3 md:p-4 rounded-lg outline-1 outline-cyan-200 w-full min-h-28 text-neutral-400 placeholder:text-neutral-200 text-sm placeholder:text-sm",
										error && "outline-red-600",
									),
								)}
							/>
						) : (
							<input
								{...field}
								id={name}
								type={type}
								placeholder={placeholder}
								value={field.value}
								className={twMerge(
									clsx(
										"bg-white/95 p-3 md:p-4 rounded-lg outline-1 outline-cyan-200 w-full text-neutral-400 placeholder:text-neutral-200 text-sm placeholder:text-sm",
										error && "outline-red-600",
									),
								)}
							/>
						)}
					</>
				)}
			/>

			{error && (
				<span className="font-inter text-red-600 text-sm">{error}</span>
			)}
		</div>
	);
}

export default Input;
