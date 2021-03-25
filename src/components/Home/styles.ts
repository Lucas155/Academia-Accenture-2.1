
import styled from 'styled-components';

import { Box }  from "@chakra-ui/react"


export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    .bloco{
        border: black solid 1px;
        margin: 5px;
        list-style: none;
        min-width: 50%;
        padding: 0.25rem;
        background:#CFCFCF;

  }

  button{
    width: 80px;
    height: 30px;
    background-color: black;
    border-color: black;
    margin-left: 10px;
    color: white;
    font-size: 13px;
    font-weight: bold;
}

.bloco button{
    margin-left: 60px;
}

`;





