import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Input validation
    const fullName = String(data.fullName || '').trim();
    const phone = String(data.phone || '').trim();
    const email = String(data.email || '').trim();
    const courseTitle = String(data.courseTitle || '').trim();
    const attendees = Number(data.attendees) || 1;
    const company = String(data.company || '').trim();
    const preferredDate = String(data.preferredDate || '').trim();
    const hasCitb = Boolean(data.hasCitb);
    const notes = String(data.notes || '').trim();

    if (!fullName || !phone || !email || !courseTitle) {
      return NextResponse.json(
        { error: 'Please provide your name, phone number, email, and select a course.' },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Sanitize string inputs against injection / XSS
    const sanitize = (str: string) => str.replace(/[<>]/g, '');

    const record = {
      id: `ENQ-${Date.now()}`,
      receivedAt: new Date().toISOString(),
      fullName: sanitize(fullName),
      phone: sanitize(phone),
      email: sanitize(email),
      courseTitle: sanitize(courseTitle),
      attendees,
      company: sanitize(company),
      preferredDate: sanitize(preferredDate),
      hasCitb,
      notes: sanitize(notes),
      status: 'received'
    };

    console.log('New Course Enquiry Stored:', record);

    return NextResponse.json({
      success: true,
      message: 'Thank you for your enquiry. Our team at Carlisle Learning will contact you shortly.',
      enquiryId: record.id
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing your enquiry.' },
      { status: 500 }
    );
  }
}

