import Paragraph from "antd/es/skeleton/Paragraph";
import styled from "styled-components";

export const ContainerStyled = styled.div`
    
    @media (max-width: 990px) {
        width: 100%;
        padding: 0;
        margin: 0;
    }
    
`;
export const FilterButton = styled.div`
    display: none;
    @media (max-width:990px) {
        display: block;
    }
`;
export const Para = styled.p`
    @media (max-width:990px) {
        display: none;
    }
`