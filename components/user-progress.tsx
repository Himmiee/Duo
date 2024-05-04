import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

type Props = {
  activeCourses: { imageSrc: string; title: string };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourses,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      {" "}
      <Link href="/courses">
        <Button variant="ghost">
          <Image className="rounded-md border" width={32} height={32} src={activeCourses.imageSrc} alt={activeCourses.title} />
        </Button>
      </Link>
    </div>
  );
};
