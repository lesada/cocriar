"use client";

import { Icon } from "@iconify/react";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

function RichText() {
	const [editorState, setEditorState] = useState(0);
	const editor = useEditor({
		extensions: [
			StarterKit,
			Text,
			Paragraph,
			Underline,
			TextAlign.configure({
				types: ["paragraph"],
			}),
		],
		content: "",
		immediatelyRender: false,
		editable: true,
		onUpdate: () => setEditorState((s) => s + 1),
	});

	useEffect(() => {
		if (!editor) return;
		const update = () => setEditorState((s) => s + 1);
		editor.on("transaction", update);
		return () => {
			editor.off("transaction", update);
		};
	}, [editor]);

	const setLink = useCallback(() => {
		if (!editor) return;
		const previousUrl = editor.getAttributes("link").href;
		const url = window.prompt("URL", previousUrl);
		if (url === null) return;
		if (url === "") {
			editor.chain().focus().extendMarkRange("link").unsetLink().run();
			return;
		}
		editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
	}, [editor]);

	if (!editor) return null;

	return (
		<>
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
					className="hover:bg-gray-100 p-4 cursor-pointer"
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
