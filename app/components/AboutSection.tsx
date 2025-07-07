'use client';

import { motion } from 'framer-motion';
import PixelCard from './Components/PixelCard/PixelCard';

export default function AboutSection() {
	return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto space-y-16">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
                    About Me
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-lg text-gray-400 mb-8">
                    I began my journey in technology when I was in middle school, where I participated in VEX robotics. During quarantine, I read Neural Networks and Deep Learning by Michael Nielsen; I fell down the machine learning rabbit hole and started building projects with Python and JavaScript. I quickly realized my passion for coding and problem-solving, leading me to pursue a degree in Statistics and Machine Learning at Carnegie Mellon University.
                    <br />
                    <br />
                    Throughout my academic career, I've worked on various projects ranging from web applications to machine learning models. I'm constantly learning and exploring new technologies to expand my skill set.
                    <br />
                    <br />
                    When I'm not building, you can find me going on nature walks, reading murder mysteries, playing video games, or exploring new food places. I'm also passionate about music and I enjoy traveling.
                </motion.p>
            </div>
            {/* <PixelCard>
                <Image src="/images/about-me.jpg" alt="About Me" width={1000} height={1000} />
            </PixelCard> */}
        </section>
    );
}