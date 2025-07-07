"use client";

import { motion } from "framer-motion";
import {
  EmailIcon,
  ResumeIcon,
  LocationIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "./Icons";

import Magnet from "./Animations/Magnet/Magnet";
import StarBorder from "./Animations/StarBorder/StarBorder";

export default function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold">Want to get in touch?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I&apos;m always looking for new opportunities and collaborations.
            Feel free to reach out to me.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <LocationIcon />
            <span>New York, NY</span>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <StarBorder className="" color="white" speed="5s">
              <a
                href="mailto:aravb09@gmail.com"
                className="hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2 font-medium text-white px-8 py-3"
              >
                <EmailIcon />
                Get in Touch
              </a>
            </StarBorder>
            <Magnet
              padding={50}
              disabled={false}
              magnetStrength={3}
              wrapperClassName="mt-0.5"
            >
              <a
                href="https://drive.google.com/file/d/1px2tbTu7xTKehEGTb-4S6CB3kzg2NSwr/view?usp=drive_link"
                target="_blank"
                className="px-8 py-3 bg-black border border-gray-800 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
              >
                <ResumeIcon />
                View Resume
              </a>
            </Magnet>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/abharw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/arav-bhardwaj1209/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://www.instagram.com/abh4rdwaj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
            >
              <InstagramIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
