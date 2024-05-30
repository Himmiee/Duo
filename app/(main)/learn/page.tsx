import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { title } from "process";
import { userProgress } from "@/db/schema";
import { getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const PageComponent = async () => {
  const userProgressDate = getUserProgress();
  const unitsData = getUnits();
  const [userProgress, units] = await Promise.all([
    userProgressDate,
    unitsData,
  ]);
  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />{" "}
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id}>{JSON.stringify(unit)}</div>
        ))}
        <div className="space-y-4"></div>
      </FeedWrapper>
    </div>
  );
};

export default PageComponent;
