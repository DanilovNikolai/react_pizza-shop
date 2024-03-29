import React from "react";
// styles
import styles from "./LoginButton.module.scss";
// redux-toolkit
import { useDispatch } from "react-redux";
import { removeUser } from "redux/user/slice";

interface LoginButtonProps {
  setLoginModalActive: (arg: boolean) => void;
  isAuth: boolean;
  username: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  setLoginModalActive,
  isAuth,
  username,
}) => {
  const dispatch = useDispatch();

  if (!isAuth) {
    return (
      <button
        onClick={() => setLoginModalActive(true)}
        className={styles.loginButton}
      >
        <span>Войти</span>
      </button>
    );
  } else {
    return (
      <button
        onClick={() => dispatch(removeUser())}
        className={`${styles.loginButton} ${styles.logged}`}
      >
        <span>
          <svg
            height="20px"
            version="1.1"
            viewBox="0 0 20 20"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <g
              fill="none"
              fillRule="evenodd"
              id="Icons"
              stroke="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            >
              <g
                id="Group"
                stroke="#fff"
                strokeWidth="2"
                transform="translate(-2.000000, -2.000000)"
              >
                <g id="Shape">
                  <path d="M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z" />
                  <path d="M12,15 C9.790861,15 8,13.209139 8,11 C8,8.790861 9.790861,7 12,7 C14.209139,7 16,8.790861 16,11 C16,13.209139 14.209139,15 12,15 Z" />
                  <path d="M6.5,19 C7.68547654,17 9.52010602,16 12.0038885,16 C14.482246,16 16.3142832,16.9956366 17.5,18.9869097" />
                </g>
              </g>
            </g>
          </svg>
          <span>{username}</span>
        </span>
      </button>
    );
  }
};

export default LoginButton;
