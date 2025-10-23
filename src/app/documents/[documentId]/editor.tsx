"use client";

import { TaskItem, TaskList } from "@tiptap/extension-list";
import { TableKit } from "@tiptap/extension-table";
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import { EditorContent, useEditor } from "@tiptap/react";
import { TextStyle, FontFamily } from "@tiptap/extension-text-style";
import { TextAlign } from "@tiptap/extension-text-align";
import { Link } from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import { ResizableImage } from "tiptap-extension-resizable-image";
import "tiptap-extension-resizable-image/styles.css";

import { useEditorStore } from "@/store/use-editor-store";
import { FontSizeExtension } from "@/extensions/font-size";
import { LineHeightExtension } from "@/extensions/line-height";
import Ruler from "./ruler";

export default function Editor() {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    onCreate: ({ editor }) => setEditor(editor),
    onDestroy: () => setEditor(null),
    onUpdate: ({ editor }) => setEditor(editor),
    onSelectionUpdate: ({ editor }) => setEditor(editor),
    onTransaction: ({ editor }) => setEditor(editor),
    onFocus: ({ editor }) => setEditor(editor),
    onBlur: ({ editor }) => setEditor(editor),
    onContentError: ({ editor }) => setEditor(editor),
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px;",
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] py-10 pr-14 cursor-text",
      },
    },
    extensions: [
      StarterKit,
      FontSizeExtension,
      LineHeightExtension.configure({
        types: ["paragraph", "heading"],
        defaultLineHeight: "normal",
      }),
      Color,
      TextAlign.configure({
        types: ["paragraph", "heading"],
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      Highlight.configure({
        multicolor: true,
      }),
      TaskList,
      TableKit,
      TextStyle,
      FontFamily,
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      ResizableImage.configure({
        defaultWidth: 200,
        defaultHeight: 200,
      }),
      TaskItem.configure({
        nested: true,
      }),
    ],
    content: `
        <h1>
            <strong>Hello, this a heading and below there is a table</strong>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </p>
        `,
    immediatelyRender: false,
  });

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:px-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
