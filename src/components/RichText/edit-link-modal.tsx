import Modal from "../Modal";

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
		<Modal
			isOpen
			onConfirm={handleLinkSave}
			onCancel={handleLinkCancel}
			title="Insira ou edite o link"
		>
			<input
				type="url"
				className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
				placeholder="https://example.com"
				value={linkValue}
				onChange={(e) => setLinkValue(e.target.value)}
			/>
		</Modal>
	);
}

export default EditLinkModal;
