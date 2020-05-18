import React from 'react';
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.covid19api.com',
  
})