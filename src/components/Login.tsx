import { Auth } from "@supabase/auth-ui-react";
import { supabase } from "../lib/supabase-client";
import { SupabaseClient } from "@supabase/supabase-js";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import logo from "../assets/logo256.png";
import styled from "styled-components";

export const Login = () => {
  return (
    <>
      <LoginContainer>
        <LogoImage src={logo} alt="logo" />
        <LoginHeader>Welcome to my chat app!!</LoginHeader>
        <LoginDescription>
          This is a simple chat app built with Supabase. Please sign in to
          continue.
        </LoginDescription>
        <AuthContainer>
          <Auth
            supabaseClient={supabase as SupabaseClient}
            providers={["google"]}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#6b0fff",
                    brandAccent: "#7c2bff",
                  },
                  space: {
                    buttonPadding: "12px",
                    inputPadding: "12px",
                  },
                  radii: {
                    borderRadiusButton: "12px",
                    buttonBorderRadius: "12px",
                    inputBorderRadius: "12px",
                  },
                },
              },
            }}
            theme="dark"
            magicLink
          />
        </AuthContainer>
      </LoginContainer>
    </>
  );
};

const LogoImage = styled.img`
  width: 128px;
`;

const LoginHeader = styled.h2`
  font-size: 28px;
  margin: 8px;
`;

const LoginDescription = styled.p`
  opacity: 0.8;
  margin: 4px;
  font-size: 16px;
  line-height: 1.6em;
  text-align: center;
`;

const LoginContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AuthContainer = styled.div`
  width: 90%;
  max-width: 500px;
`;
