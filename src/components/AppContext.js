// // AppContext.js

// import React, { createContext, useContext, useState } from 'react';

// const AppContext = createContext();

// export function AppProvider({ children }) {
//   const [selectedAudio, setSelectedAudio] = useState('');
//   const [inputValues, setInputValues] = useState({});
//   const [disableAudio, setDisableAudio] = useState(false);

//   // Здесь вы можете определить другие переменные состояния и функции для изменения состояния,
//   // которые нужны вашему приложению.

//   return (
//     <AppContext.Provider
//       value={{
//         selectedAudio,
//         setSelectedAudio,
//         inputValues,
//         setInputValues,
//         disableAudio,
//         setDisableAudio,
        
//         // Другие переменные и функции, которые нужны вашему приложению
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// }

// export function useAppContext() {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error('useAppContext must be used within an AppProvider');
//   }
//   return context;
// }
