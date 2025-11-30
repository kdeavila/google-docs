"use client";

import { usePaginatedQuery } from "convex/react";
import DocumentsTable from "@/components/home/documents-table";
import Navbar from "@/components/home/navbar";
import { TemplatesGallery } from "@/components/home/templates-gallery";
import { useSearchParam } from "@/hooks/use-search-param";
import { api } from "../../../convex/_generated/api";

export default function Home() {
  const [search] = useSearchParam();

  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 },
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>

      <div className="mt-16 ">
        <TemplatesGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
}
