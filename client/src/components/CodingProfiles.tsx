import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Sandhya_2110/",
    icon: "⚡",
    color: "from-yellow-500 to-orange-600"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/connect2sandhyaa",
    icon: "🏆",
    color: "from-green-500 to-green-600"
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/connect2sem6w",
    icon: "📚",
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/sandhya_2110",
    icon: "👨‍🍳",
    color: "from-orange-500 to-red-600"
  }
];

export default function CodingProfiles() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 neon-text">
            Coding Profiles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out my competitive programming and coding presence across platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {profiles.map((profile, idx) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-card p-6 rounded-xl border-t-2 border-primary hover:border-secondary transition-all group cursor-pointer"
            >
              <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform`}>
                {profile.icon}
              </div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {profile.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-white transition-colors">
                <Code2 size={14} />
                Visit Profile
                <ExternalLink size={14} className="ml-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
