"use client";
import React from "react";
import { contact } from "@/data/contact";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center justify-center mb-24 max-w-xl w-full mx-auto">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 shadow-2xl flex flex-col gap-8 border border-slate-700 w-full">
        <div className="flex flex-col items-center mb-2">
          <h3 className="text-2xl font-bold text-cyan-400 mb-1">
            Let&apos;s Connect
          </h3>
          <p className="text-center text-slate-300 text-lg font-medium max-w-md">
            Interested in working together or have an opportunity in mind? Feel
            free to reach out!
          </p>
        </div>
        <hr className="border-slate-600 mb-2" />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 text-slate-300 text-lg">
            <FaEnvelope className="text-cyan-400 text-2xl" />
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-cyan-400 transition-colors break-all"
            >
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-lg">
            <FaXTwitter className="text-cyan-400 text-2xl" />
            <a
              href="https://x.com/Br4v3_Tr4v3l3r"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors break-all"
            >
              x.com/Br4v3_Tr4v3l3r
            </a>
          </div>
          {contact.location && (
            <div className="flex items-center gap-4 text-slate-300 text-lg">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <span>{contact.location}</span>
            </div>
          )}
        </div>
        {contact.socials && contact.socials.length > 0 && (
          <div className="flex gap-6 mt-4 justify-center">
            {contact.socials.map((social) => {
              let Icon = null;
              if (social.icon === "github") Icon = FaGithub;
              if (social.icon === "linkedin") Icon = FaLinkedin;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xl transition-colors"
                  aria-label={social.label}
                >
                  {Icon && <Icon />}
                  <span className="text-lg font-medium">{social.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
