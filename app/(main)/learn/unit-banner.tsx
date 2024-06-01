import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";

type Props = {
  title: string;
  description: string;
};

export const UnitBanner = ({ title, description }: Props) => {
  return (
    <div className="w-full rounded-xl text-white flex items-center justify-between bg-green-500 p-5 ">
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      <Button
        size="lg"
        variant="secondary"
        className="hidden xl:flex border-2 border-b-4 active:border-b-2"
      >
        <NotebookText className="mr-2" />
        Continue
      </Button>
    </div>
  );
};
