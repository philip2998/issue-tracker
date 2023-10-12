"use client";

import "easymde/dist/easymde.min.css";

import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Callout } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

import SimpleMDE from "react-simplemde-editor";
import axios from "axios";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (err) {
            setError("An unexpected error occurred.");
          }
        })}
      >
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <Button>Submit new Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
