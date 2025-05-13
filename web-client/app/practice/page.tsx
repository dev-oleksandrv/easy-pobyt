import { PracticeHomeWelcome } from "@/components/practice-home/practice-home-welcome";
import { PracticeHomeNavigation } from "@/components/practice-home/practice-home-navigation";
import PracticeHomeResults from "@/components/practice-home/practice-home-results";
import PracticeHomePremiumBanner from "@/components/practice-home/practice-home-premium-banner";

export default function PracticePage() {
  return (
    <>
      <PracticeHomeWelcome />
      <PracticeHomeNavigation />
      <PracticeHomePremiumBanner />
      <PracticeHomeResults />
    </>
  );
}
