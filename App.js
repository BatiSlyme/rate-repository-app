import AppBar from "./src/AppBar";
import Main from "./src/Main";
import { NativeRouter } from 'react-router-native';


export default function App() {
  return (
    <>
      <NativeRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <AppBar />
        <Main />
      </NativeRouter>
    </>
  );
}

