"use client";

import { Icon } from "@iconify/react";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";

import Link from "@tiptap/extension-link";
import StarterKit from "@tiptap/starter-kit";

import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import EditLinkModal from "./edit-link-modal";

type RichTextProps = {
	value: string;
	onChange: (value: string) => void;
};

function RichText({ value, onChange }: RichTextProps) {
	const [showLinkModal, setShowLinkModal] = useState(false);
	const [linkValue, setLinkValue] = useState("");

	const editor = useEditor({
		extensions: [
			StarterKit,
			Link.configure({
				openOnClick: false,
				autolink: true,
				defaultProtocol: "https",
				protocols: ["http", "https"],
				linkOnPaste: false,
				HTMLAttributes: {
					rel: "noopener noreferrer",
					target: "_self",
					style:
						"pointer-events: none; text-decoration: underline; color: #2563eb;",
				},
			}),
			Text,
			Paragraph,
			Underline,
			TextAlign.configure({
				types: ["paragraph"],
			}),
		],
		content: value,
		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			onChange(html);
		},
		immediatelyRender: false,
		editable: true,
	});

	useEffect(() => {
		if (editor && value !== editor.getHTML()) {
			editor.commands.setContent(value);
		}
	}, [value, editor]);

	const setLink = useCallback(() => {
		if (!editor) return;
		const previousUrl = editor.getAttributes("link").href || "";
		setLinkValue(previousUrl);
		setShowLinkModal(true);
	}, [editor]);

	const handleLinkSave = () => {
		if (!editor) return;
		if (linkValue.trim() === "") {
			editor.chain().focus().extendMarkRange("link").unsetLink().run();
		} else {
			editor
				.chain()
				.focus()
				.extendMarkRange("link")
				.setLink({ href: linkValue.trim() })
				.run();
		}
		setShowLinkModal(false);
	};

	const handleLinkCancel = () => {
		setShowLinkModal(false);
		setLinkValue("");
	};

	if (!editor) return null;

	return (
		<>
			{showLinkModal && (
				<EditLinkModal
					linkValue={linkValue}
					setLinkValue={setLinkValue}
					handleLinkSave={handleLinkSave}
					handleLinkCancel={handleLinkCancel}
				/>
			)}
			<div className="bg-white px-1 border border-gray-300 rounded-md">
				<button
					type="button"
					onClick={() => editor.chain().focus().toggleBold().run()}
					aria-pressed={editor.isActive("bold")}
					className={clsx(
						"hover:bg-gray-100 my-1 p-4 rounded-sm cursor-pointer",
						{
							"bg-gray-200": editor.isActive("bold"),
						},
					)}
				>
					<Icon icon="mdi:format-bold" width={20} height={20} />
				</button>
				<button
					type="button"
					onClick={() => editor.chain().focus().toggleItalic().run()}
					aria-pressed={editor.isActive("italic")}
					className={clsx(
						"hover:bg-gray-100 my-1 p-4 rounded-sm cursor-pointer",
						{
							"bg-gray-200": editor.isActive("italic"),
						},
					)}
				>
					<Icon icon="mdi:format-italic" width={20} height={20} />
				</button>
				<button
					type="button"
					onClick={() => editor.chain().focus().toggleUnderline().run()}
					aria-pressed={editor.isActive("underline")}
					className={clsx(
						"hover:bg-gray-100 my-1 p-4 rounded-sm cursor-pointer",
						{
							"bg-gray-200": editor.isActive("underline"),
						},
					)}
				>
					<Icon icon="mdi:format-underline" width={20} height={20} />
				</button>
				<button
					type="button"
					onClick={setLink}
					aria-pressed={editor.isActive("link")}
					className={clsx(
						"hover:bg-gray-100 my-1 p-4 rounded-sm cursor-pointer",
						{
							"bg-gray-200": editor.isActive("link"),
						},
					)}
					data-testid="link-button"
				>
					<Icon icon="mdi:link-variant" width={20} height={20} />
				</button>
				<button
					type="button"
					onClick={() => editor.chain().focus().setTextAlign("left").run()}
					aria-pressed={editor.isActive({ textAlign: "left" })}
					className={clsx(
						"hover:bg-gray-100 my-1 p-4 rounded-sm cursor-pointer",
						{
							"bg-gray-200": editor.isActive({ textAlign: "left" }),
						},
					)}
				>
					<Icon icon="mdi:format-align-left" width={20} height={20} />
				</button>
				<button
					type="button"
					onClick={() => editor.chain().focus().setTextAlign("center").run()}
					aria-pressed={editor.isActive({ textAlign: "center" })}
					className={clsx(
						"hover:bg-gray-100 my-1 p-4 rounded-sm cursor-pointer",
						{
							"bg-gray-200": editor.isActive({ textAlign: "center" }),
						},
					)}
				>
					<Icon icon="mdi:format-align-center" width={20} height={20} />
				</button>
				<button
					type="button"
					onClick={() => editor.chain().focus().setTextAlign("right").run()}
					aria-pressed={editor.isActive({ textAlign: "right" })}
					className={clsx(
						"hover:bg-gray-100 my-1 p-4 rounded-sm cursor-pointer",
						{
							"bg-gray-200": editor.isActive({ textAlign: "right" }),
						},
					)}
				>
					<Icon icon="mdi:format-align-right" width={20} height={20} />
				</button>
				<button
					type="button"
					onClick={() => editor.chain().focus().setTextAlign("justify").run()}
					aria-pressed={editor.isActive({ textAlign: "justify" })}
					className={clsx(
						"hover:bg-gray-100 my-1 p-4 rounded-sm cursor-pointer",
						{
							"bg-gray-200": editor.isActive({ textAlign: "justify" }),
						},
					)}
				>
					<Icon icon="mdi:format-align-justify" width={20} height={20} />
				</button>
			</div>
			<EditorContent
				editor={editor}
				className="bg-white mt-4 p-3 border border-gray-300 rounded-md [&_*]:outline-none w-full h-full min-h-[10rem] overflow-y-auto leading-[1.5]"
			/>
		</>
	);
}

export default RichText;
