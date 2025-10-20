type ModalImageProps = {
	base64: string | null;
	deleteImage: () => void;
	onClose: () => void;
};

function ModalImage({
	base64,
	deleteImage,
	onClose,
}: Readonly<ModalImageProps>) {
	if (!base64) return null;

	return (
		<div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-70">
			<div className="relative flex flex-col items-center bg-white shadow-lg p-6 rounded-lg max-w-[90vw] max-h-[90vh]">
				<img
					src={base64}
					alt="Preview"
					className="mb-4 rounded max-w-full max-h-[70vh]"
				/>
				<div className="flex gap-2">
					<button
						type="button"
						onClick={deleteImage}
						className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white cursor-pointer"
					>
						Deletar imagem
					</button>
					<button
						type="button"
						onClick={onClose}
						className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded text-gray-800 cursor-pointer"
					>
						Fechar
					</button>
				</div>
			</div>
		</div>
	);
}

export default ModalImage;
