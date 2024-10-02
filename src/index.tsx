import {createRoot} from 'react-dom/client';
import '~/app/styles/index.css'
import {App} from "~/app/App";


const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

container.render(
    <App/>,
);
