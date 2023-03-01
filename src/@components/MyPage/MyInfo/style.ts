import styled from "styled-components";

export const St = {
  MyInfoContainer: styled.section``,

  Profile: styled.article`
    align-items: center;
    width: auto;
    display: flex;
    padding: 2.4rem 0 3.6rem 1.6rem;
    gap: 2.4rem;
    height: 11.8rem;
  `,

  Images: styled.div`
    width: 5.8rem;
    height: 5.8rem;
    position: relative;
  `,

  ProfileImage: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
  `,

  ChangeButton: styled.input`
    display: none;
  `,

  ProfileChangeBtnLabel: styled.label`
    position: absolute;
    top: 4rem;
    left: 4.1rem;
  `,

  ChangeBtnWrapper: styled.div``,

  ProfileDetail: styled.div``,

  ProfileNickname: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0rem;
    gap: 0.8rem;

    width: auto;
    height: 2.6rem;

    opacity: 0.8;
  `,

  ProfileMyNickname: styled.strong`
    width: auto;
    height: 2.6rem;

    ${({ theme }) => theme.fonts.body9};
    color: ${({ theme }) => theme.colors.bg};
  `,

  ProfileNicknameEdit: styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0.3rem 0.8rem;
    gap: 0.8rem;

    width: 6rem;
    height: 2rem;

    background-color: ${({ theme }) => theme.colors.gray300};
    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.btn4};
    border-radius: 0.7rem;
  `,

  ProfileEmail: styled.p`
    ${({ theme }) => theme.fonts.body4};
    color: ${({ theme }) => theme.colors.gray600};
  `,
};
