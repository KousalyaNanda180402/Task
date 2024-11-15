function toggleOptions(selectedUnit) {
    // Hide all additional options by default
    document.querySelectorAll('.additional-options').forEach(option => {
      option.style.display = 'none';
    });
  
    // Show the additional options only for the selected box
    if (selectedUnit === 1 ) {
      document.getElementById('additional-options-1').style.display = 'block';
    }
    if (selectedUnit === 2 ) {
      document.getElementById('additional-options-2').style.display = 'block';
    }
    if (selectedUnit === 3 ) {
      document.getElementById('additional-options-3').style.display = 'block';
    }
  }
  