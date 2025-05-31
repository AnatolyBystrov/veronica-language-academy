import React, { useState } from 'react';
import { 
  Upload, Download, FileText, Image, Video, Music, 
  File, Folder, Search, Filter, Plus, Eye, Edit, 
  Trash2, Share, Star, Clock, User, Tag, Grid,
  List, SortAsc, MoreVertical, ExternalLink,
  BookOpen, PenTool, Headphones, Play, Pause
} from 'lucide-react';

const MaterialsView = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [materials, setMaterials] = useState([
    {
      id: 1,
      name: 'English Alphabet Worksheets',
      type: 'pdf',
      category: 'worksheets',
      size: '2.3 MB',
      uploadDate: '2025-05-28',
      uploadedBy: 'Veronica',
      downloads: 15,
      description: 'Complete alphabet learning worksheets with exercises',
      tags: ['alphabet', 'beginner', 'writing'],
      thumbnail: '📝',
      favorite: true
    },
    {
      id: 2,
      name: 'Numbers 1-20 Audio',
      type: 'audio',
      category: 'audio',
      size: '5.7 MB',
      uploadDate: '2025-05-27',
      uploadedBy: 'Veronica',
      downloads: 8,
      description: 'Native pronunciation of numbers 1-20',
      tags: ['numbers', 'pronunciation', 'audio'],
      thumbnail: '🎵',
      favorite: false
    },
    {
      id: 3,
      name: 'Family Members Video',
      type: 'video',
      category: 'videos',
      size: '45.2 MB',
      uploadDate: '2025-05-26',
      uploadedBy: 'Veronica',
      downloads: 12,
      description: 'Interactive video lesson about family vocabulary',
      tags: ['family', 'vocabulary', 'interactive'],
      thumbnail: '🎬',
      favorite: true
    },
    {
      id: 4,
      name: 'Grammar Rules Guide',
      type: 'pdf',
      category: 'guides',
      size: '1.8 MB',
      uploadDate: '2025-05-25',
      uploadedBy: 'Veronica',
      downloads: 22,
      description: 'Comprehensive grammar guide for beginners',
      tags: ['grammar', 'rules', 'reference'],
      thumbnail: '📚',
      favorite: false
    },
    {
      id: 5,
      name: 'Conversation Practice Cards',
      type: 'image',
      category: 'flashcards',
      size: '3.1 MB',
      uploadDate: '2025-05-24',
      uploadedBy: 'Veronica',
      downloads: 18,
      description: 'Printable conversation starter cards',
      tags: ['conversation', 'speaking', 'cards'],
      thumbnail: '🗣️',
      favorite: true
    }
  ]);

  const categories = [
    { id: 'all', label: 'All Materials', icon: FileText, count: materials.length },
    { id: 'worksheets', label: 'Worksheets', icon: PenTool, count: materials.filter(m => m.category === 'worksheets').length },
    { id: 'audio', label: 'Audio Files', icon: Headphones, count: materials.filter(m => m.category === 'audio').length },
    { id: 'videos', label: 'Videos', icon: Video, count: materials.filter(m => m.category === 'videos').length },
    { id: 'guides', label: 'Guides', icon: BookOpen, count: materials.filter(m => m.category === 'guides').length },
    { id: 'flashcards', label: 'Flashcards', icon: Tag, count: materials.filter(m => m.category === 'flashcards').length }
  ];

  const getFileIcon = (type) => {
    switch(type) {
      case 'pdf': return <FileText size={20} color="#dc2626" />;
      case 'audio': return <Music size={20} color="#7c3aed" />;
      case 'video': return <Video size={20} color="#059669" />;
      case 'image': return <Image size={20} color="#ea580c" />;
      default: return <File size={20} color="#64748b" />;
    }
  };

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleUpload = () => {
    alert('Upload functionality would open file picker here!');
  };

  const toggleFavorite = (id) => {
    setMaterials(materials.map(material => 
      material.id === id ? { ...material, favorite: !material.favorite } : material
    ));
  };

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
            background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            marginBottom: '0.5rem'
          }}>
            Teaching Materials
          </h1>
          <p style={{ 
            color: '#64748b', 
            fontSize: '1.2rem', 
            margin: 0,
            fontWeight: '500'
          }}>
            Organize and share your educational resources
          </p>
        </div>
        
        <button 
          onClick={handleUpload}
          style={{
            background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
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
            boxShadow: '0 10px 25px rgba(234, 88, 12, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 15px 35px rgba(234, 88, 12, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 25px rgba(234, 88, 12, 0.3)';
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
            <Upload size={20} />
          </div>
          <span>Upload Material</span>
        </button>
      </div>

      {/* Controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2rem',
        background: 'white',
        padding: '1.5rem',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        border: '1px solid #f1f5f9'
      }}>
        {/* Search */}
        <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
          <Search 
            size={20} 
            color="#64748b" 
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1
            }} 
          />
          <input
            type="text"
            placeholder="Search materials, tags..."
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
              e.target.style.borderColor = '#ea580c';
              e.target.style.boxShadow = '0 0 0 3px rgba(234, 88, 12, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#e5e7eb';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* View Toggle */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{
            display: 'flex',
            background: '#f1f5f9',
            borderRadius: '12px',
            padding: '0.25rem'
          }}>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                background: viewMode === 'grid' ? 'white' : 'transparent',
                border: 'none',
                padding: '0.75rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: viewMode === 'grid' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              <Grid size={18} color={viewMode === 'grid' ? '#ea580c' : '#64748b'} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{
                background: viewMode === 'list' ? 'white' : 'transparent',
                border: 'none',
                padding: '0.75rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: viewMode === 'list' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              <List size={18} color={viewMode === 'list' ? '#ea580c' : '#64748b'} />
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem'
      }}>
        {categories.map(category => {
          const Icon = category.icon;
          const isActive = selectedCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 1.5rem',
                background: isActive ? 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)' : 'white',
                color: isActive ? 'white' : '#64748b',
                border: isActive ? 'none' : '2px solid #e5e7eb',
                borderRadius: '15px',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? '0 8px 25px rgba(234, 88, 12, 0.3)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.target.style.borderColor = '#ea580c';
                  e.target.style.color = '#ea580c';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.color = '#64748b';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              <Icon size={18} />
              <span>{category.label}</span>
              <div style={{
                background: isActive ? 'rgba(255,255,255,0.2)' : '#f1f5f9',
                color: isActive ? 'white' : '#64748b',
                padding: '0.25rem 0.5rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                {category.count}
              </div>
            </button>
          );
        })}
      </div>

      {/* Materials Grid/List */}
      {viewMode === 'grid' ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {filteredMaterials.map(material => (
            <div 
              key={material.id}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '1.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid #f1f5f9',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
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
              {/* Favorite Star */}
              <button
                onClick={() => toggleFavorite(material.id)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f1f5f9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'none';
                }}
              >
                <Star 
                  size={18} 
                  color={material.favorite ? '#fbbf24' : '#d1d5db'}
                  fill={material.favorite ? '#fbbf24' : 'none'}
                />
              </button>

              {/* Thumbnail */}
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                marginBottom: '1.5rem',
                boxShadow: '0 8px 25px rgba(234, 88, 12, 0.3)'
              }}>
                {material.thumbnail}
              </div>

              {/* Content */}
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: '#1e293b',
                margin: '0 0 0.5rem 0',
                lineHeight: '1.3'
              }}>
                {material.name}
              </h3>

              <p style={{
                color: '#64748b',
                fontSize: '0.9rem',
                margin: '0 0 1rem 0',
                lineHeight: '1.5'
              }}>
                {material.description}
              </p>

              {/* Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {material.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      background: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)',
                      color: '#ea580c',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Meta Info */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                fontSize: '0.85rem',
                color: '#64748b'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {getFileIcon(material.type)}
                  <span>{material.size}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Download size={14} />
                  <span>{material.downloads}</span>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button style={{
                  flex: 1,
                  background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}>
                  <Download size={16} />
                  Download
                </button>
                <button style={{
                  background: '#f1f5f9',
                  color: '#64748b',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <Eye size={16} />
                </button>
                <button style={{
                  background: '#f1f5f9',
                  color: '#64748b',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}>
                  <Share size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List View
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredMaterials.map(material => (
            <div 
              key={material.id}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '1.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                flexShrink: 0
              }}>
                {material.thumbnail}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#1e293b',
                  margin: '0 0 0.5rem 0'
                }}>
                  {material.name}
                </h3>
                <p style={{
                  color: '#64748b',
                  fontSize: '0.9rem',
                  margin: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {material.description}
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                fontSize: '0.85rem',
                color: '#64748b'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {getFileIcon(material.type)}
                  <span>{material.size}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Download size={14} />
                  <span>{material.downloads}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={14} />
                  <span>{material.uploadDate}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => toggleFavorite(material.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Star 
                    size={16} 
                    color={material.favorite ? '#fbbf24' : '#d1d5db'}
                    fill={material.favorite ? '#fbbf24' : 'none'}
                  />
                </button>
                <button style={{
                  background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '600'
                }}>
                  <Download size={14} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredMaterials.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <div style={{
            width: '120px',
            height: '120px',
            margin: '0 auto 2rem',
            background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
            borderRadius: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(234, 88, 12, 0.3)'
          }}>
            <FileText size={60} color="white" />
          </div>
          <h3 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#1e293b'
          }}>
            No materials found
          </h3>
          <p style={{ 
            color: '#64748b', 
            fontSize: '1.2rem'
          }}>
            Try adjusting your search or category filter
          </p>
        </div>
      )}
    </div>
  );
};

export default MaterialsView;