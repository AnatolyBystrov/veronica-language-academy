import React from 'react';
import { TrendingUp, Users, BookOpen, Award, Target, Calendar, BarChart3 } from 'lucide-react';

const AnalyticsView = ({ students, lessons }) => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: 0,
          marginBottom: '0.5rem'
        }}>
          Analytics & Reports
        </h1>
        <p style={{ 
          color: '#64748b', 
          fontSize: '1.2rem', 
          margin: 0,
          fontWeight: '500'
        }}>
          Track performance and monitor progress
        </p>
      </div>

      {/* Student Progress Section */}
      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        border: '1px solid #f1f5f9',
        marginBottom: '2rem'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <TrendingUp size={24} color="white" />
          </div>
          <h3 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 'bold', 
            color: '#1e293b',
            margin: 0
          }}>
            Student Progress Overview
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {students.map(student => (
            <div key={student.id} style={{
              padding: '2rem',
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                }}>
                  {student.avatar}
                </div>
                <div>
                  <h4 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 'bold', 
                    color: '#1e293b',
                    margin: '0 0 0.25rem 0'
                  }}>
                    {student.name}
                  </h4>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: '#64748b',
                    margin: 0
                  }}>
                    {student.level}
                  </p>
                </div>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  marginBottom: '0.5rem' 
                }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#374151' }}>
                    Overall Progress
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
                  height: '12px',
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{
                  background: 'white',
                  padding: '1rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '1px solid #e5e7eb'
                }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#3b82f6',
                    marginBottom: '0.25rem'
                  }}>
                    {student.lessonsCount}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Lessons</div>
                </div>
                <div style={{
                  background: 'white',
                  padding: '1rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  border: '1px solid #e5e7eb'
                }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#10b981',
                    marginBottom: '0.25rem'
                  }}>
                    {student.homeworkPending}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Homework</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        {/* Weekly Statistics */}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          border: '1px solid #f1f5f9'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Calendar size={20} color="white" />
            </div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              fontWeight: 'bold', 
              color: '#1e293b',
              margin: 0
            }}>
              Weekly Stats
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
              borderRadius: '12px'
            }}>
              <span style={{ fontSize: '0.95rem', color: '#1e40af', fontWeight: '600' }}>
                Lessons Conducted
              </span>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1d4ed8' }}>12</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
              borderRadius: '12px'
            }}>
              <span style={{ fontSize: '0.95rem', color: '#166534', fontWeight: '600' }}>
                Homework Completed
              </span>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669' }}>8</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
              borderRadius: '12px'
            }}>
              <span style={{ fontSize: '0.95rem', color: '#92400e', fontWeight: '600' }}>
                Average Rating
              </span>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d97706' }}>4.5</span>
            </div>
          </div>
        </div>

        {/* Performance Overview */}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          border: '1px solid #f1f5f9'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Award size={20} color="white" />
            </div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              fontWeight: 'bold', 
              color: '#1e293b',
              margin: 0
            }}>
              Performance
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: '#8b5cf6',
                marginBottom: '0.5rem'
              }}>
                92%
              </div>
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Student Satisfaction</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: '#10b981',
                marginBottom: '0.5rem'
              }}>
                85%
              </div>
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Homework Completion Rate</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: '#f59e0b',
                marginBottom: '0.5rem'
              }}>
                4.7
              </div>
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Average Lesson Rating</div>
            </div>
          </div>
        </div>

        {/* Monthly Goals */}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          border: '1px solid #f1f5f9'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Target size={20} color="white" />
            </div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              fontWeight: 'bold', 
              color: '#1e293b',
              margin: 0
            }}>
              Monthly Goals
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                fontSize: '0.9rem',
                marginBottom: '0.5rem'
              }}>
                <span style={{ color: '#374151', fontWeight: '600' }}>New Students</span>
                <span style={{ color: '#64748b' }}>3/5</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: '#e5e7eb',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '60%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)',
                  borderRadius: '4px'
                }}></div>
              </div>
            </div>
            
            <div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                fontSize: '0.9rem',
                marginBottom: '0.5rem'
              }}>
                <span style={{ color: '#374151', fontWeight: '600' }}>Lessons This Month</span>
                <span style={{ color: '#64748b' }}>24/30</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: '#e5e7eb',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '80%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
                  borderRadius: '4px'
                }}></div>
              </div>
            </div>
            
            <div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                fontSize: '0.9rem',
                marginBottom: '0.5rem'
              }}>
                <span style={{ color: '#374151', fontWeight: '600' }}>Progress Target</span>
                <span style={{ color: '#64748b' }}>67/75%</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: '#e5e7eb',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '89%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #8b5cf6 0%, #7c3aed 100%)',
                  borderRadius: '4px'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Analytics */}
      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        border: '1px solid #f1f5f9'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <BarChart3 size={24} color="white" />
          </div>
          <h3 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 'bold', 
            color: '#1e293b',
            margin: 0
          }}>
            Detailed Analytics
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '2rem' }}>
          <div style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            borderRadius: '16px',
            border: '1px solid #bae6fd',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: '#0369a1',
              marginBottom: '0.5rem'
            }}>
              156
            </div>
            <div style={{ fontSize: '0.9rem', color: '#0c4a6e', fontWeight: '600' }}>
              Total Hours Taught
            </div>
          </div>

          <div style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
            borderRadius: '16px',
            border: '1px solid #bbf7d0',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: '#059669',
              marginBottom: '0.5rem'
            }}>
              94%
            </div>
            <div style={{ fontSize: '0.9rem', color: '#064e3b', fontWeight: '600' }}>
              Lesson Attendance
            </div>
          </div>

          <div style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, #fef7ff 0%, #fae8ff 100%)',
            borderRadius: '16px',
            border: '1px solid #e9d5ff',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: '#7c3aed',
              marginBottom: '0.5rem'
            }}>
              12
            </div>
            <div style={{ fontSize: '0.9rem', color: '#581c87', fontWeight: '600' }}>
              Active Students
            </div>
          </div>

          <div style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
            borderRadius: '16px',
            border: '1px solid #fde68a',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: '#d97706',
              marginBottom: '0.5rem'
            }}>
            ₪2,840
            </div>
            <div style={{ fontSize: '0.9rem', color: '#92400e', fontWeight: '600' }}>
              Monthly Revenue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;