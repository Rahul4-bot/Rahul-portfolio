import { Braces, Database, MonitorSmartphone, Server, Wrench } from "lucide-react";

export const skillGroups = [
    { title: "Frontend", icon: Braces, skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap", "React.js"] },
    {
        title: "Backend",
        icon: Server,
        skills: ["Node.js",
            "Express.js",
            "REST APIs",
            "JWT Authentication",
            "Middleware",
            "Multer",
            "Cloudinary",
            "CORS",
            "Async/Await",
        ]
    },
    { title: "Database", icon: Database, skills: ["MongoDB", "Mongoose", "CRUD operation"] },
    { title: "Mobile · Learning", icon: MonitorSmartphone, skills: ["Flutter", "Dart", "FireBase", ] },
    { title: "Tools", icon: Wrench, skills: ["Git", "GitHub", "VS Code", "Postman"] },
];