import styled, { css } from 'styled-components';

const withSize = css`
  ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return `
          border: 3px dashed ${theme.colors.primary.light};

          h1 {
            font-size: 1rem;
          }

          h3 {
            font-size: 0.8rem;
          }

          svg {
            width: 96px;
            height: 96px;
          }
        `;
      default:
        return null;
    }
  }
}`;

const withError = css`
  ${({ theme }) => `
    border: 4px dashed ${theme.colors.danger.main};
    svg {
      stroke: ${theme.colors.danger.main};
    }
    cursor: not-allowed;

    :hover {
      opacity: 1;
    }
  `}
`;

const withLoading = css`
  cursor: wait;
  :hover {
    opacity: 1;
  }
`;

export const Container = styled.div`
  ${({ theme, error, $loading }) => css`
    cursor: pointer;
    width: 100%;
    height: max-content;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 32px;
    border-radius: 4px;
    border: 4px dashed ${theme.colors.primary.light};
    background: ${theme.colors.gray[500]};
    transition: 0.3s ease;
    -webkit-box-shadow: 0px 3px 2px 0px rgba(0,0,0,0.67);
    box-shadow: 0px 3px 2px 0px rgba(0,0,0,0.67);
    pointer-events: visible;

    h1 {
      color: ${theme.colors.font};
      word-break: break-word;
      text-align: center;
    }

    h3 {
      word-break: break-word;
      text-align: center;
    }

    h4 {
      word-break: break-word;
      text-align: center;
    }

    svg {
      fill: none;
      stroke: ${theme.colors.primary.light};
      width: 164px;
      height: 164px;
      transition: 0.3s ease;
    }

    input {
      display: none;
    }

    :hover {
      opacity: 0.6;
    }

    ${withSize};
    ${error && withError};
    ${$loading && withLoading};
  `}
`;

export const Info = styled.div`
  ${({ theme, error }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    h3 {
      color: ${theme.colors.primary.lighter};
    }

    h5 {
      font-size: 0.9rem;
      font-weight: bold;
      color: ${error ? theme.colors.danger.main : theme.colors.primary.lighter};
    }
  `}
`;

export const UploadsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  gap: 8px;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;

  @media(max-width: 380px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const UploadItem = styled.div`
  ${({ theme }) => css`
    width: 96px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: relative;
    min-height: 120px;
    background: ${theme.colors.gray[500]};
    border-radius: 4px;
    -webkit-box-shadow: 0px 3px 2px 0px rgba(0,0,0,0.67);
    box-shadow: 0px 3px 2px 0px rgba(0,0,0,0.67);

    > svg {
      fill: none;
      width: 24px;
      stroke: ${theme.colors.primary.light};
    }

    small {
      max-width: 100%;
      word-break: break-word;
      text-align: center;
    }

    button {
      position: absolute;
      top: -5px;
      right: -5px;
      background: ${theme.colors.danger.main};
      padding: 4px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      transition: 0.3s ease;

      > svg {
        fill: none;
        width: 10px;
        stroke: ${theme.colors.font};
      }

      :hover {
        opacity: 0.6;
      }
    }

    @media(max-width: 380px) {
      width: 100%;
      min-height: 96px;

      button {
        padding: 8px;

        > svg {
          width: 14px;
        }
      }
    }
  `}
`;
