"use client"

import { Input } from "@/components/ui/input";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation"
import { useState } from "react";

export const SigninForm = () => {
    const router = useRouter();
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleEnterButton = () => {
        router.replace('/home');
    }

    return (
        <>
            <Input
                placeholder="Digite seu e-mail"
                value={emailField}
                onChange={text => setEmailField(text)}
            />
            <Input
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={text => setPasswordField(text)}
                password
            />
            <button onClick={handleEnterButton}>
                Entrar
            </button>
        </>
    )
}