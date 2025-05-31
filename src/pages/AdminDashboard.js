import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import StudentsView from '../components/StudentsView';
import HomeworkView from '../components/HomeWorkView';
import AnalyticsView from '../components/AnalyticsView';
import { initialStudents, initialLessons } from '../data/mockData';
import MaterialsView from '../components/MaterialsView';
import LessonsView from '../components/LessonsView';

import { Home, Users, BookOpen, PenTool, BarChart3, FileText } from 'lucide-react';

const Sidebar = ({ currentView, setCurrentView, students = [], lessons = [] }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, color: '#4F46E5' },
    { id: 'students', label: 'Students', icon: Users, color: '#059669' },
    { id: 'lessons', label: 'Lessons', icon: BookOpen, color: '#DC2626' },
    { id: 'homework', label: 'Homework', icon: PenTool, color: '#7C2D12' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, color: '#9333EA' },
    { id: 'materials', label: 'Materials', icon: FileText, color: '#EA580C' }
  ];

  return (
    <div style={{
      width: '280px',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      boxShadow: '4px 0 24px rgba(0, 0, 0, 0.06)',
      height: 'calc(100vh - 80px)',
      position: 'fixed',
      left: 0,
      top: '80px',
      overflowY: 'auto',
      borderRight: '1px solid #e2e8f0',
      zIndex: 10
    }}>
      <div style={{ padding: '2rem 1.5rem' }}>
        {/* Profile Section */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '1.5rem',
          borderRadius: '20px',
          marginBottom: '2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            fontSize: '1.5rem',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255,255,255,0.3)',
            position: 'relative',
            zIndex: 1
          }}>
            👩‍🏫
          </div>
          <h3 style={{ 
            color: 'white', 
            fontSize: '1.1rem', 
            fontWeight: '600', 
            margin: '0 0 0.5rem 0',
            position: 'relative',
            zIndex: 1
          }}>
            Veronica
          </h3>
          <p style={{ 
            color: 'rgba(255,255,255,0.8)', 
            fontSize: '0.9rem', 
            margin: 0,
            position: 'relative',
            zIndex: 1
          }}>
            Language Teacher
          </p>
        </div>

        {/* Menu Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {menuItems.map(item => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  border: 'none',
                  borderRadius: '15px',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'left',
                  background: isActive ? `linear-gradient(135deg, ${item.color}15 0%, ${item.color}25 100%)` : 'transparent',
                  color: isActive ? item.color : '#64748b',
                  transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                  boxShadow: isActive ? `0 8px 25px ${item.color}20` : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.background = '#f1f5f9';
                    e.target.style.transform = 'translateX(2px)';
                    e.target.style.color = '#334155';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.background = 'transparent';
                    e.target.style.transform = 'translateX(0)';
                    e.target.style.color = '#64748b';
                  }
                }}
              >
                {/* Active indicator */}
                {isActive && (
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '4px',
                    height: '24px',
                    background: item.color,
                    borderRadius: '0 4px 4px 0'
                  }}></div>
                )}
                
                <div style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  background: isActive ? `${item.color}20` : '#f8fafc',
                  transition: 'all 0.3s ease'
                }}>
                  <Icon size={20} color={isActive ? item.color : '#64748b'} />
                </div>
                
                <span style={{ 
                  flex: 1,
                  fontSize: '0.95rem',
                  fontWeight: isActive ? '600' : '500'
                }}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          borderRadius: '15px',
          border: '1px solid #e2e8f0'
        }}>
          <h4 style={{ 
            fontSize: '0.9rem', 
            fontWeight: '600', 
            color: '#334155', 
            margin: '0 0 1rem 0' 
          }}>
            Quick Stats
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Active Students</span>
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: '600', 
                color: '#059669',
                background: '#dcfce7',
                padding: '0.25rem 0.5rem',
                borderRadius: '6px'
              }}>
                {students.length || 0}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>This Week</span>
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: '600', 
                color: '#7c2d12',
                background: '#fed7aa',
                padding: '0.25rem 0.5rem',
                borderRadius: '6px'
              }}>
                {lessons.length || 0} lessons
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [students, setStudents] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    const savedLessons = localStorage.getItem('lessons');
    
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    } else {
      setStudents(initialStudents || []);
      if (initialStudents) {
        localStorage.setItem('students', JSON.stringify(initialStudents));
      }
    }
    
    if (savedLessons) {
      setLessons(JSON.parse(savedLessons));
    } else {
      setLessons(initialLessons || []);
      if (initialLessons) {
        localStorage.setItem('lessons', JSON.stringify(initialLessons));
      }
    }
  }, []);

  // ИСПРАВЛЕННАЯ ФУНКЦИЯ renderCurrentView - ДОБАВЛЕНЫ ВСЕ КЕЙСЫ!
  const renderCurrentView = () => {
    switch(currentView) {
      case 'dashboard':
        return <Dashboard students={students} lessons={lessons} />;
      case 'students':
        return (
          <StudentsView 
            students={students}
            setStudents={setStudents}
            showAddStudent={showAddStudent}
            setShowAddStudent={setShowAddStudent}
            selectedStudent={selectedStudent}
            setSelectedStudent={setSelectedStudent}
          />
        );
      case 'lessons':
        return (
          <LessonsView 
            students={students}
            lessons={lessons}
            setLessons={setLessons}
          />
        );
      case 'homework':
        return <HomeworkView students={students} lessons={lessons} />;
      case 'analytics':
        return <AnalyticsView students={students} lessons={lessons} />;
      case 'materials':
        return <MaterialsView />;
      default:
        return <Dashboard students={students} lessons={lessons} />;
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      backgroundColor: '#f8fafc', 
      minHeight: 'calc(100vh - 80px)' 
    }}>
      <Sidebar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        students={students} 
        lessons={lessons} 
      />
      <div style={{ 
        flex: 1, 
        marginLeft: '280px',
        minHeight: 'calc(100vh - 80px)',
        backgroundColor: '#f8fafc'
      }}>
        {renderCurrentView()}
        {selectedStudent && (
          <div style={{
            position: 'fixed',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
            padding: '2rem',
            borderRadius: '24px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
            zIndex: 2000,
            minWidth: '400px',
            maxWidth: '90%',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
              }}>
                {selectedStudent.avatar}
              </div>
              <h2 style={{ fontSize: '1.8rem', color: '#1e293b', fontWeight: '700', marginBottom: '0.25rem' }}>
                {selectedStudent.name}
              </h2>
              <p style={{ color: '#64748b', fontWeight: '500', fontSize: '1rem' }}>
                Level: {selectedStudent.level} — {selectedStudent.age} y/o
              </p>
            </div>

            <div style={{ fontSize: '0.95rem', color: '#334155', marginBottom: '1rem' }}>
              <p><strong>Email:</strong> {selectedStudent.email}</p>
              <p><strong>Progress:</strong> {selectedStudent.progress}%</p>
              <p><strong>Lessons:</strong> {selectedStudent.lessonsCount}</p>
              <p><strong>Homework:</strong> {selectedStudent.homeworkPending}</p>
              <p><strong>Parent Code:</strong> {selectedStudent.parentCode}</p>
            </div>

            <button
              onClick={() => setSelectedStudent(null)}
              style={{
                marginTop: '1rem',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
              }}
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;