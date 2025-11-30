import { MinusIcon, PlusIcon } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { useEditorStore } from "@/store/use-editor-store";

export default function FontSizeButton() {
  const { editor } = useEditorStore();

  const [fontSize, setFontSize] = useState("16");
  const [inputValue, setInputValue] = useState(fontSize);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const currentFontSize = editor?.getAttributes("textStyle").fontSize
      ? editor?.getAttributes("textStyle").fontSize.replace("px", "")
      : "16";

    setFontSize(currentFontSize);
    setInputValue(currentFontSize);
  }, [editor?.state.selection]);

  const updateFontSize = (newSize: string) => {
    const size = parseInt(newSize);

    if (!isNaN(size) && size > 0) {
      editor?.chain().focus().setFontSize(`${size}px`).run();
      setFontSize(newSize);
      setInputValue(newSize);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    updateFontSize(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateFontSize(inputValue);
      editor?.commands.focus();
    }
  };

  const increment = () => {
    const newSize = parseInt(fontSize) + 1;
    updateFontSize(newSize.toString());
  };

  const decrement = () => {
    const newSize = parseInt(fontSize) - 1;
    if (newSize > 0) {
      updateFontSize(newSize.toString());
    }
  };

  return (
    <div className="flex items-center gap-x-0.5">
      <button
        type="button"
        onClick={decrement}
        className="text-sm size-7 flex items-center justify-center hover:bg-neutral-200/80"
      >
        <MinusIcon className="size-4" />
      </button>

      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          className="text-sm text-center h-7 w-10 border border-neutral-400 bg-transparent focus:outline-none focus:ring-0 leading-0 px-1.5"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setIsEditing(true);
            setFontSize(fontSize);
          }}
          className="text-sm text-center h-7 w-10 border border-neutral-400 bg-transparent cursor-text px-1.5"
        >
          {" "}
          {fontSize}{" "}
        </button>
      )}

      <button
        type="button"
        onClick={increment}
        className="text-sm size-7 flex items-center justify-center hover:bg-neutral-200/80"
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
}
