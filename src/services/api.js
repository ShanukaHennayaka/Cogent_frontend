export const registerUser = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Error submitting form');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    }
  };
  