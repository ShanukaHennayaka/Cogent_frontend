export const registerUser = async (formData) => {
  try {
    console.log('Sending data:', formData); // Log what you're sending
    
    const response = await fetch('https://reimaginebanking.netlify.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('Response status:', response.status); // Log the status
    
    const responseData = await response.json();
    console.log('Response data:', responseData); // Log the response data
    
    if (!response.ok) {
      throw new Error(responseData.message || 'Error submitting form');
    }

    return responseData;
  } catch (error) {
    console.error('Error in registerUser:', error);
    throw error;
  }
};