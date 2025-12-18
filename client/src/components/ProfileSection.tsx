import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

export default function ProfileSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-black/40">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12 rounded-2xl border-t-2 border-primary">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Left - Info */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-2 neon-text">
                  {profile.name}
                </h2>
                <p className="text-xl text-primary font-tech font-semibold mb-6">
                  DevOps • Cloud • SDE • SRE • Frontend
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {profile.about}
                </p>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="font-tech font-semibold text-sm break-all">{profile.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/20 rounded-lg">
                      <Phone className="text-secondary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="font-tech font-semibold text-sm">{profile.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                      <Briefcase className="text-cyan-400" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Role</p>
                      <p className="font-tech font-semibold text-sm">{profile.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <MapPin className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-tech font-semibold text-sm">{profile.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right - Quote */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              <p className="text-sm text-muted-foreground mb-3 font-tech uppercase tracking-wider">Motto</p>
              <p className="text-lg italic font-light leading-relaxed text-primary">
                "{profile.quote}"
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
