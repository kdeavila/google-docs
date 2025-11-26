import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ColorResult } from "react-color";
import { SketchPicker } from "react-color";
import { useEditorStore } from "@/store/use-editor-store";
import { HighlighterIcon } from "lucide-react";

export default function TextHighlightButton() {
  const { editor } = useEditorStore();

  const value = editor?.getAttributes("highlight").color || "#FFFFFF";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-sm h-7 flex items-center justify-center shrink-0 hover:bg-neutral-200/80 px-1.5 overflow-hidden">
          <HighlighterIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-0">
        <SketchPicker disableAlpha onChange={onChange} color={value} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
