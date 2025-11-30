"use client";

import { type Preloaded, usePreloadedQuery } from "convex/react";
import Editor from "@/components/editor/editor";
import { Navbar } from "@/components/editor/navbar";
import { Room } from "@/components/editor/room";
import Toolbar from "@/components/editor/toolbar";
import type { api } from "../../../convex/_generated/api";

interface DocumentProps {
  preloadedDocument: Preloaded<typeof api.documents.getById>;
}

export const Document = ({ preloadedDocument }: DocumentProps) => {
  const document = usePreloadedQuery(preloadedDocument);

  if (!document) {
    throw new Error(
      "Document not found. It may have been deleted or you don't have permission to view it.",
    );
  }

  return (
    <Room>
      <div className="min-h-screen bg-[#FAFBFD]">
        <div className="w-full flex flex-col pt-4 gap-y-2 fixed top-0 left-0 ring-0 z-10 bg-[#FAFBFD] print:hidden">
          <Navbar data={document} />
          <Toolbar />
        </div>

        <div className="pt-[114px] print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
};
