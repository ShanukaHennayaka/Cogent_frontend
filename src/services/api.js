export const registerUser = async (formData) => {
  try {
    console.log('Sending data:', formData);
    
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('Response status:', response.status);
    
    const responseData = await response.json();
    console.log('Response data:', responseData); 
    
    if (!response.ok) {
      throw new Error(responseData.message || 'Error submitting form');
    }

    return responseData;
  } catch (error) {
    console.error('Error in registerUser:', error);
    throw error;
  }
};