import React, { useState } from 'react';
import { 
  Calendar, Clock, Users, Plus, Edit, Trash2, 
  Video, BookOpen, CheckCircle, PlayCircle,
  User, MapPin, Search, Filter, Eye,
  ChevronLeft, ChevronRight, MoreVertical,
  Star, Award, Target, Zap, Bell, X
} from 'lucide-react';

const LessonsView = ({ students, lessons, setLessons }) => {
  const [currentView, setCurrentView] = useState('calendar'); // 'calendar', 'list', 'create'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCreateLesson, setShowCreateLesson] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [newLesson, setNewLesson] = useState({
    title: '',
    studentId: '',
    date: '',
    time: '',
    duration: 60,
    type: 'individual',
    topic: '',
    objectives: '',
    materials: '',
    notes: ''
  });

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Mock lessons data - в реальном приложении это будет из props
  const mockLessons = [
    {
      id: 1,
      title: 'English Alphabet & Pronunciation',
      studentId: 1,
      studentName: 'Alice Petrova',
      date: '2025-06-01',
      time: '10:00',
      duration: 60,
      type: 'individual',
      topic: 'Alphabet Letters A-G',
      status: 'scheduled',
      objectives: ['Learn letters A-G', 'Practice pronunciation', 'Writing exercises'],
      materials: ['Alphabet cards', 'Writing worksheets', 'Audio files'],
      notes: 'Focus on pronunciation difficulties',
      color: '#4f46e5'
    },
    {
      id: 2,
      title: 'Numbers & Counting',
      studentId: 2,
      studentName: 'Max Ivanov',
      date: '2025-06-01',
      time: '14:00',
      duration: 45,
      type: 'individual',
      topic: 'Numbers 1-20',
      status: 'scheduled',
      objectives: ['Count 1-20', 'Number recognition', 'Basic math'],
      materials: ['Number cards', 'Counting games'],
      notes: 'Student enjoys interactive games',
      color: '#059669'
    },
    {
      id: 3,
      title: 'Family Vocabulary',
      studentId: 1,
      studentName: 'Alice Petrova',
      date: '2025-06-02',
      time: '15:30',
      duration: 60,
      type: 'individual',
      topic: 'Family Members',
      status: 'completed',
      objectives: ['Learn family words', 'Practice sentences', 'Role play'],
      materials: ['Family photos', 'Vocabulary cards'],
      notes: 'Excellent progress with vocabulary retention',
      color: '#dc2626'
    },
    {
      id: 4,
      title: 'Group Conversation Practice',
      studentId: null,
      studentName: 'Group Session',
      date: '2025-06-03',
      time: '16:00',
      duration: 90,
      type: 'group',
      topic: 'Daily Routines',
      status: 'scheduled',
      objectives: ['Practice speaking', 'Build confidence', 'Peer learning'],
      materials: ['Conversation cards', 'Video materials'],
      notes: 'Focus on encouraging shy students',
      color: '#7c3aed'
    },
    {
      id: 5,
      title: 'Colors & Shapes',
      studentId: 1,
      studentName: 'Alice Petrova',
      date: '2025-06-04',
      time: '11:00',
      duration: 45,
      type: 'individual',
      topic: 'Basic Colors and Shapes',
      status: 'scheduled',
      objectives: ['Identify primary colors', 'Learn basic shapes', 'Drawing activities'],
      materials: ['Color cards', 'Shape blocks', 'Drawing paper'],
      notes: 'Bring colorful crayons for drawing exercise',
      color: '#f59e0b'
    },
    {
      id: 6,
      title: 'Grammar Basics',
      studentId: 2,
      studentName: 'Max Ivanov',
      date: '2025-06-05',
      time: '13:30',
      duration: 60,
      type: 'individual',
      topic: 'Simple Present Tense',
      status: 'scheduled',
      objectives: ['Understand present tense', 'Form simple sentences', 'Practice with examples'],
      materials: ['Grammar workbook', 'Example sentences', 'Practice sheets'],
      notes: 'Review previous lesson on verbs',
      color: '#10b981'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'scheduled': return '#3b82f6';
      case 'completed': return '#10b981';
      case 'cancelled': return '#ef4444';
      case 'in-progress': return '#f59e0b';
      default: return '#64748b';
    }
  };

  const getStatusBg = (status) => {
    switch(status) {
      case 'scheduled': return '#dbeafe';
      case 'completed': return '#d1fae5';
      case 'cancelled': return '#fee2e2';
      case 'in-progress': return '#fef3c7';
      default: return '#f1f5f9';
    }
  };

  const handleCreateLesson = () => {
    if (newLesson.title && newLesson.studentId && newLesson.date && newLesson.time) {
      const lesson = {
        id: Date.now(),
        ...newLesson,
        studentName: students.find(s => s.id == newLesson.studentId)?.name || 'Unknown',
        status: 'scheduled',
        color: '#4f46e5'
      };
      
      alert(`Lesson "${lesson.title}" created successfully!`);
      setNewLesson({
        title: '',
        studentId: '',
        date: '',
        time: '',
        duration: 60,
        type: 'individual',
        topic: '',
        objectives: '',
        materials: '',
        notes: ''
      });
      setShowCreateLesson(false);
    } else {
      alert('Please fill in all required fields');
    }
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const getLessonsForDate = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    return mockLessons.filter(lesson => lesson.date === dateStr);
  };

  const filteredLessons = mockLessons.filter(lesson =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginBottom: '3rem'
      }}>
        <div>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #dc2626 0%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            marginBottom: '0.5rem'
          }}>
            Lesson Management
          </h1>
          <p style={{ 
            color: '#64748b', 
            fontSize: '1.2rem', 
            margin: 0,
            fontWeight: '500'
          }}>
            Schedule, track and manage your teaching sessions
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {/* View Toggle */}
          <div style={{
            display: 'flex',
            background: '#f1f5f9',
            borderRadius: '12px',
            padding: '0.25rem'
          }}>
            <button
              onClick={() => setCurrentView('calendar')}
              style={{
                background: currentView === 'calendar' ? 'white' : 'transparent',
                border: 'none',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: currentView === 'calendar' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                color: currentView === 'calendar' ? '#dc2626' : '#64748b',
                fontWeight: '600'
              }}
            >
              <Calendar size={16} />
              Calendar
            </button>
            <button
              onClick={() => setCurrentView('list')}
              style={{
                background: currentView === 'list' ? 'white' : 'transparent',
                border: 'none',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: currentView === 'list' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                color: currentView === 'list' ? '#dc2626' : '#64748b',
                fontWeight: '600'
              }}
            >
              <BookOpen size={16} />
              List
            </button>
          </div>

          <button 
            onClick={() => setShowCreateLesson(true)}
            style={{
              background: 'linear-gradient(135deg, #dc2626 0%, #7c3aed 100%)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '1rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 10px 25px rgba(220, 38, 38, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            <Plus size={20} />
            Schedule Lesson
          </button>
        </div>
      </div>

      {/* Calendar View */}
      {currentView === 'calendar' && (
        <div>
          {/* Calendar Header */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            border: '1px solid #f1f5f9'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1e293b',
                margin: 0
              }}>
                {months[selectedDate.getMonth()]} {selectedDate.getFullYear()}
              </h2>
              
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}
                  style={{
                    background: '#f1f5f9',
                    border: 'none',
                    padding: '0.75rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <ChevronLeft size={20} color="#64748b" />
                </button>
                <button
                  onClick={() => setSelectedDate(new Date())}
                  style={{
                    background: 'linear-gradient(135deg, #dc2626 0%, #7c3aed 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Today
                </button>
                <button
                  onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}
                  style={{
                    background: '#f1f5f9',
                    border: 'none',
                    padding: '0.75rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <ChevronRight size={20} color="#64748b" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '1px',
              background: '#e2e8f0',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              {/* Day Headers */}
              {weekDays.map(day => (
                <div
                  key={day}
                  style={{
                    background: '#f8fafc',
                    padding: '1rem',
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#64748b',
                    fontSize: '0.9rem'
                  }}
                >
                  {day}
                </div>
              ))}
              
              {/* Calendar Days */}
              {getDaysInMonth(selectedDate).map((day, index) => {
                const date = day ? new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day) : null;
                const dayLessons = date ? getLessonsForDate(date) : [];
                const isToday = date && date.toDateString() === new Date().toDateString();
                
                return (
                  <div
                    key={index}
                    style={{
                      background: 'white',
                      minHeight: '120px',
                      padding: '0.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}
                  >
                    {day && (
                      <>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          marginBottom: '0.5rem'
                        }}>
                          <span style={{
                            fontWeight: isToday ? 'bold' : '500',
                            color: isToday ? '#dc2626' : '#1e293b',
                            fontSize: '0.9rem'
                          }}>
                            {day}
                          </span>
                          {dayLessons.length > 0 && (
                            <div style={{
                              background: '#dc2626',
                              color: 'white',
                              fontSize: '0.7rem',
                              padding: '0.25rem 0.5rem',
                              borderRadius: '10px',
                              fontWeight: '600'
                            }}>
                              {dayLessons.length}
                            </div>
                          )}
                        </div>
                        
                        {/* Lesson indicators */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          {dayLessons.slice(0, 2).map(lesson => (
                            <div
                              key={lesson.id}
                              style={{
                                background: getStatusBg(lesson.status),
                                color: getStatusColor(lesson.status),
                                padding: '0.25rem 0.5rem',
                                borderRadius: '6px',
                                fontSize: '0.7rem',
                                fontWeight: '600'
                              }}
                            >
                              {lesson.time} {lesson.title}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* List View */}
      {currentView === 'list' && (
        <div>
          {/* Search */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '1.5rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            border: '1px solid #f1f5f9'
          }}>
            <div style={{ position: 'relative', maxWidth: '400px' }}>
              <Search 
                size={20} 
                color="#64748b" 
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }} 
              />
              <input
                type="text"
                placeholder="Search lessons, students, topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#dc2626';
                  e.target.style.boxShadow = '0 0 0 3px rgba(220, 38, 38, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          {/* Lessons List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {filteredLessons.map(lesson => (
              <div 
                key={lesson.id}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid #f1f5f9',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                  {/* Time & Status */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: '120px'
                  }}>
                    <div style={{
                      background: `${getStatusColor(lesson.status)}20`,
                      color: getStatusColor(lesson.status),
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      textTransform: 'capitalize',
                      border: `2px solid ${getStatusColor(lesson.status)}30`
                    }}>
                      {lesson.status}
                    </div>
                    <div style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: '#1e293b',
                      marginBottom: '0.25rem'
                    }}>
                      {lesson.time}
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#64748b'
                    }}>
                      {lesson.duration} min
                    </div>
                  </div>

                  {/* Main Content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div>
                        <h3 style={{
                          fontSize: '1.5rem',
                          fontWeight: 'bold',
                          color: '#1e293b',
                          margin: '0 0 0.5rem 0'
                        }}>
                          {lesson.title}
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <User size={16} color="#64748b" />
                            <span style={{ color: '#64748b', fontWeight: '500' }}>{lesson.studentName}</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Calendar size={16} color="#64748b" />
                            <span style={{ color: '#64748b', fontWeight: '500' }}>{lesson.date}</span>
                          </div>
                          <div style={{
                            background: lesson.type === 'group' ? '#f3e8ff' : '#dbeafe',
                            color: lesson.type === 'group' ? '#7c3aed' : '#3b82f6',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '12px',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            textTransform: 'capitalize'
                          }}>
                            {lesson.type}
                          </div>
                        </div>
                      </div>
                      
                      <button style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        color: '#64748b',
                        transition: 'all 0.3s ease'
                      }}>
                        <MoreVertical size={20} />
                      </button>
                    </div>

                    <div style={{
                      background: '#f8fafc',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      marginBottom: '1rem',
                      border: '1px solid #e2e8f0'
                    }}>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#374151',
                        margin: '0 0 0.75rem 0'
                      }}>
                        Topic: {lesson.topic}
                      </h4>
                      {lesson.notes && (
                        <p style={{
                          color: '#64748b',
                          fontSize: '0.9rem',
                          margin: 0,
                          lineHeight: '1.5'
                        }}>
                          📝 {lesson.notes}
                        </p>
                      )}
                    </div>

                    {/* Objectives & Materials */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <h5 style={{
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          color: '#374151',
                          margin: '0 0 0.5rem 0'
                        }}>
                          Objectives:
                        </h5>
                        <ul style={{
                          margin: 0,
                          padding: '0 0 0 1.25rem',
                          color: '#64748b',
                          fontSize: '0.85rem'
                        }}>
                          {lesson.objectives.map((obj, index) => (
                            <li key={index} style={{ marginBottom: '0.25rem' }}>{obj}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 style={{
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          color: '#374151',
                          margin: '0 0 0.5rem 0'
                        }}>
                          Materials:
                        </h5>
                        <ul style={{
                          margin: 0,
                          padding: '0 0 0 1.25rem',
                          color: '#64748b',
                          fontSize: '0.85rem'
                        }}>
                          {lesson.materials.map((material, index) => (
                            <li key={index} style={{ marginBottom: '0.25rem' }}>{material}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Create Lesson Modal */}
      {showCreateLesson && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '700px',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
          }}>
            {/* Modal Header */}
            <div style={{
              background: 'linear-gradient(135deg, #dc2626 0%, #7c3aed 100%)',
              padding: '2rem',
              borderRadius: '24px 24px 0 0'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                <div>
                  <h3 style={{ 
                    color: 'white', 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    margin: 0,
                    marginBottom: '0.5rem'
                  }}>
                    Schedule New Lesson
                  </h3>
                  <p style={{ 
                    color: 'rgba(255,255,255,0.8)', 
                    margin: 0,
                    fontSize: '1.1rem'
                  }}>
                    Create a new teaching session
                  </p>
                </div>
                <button 
                  onClick={() => setShowCreateLesson(false)}
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: 'none',
                    color: 'white',
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {/* Title & Student */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151'
                    }}>
                      Lesson Title *
                    </label>
                    <input 
                      type="text" 
                      value={newLesson.title}
                      onChange={(e) => setNewLesson({...newLesson, title: e.target.value})}
                      placeholder="e.g. English Alphabet & Pronunciation" 
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151'
                    }}>
                      Student *
                    </label>
                    <select 
                      value={newLesson.studentId}
                      onChange={(e) => setNewLesson({...newLesson, studentId: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    >
                      <option value="">Select Student</option>
                      {students.map(student => (
                        <option key={student.id} value={student.id}>{student.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date, Time & Duration */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151'
                    }}>
                      Date *
                    </label>
                    <input 
                      type="date" 
                      value={newLesson.date}
                      onChange={(e) => setNewLesson({...newLesson, date: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151'
                    }}>
                      Time *
                    </label>
                    <input 
                      type="time" 
                      value={newLesson.time}
                      onChange={(e) => setNewLesson({...newLesson, time: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151'
                    }}>
                      Duration (minutes)
                    </label>
                    <select 
                      value={newLesson.duration}
                      onChange={(e) => setNewLesson({...newLesson, duration: parseInt(e.target.value)})}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    >
                      <option value={30}>30 minutes</option>
                      <option value={45}>45 minutes</option>
                      <option value={60}>60 minutes</option>
                      <option value={90}>90 minutes</option>
                      <option value={120}>120 minutes</option>
                    </select>
                  </div>
                </div>

                {/* Type & Topic */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151'
                    }}>
                      Lesson Type
                    </label>
                    <select 
                      value={newLesson.type}
                      onChange={(e) => setNewLesson({...newLesson, type: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    >
                      <option value="individual">Individual</option>
                      <option value="group">Group</option>
                      <option value="online">Online</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151'
                    }}>
                      Topic
                    </label>
                    <input 
                      type="text" 
                      value={newLesson.topic}
                      onChange={(e) => setNewLesson({...newLesson, topic: e.target.value})}
                      placeholder="e.g. Alphabet Letters A-G" 
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Objectives */}
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontWeight: '600', 
                    marginBottom: '0.75rem',
                    color: '#374151'
                  }}>
                    Learning Objectives
                  </label>
                  <textarea 
                    value={newLesson.objectives}
                    onChange={(e) => setNewLesson({...newLesson, objectives: e.target.value})}
                    placeholder="What will the student learn? (one per line)" 
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Materials & Notes */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151'
                    }}>
                      Materials Needed
                    </label>
                    <textarea 
                      value={newLesson.materials}
                      onChange={(e) => setNewLesson({...newLesson, materials: e.target.value})}
                      placeholder="Books, worksheets, etc." 
                      rows={3}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151'
                    }}>
                      Notes
                    </label>
                    <textarea 
                      value={newLesson.notes}
                      onChange={(e) => setNewLesson({...newLesson, notes: e.target.value})}
                      placeholder="Special instructions or reminders" 
                      rows={3}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  marginTop: '2rem', 
                  paddingTop: '2rem',
                  borderTop: '1px solid #e5e7eb'
                }}>
                  <button 
                    onClick={() => setShowCreateLesson(false)}
                    style={{
                      flex: 1,
                      background: '#f8fafc',
                      color: '#64748b',
                      border: '2px solid #e2e8f0',
                      padding: '1rem',
                      borderRadius: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleCreateLesson}
                    style={{
                      flex: 2,
                      background: 'linear-gradient(135deg, #dc2626 0%, #7c3aed 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '1rem',
                      borderRadius: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 10px 25px rgba(220, 38, 38, 0.3)'
                    }}
                  >
                    <Calendar size={20} />
                    Schedule Lesson
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredLessons.length === 0 && currentView === 'list' && (
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div style={{
            width: '120px',
            height: '120px',
            margin: '0 auto 2rem',
            background: 'linear-gradient(135deg, #dc2626 0%, #7c3aed 100%)',
            borderRadius: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(220, 38, 38, 0.3)'
          }}>
            <BookOpen size={60} color="white" />
          </div>
          <h3 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#1e293b'
          }}>
            No lessons found
          </h3>
          <p style={{ 
            color: '#64748b', 
            fontSize: '1.2rem', 
            marginBottom: '2rem'
          }}>
            Try adjusting your search or schedule your first lesson
          </p>
          <button 
            onClick={() => setShowCreateLesson(true)}
            style={{
              background: 'linear-gradient(135deg, #dc2626 0%, #7c3aed 100%)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '1rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(220, 38, 38, 0.3)'
            }}
          >
            Schedule Your First Lesson
          </button>
        </div>
      )}

      {/* Quick Actions Floating Panel */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        zIndex: 100
      }}>
        <div style={{
          background: 'white',
          padding: '1rem',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          border: '1px solid #f1f5f9',
          minWidth: '200px'
        }}>
          <h4 style={{
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#374151',
            margin: '0 0 0.75rem 0'
          }}>
            Quick Actions
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button
              onClick={() => setShowCreateLesson(true)}
              style={{
                background: 'linear-gradient(135deg, #dc2626 0%, #7c3aed 100%)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <Plus size={16} />
              New Lesson
            </button>
            <button
              onClick={() => setCurrentView('calendar')}
              style={{
                background: currentView === 'calendar' ? '#f1f5f9' : 'white',
                color: '#64748b',
                border: '1px solid #e5e7eb',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <Calendar size={16} />
              Calendar View
            </button>
            <button
              onClick={() => setCurrentView('list')}
              style={{
                background: currentView === 'list' ? '#f1f5f9' : 'white',
                color: '#64748b',
                border: '1px solid #e5e7eb',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <BookOpen size={16} />
              List View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonsView;