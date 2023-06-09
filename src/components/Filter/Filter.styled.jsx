import styled from '@emotion/styled';

export const Label = styled.label`
    display: inline-block;
    text-align: left;
    // margin-right: 15px;
    color: var(--secondary-text-color);
    font-size: 20px;
    font-weight: 500;
`

export const Input = styled.input`
    width: 336px;
    height: 40px;

    border-radius: 4px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    background-color: transparent;
    outline: transparent;
    

    padding-left: 15px;
    margin-left: 20px;
    margin-bottom: 30px;

    font-weight: 500;
    font-size: 18px;

    transition: border-color var(--transition);
    &:focus,
    &:hover {
            border-color: var(--accent-color);
        }
`