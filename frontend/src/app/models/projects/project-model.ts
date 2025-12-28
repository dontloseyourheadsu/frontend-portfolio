export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  techStack: string[];
  details?: string;
  category: string;
}