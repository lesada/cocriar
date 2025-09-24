type EditLinkModalProps = {
	linkValue: string;
	setLinkValue: (value: string) => void;
	handleLinkSave: () => void;
	handleLinkCancel: () => void;
};

function EditLinkModal({
	linkValue,
	setLinkValue,
	handleLinkSave,
	handleLinkCancel,
}: EditLinkModalProps) {
	return (
		<div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-30">
			<div className="flex flex-col gap-3 bg-white shadow-lg p-6 rounded-lg min-w-[320px]">
				<h2 className="mb-2 font-semibold text-lg">Insira ou edite o link</h2>
				<input
					type="url"
					className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
					placeholder="https://example.com"
					value={linkValue}
					onChange={(e) => setLinkValue(e.target.value)}
				/>
				<div className="flex justify-end gap-2 mt-3">
					<button
						type="button"
						className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-gray-700"
						onClick={handleLinkCancel}
					>
						Cancelar
					</button>
					<button
						type="button"
						className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
						onClick={handleLinkSave}
					>
						Salvar
					</button>
				</div>
			</div>
		</div>
	);
}

export default EditLinkModal;
