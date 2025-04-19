// src/components/Admin/BillingService.js

// Initialize default settings
const defaultSettings = {
    sessionRate: 100,
    cancellationFee: 25,
    paymentMethods: ['Cash', 'Tabby' , 'ApplePay' , 'Mada' , 'Bank Transfer'],
    taxRate: 15,
    lateFee: 15,
    billingCycle: 'monthly'
  };
  
  // Load settings from localStorage or use defaults
  export const getBillingSettings = async () => {
    try {
      const saved = localStorage.getItem('billingSettings');
      return saved ? JSON.parse(saved) : { ...defaultSettings };
    } catch (error) {
      console.error('Error loading billing settings:', error);
      return { ...defaultSettings };
    }
  };
  
  // Save updated settings
  export const updateBillingSettings = async (newSettings) => {
    try {
      localStorage.setItem('billingSettings', JSON.stringify(newSettings));
      return newSettings;
    } catch (error) {
      console.error('Error saving billing settings:', error);
      throw error;
    }
  };