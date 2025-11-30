"use client";

import { AlertTriangleIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <section className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-rose-100 p-3 rounded-full">
            <AlertTriangleIcon className="size-10 text-rose-600" />
          </div>
        </div>

        <div className="space-y-1.5">
          <h2 className="text-xl font-semibold text-gray-900">
            Something was wrong
          </h2>
          <p className="text-sm text-gray-700">{error.message}</p>
        </div>

        <div className="flex items-center justify-center gap-x-3">
          <Button onClick={reset} className="font-medium px-3">
            Try again
          </Button>

          <Button asChild variant="ghost" className="font-medium">
            <Link href="/">Go back</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
