import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <h2 className="text-xl font-bold">ok</h2>
    </div>
  </StrictMode>
);
