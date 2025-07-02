"use client";

import { useState, useEffect } from 'react';
import { Card, Typography, Space } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

interface Project {
  name: string;
  description: string;
  link: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate fetching projects from GitHub or a hackathon platform
    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Replace with actual API calls to GitHub or Hackathon platform
        const githubProjects = await simulateGitHubProjects();
        const hackathonWins = await simulateHackathonWins();

        // Combine and set the projects
        setProjects([...githubProjects, ...hackathonWins]);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch projects.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Simulating fetching projects from GitHub
  const simulateGitHubProjects = async (): Promise<Project[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: 'Project 1',
            description: 'A brief description of project 1.',
            link: 'https://github.com/user/project1',
          },
          {
            name: 'Project 2',
            description: 'A brief description of project 2.',
            link: 'https://github.com/user/project2',
          },
        ]);
      }, 1000);
    });
  };

  // Simulating fetching hackathon wins
  const simulateHackathonWins = async (): Promise<Project[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: 'Hackathon Win 1',
            description: 'Details about the winning hackathon project.',
            link: '#',
          },
          {
            name: 'Hackathon Win 2',
            description: 'Details about another successful hackathon project.',
            link: '#',
          },
        ]);
      }, 1500);
    });
  };

  if (isLoading) {
    return <div className="text-center">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <motion.div
      className="bg-zinc-800 py-12 px-6 lg:px-8 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects</h2>
        <Space size="large" direction="horizontal" style={{ width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {projects.map((project) => (
            <Card
              key={project.name}
              title={project.name}
              style={{ width: 300, backgroundColor: '#334155', borderColor: '#4b5563' }}
              headStyle={{ color: 'white', borderBottomColor: '#4b5563' }}
              bodyStyle={{ color: 'white' }}
            >
              <Paragraph style={{ color: 'white' }}>{project.description}</Paragraph>
              <a href={project.link} style={{ color: '#93c5fd' }}>Learn More</a>
            </Card>
          ))}
        </Space>
      </div>
    </motion.div>
  );
}