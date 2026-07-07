const axios = require('axios');

class FaceIDClient {
  constructor(options) {
    if (!options.apiKey) {
      throw new Error("API Key is required to initialize FaceIDClient.");
    }
    this.apiKey = options.apiKey;
    this.baseURL = options.environment === 'production' 
      ? 'https://api.faceid-terms-api.com/v1' 
      : 'https://sandbox.faceid-terms-api.com/v1';
    
    this.http = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async verify(payload) {
    try {
      const response = await this.http.post('/verify', payload);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 402) {
        throw new Error("Payment Required. Please top up your quota.");
      }
      throw error;
    }
  }
}

module.exports = {
  Client: FaceIDClient
};
