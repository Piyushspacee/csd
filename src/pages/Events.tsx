import { Link } from "react-router-dom";

import auraImg from "@/assets/events/aura.jpeg";
import engineersDayImg from "@/assets/events/engineers-day.jpg";
import teachersDayImg from "@/assets/events/teachers-day.jpg";

const eventsData = [
  {
    id: 1,
    title: "AURA 1.0",
    short: "Our flagship technical fest.",
    image: auraImg,
    description:
      "AURA 1.0 is our annual technical event including coding competitions, hackathons, workshops, and cultural programs. Students participate from multiple departments.",
  },
  {
    id: 2,
    title: "Engineers Day",
    short: "Celebrating innovation and engineering excellence.",
    image: engineersDayImg,
    description:
      "Engineers Day celebrates Sir M. Visvesvaraya’s contribution. Includes technical talks, student presentations, and award distribution.",
  },
  {
    id: 3,
    title: "Teachers Day",
    short:
      "Celebration organized to honor and appreciate the dedication and contributions of our faculty members.",
    image: teachersDayImg,
    description:
      "On the occasion of Teachers’ Day, the ACDS Committee organized a special celebration to express gratitude and respect towards our faculty members.",
  },
];

export default function Events() {
  return (
    <div className="py-16 bg-background min-h-screen">
      <div className="container">

        <h1 className="text-4xl font-bold text-center mb-12">
          Our Events
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition"
            >

              {/* Cover Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">
                  {event.title}
                </h2>

                <p className="text-gray-600 mb-3">
                  {event.short}
                </p>

                <p className="text-gray-700 mb-5">
                  {event.description}
                </p>

                <Link
                  to="/gallery"
                  className="inline-block px-5 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
                >
                  View Gallery
                </Link>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
