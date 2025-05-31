import React, { useState } from 'react';

function ParentPortal() {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Simple authentication - in real app would be more secure
    if (accessCode === 'DEMO123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid access code. Try: DEMO123');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ 
        maxWidth: '400px', 
        margin: '4rem auto', 
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          🔐 Parent Portal Access
        </h2>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>
            Enter your access code:
          </label>
          <input
            type="text"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            placeholder="Access code (try: DEMO123)"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #ddd',
              borderRadius: '6px',
              fontSize: '16px'
            }}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          />
        </div>
        
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Access Portal
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          👨‍👩‍👧‍👦 Parent Portal - Alex Johnson
        </h1>
        <p style={{ color: '#666' }}>Track your child's learning progress</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Left Column - Progress */}
        <div>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>📊 Learning Progress</h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>English Level: A2</span>
                <span>75% Complete</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                backgroundColor: '#e5e7eb',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '75%',
                  height: '100%',
                  backgroundColor: '#10b981',
                  borderRadius: '4px'
                }}></div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>24</div>
                <div style={{ fontSize: '0.875rem', color: '#666' }}>Total Lessons</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>18</div>
                <div style={{ fontSize: '0.875rem', color: '#666' }}>Homework Done</div>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>📚 Recent Lessons</h3>
            
            <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>December 15, 2024</div>
              <div style={{ marginBottom: '0.5rem' }}>📖 Topic: Past Simple Tense</div>
              <div style={{ fontSize: '0.875rem', color: '#666' }}>
                Great progress! Alex understood the concept quickly and completed all exercises.
              </div>
            </div>

            <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>December 12, 2024</div>
              <div style={{ marginBottom: '0.5rem' }}>📖 Topic: Irregular Verbs</div>
              <div style={{ fontSize: '0.875rem', color: '#666' }}>
                Practiced common irregular verbs. Need more practice with 'go-went-gone'.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Homework & Announcements */}
        <div>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            marginBottom: '1.5rem'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>📝 Current Homework</h3>
            
            <div style={{
              padding: '1rem',
              backgroundColor: '#fef3c7',
              borderRadius: '6px',
              marginBottom: '1rem'
            }}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                ⏰ Due: December 18, 2024
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                Complete exercises 1-5 on page 42 (Past Simple)
              </div>
              <button style={{
                padding: '6px 12px',
                backgroundColor: '#f59e0b',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}>
                Mark as Complete
              </button>
            </div>

            <div style={{
              padding: '1rem',
              backgroundColor: '#d1fae5',
              borderRadius: '6px'
            }}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                ✅ Completed: December 15, 2024
              </div>
              <div>
                Write 5 sentences using past simple tense
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>📢 Announcements</h3>
            
            <div style={{
              padding: '1rem',
              backgroundColor: '#dbeafe',
              borderRadius: '6px',
              marginBottom: '1rem'
            }}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                🎄 Holiday Schedule
              </div>
              <div style={{ fontSize: '0.875rem' }}>
                No lessons from December 24-26. Regular schedule resumes December 27.
              </div>
            </div>

            <div style={{
              padding: '1rem',
              backgroundColor: '#f3e8ff',
              borderRadius: '6px'
            }}>
              <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                🏆 Achievement Unlocked!
              </div>
              <div style={{ fontSize: '0.875rem' }}>
                Alex completed 20 lessons! Keep up the great work!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentPortal;