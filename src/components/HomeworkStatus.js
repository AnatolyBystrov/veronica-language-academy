import React from 'react';
import { PenTool, Star } from 'lucide-react';

const HomeworkStatus = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <PenTool className="w-5 h-5 mr-2 text-purple-600" />
        Homework
      </h3>
      
      <div className="space-y-3">
        <div className="p-4 bg-yellow-50 rounded-xl border-l-4 border-yellow-400">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Current Assignment</span>
            <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">In Progress</span>
          </div>
          <div className="text-sm text-gray-600 mb-2">Learn 10 new words</div>
          <div className="text-xs text-gray-500">Due: June 2, 2025</div>
        </div>
        
        <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-400">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Previous Assignment</span>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-2">Alphabet and sounds</div>
          <div className="text-sm text-green-600 font-medium">✅ Excellent work!</div>
        </div>
      </div>
    </div>
  );
};

export default HomeworkStatus;