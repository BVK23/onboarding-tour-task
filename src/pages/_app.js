// if (process.env.NODE_ENV === 'production') {
//   console.log = () => {};
//   console.error = () => {};
// }

import '@/styles/globals.css'
import { UIContextProvider } from '../context/UIContext';
import { TaskContextProvider } from '../context/TaskContext';

export default function App({ Component, pageProps }) {
  return (
    <UIContextProvider>
      <TaskContextProvider>
        <Component {...pageProps} />
      </TaskContextProvider>
    </UIContextProvider>
        
  );
}
