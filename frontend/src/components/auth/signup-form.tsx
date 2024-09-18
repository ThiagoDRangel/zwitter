"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation"
import { useState } from "react";

export const SignupForm = () => {
    const router = useRouter();
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleEnterButton = () => {
        router.replace('/home');
    }

    return (
        <>
            <Input
                placeholder="Digite seu nome"
                value={nameField}
                onChange={text => setNameField(text)}
            />
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
            <Button
                label="Criar conta"
                onClick={handleEnterButton}
                size={1}
            />
        </>
    )
}