import React, { useState } from 'react';
import { Plus, Eye, MessageSquare, X, BookOpen, Trophy } from 'lucide-react';

const StudentsView = ({ 
  students, 
  setStudents, 
  showAddStudent, 
  setShowAddStudent, 
  selectedStudent, 
  setSelectedStudent 
}) => {
  const [newStudent, setNewStudent] = useState({
    name: '',
    age: '',
    level: 'A1 Beginner',
    language: 'English',
    email: '',
    phone: '',
    avatar: '👤'
  });

  const avatarOptions = ['👧', '👦', '🧒', '👨', '👩', '🎓', '📚', '✨'];

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.age && newStudent.email) {
      const student = {
        id: Date.now(),
        name: newStudent.name,
        age: parseInt(newStudent.age),
        level: newStudent.level,
        language: newStudent.language,
        progress: 0,
        lessonsCount: 0,
        homeworkPending: 0,
        parentCode: generateParentCode(newStudent.name),
        avatar: newStudent.avatar,
        recentActivity: 'Just enrolled',
        nextLesson: 'To be scheduled',
        email: newStudent.email,
        phone: newStudent.phone,
        lessonHistory: [],
        homework: [],
        documents: [],
        joinDate: new Date().toISOString().split('T')[0]
      };

      const updatedStudents = [...students, student];
      setStudents(updatedStudents);
      localStorage.setItem('students', JSON.stringify(updatedStudents));
      
      setNewStudent({
        name: '',
        age: '',
        level: 'A1 Beginner',
        language: 'English',
        email: '',
        phone: '',
        avatar: '👤'
      });
      setShowAddStudent(false);
      
      alert(`🎉 ${student.name} added successfully!\nParent Code: ${student.parentCode}`);
    } else {
      alert('Please fill in all required fields: Name, Age, and Email');
    }
  };

  const generateParentCode = (name) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    const numbers = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${initials}${numbers}`;
  };

  const handleDeleteStudent = (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      const updatedStudents = students.filter(s => s.id !== studentId);
      setStudents(updatedStudents);
      localStorage.setItem('students', JSON.stringify(updatedStudents));
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header Section */}
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
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            marginBottom: '0.5rem'
          }}>
            My Students
          </h1>
          <p style={{ 
            color: '#64748b', 
            fontSize: '1.2rem', 
            margin: 0,
            fontWeight: '500'
          }}>
            Manage and track your students' progress
          </p>
        </div>
        
        <button 
          onClick={() => setShowAddStudent(true)}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
            boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.3)';
          }}
        >
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '0.5rem',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Plus size={20} />
          </div>
          <span>Add Student</span>
        </button>
      </div>

      {students.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div style={{
            width: '120px',
            height: '120px',
            margin: '0 auto 2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)'
          }}>
            <BookOpen size={60} color="white" />
          </div>
          <h3 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#1e293b'
          }}>
            No students yet
          </h3>
          <p style={{ 
            color: '#64748b', 
            fontSize: '1.2rem', 
            marginBottom: '2rem'
          }}>
            Add your first student to get started on this amazing journey!
          </p>
          <button 
            onClick={() => setShowAddStudent(true)}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '1rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
            }}
          >
            Add Your First Student
          </button>
        </div>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem' 
        }}>
          {students.map(student => (
            <div 
              key={student.id} 
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid #f1f5f9',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}
            >
              {/* Background Pattern */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                opacity: '0.05',
                filter: 'blur(20px)'
              }}></div>

              {/* Delete Button */}
              <button 
                onClick={() => handleDeleteStudent(student.id)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  opacity: '0.8',
                  transition: 'all 0.3s ease',
                  zIndex: 1
                }}
                onMouseEnter={(e) => {
                  e.target.style.opacity = '1';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = '0.8';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <X size={16} />
              </button>

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Student Avatar & Info */}
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
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
                    transition: 'transform 0.3s ease'
                  }}>
                    {student.avatar}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    marginBottom: '0.5rem',
                    color: '#1e293b'
                  }}>
                    {student.name}
                  </h3>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                    <span style={{
                      background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                      color: '#1e40af',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      border: '1px solid #93c5fd'
                    }}>
                      {student.level}
                    </span>
                    <span style={{
                      background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
                      color: '#7c3aed',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      border: '1px solid #c4b5fd'
                    }}>
                      {student.age} years
                    </span>
                  </div>
                </div>

                {/* Progress Section */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '0.75rem' 
                  }}>
                    <span style={{ 
                      fontSize: '0.9rem', 
                      fontWeight: '600', 
                      color: '#374151' 
                    }}>
                      Learning Progress
                    </span>
                    <span style={{ 
                      fontSize: '0.9rem', 
                      fontWeight: 'bold', 
                      color: '#667eea'
                    }}>
                      {student.progress}%
                    </span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '10px',
                    background: '#e5e7eb',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${student.progress}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '8px',
                      transition: 'width 1s ease'
                    }}></div>
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '1rem', 
                  marginBottom: '2rem' 
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                    padding: '1rem',
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '1px solid #93c5fd'
                  }}>
                    <BookOpen size={20} color="#1e40af" style={{ margin: '0 auto 0.5rem' }} />
                    <div style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      color: '#1e40af',
                      marginBottom: '0.25rem'
                    }}>
                      {student.lessonsCount}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#1e40af', fontWeight: '600' }}>
                      Lessons
                    </div>
                  </div>
                  <div style={{
                    background: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
                    padding: '1rem',
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '1px solid #fb923c'
                  }}>
                    <Trophy size={20} color="#ea580c" style={{ margin: '0 auto 0.5rem' }} />
                    <div style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      color: '#ea580c',
                      marginBottom: '0.25rem'
                    }}>
                      {student.homeworkPending}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#ea580c', fontWeight: '600' }}>
                      Homework
                    </div>
                  </div>
                </div>

                {/* Parent Code */}
                <div style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  padding: '1rem',
                  borderRadius: '12px',
                  marginBottom: '2rem',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ 
                    fontSize: '0.75rem', 
                    color: '#64748b', 
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>
                    Parent Access Code
                  </div>
                  <div style={{
                    fontFamily: 'monospace',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#1e293b',
                    background: 'white',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '8px',
                    display: 'inline-block',
                    border: '1px solid #d1d5db'
                  }}>
                    {student.parentCode}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button 
                    onClick={() => setSelectedStudent(student)}
                    style={{
                      flex: 1,
                      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(79, 172, 254, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(79, 172, 254, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(79, 172, 254, 0.3)';
                    }}
                  >
                    <Eye size={16} />
                    View
                  </button>
                  <button 
                    style={{
                      flex: 1,
                      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                      color: '#1e293b',
                      border: 'none',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(168, 237, 234, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(168, 237, 234, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(168, 237, 234, 0.3)';
                    }}
                  >
                    <MessageSquare size={16} />
                    Lesson
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Premium Add Student Modal */}
      {showAddStudent && (
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
            maxWidth: '600px',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
          }}>
            {/* Modal Header */}
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                    Add New Student
                  </h3>
                  <p style={{ 
                    color: 'rgba(255,255,255,0.8)', 
                    margin: 0,
                    fontSize: '1.1rem'
                  }}>
                    Create a new student profile
                  </p>
                </div>
                <button 
                  onClick={() => setShowAddStudent(false)}
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
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.2)';
                  }}
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {/* Name & Age Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151',
                      fontSize: '0.95rem'
                    }}>
                      Student Name *
                    </label>
                    <input 
                      type="text" 
                      value={newStudent.name}
                      onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                      placeholder="Enter full name" 
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#667eea';
                        e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151',
                      fontSize: '0.95rem'
                    }}>
                      Age *
                    </label>
                    <input 
                      type="number" 
                      value={newStudent.age}
                      onChange={(e) => setNewStudent({...newStudent, age: e.target.value})}
                      placeholder="Age" 
                      min="3"
                      max="100"
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

                {/* Level & Language Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151',
                      fontSize: '0.95rem'
                    }}>
                      Level
                    </label>
                    <select 
                      value={newStudent.level}
                      onChange={(e) => setNewStudent({...newStudent, level: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    >
                      <option>A1 Beginner</option>
                      <option>A2 Elementary</option>
                      <option>B1 Intermediate</option>
                      <option>B2 Upper-Intermediate</option>
                      <option>C1 Advanced</option>
                      <option>C2 Proficient</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151',
                      fontSize: '0.95rem'
                    }}>
                      Language
                    </label>
                    <select 
                      value={newStudent.language}
                      onChange={(e) => setNewStudent({...newStudent, language: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        outline: 'none'
                      }}
                    >
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Russian</option>
                    </select>
                  </div>
                </div>

                {/* Contact Info */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ 
                      display: 'block', 
                      fontWeight: '600', 
                      marginBottom: '0.75rem',
                      color: '#374151',
                      fontSize: '0.95rem'
                    }}>
                      Parent Email *
                    </label>
                    <input 
                      type="email" 
                      value={newStudent.email}
                      onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                      placeholder="parent@example.com" 
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
                      color: '#374151',
                      fontSize: '0.95rem'
                    }}>
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      value={newStudent.phone}
                      onChange={(e) => setNewStudent({...newStudent, phone: e.target.value})}
                      placeholder="+972-50-123-4567" 
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

                {/* Avatar Selection */}
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontWeight: '600', 
                    marginBottom: '1rem',
                    color: '#374151',
                    fontSize: '0.95rem'
                  }}>
                    Choose Avatar
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                    {avatarOptions.map(avatar => (
                      <button
                        key={avatar}
                        onClick={() => setNewStudent({...newStudent, avatar})}
                        style={{
                          width: '60px',
                          height: '60px',
                          border: newStudent.avatar === avatar ? '3px solid #667eea' : '2px solid #e5e7eb',
                          borderRadius: '12px',
                          background: newStudent.avatar === avatar ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white',
                          color: newStudent.avatar === avatar ? 'white' : '#1e293b',
                          fontSize: '1.5rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease',
                          boxShadow: newStudent.avatar === avatar ? '0 4px 15px rgba(102, 126, 234, 0.3)' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (newStudent.avatar !== avatar) {
                            e.target.style.borderColor = '#667eea';
                            e.target.style.transform = 'scale(1.05)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (newStudent.avatar !== avatar) {
                            e.target.style.borderColor = '#e5e7eb';
                            e.target.style.transform = 'scale(1)';
                          }
                        }}
                      >
                        {avatar}
                      </button>
                    ))}
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
                    onClick={() => setShowAddStudent(false)}
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
                    onMouseEnter={(e) => {
                      e.target.style.background = '#e2e8f0';
                      e.target.style.color = '#475569';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#f8fafc';
                      e.target.style.color = '#64748b';
                    }}
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleAddStudent}
                    style={{
                      flex: 2,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
                      boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.3)';
                    }}
                  >
                    <Plus size={20} />
                    Add Student
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsView;