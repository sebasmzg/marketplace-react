import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import { NotificationProvider } from './context/notification.context';
import { Suspense } from 'react';

function App() {
  return (
    <div>
      <NotificationProvider>
        <BrowserRouter>
          <Suspense fallback={"Loading..."}>
            <AppRouter/>
          </Suspense>
        </BrowserRouter>
      </NotificationProvider>
    </div>
  );
}

export default App;