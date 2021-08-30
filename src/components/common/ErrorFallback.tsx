

interface IErrorFallbackProps {
    error: Error;
    resetErrorBoundary: () => void;
}

export const ErrorFallback: React.FC<IErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}