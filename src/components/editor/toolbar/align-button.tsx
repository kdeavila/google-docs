import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";

export default function AlignButton() {
  const { editor } = useEditorStore();

  const alignments = [
    {
      value: "left",
      icon: AlignLeftIcon,
    },
    {
      value: "center",
      icon: AlignCenterIcon,
    },
    {
      value: "right",
      icon: AlignRightIcon,
    },
    {
      value: "justify",
      icon: AlignJustifyIcon,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="text-sm h-7 flex items-center justify-center shrink-0 hover:bg-neutral-200/80 px-1.5 overflow-hidden"
        >
          <AlignLeftIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-1 flex">
        {alignments.map(({ value, icon: Icon }) => (
          <button
            type="button"
            key={value}
            onClick={() => editor?.chain().focus().setTextAlign(value).run()}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 hover:bg-neutral-200/80",
              editor?.isActive({ textAlign: value }) && "bg-neutral-200/80",
            )}
          >
            <Icon className="size-4" />
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
