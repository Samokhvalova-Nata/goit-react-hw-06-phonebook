import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;

    align-items: center;
    width: 500px;
    min-height: 240px;
    border-radius: 10px;
    border: 1px solid rgba(33, 33, 33, 0.5);
    padding: 40px;
`;

export const Label = styled.label`
    display: inline-block;
    text-align: left;
    margin-bottom: 4px;
    color: var(--primary-text-color);
    font-size: 16px;
`;

export const Input = styled(Field)`
    width: 100%;
    max-width: 432px;
    height: 40px;

    border-radius: 4px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    background-color: transparent;
    outline: transparent;
    

    padding-left: 15px;
    margin-bottom: 15px;

    font-weight: 500;
    font-size: 18px;

    transition: border-color var(--transition);
    &:focus,
    &:hover {
            border-color: var(--accent-color);
        }
`;

export const Error = styled.span`
    margin-bottom: 8px;
    color: red;
    font-size: 16px;
`;

export const Button = styled.button`
        width: 100%;
        max-width: 450px;
        height: 50px;
        margin-top: 10px;

        border: 1px solid transparent;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

        background-color: var(--accent-color);
        color: var(--primary-white-color);
        font-weight: 700;
        font-size: 16px;
        text-transform: uppercase;
        transition: background-color var(--transition), transform var(--transition);

        &:hover,
        &:focus {
        background-color: #188CE8;
        transform: scale(1.01);
    }
`;
