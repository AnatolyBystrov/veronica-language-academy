import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, Heart } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '0',
      boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
        backgroundSize: '200% 200%',
        animation: 'shimmer 3s ease-in-out infinite'
      }}></div>
      
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: '80px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.8rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)'
            }}>
              🎓
            </div>
            <h1 style={{ 
              color: 'white', 
              fontSize: '1.8rem', 
              fontWeight: 'bold',
              margin: 0,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              Veronica Language Academy
            </h1>
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Link 
              to="/" 
              style={{
                padding: '12px 24px',
                borderRadius: '15px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '2px solid transparent',
                backdropFilter: 'blur(10px)',
                ...(location.pathname === '/' ? {
                  background: 'rgba(255,255,255,0.25)',
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                } : {
                  background: 'rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.9)',
                  border: '2px solid rgba(255,255,255,0.1)'
                })
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== '/') {
                  e.target.style.background = 'rgba(255,255,255,0.2)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== '/') {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              <Users size={18} />
              <span>Admin Dashboard</span>
            </Link>
            
            <Link 
              to="/parent" 
              style={{
                padding: '12px 24px',
                borderRadius: '15px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '2px solid transparent',
                backdropFilter: 'blur(10px)',
                ...(location.pathname === '/parent' ? {
                  background: 'rgba(255,255,255,0.25)',
                  color: 'white',
                  border: '2px solid rgba(255,255,255,0.3)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                } : {
                  background: 'rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.9)',
                  border: '2px solid rgba(255,255,255,0.1)'
                })
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== '/parent') {
                  e.target.style.background = 'rgba(255,255,255,0.2)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== '/parent') {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              <Heart size={18} />
              <span>Parent Portal</span>
            </Link>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;