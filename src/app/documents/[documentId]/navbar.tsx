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
  ItalicIcon,
  PrinterIcon,
  RedoIcon,
  RemoveFormattingIcon,
  StrikethroughIcon,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { BsFilePdf } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between ">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <span className="font-sans text-xl font-semibold">kdeavila</span>
        </Link>

        <div className="flex flex-col">
          <DocumentInput />
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] hover:bg-muted h-auto">
                  File
                </MenubarTrigger>

                <MenubarContent className="print:hidden">
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <FileIcon className="size-4 mr-2" />
                      Save
                    </MenubarSubTrigger>

                    <MenubarSubContent>
                      <MenubarItem>
                        <FileJsonIcon className="size-4 mr-2" />
                        JSON
                      </MenubarItem>

                      <MenubarItem>
                        <GlobeIcon className="size-4 mr-2" />
                        HTML
                      </MenubarItem>

                      <MenubarItem>
                        <BsFilePdf className="size-4 mr-2" />
                        PDF
                      </MenubarItem>

                      <MenubarItem>
                        <FileTextIcon className="size-4 mr-2" />
                        Text
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>

                  <MenubarItem>
                    <FilePlusIcon className="size-4 mr-2" />
                    New Document
                  </MenubarItem>
                  <MenubarSeparator />

                  <MenubarItem>
                    <FilePenIcon className="size-4 mr-2" />
                    Rename
                  </MenubarItem>

                  <MenubarItem>
                    <TrashIcon className="size-4 mr-2" />
                    Remove
                  </MenubarItem>
                  <MenubarSeparator />

                  <MenubarItem
                    onClick={() => {
                      window.print();
                    }}
                  >
                    <PrinterIcon className="size-4 mr-2" />
                    Print <MenubarShortcut>Crtl + P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] hover:bg-muted h-auto">
                  Edit
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarItem>
                    <Undo2Icon className="size-4 mr-2" />
                    Undo <MenubarShortcut>Ctrl + Z</MenubarShortcut>
                  </MenubarItem>

                  <MenubarItem>
                    <RedoIcon className="size-4 mr-2" />
                    Redo <MenubarShortcut>Ctrl + Y</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] hover:bg-muted h-auto">
                  Insert
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Table</MenubarSubTrigger>

                    <MenubarSubContent>
                      <MenubarItem>1 x 1</MenubarItem>
                      <MenubarItem>2 x 2</MenubarItem>
                      <MenubarItem>3 x 3</MenubarItem>
                      <MenubarItem>4 x 4</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] hover:bg-muted h-auto">
                  Format
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <TextIcon className="size-4 mr-2" />
                      Text
                    </MenubarSubTrigger>

                    <MenubarSubContent>
                      <MenubarItem>
                        <BoldIcon className="size-4 mr-2" />
                        Bold <MenubarShortcut>Ctrl + B</MenubarShortcut>
                      </MenubarItem>

                      <MenubarItem>
                        <ItalicIcon className="size-4 mr-2" />
                        Italic <MenubarShortcut>Ctrl + I</MenubarShortcut>
                      </MenubarItem>

                      <MenubarItem>
                        <UnderlineIcon className="size-4 mr-2" />
                        Underline <MenubarShortcut>Ctrl + U</MenubarShortcut>
                      </MenubarItem>

                      <MenubarItem>
                        <StrikethroughIcon className="size-4 mr-2" />
                        Strikethrough{" "}
                        <MenubarShortcut>Ctrl + Shift + S</MenubarShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>

                  <MenubarItem>
                    <RemoveFormattingIcon className="size-4 mr-2" />
                    Clear Formatting
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </nav>
  );
};
