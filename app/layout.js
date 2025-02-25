
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavMenu from "./components/nav";
import Search from "./components/search";
;
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Note App",
  description: "This is a note app that will make me rich",
};

export default function RootLayout({ children }) {
  var notes = [
      { id: 1, title: "Note 1", content: "This is the content of note 1", date:"25 September, 2024" },
      { id: 2, title: "Note 2", content: "This is the content of note 2", date:"25 August, 2024" },
      { id: 3, title: "Note 3", content: "This is the content of note 3", date:"25 June, 2024" },
      { id: 4, title: "Note 4", content: "This is the content of note 4", date:"25 January, 2024" },
      { id: 5, title: "Note 5", content: "This is the content of note 5", date:"25 March, 2024" },
      { id: 6, title: "Note 6", content: "This is the content of note 6", date:"25 December, 2024" },
    ]
    
    // const [sortedNotes, setSortedNotes] = useState(notes)
    
    
    
  return (
    <html lang="en">
      <body>
        <div className="mt-5">

        <Search  />
        </div>
        <div className="flex">
        <NavMenu />
        {children}
        </div>
      </body>
    </html>
  );
}
