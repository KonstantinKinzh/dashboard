import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from "@/app";
import './index.scss';


const rootId = "root";
const elem = document.getElementById(rootId);
const root = createRoot(elem!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);