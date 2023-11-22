'use client'

import { Button, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios'
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from "@/app/Api/issues/validationSchema";
import { z } from 'zod'
import ErrorMessage from "@/components/ErrorMessage";
import Spinner from "@/components/Spinner";
import { useState } from "react";
type IssueForm = z.infer<typeof createIssueSchema>




const NewIssuePage = () => {
    const router = useRouter();
    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({ resolver: zodResolver(createIssueSchema) })
    const [isSubmit, setIsSubmit] = useState(false)
    const onSubmit = handleSubmit(async (data) => {
        // await fetch('/Api/issues', {
        //     method: 'POST',
        //     body: JSON.stringify(data)
        // }).then(function (response: Response) {
        //     return NextResponse.json({ result: "successfull" }, { status: 201 })
        // })
        // await axios.post('/Api/issues', data)
        // we can write fetch this way two
        const response = await fetch('/Api/issues', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content': "info"
            }
        })
        if (response.ok) {
            setIsSubmit(true)
            const result = await response.json();
            router.push('/issues')
        }
        else {
            setIsSubmit(false)
            return NextResponse.json({ result: "error" }, { status: 400 })
        }
    })


    return (
        <form className="max-w-xl space-y-3"
            //we can use fetch or axios 
            onSubmit={onSubmit}>
            <TextField.Root >
                <TextField.Input placeholder="Title" {...register('title')} />
            </TextField.Root>
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
            <Controller name='description'
                control={control} render={({ field }) => <SimpleMDE placeholder="Description" {...field} />} />
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
            <Button disabled={isSubmit}>Submit New issue {isSubmit && <Spinner />}</Button>
        </form>
    );
};

export default NewIssuePage;