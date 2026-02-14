import F1 from "../assets/gallery/DF1.png";
import F2 from "../assets/gallery/DF2.png";
import F3 from "../assets/gallery/DF3.png";
import F4 from "../assets/gallery/DF4.png";
import F5 from "../assets/gallery/DF5.png";
import F6 from "../assets/gallery/DF6.png";
import F7 from "../assets/gallery/DF7.png";
import F8 from "../assets/gallery/DF8.png";

const facultyMembers = [
  {
    name: "Dr. R.S.Tambe",
    designation: "Head of Department",
    image: F1,
    description:
      "PhD in Computer Engineering. Specialization in Machine Learning, Discrete Maths, UIUX, Information System and Retrival.",
  },
  {
    name: "Prof. P.A.More",
    designation: "Assistant Professor (Academic Coordinator)",
    image: F2,
    description:
      "ME.Information Technology. Ph.D Pursuing. Specialization in Artificial Intelligence, Machines Learning, Deep Learning, DBMS, Operating System and System Programming",
  },
  {
    name: "Prof. P.P. Kajale",
    designation: "Assistant Professor (Association Coordinator)",
    image: F3,
    description:
      "ME.Computer Engineering. Specialization in Computer Graphics, Computer Vision, IoT, Cloud Computing and Computer Networking",
  },
  {
    name: "Prof. P.S.Vaikar",
    designation: "Assistant Professor (Timetable Coordinator)",
    image: F4,
    description:
      "ME.Computer Engineering. Specialization in Web Technology, Data Structure, Design Thinking, Natural Language Processing and Quantum Computing)",
  },
  {
    name: "Prof. S.J.Wamane",
    designation: "Assistant Professor (Internship Coordinator)",
    image: F5,
    description:
      "ME.Electronics and Telecommunication. Specialization in Logic Design and Computer Architecture, Digital Electronics, Microcontroller, Software Engineering and Project Management, DEVOPS",
  },
  {
    name: "Prof. N.A.Pondhe",
    designation: "Assistant Professor (Project Coordinator)",
    image: F6,
    description:
      "ME.Computer Engineering. Specialization in Theory of Computation (TOC), Web Development, and Object-Oriented Programming (OOP)",
  },
  {
    name: "Prof. S.N.Gagare",
    designation: "Assistant Professor (T&P Coordinator)",
    image: F7,
    description:
      "ME. Computer Engineering. Specialization in Advanced  Data structure, Design Analysis and Algorithm and  Generative AI",
  },
  {
    name: "Prof. P.L.Shaikh",
    designation: "Assistant Professor",
    image: F8,
    description:
      "M.E. Computer Engineering. Teaching Experience- 3 Years, Specialization in Cloud Computing, OperatingSystems , IoT, Image Processing and  Signals & Systems",
  },
];

const Faculty = () => {
  return (
    <div className="py-16 bg-background">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Faculty Members
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-md overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="h-56 overflow-hidden">
                <div className="flex justify-center pt-6">
  <img
    src={faculty.image}
    alt={faculty.name}
    className="w-40 h-40 object-contain rounded-lg shadow-md"
  />
</div>

              </div>

              {/* Content Section */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">
                  {faculty.name}
                </h3>

                <p className="text-sm text-primary font-medium mb-3">
                  {faculty.designation}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faculty.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
