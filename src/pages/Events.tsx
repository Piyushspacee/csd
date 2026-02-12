import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";

const events = [
  { title: "Treasure Hunt", description: "Decode clues, solve puzzles, and race to the treasure across the campus! Form your teams and compete for the grand prize.", fee: "₹50/team", image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop", slug: "treasure-hunt" },
  { title: "Tech Hunt", description: "A technical scavenger hunt that tests your coding, debugging, and logical reasoning skills across multiple rounds.", fee: "₹30/person", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop", slug: "tech-hunt" },
  { title: "BGMI Tournament", description: "Battle it out in the ultimate BGMI showdown. Assemble your squad and fight for glory!", fee: "₹100/team", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop", slug: "bgmi" },
  { title: "Free Fire Championship", description: "Show your survival skills in the Free Fire championship. Solo and squad modes available.", fee: "₹80/team", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop", slug: "free-fire" },
  { title: "Box Cricket", description: "Cricket fever hits the department! Form your team and compete in thrilling box cricket matches.", fee: "₹200/team", image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop", slug: "box-cricket" },
  { title: "KBC – Kaun Banega Champion", description: "Test your general knowledge and technical acumen in this quiz-show-style competition.", fee: "₹20/person", image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&h=400&fit=crop", slug: "kbc" },
  { title: "Open Mic", description: "Showcase your talent! Poetry, comedy, singing, or anything that moves the audience.", fee: "Free Entry", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=400&fit=crop", slug: "open-mic" },
  { title: "Prompt War", description: "Battle with AI prompts! Create the best AI-generated outputs and compete for the top spot.", fee: "₹30/person", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop", slug: "prompt-war" },
];

export default function Events() {
  return (
    <div className="py-16 bg-background">
      <div className="container">
        <SectionHeader title="Events" subtitle="Explore all our exciting events and competitions. Register now!" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard key={event.slug} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}
