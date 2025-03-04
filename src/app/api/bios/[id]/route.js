import { NextResponse } from 'next/server';

// GET a specific bio by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;

    // This is a placeholder for actual database retrieval
    // In a real application, you would fetch the bio from your database
    const bio = {
      id,
      title: 'Professional LinkedIn Bio',
      content: 'Experienced software engineer with a passion for creating elegant solutions to complex problems. Specializing in web development with React and Node.js, I have successfully delivered projects for clients across various industries. I am dedicated to writing clean, maintainable code and staying current with emerging technologies.',
      platform: 'LinkedIn',
      createdAt: '2023-05-15T10:30:00Z',
      updatedAt: '2023-05-15T10:30:00Z',
    };

    return NextResponse.json({ success: true, bio });
  } catch (error) {
    console.error('Error fetching bio:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch bio' },
      { status: 500 }
    );
  }
}

// UPDATE a bio
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    
    // This is a placeholder for actual database update
    // In a real application, you would update the bio in your database
    
    return NextResponse.json({ 
      success: true, 
      message: 'Bio updated successfully',
      bio: {
        id,
        ...body,
        updatedAt: new Date().toISOString(),
      }
    });
  } catch (error) {
    console.error('Error updating bio:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update bio' },
      { status: 500 }
    );
  }
}

// DELETE a bio
export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    
    // This is a placeholder for actual database deletion
    // In a real application, you would delete the bio from your database
    
    return NextResponse.json({ 
      success: true, 
      message: 'Bio deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting bio:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete bio' },
      { status: 500 }
    );
  }
}
