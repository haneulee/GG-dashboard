import styled from "styled-components";


interface IErrorFallbackProps {
    error: Error;
    resetErrorBoundary: () => void;
}

export const ErrorFallback: React.FC<IErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
    return (
        <ErrorWrapper>
            <p className="text-3xl">Something went wrong:</p>
            <pre className="text-2xl p-2 text-red-500">{error.message}</pre>
            <button className="bg-blue-500 rounded-lg p-2" onClick={resetErrorBoundary}>Try again</button>
        </ErrorWrapper>
    );
}

const ErrorWrapper = styled.div`
    height: 100vh;
    margin: auto;
    margin-top: 50%;
    text-align: center;
`;