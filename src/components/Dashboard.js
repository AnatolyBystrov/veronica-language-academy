import React from 'react';
import { Users, BookOpen, CheckCircle, TrendingUp, Clock, AlertCircle, Bell } from 'lucide-react';

const Dashboard = ({ students, lessons }) => {
  const statsCards = [
    {
      title: 'Total Students',
      value: students.length,
      icon: Users,
      color: '#4F46E5',
      bg: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      change: '+2 this month'
    },
    {
      title: 'Lessons Conducted',
      value: lessons.length,
      icon: BookOpen,
      color: '#059669',
      bg: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
      change: '+5 this week'
    },
    {
      title: 'Homework Completed',
      value: 8,
      icon: CheckCircle,
      color: '#DC2626',
      bg: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
      change: '95% completion rate'
    },
    {
      title: 'Average Progress',
      value: '67%',
      icon: TrendingUp,
      color: '#7C2D12',
      bg: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
      change: '+12% this month'
    }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        marginBottom: '3rem' 
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>
              Welcome back, Veronica!
            </h1>
            <div style={{ 
              fontSize: '3rem', 
              animation: 'wave 2s ease-in-out infinite',
              transformOrigin: '70% 70%'
            }}>
              👋
            </div>
          </div>
          <p style={{ 
            color: '#64748b', 
            fontSize: '1.3rem', 
            margin: 0,
            fontWeight: '500'
          }}>
            Today is a great day for teaching! You have 4 lessons scheduled.
          </p>
        </div>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem' 
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '1rem',
            borderRadius: '20px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
          }}>
            <Bell size={20} />
            <span style={{ fontWeight: '600' }}>3 Notifications</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem', 
        marginBottom: '3rem' 
      }}>
        {statsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div 
              key={index}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid #f1f5f9',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
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
                background: card.bg,
                borderRadius: '50%',
                opacity: '0.1',
                filter: 'blur(20px)'
              }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: card.bg,
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 25px ${card.color}30`
                  }}>
                    <Icon size={28} color="white" />
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#10b981',
                    background: '#dcfce7',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '20px',
                    fontWeight: '600'
                  }}>
                    {card.change}
                  </div>
                </div>

                <div style={{ marginBottom: '0.5rem' }}>
                  <div style={{ 
                    fontSize: '3rem', 
                    fontWeight: 'bold', 
                    color: '#1e293b',
                    lineHeight: '1'
                  }}>
                    {card.value}
                  </div>
                </div>

                <div style={{ 
                  fontSize: '1.1rem', 
                  color: '#64748b',
                  fontWeight: '600'
                }}>
                  {card.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem' 
      }}>
        {/* Recent Activity */}
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
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Clock size={20} color="white" />
            </div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#1e293b',
              margin: 0
            }}>
              Recent Activity
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {students.map(student => (
              <div 
                key={student.id} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }}>
                  {student.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    fontWeight: 'bold', 
                    color: '#1e293b',
                    fontSize: '1.1rem',
                    marginBottom: '0.25rem'
                  }}>
                    {student.name}
                  </div>
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: '#64748b'
                  }}>
                    {student.recentActivity}
                  </div>
                </div>
                <div style={{ 
                  fontSize: '0.85rem', 
                  color: '#64748b',
                  background: 'white',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '8px',
                  fontWeight: '600'
                }}>
                  {student.nextLesson}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Needs Attention */}
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
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <AlertCircle size={20} color="white" />
            </div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#1e293b',
              margin: 0
            }}>
              Needs Attention
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.5rem',
              background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
              borderRadius: '16px',
              border: '1px solid #fdba74',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(251, 146, 60, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div>
                <div style={{ 
                  fontWeight: 'bold', 
                  color: '#9a3412',
                  fontSize: '1.1rem',
                  marginBottom: '0.5rem'
                }}>
                  Homework to Review
                </div>
                <div style={{ 
                  fontSize: '0.9rem', 
                  color: '#c2410c'
                }}>
                  3 assignments waiting for review
                </div>
              </div>
              <div style={{
                background: '#ea580c',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(234, 88, 12, 0.4)'
              }}>
                3
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.5rem',
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
              borderRadius: '16px',
              border: '1px solid #93c5fd',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div>
                <div style={{ 
                  fontWeight: 'bold', 
                  color: '#1e40af',
                  fontSize: '1.1rem',
                  marginBottom: '0.5rem'
                }}>
                  Upcoming Lessons
                </div>
                <div style={{ 
                  fontSize: '0.9rem', 
                  color: '#2563eb'
                }}>
                  4 lessons scheduled for tomorrow
                </div>
              </div>
              <div style={{
                background: '#3b82f6',
                color: 'white',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
              }}>
                4
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(20deg); }
            75% { transform: rotate(-10deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Dashboard;