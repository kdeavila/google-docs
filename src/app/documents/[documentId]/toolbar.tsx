"use client";

import {
  BoldIcon,
  ItalicIcon,
  ListTodoIcon,
  type LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  StrikethroughIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEditorStore } from "@/store/use-editor-store";
import ToolbarButton from "./components/toolbar-button";
import FontFamilyButton from "./components/font-family-button";
import HeadingLevelButton from "./components/heading-level-button";
import TextColorButton from "./components/text-color-button";
import TextHighlight from "./components/text-highlight-button";
import LinkButton from "./components/link-button.";
import ImageButton from "./components/image-button";
import AlignButton from "./components/align-button";
import ListButton from "./components/list-button";

export default function Toolbar() {
  const { editor } = useEditorStore();

  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
      [
        {
          label: "Undo",
          icon: Undo2Icon,
          onClick: () => editor?.chain().undo().run(),
        },
        {
          label: "Redo",
          icon: Redo2Icon,
          onClick: () => editor?.chain().redo().run(),
        },
        {
          label: "Print",
          icon: PrinterIcon,
          onClick: () => window.print(),
        },
        {
          label: "Spell Check",
          icon: SpellCheckIcon,
          onClick: () => {
            const current = editor?.view.dom.getAttribute("spellcheck");

            editor?.view.dom.setAttribute(
              "spellcheck",
              current === "false" ? "true" : "false",
            );
          },
        },
      ],
      [
        {
          label: "Bold",
          icon: BoldIcon,
          onClick: () => editor?.chain().focus().toggleBold().run(),
          isActive: editor?.isActive("bold"),
        },
        {
          label: "Italic",
          icon: ItalicIcon,
          onClick: () => editor?.chain().focus().toggleItalic().run(),
          isActive: editor?.isActive("italic"),
        },
        {
          label: "Underline",
          icon: UnderlineIcon,
          onClick: () => editor?.chain().focus().toggleUnderline().run(),
          isActive: editor?.isActive("underline"),
        },
        {
          label: "Strikethrough",
          icon: StrikethroughIcon,
          onClick: () => editor?.chain().focus().toggleStrike().run(),
          isActive: editor?.isActive("strike"),
        },
      ],
      [
        {
          label: "Comment",
          icon: MessageSquarePlusIcon,
          onClick: () => console.log("comment"),
          isActive: false,
        },
        {
          label: "List Todo",
          icon: ListTodoIcon,
          onClick: () => editor?.chain().focus().toggleTaskList().run(),
          isActive: editor?.isActive("taskList"),
        },
        {
          label: "Remove Formatting",
          icon: RemoveFormattingIcon,
          onClick: () => editor?.chain().focus().unsetAllMarks().run(),
        },
      ],
    ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}

      <Separator
        orientation="vertical"
        className="data-[orientation=vertical]:h-6 bg-neutral-300"
      />

      <FontFamilyButton />

      <Separator
        orientation="vertical"
        className="data-[orientation=vertical]:h-6 bg-neutral-300"
      />

      <HeadingLevelButton />

      <Separator
        orientation="vertical"
        className="data-[orientation=vertical]:h-6 bg-neutral-300"
      />

      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}

      <TextColorButton />
      <TextHighlight />

      <Separator
        orientation="vertical"
        className="data-[orientation=vertical]:h-6 bg-neutral-300"
      />

      <LinkButton />
      <ImageButton />
      <AlignButton />
      <ListButton />

      {sections[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
}
