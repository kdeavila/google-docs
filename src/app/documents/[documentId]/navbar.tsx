"use client";

import Link from "next/link";
import { DocumentInput } from "./components/document-input";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MenubarShortcut,
} from "@/components/ui/menubar";
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePenIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
  Grid2X2,
  Grid3X3,
  ItalicIcon,
  PrinterIcon,
  RedoIcon,
  RemoveFormattingIcon,
  Square,
  StrikethroughIcon,
  TableIcon,
  TableProperties,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { BsFilePdf } from "react-icons/bs";
import { useEditorStore } from "@/store/use-editor-store";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Avatars } from "./avatars";
import { Inbox } from "./inbox";

export const Navbar = () => {
  const { editor } = useEditorStore();

  const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: false })
      .run();
  };

  const onDonwload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

  const onSaveJSON = () => {
    if (!editor) return;

    const content = editor.getJSON();
    const blob = new Blob([JSON.stringify(content)], {
      type: "application/json",
    });
    onDonwload(blob, `document.json`); // TODO: use document name
  };

  const onSaveHTML = () => {
    if (!editor) return;

    const content = editor.getHTML();
    const blob = new Blob([content], { type: "text/html" });
    onDonwload(blob, `document.html`); // TODO: use document name
  };

  const onSaveText = () => {
    if (!editor) return;

    const content = editor.getText();
    const blob = new Blob([content], { type: "text/plain" });
    onDonwload(blob, `document.txt`); // TODO: use document name
  };

  return (
    <nav className="flex items-center justify-between px-4">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <span className="font-sans text-lg font-semibold">Docs</span>
        </Link>

        <div className="flex flex-col">
          <DocumentInput />
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-[1px] px-[7px] hover:bg-muted h-auto">
                  File
                </MenubarTrigger>

                <MenubarContent className="print:hidden">
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FileIcon className="size-4 mr-4" />
                      Save
                    </MenubarSubTrigger>

                    <MenubarSubContent>
                      <MenubarItem onClick={onSaveJSON}>
                        <FileJsonIcon className="size-4 mr-2 text-current" />
                        JSON
                      </MenubarItem>

                      <MenubarItem onClick={onSaveHTML}>
                        <GlobeIcon className="size-4 mr-2 text-current" />
                        HTML
                      </MenubarItem>

                      <MenubarItem onClick={() => window.print()}>
                        <BsFilePdf className="size-4 mr-2 text-current" />
                        PDF
                      </MenubarItem>

                      <MenubarItem onClick={onSaveText}>
                        <FileTextIcon className="size-4 mr-2 text-current" />
                        Text
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>

                  <MenubarItem>
                    <FilePlusIcon className="size-4 mr-2 text-current" />
                    New Document
                  </MenubarItem>
                  <MenubarSeparator />

                  <MenubarItem>
                    <FilePenIcon className="size-4 mr-2 text-current" />
                    Rename
                  </MenubarItem>

                  <MenubarItem>
                    <TrashIcon className="size-4 mr-2 text-current" />
                    Remove
                  </MenubarItem>
                  <MenubarSeparator />

                  <MenubarItem
                    onClick={() => {
                      window.print();
                    }}
                  >
                    <PrinterIcon className="size-4 mr-2 text-current" />
                    Print <MenubarShortcut>Crtl + P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-[1px] px-[7px] hover:bg-muted h-auto">
                  Edit
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarItem
                    onClick={() => editor?.chain().focus().undo().run()}
                  >
                    <Undo2Icon className="size-4 mr-2 text-current" />
                    Undo <MenubarShortcut>Ctrl + Z</MenubarShortcut>
                  </MenubarItem>

                  <MenubarItem
                    onClick={() => editor?.chain().focus().redo().run()}
                  >
                    <RedoIcon className="size-4 mr-2 text-current" />
                    Redo <MenubarShortcut>Ctrl + Y</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-[1px] px-[7px] hover:bg-muted h-auto">
                  Insert
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <TableIcon className="size-4 mr-4" />
                      Table
                    </MenubarSubTrigger>

                    <MenubarSubContent>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 1, cols: 1 })}
                      >
                        <Square className="size-4 mr-2 text-current" />1 x 1
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 2, cols: 2 })}
                      >
                        <Grid2X2 className="size-4 mr-2 text-current" />2 x 2
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 3, cols: 3 })}
                      >
                        <Grid3X3 className="size-4 mr-2 text-current" />3 x 3
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 4, cols: 4 })}
                      >
                        <TableProperties className="size-4 mr-2 text-current" />
                        4 x 4
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-[1px] px-[7px] hover:bg-muted h-auto">
                  Format
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger className="text-500-300">
                      <TextIcon className="size-4 mr-4" />
                      Text
                    </MenubarSubTrigger>

                    <MenubarSubContent>
                      <MenubarItem>
                        <BoldIcon
                          className="size-4 mr-2 text-current"
                          onClick={() =>
                            editor?.chain().focus().toggleBold().run()
                          }
                        />
                        Bold <MenubarShortcut>Ctrl + B</MenubarShortcut>
                      </MenubarItem>

                      <MenubarItem>
                        <ItalicIcon
                          className="size-4 mr-2 text-current"
                          onClick={() =>
                            editor?.chain().focus().toggleItalic().run()
                          }
                        />
                        Italic <MenubarShortcut>Ctrl + I</MenubarShortcut>
                      </MenubarItem>

                      <MenubarItem>
                        <UnderlineIcon
                          className="size-4 mr-2 text-current"
                          onClick={() =>
                            editor?.chain().focus().toggleUnderline().run()
                          }
                        />
                        Underline <MenubarShortcut>Ctrl + U</MenubarShortcut>
                      </MenubarItem>

                      <MenubarItem>
                        <StrikethroughIcon
                          className="size-4 mr-2 text-current"
                          onClick={() =>
                            editor?.chain().focus().toggleStrike().run()
                          }
                        />
                        Strikethrough{" "}
                        <MenubarShortcut>Ctrl + Shift + S</MenubarShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>

                  <MenubarItem>
                    <RemoveFormattingIcon
                      className="size-4 mr-2 text-current"
                      onClick={() =>
                        editor?.chain().focus().unsetAllMarks().run()
                      }
                    />
                    Clear Formatting
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>

      <div className="flex gap-3 items-center pl-6">
        <Avatars />
        <Inbox />
        <OrganizationSwitcher
          afterCreateOrganizationUrl="/"
          afterLeaveOrganizationUrl="/"
          afterSelectOrganizationUrl="/"
          afterSelectPersonalUrl="/"
        />
        <UserButton />
      </div>
    </nav>
  );
};
