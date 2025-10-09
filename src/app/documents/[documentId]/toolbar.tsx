"use client"

import { LucideIcon, Undo2Icon } from "lucide-react";
import ToolbarButton from "./toolbar-button";
import { useEditorStore } from "@/store/use-editor-store";

export default function Toolbar() {
    const { editor } = useEditorStore();

    const sections: {
        label: string,
        icon: LucideIcon,
        onClick: () => void,
        isActive?: boolean
    }[][] = [
            [
                {
                    label: "Undo",
                    icon: Undo2Icon,
                    onClick: () => editor?.chain().undo().run(),
                }
            ]
        ];

    return (
        <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
            {sections[0].map(item => (
                <ToolbarButton key={item.label} {...item} />
            ))}
        </div>
    )
}