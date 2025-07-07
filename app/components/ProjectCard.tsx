"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  points: string[];
  link: {
    href: string;
    text: string;
    icon?: "github" | "image";
    imageSrc?: string;
    imageAlt?: string;
  };
  delay?: number;
}

export default function ProjectCard({
  title,
  description,
  points,
  link,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-gray-900/50 rounded-xl overflow-hidden p-6"
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2">
            {title},
            <span className="text-gray-400 text-xl font-normal ml-2">
              {description}
            </span>
          </h3>
        </div>
        <div className="space-y-3">
          <ul className="text-sm text-gray-400 space-y-2">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between pt-4">
          <Link
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-3 py-2 text-sm border border-gray-600 rounded-md text-gray-300 hover:bg-gray-800 transition-colors"
          >
            {link.icon === "github" ? (
              <Github className="mr-2 h-4 w-4" />
            ) : link.icon === "image" && link.imageSrc ? (
              <Image
                src={link.imageSrc}
                alt={link.imageAlt || ""}
                width={20}
                height={20}
                className="mr-2"
              />
            ) : null}
            {link.text}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
