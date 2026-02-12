import SectionHeader from "@/components/SectionHeader";
import MemberCard from "@/components/MemberCard";

const faculty = [
  { name: "Dr. Rajesh Kumar", role: "HOD & Faculty Coordinator", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", email: "rajesh@college.edu" },
  { name: "Prof. Anita Sharma", role: "Faculty Coordinator", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face", email: "anita@college.edu" },
];

const studentCoordinators = [
  { name: "Arjun Mehta", role: "Student President", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face", linkedin: "#" },
  { name: "Priya Patel", role: "Vice President", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face", linkedin: "#" },
  { name: "Rohan Singh", role: "General Secretary", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face", linkedin: "#" },
];

const coreTeam = [
  { name: "Sneha Gupta", role: "Events Head", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face" },
  { name: "Vikram Joshi", role: "Technical Head", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face" },
  { name: "Kavya Nair", role: "Creative Head", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face" },
  { name: "Aditya Rao", role: "PR & Outreach Head", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face" },
];

const designTeam = [
  { name: "Meera Kapoor", role: "Lead Designer", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face" },
  { name: "Rahul Verma", role: "Web Developer", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face" },
  { name: "Ishita Das", role: "UI/UX Designer", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face" },
];

export default function Committee() {
  return (
    <div className="py-16 bg-background">
      <div className="container space-y-16">
        <section>
          <SectionHeader title="Faculty Coordinators" subtitle="Guiding our department with wisdom and experience" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {faculty.map((m) => <MemberCard key={m.name} {...m} />)}
          </div>
        </section>

        <section>
          <SectionHeader title="Student Coordinators" subtitle="Leading the department with passion and dedication" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {studentCoordinators.map((m) => <MemberCard key={m.name} {...m} />)}
          </div>
        </section>

        <section>
          <SectionHeader title="Core Team" subtitle="The backbone of all our events and initiatives" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreTeam.map((m) => <MemberCard key={m.name} {...m} />)}
          </div>
        </section>

        <section>
          <SectionHeader title="Design & Development Team" subtitle="Crafting the digital face of our department" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {designTeam.map((m) => <MemberCard key={m.name} {...m} />)}
          </div>
        </section>
      </div>
    </div>
  );
}
