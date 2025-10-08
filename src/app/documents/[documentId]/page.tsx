import Editor from "./editor";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
}

export default async function DocumentIdPages({ params }: DocumentIdPageProps) {
    const { documentId } = await params;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Editor />
        </div>
    );
}
