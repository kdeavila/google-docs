import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store"
import { ListIcon, ListOrderedIcon } from "lucide-react";

export default function ListButton() {
    const { editor } = useEditorStore();

    const lists = [
        {
            label: "Bullet List",
            icon: ListIcon,
            isActive: () => editor?.isActive("bulletList"),
            onClick: () => editor?.chain().focus().toggleBulletList().run()
        },
        {
            label: "Ordered List",
            icon: ListOrderedIcon,
            isActive: () => editor?.isActive("orderList"),
            onClick: () => editor?.chain().focus().toggleOrderedList().run()
        }
    ]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="text-sm h-7 flex items-center justify-center hover:bg-neutral-200/80 px-1.5 overflow-hidden">
                    <ListIcon className="size-4" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="p-1 flex min-w-max">
                {lists.map(({ label, icon: Icon, onClick, isActive }) => (
                    <button
                        key={label}
                        onClick={onClick}
                        className={cn("flex items-center gap-x-2 px-2 py-1 hover:bg-neutral-200/80",
                            isActive() && "bg-neutral-200/80")}
                    >
                        <Icon className="size-4" />
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}