import React from "react";
import styled from '@emotion/styled'

interface ITooltipProps {
    children: React.ReactNode;
    message: string;
}

const Container = styled.div`
    &:hover > .tooltip,
    &:active > .tooltip {
        display: block;
    }
`;

const TooltipText = styled.div`
    top: -92px;
    transform: translate(-105px,5px);
    &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #222727 transparent transparent transparent;
    }
`;

export const Tooltip: React.FC<ITooltipProps> = ({ children, message }) => {
    return (
        <Container className="relative w-max h-max">
            {children}
            <TooltipText className="tooltip absolute z-50 hidden animate-tooltip bg-tooltipColor text-white w-60 p-2 rounded-lg">{message}</TooltipText>
        </Container>
    );
}