import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Extremely basic singleton for dev
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, serviceId, inputData } = body;

    if (!userId || !serviceId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Initialize Job in DB
    const job = await prisma.job.create({
      data: {
        userId,
        serviceId,
        inputData: JSON.stringify(inputData),
        status: "PROCESSING",
        complexityScore: Math.random() * 5 + 5 // Mock scoring between 5-10
      }
    });

    // Native Next.js API Routes let us invoke Vercel AI SDK here seamlessly,
    // avoiding an entirely separated Python service.
    
    // For local prototype simulation:
    const mockAIResponse = "This is a simulated AI generative response using native Next.js API logic.";

    const updatedJob = await prisma.job.update({
      where: { id: job.id },
      data: {
        outputData: mockAIResponse,
        status: "COMPLETED",
        aiConfidenceScore: 98.6
      }
    });

    // Log the AI action to DB
    await prisma.aiLog.create({
       data: {
         jobId: updatedJob.id,
         agentType: "ExecutionAgent",
         action: "Simulated RAG Pipeline completed natively inside Next.js",
         confidenceScore: 98.6
       }
    });

    return NextResponse.json({ success: true, job: updatedJob });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
