import React from 'react';
import { Send, AlertCircle, CheckCircle, Star, Edit, Clock, User } from 'lucide-react';

const HomeWorkView = ({ students, lessons }) => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
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
            Homework Management
          </h1>
          <p style={{ 
            color: '#64748b', 
            fontSize: '1.2rem', 
            margin: 0,
            fontWeight: '500'
          }}>
            Track and manage student assignments
          </p>
        </div>
        
        <button style={{
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
        }}>
          <Send size={20} />
          Create Assignment
        </button>
      </div>

      {/* Status Cards Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {/* Pending Review */}
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
              <AlertCircle size={24} color="white" />
            </div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#1e293b',
              margin: 0
            }}>
              Pending Review
            </h3>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{
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
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'start',
                marginBottom: '1rem'
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>👧</span>
                    <span style={{ 
                      fontWeight: 'bold', 
                      color: '#9a3412',
                      fontSize: '1.1rem'
                    }}>
                      Anna Petrova
                    </span>
                  </div>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: '#c2410c',
                    margin: 0
                  }}>
                    Learn 10 new words
                  </p>
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  background: '#ea580c',
                  color: 'white',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '20px',
                  fontWeight: '600'
                }}>
                  Pending
                </span>
              </div>
              
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                <button style={{
                  background: '#22c55e',
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
                onMouseEnter={(e) => e.target.style.background = '#16a34a'}
                onMouseLeave={(e) => e.target.style.background = '#22c55e'}>
                  <CheckCircle size={16} />
                  Accept
                </button>
                <button style={{
                  background: '#6b7280',
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
                onMouseEnter={(e) => e.target.style.background = '#4b5563'}
                onMouseLeave={(e) => e.target.style.background = '#6b7280'}>
                  <Edit size={16} />
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Completed */}
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
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <CheckCircle size={24} color="white" />
            </div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: '#1e293b',
              margin: 0
            }}>
              Completed
            </h3>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
              borderRadius: '16px',
              border: '1px solid #bbf7d0',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'start',
                marginBottom: '1rem'
              }}>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>👦</span>
                    <span style={{ 
                      fontWeight: 'bold', 
                      color: '#166534',
                      fontSize: '1.1rem'
                    }}>
                      Maxim Ivanov
                    </span>
                  </div>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: '#15803d',
                    margin: 0
                  }}>
                    Grammar exercises
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      color={i < 4 ? '#fbbf24' : '#d1d5db'}
                      fill={i < 4 ? '#fbbf24' : 'none'}
                    />
                  ))}
                </div>
              </div>
              <p style={{ 
                fontSize: '0.9rem', 
                color: '#22c55e', 
                fontWeight: '600',
                margin: 0
              }}>
                ✅ Excellent! All correct!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Assignments Table */}
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
            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
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
            Recent Assignments
          </h3>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '1rem 0.5rem',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#64748b'
                }}>
                  Student
                </th>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '1rem 0.5rem',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#64748b'
                }}>
                  Assignment
                </th>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '1rem 0.5rem',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#64748b'
                }}>
                  Due Date
                </th>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '1rem 0.5rem',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#64748b'
                }}>
                  Status
                </th>
                <th style={{ 
                  textAlign: 'left', 
                  padding: '1rem 0.5rem',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  color: '#64748b'
                }}>
                  Rating
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ 
                borderBottom: '1px solid #f1f5f9',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f8fafc';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <td style={{ padding: '1.5rem 0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>👧</span>
                    <span style={{ fontWeight: '600', color: '#1e293b' }}>Anna Petrova</span>
                  </div>
                </td>
                <td style={{ padding: '1.5rem 0.5rem', color: '#64748b' }}>Learn 10 new words</td>
                <td style={{ padding: '1.5rem 0.5rem', color: '#64748b' }}>Jun 2, 2025</td>
                <td style={{ padding: '1.5rem 0.5rem' }}>
                  <span style={{
                    background: '#fef3c7',
                    color: '#92400e',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    Pending
                  </span>
                </td>
                <td style={{ padding: '1.5rem 0.5rem', color: '#64748b' }}>-</td>
              </tr>
              <tr style={{ 
                borderBottom: '1px solid #f1f5f9',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f8fafc';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <td style={{ padding: '1.5rem 0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>👦</span>
                    <span style={{ fontWeight: '600', color: '#1e293b' }}>Maxim Ivanov</span>
                  </div>
                </td>
                <td style={{ padding: '1.5rem 0.5rem', color: '#64748b' }}>Grammar exercises</td>
                <td style={{ padding: '1.5rem 0.5rem', color: '#64748b' }}>May 30, 2025</td>
                <td style={{ padding: '1.5rem 0.5rem' }}>
                  <span style={{
                    background: '#dcfce7',
                    color: '#166534',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '600'
                  }}>
                    Completed
                  </span>
                </td>
                <td style={{ padding: '1.5rem 0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    {[...Array(4)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        color="#fbbf24"
                        fill="#fbbf24"
                      />
                    ))}
                    <Star size={16} color="#d1d5db" fill="none" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeWorkView;