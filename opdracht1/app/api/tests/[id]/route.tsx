// Used https://stackoverflow.com/questions/76578186/how-to-get-dynamic-segment-in-next-js-13-app-router

import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    return NextResponse.json({ message: `ID is ${id}` });
}