import React from 'react';
import { Bell } from 'lucide-react';

const Notifications = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Bell className="w-5 h-5 mr-2 text-red-600" />
        Notifications
      </h3>
      
      <div className="space-y-3">
        <div className="p-4 bg-blue-50 rounded-xl">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">📅</div>
            <div>
              <div className="font-medium">Next Lesson</div>
              <div className="text-sm text-gray-600">June 2, 2025, 10:00 AM</div>
              <div className="text-sm text-blue-600">Topic: Colors and numbers</div>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-green-50 rounded-xl">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">🎉</div>
            <div>
              <div className="font-medium">Great work!</div>
              <div className="text-sm text-gray-600">Veronica left feedback</div>
              <div className="text-sm text-green-600">"Anna is very diligent!"</div>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-yellow-50 rounded-xl">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">📋</div>
            <div>
              <div className="font-medium">New Assignment</div>
              <div className="text-sm text-gray-600">Learn 10 new words</div>
              <div className="text-sm text-yellow-600">Due in 2 days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;