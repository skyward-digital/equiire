import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    email,
    company,
    addressLine1,
    city,
    state,
    postalCode,
    password,
    phone,
  } = body;

  // This will come from the loan application page later
  const loan = {
    type: 'CREDIT_BUILDER',
    amount: 0,
    length: 0,
    monthlyPayment: 0,
    interestType: 'FIXED',
    apr: 0,
    totalRepayable: 0,
    creditCost: 0,
    startDate: '2023-07-28T10:27:32.659Z',
    firstPayment: 'string',
    endDate: 'string',
  };

  // input validation
  if (!email) {
    return NextResponse.json(
      {
        error: 'Email is required',
      },
      { status: 400 },
    );
  }
  if (!password) {
    return NextResponse.json(
      {
        error: 'Password is required',
      },
      { status: 400 },
    );
  }
  if (!name) {
    return NextResponse.json(
      {
        error: 'Name is required',
      },
      { status: 400 },
    );
  }
  if (!company) {
    return NextResponse.json(
      {
        error: 'Company is required',
      },
      { status: 400 },
    );
  }
  if (!addressLine1) {
    return NextResponse.json(
      {
        error: 'Address Line 1 is required',
      },
      { status: 400 },
    );
  }
  if (!city) {
    return NextResponse.json(
      {
        error: 'City is required',
      },
      { status: 400 },
    );
  }
  if (!state) {
    return NextResponse.json(
      {
        error: 'State is required',
      },
      { status: 400 },
    );
  }
  if (!postalCode) {
    return NextResponse.json(
      {
        error: 'Zip code is required',
      },
      { status: 400 },
    );
  }
  if (!phone) {
    return NextResponse.json(
      {
        error: 'Telephone is required',
      },
      { status: 400 },
    );
  }

  const res = await fetch(`${process.env.API_URL}/signup`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ ...body, country: 'United States', loan }),
  });

  const data = await res.json();

  if (res.status === 200) {
    return NextResponse.json({ data });
  } else {
    return new Error('Sign up failed: ' + data.message);
  }
}
