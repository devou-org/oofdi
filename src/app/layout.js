import { Geist, Geist_Mono, Mona_Sans } from "next/font/google";
import "./globals.css";
import { FirestoreProvider } from "./Context/firebaseContext";
import { MediaProvider } from "./Context/blobContext";


const monoSans = Mona_Sans({
   weight: ['400', '700'], 
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${monoSans.variable} overflow-x-hidden`}
      >
      <FirestoreProvider>
       <MediaProvider>
          <>  {children} </>       
       </MediaProvider>      
      </FirestoreProvider>
        
      </body>
    </html>
  );
}
