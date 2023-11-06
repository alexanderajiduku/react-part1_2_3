const App = () => (
    <div>
        <Tweet username='aajiduku' name='Alexander' date={new Date("2023-05-09")} message='Ukraine has capitulated'  />
        <Tweet username='abigailajiduku' name='Abigail' date={new Date("2023-05-09")} message='Gaza has capitulated'  />
        <Tweet username='arielajiduku' name='Ariel' date={new Date("2026-05-09")} message='Jesus is Lord'  />
    </div>
)

ReactDOM.createRoot(root).render(<App />);   