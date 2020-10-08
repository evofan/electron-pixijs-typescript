"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let mainWindow;
electron_1.app.on("ready", () => {
    mainWindow = new electron_1.BrowserWindow({
        width: 1280,
        height: 640,
        resizable: true,
        webPreferences: {
            nodeIntegration: true
        },
    });
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});
electron_1.app.on("window-all-closed", () => {
    electron_1.app.quit();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQTZEO0FBRTdELElBQUksVUFBa0MsQ0FBQztBQUV2QyxjQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDM0IsVUFBVSxHQUFHLElBQUksd0JBQWEsQ0FBQztRQUM3QixLQUFLLEVBQUUsSUFBSTtRQUNYLE1BQU0sRUFBRSxHQUFHO1FBQ1gsU0FBUyxFQUFFLElBQUk7UUFDZixjQUFjLEVBQUU7WUFDZCxlQUFlLEVBQUUsSUFBSTtTQUV0QjtLQUNGLENBQUMsQ0FBQztJQUNILFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTLGlCQUFpQixDQUFDLENBQUM7SUFDekQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7UUFDM0IsVUFBVSxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsY0FBVyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDdkMsY0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwIGFzIEVsZWN0cm9uQXBwLCBCcm93c2VyV2luZG93IH0gZnJvbSBcImVsZWN0cm9uXCI7XG5cbmxldCBtYWluV2luZG93OiBFbGVjdHJvbi5Ccm93c2VyV2luZG93O1xuXG5FbGVjdHJvbkFwcC5vbihcInJlYWR5XCIsICgpID0+IHtcbiAgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICB3aWR0aDogMTI4MCxcbiAgICBoZWlnaHQ6IDY0MCxcbiAgICByZXNpemFibGU6IHRydWUsXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSAvLyBmYWxzZSxcbiAgICAgIC8vIHByZWxvYWQ6IGAuL3ByZWxvYWQuanNgLFxuICAgIH0sXG4gIH0pO1xuICBtYWluV2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke19fZGlybmFtZX0vYXBwL2luZGV4Lmh0bWxgKTtcbiAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcbiAgbWFpbldpbmRvdy5vbihcImNsb3NlZFwiLCAoKSA9PiB7XG4gICAgbWFpbldpbmRvdyA9IG51bGw7XG4gIH0pO1xufSk7XG5cbkVsZWN0cm9uQXBwLm9uKFwid2luZG93LWFsbC1jbG9zZWRcIiwgKCkgPT4ge1xuICBFbGVjdHJvbkFwcC5xdWl0KCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNyYyJ9
