import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Infinity, InfinityIcon } from "lucide-react";

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
          <Image
            className="rounded-md border"
            width={32}
            height={32}
            src={activeCourses.imageSrc}
            alt={activeCourses.title}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            className="mr-2"
            width={28}
            height={28}
            src="/points.svg"
            alt="Points"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            className="mr-2"
            width={22}
            height={22}
            src="/heart.svg"
            alt="Hearts"
          />
          {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]" /> : hearts}
        </Button>
      </Link>
    </div>
  );
};
