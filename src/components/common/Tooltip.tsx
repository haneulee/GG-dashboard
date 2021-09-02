import React, { FC } from "react";
import styled from '@emotion/styled'

interface Props {
    children: React.ReactNode;
    message: string;
}

export const Tooltip: FC<Props> = ({ children, message }) => {
    return (
        <Container className="relative w-max h-max">
            {children}
            <TooltipText className="tooltip absolute z-50 hidden animate-tooltip bg-tooltipColor text-white w-60 p-2 rounded-lg">{message}</TooltipText>
        </Container>
    );
}

const Container = styled.div`
    &:hover > .tooltip,
    &:active > .tooltip {
        display: block;
    }
`;

const TooltipText = styled.div`
    top: -105px;
    transform: translate(-109px,5px);
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