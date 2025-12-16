import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png"];

export const uploadSchema = z.object({
    avatar: z
        .any()
        .refine((files) => files?.length === 1, "Image is required")
        .refine(
            (files) => files?.[0]?.size <= MAX_FILE_SIZE,
            "Max file size is 2MB"
        )
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            "Only JPG or PNG images allowed"
        ),
});




// 🧩 form component
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadSchema } from "./schema";

export default function UploadForm() {
    const { register, handleSubmit, formState: { errors } }

        = useForm({ resolve: zodResolver(uploadSchema) });

        
    const onSubmit = (data: any) => {
        console.log("File:", data.avatar[0]);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="file" {...register("avatar")} />

            {errors.avatar && (
                <p style={{ color: "red" }}>
                    {errors.avatar.message as string}
                </p>
            )}

            <button type="submit">Upload</button>
        </form>
    );
}
