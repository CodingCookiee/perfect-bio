import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, 
      profession, 
      experience, 
      skills, 
      achievements, 
      platform, 
      tone = 'professional',
      length = 'medium'
    } = body;

    // Validate required fields
    if (!name || !profession || !platform) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // This is a placeholder for actual AI bio generation
    // In a real application, you would:
    // 1. Call an AI service or use a language model
    // 2. Process the input parameters
    // 3. Generate a tailored bio

    // Simulate bio generation with a template
    let bioContent = '';
    
    // Different templates based on platform
    if (platform === 'LinkedIn') {
      bioContent = `${name} is a ${experience ? `${experience}-year ` : ''}${profession} ${skills ? `specializing in ${skills}` : ''}.${achievements ? ` Notable achievements include ${achievements}.` : ''} Passionate about delivering high-quality solutions and staying current with industry trends.`;
    } else if (platform === 'Twitter') {
      bioContent = `${profession} ${experience ? `with ${experience} years of experience` : ''}.${skills ? ` Expert in ${skills}.` : ''}${achievements ? ` ${achievements}.` : ''} Thoughts are my own.`;
    } else if (platform === 'Instagram') {
      bioContent = `${name} | ${profession}${skills ? ` | ${skills}` : ''}${achievements ? ` | ${achievements}` : ''} | Living life one day at a time ✨`;
    } else {
      bioContent = `${name} is a dedicated ${profession} ${experience ? `with ${experience} years of experience` : ''}.${skills ? ` Skilled in ${skills}.` : ''}${achievements ? ` ${achievements}.` : ''} Always looking for new challenges and opportunities to grow.`;
    }

    // Adjust length
    if (length === 'short' && bioContent.length > 100) {
      bioContent = bioContent.substring(0, 97) + '...';
    } else if (length === 'long' && bioContent.length < 200) {
      bioContent += ' Committed to continuous learning and professional development, always seeking to expand knowledge and skills through workshops, courses, and industry events.';
    }

    return NextResponse.json({
      success: true,
      bio: {
        id: `bio-${Date.now()}`,
        title: `${platform} Bio`,
        content: bioContent,
        platform,
        tone,
        length,
        createdAt: new Date().toISOString(),
      }
    });
  } catch (error) {
    console.error('Error generating bio:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to generate bio' },
      { status: 500 }
    );
  }
}
