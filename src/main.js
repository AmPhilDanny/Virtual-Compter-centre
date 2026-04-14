// Initialize interactions for the landing and dashboard pages

document.addEventListener('DOMContentLoaded', () => {
  // Simple subtle parallax or scroll interactions if needed
  console.log("Fhinovax AI System Initialized");
  
  // Dashboard Job Submission Form Handler
  const jobForm = document.getElementById('jobSubmissionForm');
  const jobStatus = document.getElementById('jobStatusDisplay');
  const jobStatusText = document.getElementById('jobStatusText');
  const AgentPipelineUI = document.getElementById('agentPipeline');
  
  if (jobForm) {
    jobForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission and agent workflow
      jobformSubmitSimulation();
    });
  }
  
  function jobformSubmitSimulation() {
    const btn = document.getElementById('submitJobBtn');
    btn.disabled = true;
    btn.innerHTML = '<span class="animate-pulse">Initializing Agents...</span>';
    
    // Show Pipeline
    AgentPipelineUI.classList.remove('hidden');
    
    let step = 0;
    const steps = [
      { text: "Intake Agent: Validating parameters...", time: 1500 },
      { text: "Analysis Agent: Determining complexity...", time: 2000 },
      { text: "Execution Agent: Generating output with RAG...", time: 3500 },
      { text: "QA Agent: Verifying confidence score (98%)...", time: 1000 },
      { text: "Complete: Job ready for review.", time: 500 }
    ];
    
    function runNextStep() {
      if (step < steps.length) {
        jobStatusText.innerText = steps[step].text;
        
        // Light up workflow indicators
        const stepIndicators = document.querySelectorAll('.agent-step');
        if(stepIndicators[step]) {
           stepIndicators[step].classList.add('ring-2', 'ring-brand-gold', 'bg-white/10');
           stepIndicators[step].querySelector('.status-icon').innerHTML = "✔️";
           stepIndicators[step].querySelector('.status-icon').classList.add('text-green-400');
        }
        
        setTimeout(() => {
          step++;
          runNextStep();
        }, steps[step].time);
      } else {
        btn.innerHTML = 'Job Completed & Delivered';
        btn.classList.replace('from-brand-blue', 'from-green-600');
        btn.classList.replace('to-brand-gold', 'to-green-400');
      }
    }
    
    runNextStep();
  }
});
