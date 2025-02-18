export default function NoteCard({note}) {
    return (
        <div className="flex flex-col justify-between m-2 border shadow-md w-1/4 p-3 h-52 hover:shadow-xl">
            <div>
                <div className="flex justify-between items-center">
                    <h1 className="font-bold">{note.title}</h1>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#bebcbc" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"></path></svg>
                    </span>
                </div>
                <p className="text-sm text-gray-500">{note.date}</p>
                <p className="text-gray-900">{note.content}</p>
            </div>
            <div className="flex justify-between items-center h-5">
                <div className="flex justify-evenly items-center">
                    <span className="mr-2 p-2 hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="#bebcbc" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"></path></svg>
                    </span>
                    <span className="mx-2 p-2 hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="none" stroke="#bebcbc" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11h3m0 0h3m-3 0v3m0-3V8m-3 11v-1.25c0-2.071-1.919-3.75-4.286-3.75H7.286C4.919 14 3 15.679 3 17.75V19m9-11a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></path></svg>
                    </span>
                    <span className="mx-2 p-2 hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 512 512"><path fill="none" stroke="#bebcbc" strokeMiterlimit={10} strokeWidth={32} d="M416.07 272a160 160 0 1 0-160 160a160 160 0 0 0 160-160ZM142.12 91.21A46.67 46.67 0 0 0 112 80l-2.79.08C83.66 81.62 64 104 64.07 131c0 13.21 4.66 19.37 10.88 27.23a4.55 4.55 0 0 0 3.24 1.77h.88a3.23 3.23 0 0 0 2.54-1.31L142.38 99a5.38 5.38 0 0 0 1.55-4a5.26 5.26 0 0 0-1.81-3.79Zm227.76 0A46.67 46.67 0 0 1 400 80l2.79.08C428.34 81.62 448 104 447.93 131c0 13.21-4.66 19.37-10.88 27.23a4.55 4.55 0 0 1-3.24 1.76h-.88a3.23 3.23 0 0 1-2.54-1.31L369.62 99a5.38 5.38 0 0 1-1.55-4a5.26 5.26 0 0 1 1.81-3.79Z"></path><path fill="none" stroke="#bebcbc" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256.07 160v112h-80m240 160l-40-40m-280 40l40-40"></path></svg>
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="mx-2 p-2 hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 512 512"><path fill="none" stroke="#bebcbc" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M80 152v256a40.12 40.12 0 0 0 40 40h272a40.12 40.12 0 0 0 40-40V152"></path><rect width={416} height={80} x={48} y={64} fill="none" stroke="#bebcbc" strokeLinejoin="round" strokeWidth={32} rx={28} ry={28}></rect><path fill="none" stroke="#bebcbc" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="m320 304l-64 64l-64-64m64 41.89V224"></path></svg>
                    </span>
                    <span className="ml-2 p-2 hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="none" stroke="#bebcbc" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.687 6.213L6.8 18.976a2.5 2.5 0 0 0 2.466 2.092h3.348m6.698-14.855L17.2 18.976a2.5 2.5 0 0 1-2.466 2.092h-3.348m-1.364-9.952v5.049m3.956-5.049v5.049M2.75 6.213h18.5m-6.473 0v-1.78a1.5 1.5 0 0 0-1.5-1.5h-2.554a1.5 1.5 0 0 0-1.5 1.5v1.78z"></path></svg>
                    </span>

                </div>
            </div>
        </div>
    )
}