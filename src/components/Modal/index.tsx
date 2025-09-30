type ModalProps = {
	isOpen: boolean;
	onConfirm: () => void;
	onCancel: () => void;
	title?: string;
	children?: React.ReactNode;
};

function Modal({ isOpen, onConfirm, title, children, onCancel }: ModalProps) {
	if (!isOpen) return null;
	return (
		<div
			className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-30"
			data-testid="modal"
		>
			<div className="flex flex-col gap-3 bg-white shadow-lg p-6 rounded-lg min-w-[320px]">
				<h3 className="mb-2 font-semibold text-lg">{title}</h3>
				{children}
				<div className="flex justify-end gap-2 mt-3">
					<button
						type="button"
						className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-gray-700 cursor-pointer"
						onClick={onCancel}
					>
						Cancelar
					</button>
					<button
						type="button"
						className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white cursor-pointer"
						onClick={onConfirm}
					>
						Salvar
					</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;
