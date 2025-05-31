import React from 'react';
import { BookOpen } from 'lucide-react';

const RecentLessons = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <BookOpen className="w-5 h-5 mr-2 text-green-600" />
        Recent Lessons
      </h3>
      
      <div className="space-y-3">
        <div className="p-4 bg-gray-50 rounded-xl">
          <div className="font-medium mb-1">May 30, 2025</div>
          <div className="text-sm text-gray-600 mb-2">Alphabet and pronunciation</div>
          <div className="text-sm">
            <span className="text-green-600">✓</span> Great job memorizing letters
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-xl">
          <div className="font-medium mb-1">May 27, 2025</div>
          <div className="text-sm text-gray-600 mb-2">Basic vocabulary</div>
          <div className="text-sm">
            <span className="text-blue-600">📝</span> Need more pronunciation practice
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentLessons;