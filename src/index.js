import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const root = document.getElementById('root');
const element = createRoot(root);

element.render(<App/>)