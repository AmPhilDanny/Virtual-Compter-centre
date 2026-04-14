from fastapi import FastAPI, HTTPException, Request
from pydantic import BaseModel
from agents.fraud_shield import verify_transaction_legitimacy
from agents.execution_agent import run_rag_pipeline

app = FastAPI(title="Fhinovax AI Core Engine")

class JobPayload(BaseModel):
    job_id: int
    service_type: str
    input_data: dict

class PaymentVerificationPayload(BaseModel):
    payment_id: int
    user_id: int
    proof_image_path: str

@app.post("/api/ai/fraud-shield/verify-payment")
async def verify_payment(payload: PaymentVerificationPayload):
    """
    AI intercepts manual bank transfer uploads before admin review 
    to filter out fake generated receipts.
    """
    confidence_score = verify_transaction_legitimacy(payload.proof_image_path)
    
    if confidence_score < 0.40:
        return {"status": "FLAGGED", "confidence": confidence_score, "message": "High probability of forged receipt."}
        
    return {"status": "PASSED", "confidence": confidence_score, "message": "Receipt looks legitimate. Passing to human admin."}

@app.post("/api/ai/execute-job")
async def execute_job(payload: JobPayload):
    """
    Main entry point triggered by Laravel when a client submits a new job.
    """
    result = run_rag_pipeline(payload.job_id, payload.service_type, payload.input_data)
    return {"status": "COMPLETED", "output": result}

# Run with: uvicorn app:app --reload
