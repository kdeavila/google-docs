import Editor from "./editor";
import Toolbar from "./toolbar";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
}

export default async function DocumentIdPages({ params }: DocumentIdPageProps) {
    const { documentId } = await params;

    return (
        <div className="flex flex-col justify-center min-h-screen">
            <Toolbar />
            <Editor />
        </div>
    );
}
