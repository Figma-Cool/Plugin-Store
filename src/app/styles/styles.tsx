import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import reset from 'react-style-reset/string';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    top: 0 !important;
    background: #fff;
  }
  .iconTop {
  cursor: pointer;
  z-index: 99;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  right: 16px;
  bottom: 40px;
  background: white;
  box-shadow: 0px 10px 11px rgb(78 89 105 / 6%), 0px 6px 4px rgb(78 89 105 / 3%), 0px 0px 0px 1px rgb(78 89 105 / 6%), 0px 2.89797px 2.12518px rgb(78 89 105 / 3%), 0px 1.87823px 1.37737px rgb(78 89 105 / 3%), 0px 1.18233px 0.867039px rgb(78 89 105 / 3%), 0px 0.67932px 0.498168px rgb(78 89 105 / 2%), 0px 0.298986px 0.219257px rgb(78 89 105 / 1%);
  transition: all 0.2s ease-out;

  img {
    width: 16px;
    height: 16px;
    transition: all 0.2s ease-out;
  }

  &:hover {
    transform: scale(1.2);
  }
}
`;

export const AppStyle = styled.div`
    .tagActive {
        color: rgba(0, 0, 0, 0.9);
        font-weight: 700;

        i {
            background: rgba(0, 0, 0, 0.9);
            color: white;
        }

        &:hover {
            i {
                background: rgba(0, 0, 0, 0.9);
            }
        }
    }
    .thumbnailView {
        /* grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)) !important; */

        a {
            padding: 0;
        }

        section {
            display: flex;
            flex-direction: column;
        }

        .name {
            display: flex;
            align-items: center;
            margin: 0 0 12px 0;
            h3 {
                margin: 0 0 0 12px;
            }
        }
    }

    input {
        z-index: 99;
        position: fixed;
        top: 0;
        left: 161px;
        width: calc(100% - 160px);
        height: 34px;
        outline: none;
        border: none;
        border-bottom: 1px solid rgb(0 0 0 / 12%);
        background: white;

        &::placeholder {
            font-size: 11px;
            line-height: 16px;
            letter-spacing: 0.005em;
            color: rgba(0, 0, 0, 0.3);
        }
    }

    main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
        margin-top: 34px;
        width: calc(100vw - 160px);
        margin-left: 160px;

        a {
            text-align: left;
            display: flex;
            flex-direction: column;
            color: black;
            text-decoration: none;
            overflow: hidden;

            section {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 16px;
            }

            .name {
                display: flex;
                align-items: center;
                margin: 0 0 12px 0;
            }

            h3 {
                font-size: 14px;
                margin: 1rem 0 1rem 0;
                font-weight: 700;
                color: rgba(0, 0, 0, 0.9);
                margin: 0 0 0 12px;
            }

            p {
                font-size: 11px;
                line-height: 1.45;
                margin: 0 0 4px 0;
                color: rgba(0, 0, 0, 0.7);
                width: 100%;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }

            .card-info {
                display: flex;
                flex-direction: column;
                margin-top: 4px;

                div {
                    margin-top: 4px;

                    span:first-child {
                        margin-right: 8px;
                    }
                }

                span {
                    opacity: 0.7;
                    font-size: 10px;
                    display: inline-flex;
                    align-items: center;

                    img {
                        margin-right: 2px;
                        width: 12px;
                        height: 12px;
                    }
                }
            }

            &:hover {
                background: hsl(0deg 0% 94%);
            }
        }

        .icon {
            border-radius: 6px;
            width: 24px;
            height: 24px;
        }

        .cover {
            width: 100%;
        }
    }

    footer {
        z-index: 999;
        width: calc(100% - 184px);
        padding: 8px 12px;
        position: fixed;
        bottom: 0;
        left: 161px;
        background-color: rgb(255, 255, 255);
        text-align: right;
        font-size: 11px;
        line-height: 12px;
        color: rgb(51 51 51 / 80%);
        border-top: 1px solid rgb(0 0 0 / 12%);

        a {
            color: #000;
            text-decoration: none;

            &:hover {
                color: blue;
            }
        }
    }
`;

export const HeaderStyle = styled.nav`
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 160px;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 1);
    overflow: scroll;
    border-right: 1px solid rgb(0 0 0 / 12%);
    padding: 12px 0 0 0;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
        /* border-top: 1px solid #eee; */

        li {
            cursor: pointer;
            display: flex;
            align-items: center;
            width: calc(100% - 24px);
            padding: 5px 12px;
            font-size: 12px;
            color: rgb(51 51 51 / 80%);
            transition: all 0.2s ease;
            text-align: left;

            img {
                width: 16px;
                height: 16px;
                margin-right: 6px;
            }

            &:hover {
                background: rgb(0 0 0 / 8%);

                i {
                    background: none;
                }
            }

            i {
                position: absolute;
                right: 12px;
                padding: 1px 3px;
                font-size: 11px;
                line-height: 11px;
                border-radius: 2px;
            }
        }
    }
`;
