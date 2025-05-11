import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusIcon } from "lucide-react";

export default function DashboardQuestionsPage() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">Questions</h2>

      <Button asChild>
        <Link href="/questions/create">
          <PlusIcon />
          <span>Create Questions</span>
        </Link>
      </Button>
    </div>
  );
}
