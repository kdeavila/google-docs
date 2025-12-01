"use client";

import "tiptap-extension-resizable-image/styles.css";

import { useStorage } from "@liveblocks/react/suspense";
import {
  FloatingToolbar,
  useLiveblocksExtension,
} from "@liveblocks/react-tiptap";
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import { Link } from "@tiptap/extension-link";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { TableKit } from "@tiptap/extension-table";
import { TextAlign } from "@tiptap/extension-text-align";
import { FontFamily, TextStyle } from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ResizableImage } from "tiptap-extension-resizable-image";
import {
  LEFT_MARGIN_DEFAULT,
  PAGE_WIDTH,
  RIGHT_MARGIN_DEFAULT,
} from "@/constants/margins";
import { FontSizeExtension } from "@/extensions/font-size";
import { LineHeightExtension } from "@/extensions/line-height";
import { useEditorStore } from "@/store/use-editor-store";
import Ruler from "./ruler";
import { Threads } from "./threads";

interface EditorProps {
  initialContent?: string | undefined;
}

export default function Editor({ initialContent }: EditorProps) {
  const leftMargin = useStorage((root) => root.leftMargin);
  const rightMargin = useStorage((root) => root.rightMargin);

  const liveblocks = useLiveblocksExtension({
    initialContent,
    offlineSupport_experimental: true,
  });

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
        style: `padding-left: ${leftMargin ?? LEFT_MARGIN_DEFAULT}px; padding-right: ${rightMargin ?? RIGHT_MARGIN_DEFAULT}px; width: ${PAGE_WIDTH}px;`,
        class:
          "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] py-10 pr-14 cursor-text",
      },
    },
    extensions: [
      liveblocks,
      StarterKit.configure({
        undoRedo: false,
      }),
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
    immediatelyRender: false,
    autofocus: true,
  });

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:px-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div
        style={{ width: `${PAGE_WIDTH}px` }}
        className="min-w-max flex justify-center py-4 print:py-0 mx-auto print:w-full print:min-w-0"
      >
        <EditorContent editor={editor} />
        <Threads editor={editor} />
        <FloatingToolbar editor={editor} />
      </div>
    </div>
  );
}
