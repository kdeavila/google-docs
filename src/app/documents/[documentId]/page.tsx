import Editor from "@/components/editor/editor";
import { Navbar } from "@/components/editor/navbar";
import { Room } from "@/components/editor/room";
import Toolbar from "@/components/editor/toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentIdPages({ params }: DocumentIdPageProps) {
  const { documentId } = await params;

  return (
    <Room>
      <div className="min-h-screen bg-[#FAFBFD]">
        <div className="w-full flex flex-col pt-4 gap-y-2 fixed top-0 left-0 ring-0 z-10 bg-[#FAFBFD] print:hidden">
          <Navbar />
          <Toolbar />
        </div>

        <div className="pt-[114px] print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
}
