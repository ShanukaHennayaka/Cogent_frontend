export const registerUser = async (formData) => {
  try {
    console.log('Sending data:', formData);
    
    const response = await fetch('https://your-vercel-app-name.vercel.app/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    // ... rest of your code
  } catch (error) {
    console.error('Error in registerUser:', error);
    throw error;
  }
};