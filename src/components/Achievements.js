import React from 'react';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Trophy className="w-5 h-5 mr-2 text-yellow-600" />
        Achievements
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-yellow-50 rounded-xl">
          <div className="text-3xl mb-2">🏆</div>
          <div className="font-medium">First Lesson</div>
          <div className="text-sm text-gray-600">May 2025</div>
        </div>
        
        <div className="text-center p-4 bg-blue-50 rounded-xl">
          <div className="text-3xl mb-2">📚</div>
          <div className="font-medium">10 Lessons</div>
          <div className="text-sm text-gray-600">Active Learner</div>
        </div>
        
        <div className="text-center p-4 bg-green-50 rounded-xl">
          <div className="text-3xl mb-2">⭐</div>
          <div className="font-medium">Top Student</div>
          <div className="text-sm text-gray-600">5 stars in a row</div>
        </div>
        
        <div className="text-center p-4 bg-purple-50 rounded-xl">
          <div className="text-3xl mb-2">🎯</div>
          <div className="font-medium">Goal Oriented</div>
          <div className="text-sm text-gray-600">All homework on time</div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;