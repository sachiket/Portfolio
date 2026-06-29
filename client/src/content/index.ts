import { parse } from "yaml";
import type {
  ContactInfo,
  Education,
  Experience,
  Profile,
  Skills,
  Summary,
} from "@shared/schema";

import profileRaw from "@content/profile.yaml?raw";
import contactRaw from "@content/contact.yaml?raw";
import summaryRaw from "@content/summary.yaml?raw";
import skillsRaw from "@content/skills.yaml?raw";
import experienceRaw from "@content/experience.yaml?raw";
import educationRaw from "@content/education.yaml?raw";

function loadYaml<T>(raw: string): T {
  return parse(raw) as T;
}

export const profile = loadYaml<Profile>(profileRaw);
export const contact = loadYaml<ContactInfo>(contactRaw);
export const summary = loadYaml<Summary>(summaryRaw);
export const skills = loadYaml<Skills>(skillsRaw);
export const experience = loadYaml<Experience>(experienceRaw);
export const education = loadYaml<Education>(educationRaw);
