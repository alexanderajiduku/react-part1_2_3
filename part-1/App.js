const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent name="Bob" />
    </div>
)

ReactDOM.createRoot(root).render(<App />);   