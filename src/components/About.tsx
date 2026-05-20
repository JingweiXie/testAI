import React from 'react';
import { skills } from '../data/skills';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">关于我</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">详细介绍</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              我是一名充满激情的全栈开发工程师，对现代 Web 技术有深入的了解和实践经验。
              我喜欢解决复杂的问题，并致力于编写整洁、可维护的代码。
            </p>
            <p className="text-gray-400 leading-relaxed">
              在日常工作中，我主要使用 React、TypeScript 和 Node.js 进行开发。我也一直在学习新技术，以跟上快速发展的前端生态系统。
            </p>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">技能列表</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm font-medium border border-gray-700 hover:border-purple-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
